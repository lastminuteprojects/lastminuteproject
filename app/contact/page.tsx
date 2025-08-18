import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Us - Get a Quote for Your Software Project',
  description: 'Get in touch with us for your software project requirements across all tech stacks. We provide free consultation and quotes for students.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-brand-navy mb-6">
            Get Your Project Quote
          </h1>
                     <p className="text-xl text-brand-navy dark:text-brand-navy mb-8">
             Tell us about your project and we'll provide a detailed quote with timeline
           </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-4">
                  Project Requirements
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below with your project details. We'll get back to you within 24 hours with a detailed quote.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  We're here to help you bring your AI/ML ideas to life. Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center">
                      <MessageCircle className="h-6 w-6 text-brand-yellow mr-3" />
                      <CardTitle className="dark:text-white">Instagram DM</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 dark:text-gray-300">
                      Quick questions? Send us a direct message on Instagram for fast responses.
                    </CardDescription>
                    <Link 
                      href="https://instagram.com/last_minuteprojects" 
                      target="_blank"
                      className="text-brand-yellow hover:text-brand-navy dark:hover:text-white font-semibold transition-colors"
                    >
                      @last_minuteprojects →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-brand-yellow mr-3" />
                      <CardTitle className="dark:text-white">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 dark:text-gray-300">
                      For detailed project discussions and formal communications.
                    </CardDescription>
                    <Link 
                      href="mailto:hello@lastminuteprojects.com"
                      className="text-brand-yellow hover:text-brand-navy dark:hover:text-white font-semibold transition-colors"
                    >
                      hello@lastminuteprojects.com →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-brand-yellow mr-3" />
                      <CardTitle className="dark:text-white">Response Time</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="dark:text-gray-300">
                      We typically respond within 2-4 hours during business hours (IST). For urgent projects, we can expedite the process.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Preview */}
              <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Common Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-white">What information do you need?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Project description, timeline, budget range, and any specific requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-white">How long does quoting take?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">We provide initial quotes within 24 hours, detailed proposals within 48 hours.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-white">Do you work with tight deadlines?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Yes! We specialize in last-minute projects and can work with your timeline.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
