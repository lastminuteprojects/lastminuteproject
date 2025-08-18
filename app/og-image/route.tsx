import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// This function can be easily updated to reflect current website content
function getCurrentContent() {
  return {
    title: 'Complete Software Projects',
    subtitle: 'Any Tech Stack • On Time • Complete Code',
    description: 'From Web Apps to AI/ML • Mobile to Blockchain',
    techStacks: ['🌐', '📱', '🤖', '⛓️', '📊'],
    features: ['Web Development', 'Mobile Apps', 'AI/ML', 'Blockchain', 'Data Analytics'],
    brandName: 'Last Minute Projects',
    brandIcon: '🚀'
  }
}

export async function GET() {
  const content = getCurrentContent()
  
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fbbf24',
          background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: 'radial-gradient(circle at 20% 80%, #1e3a8a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e3a8a 0%, transparent 50%)',
          }}
        />

        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1e3a8a',
              marginRight: '16px',
            }}
          >
            {content.brandIcon}
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1e3a8a',
            }}
          >
            {content.brandName}
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#1e3a8a',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: '1.2',
            zIndex: 10,
          }}
        >
          {content.title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#1e3a8a',
            textAlign: 'center',
            marginBottom: '40px',
            lineHeight: '1.4',
            zIndex: 10,
          }}
        >
          {content.subtitle}
        </div>

        {/* Tech Stack Icons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '32px',
            marginBottom: '40px',
            zIndex: 10,
          }}
        >
          {content.techStacks.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px',
            zIndex: 10,
          }}
        >
          {content.features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                color: '#1e3a8a',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '16px',
                fontWeight: '500',
                border: '2px solid rgba(30, 58, 138, 0.2)',
              }}
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '24px',
            color: '#1e3a8a',
            fontWeight: '500',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          {content.description}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            fontSize: '16px',
            color: '#1e3a8a',
            fontWeight: '400',
            opacity: 0.8,
            zIndex: 10,
          }}
        >
          lastminuteproject.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
