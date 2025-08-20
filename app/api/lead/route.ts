import { NextRequest, NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validations'
import { prisma } from '@/lib/db'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'
import { put } from '@vercel/blob'

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    // Check if database is available
    if (!prisma) {
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 503 }
      )
    }

    // Rate limiting
    const identifier = request.ip ?? '127.0.0.1'
    const { success } = await rateLimit(identifier)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Handle FormData (for file uploads)
    const formData = await request.formData()
    
    // Extract all files
    const files: File[] = []
    const entries = Array.from(formData.entries())
    for (const [key, value] of entries) {
      if (key.startsWith('file') && value instanceof File) {
        files.push(value)
      }
    }
    
    // Convert FormData to object for validation
    const body: any = {}
    for (const [key, value] of entries) {
      if (!key.startsWith('file')) {
        // Convert budget fields to numbers if they exist
        if ((key === 'budgetMin' || key === 'budgetMax') && value) {
          body[key] = Number(value)
        } else {
          body[key] = value
        }
      }
    }
    
    // Validate the request body
    const validatedData = leadSchema.parse(body)
    
            // First, create the lead to get the ID
        const lead = await prisma.lead.create({
          data: {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            studyYear: validatedData.studyYear,
            projectDomain: validatedData.domain,
            projectTitle: validatedData.title,
            projectDetails: validatedData.details,
            dataset: validatedData.dataset,
            budgetMin: validatedData.budgetMin,
            budgetMax: validatedData.budgetMax,
            deadline: validatedData.deadline ? new Date(validatedData.deadline) : null,
            fileUrl: null, // Will update after file upload
          },
        })

    // Upload files to Vercel Blob if present
    let fileUrls: string[] = []
    if (files.length > 0 && process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        for (const file of files) {
          const bytes = await file.arrayBuffer()
          const buffer = Buffer.from(bytes)
          
          // Create organized file path with person's name and original filename
          const sanitizedPersonName = validatedData.name.replace(/[^a-zA-Z0-9]/g, '_')
          const filePath = `leads/${sanitizedPersonName}/${file.name}`
          
          const { url } = await put(filePath, buffer, {
            access: 'public',
          })
          
          fileUrls.push(url)
          
          // File metadata is stored in fileUrl field
        }
        
        // Update the lead with file URLs on separate lines
        await prisma.lead.update({
          where: { id: lead.id },
          data: {
            fileUrl: fileUrls.join('\n'),
          },
        })
      } catch (error) {
        console.error('Error uploading files:', error)
        // Continue without file upload if it fails
      }
    }

    // Send email notification
    if (resend && process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Last Minute Projects <hello@lastminuteprojects.com>',
          to: [validatedData.email],
          subject: 'Thank you for your project inquiry!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0B2A3B;">Thank you for contacting Last Minute Projects!</h2>
                             <p>Hi ${validatedData.name},</p>
               <p>We've received your project inquiry for: <strong>${validatedData.title}</strong></p>
               <p>Our team will review your requirements and get back to you within 24 hours with a detailed quote and timeline.</p>
               <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                 <h3 style="color: #0B2A3B; margin-top: 0;">Project Summary:</h3>
                 <p><strong>Project Domain:</strong> ${validatedData.domain || 'Not specified'}</p>
                 <p><strong>Budget Range:</strong> ₹${validatedData.budgetMin || '0'} - ₹${validatedData.budgetMax || 'Not specified'}</p>
                 <p><strong>Deadline:</strong> ${validatedData.deadline || 'Not specified'}</p>
               </div>
              <p>In the meantime, you can:</p>
              <ul>
                <li>Check out our <a href="${process.env.NEXTAUTH_URL}/projects" style="color: #FFD42A;">project portfolio</a></li>
                <li>Try our <a href="${process.env.NEXTAUTH_URL}/demos" style="color: #FFD42A;">live demos</a></li>
                <li>Follow us on <a href="https://instagram.com/lastminuteprojects" style="color: #FFD42A;">Instagram</a> for updates</li>
              </ul>
              <p>Best regards,<br>The Last Minute Projects Team</p>
            </div>
          `,
        })

        // Send internal notification
        await resend.emails.send({
          from: 'Last Minute Projects <hello@lastminuteprojects.com>',
          to: ['admin@lastminuteprojects.com'],
          subject: `New Lead: ${validatedData.title}`,
          html: `
            <div style="font-family: Arial, sans-serif;">
              <h2>New Project Lead</h2>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
              <p><strong>Project:</strong> ${validatedData.title}</p>
              <p><strong>Domain:</strong> ${validatedData.domain || 'Not specified'}</p>
              <p><strong>Budget:</strong> ₹${validatedData.budgetMin || '0'} - ₹${validatedData.budgetMax || 'Not specified'}</p>
              <p><strong>Details:</strong> ${validatedData.details}</p>
            </div>
          `,
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the request if email fails
      }
    }

    // Send Slack notification
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        const slackMessage = {
          text: '🎯 New Project Lead Received!',
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*New Project Lead*\n\n*Name:* ${validatedData.name}\n*Email:* ${validatedData.email}\n*Project:* ${validatedData.title}\n*Domain:* ${validatedData.domain || 'Not specified'}\n*Budget:* ₹${validatedData.budgetMin || '0'} - ₹${validatedData.budgetMax || 'Not specified'}`
              }
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Project Details:*\n${validatedData.details}`
              }
            },
            {
              type: 'actions',
              elements: [
                {
                  type: 'button',
                  text: {
                    type: 'plain_text',
                    text: 'View in Admin'
                  },
                  url: `${process.env.NEXTAUTH_URL}/admin/leads/${lead.id}`
                }
              ]
            }
          ]
        }

        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(slackMessage),
        })
      } catch (slackError) {
        console.error('Slack notification failed:', slackError)
        // Don't fail the request if Slack fails
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully',
        leadId: lead.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Lead submission error:', error)
    
    if (error instanceof Error && error.message.includes('validation')) {
      return NextResponse.json(
        { error: 'Invalid data provided' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
