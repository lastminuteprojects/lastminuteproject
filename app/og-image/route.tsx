import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
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
          background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
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
            🚀
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1e3a8a',
            }}
          >
            Last Minute Projects
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
          }}
        >
          Complete Software Projects
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#1e3a8a',
            textAlign: 'center',
            marginBottom: '40px',
            lineHeight: '1.4',
          }}
        >
          Any Tech Stack • On Time • Complete Code
        </div>

        {/* Tech Stack Icons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '32px',
            marginBottom: '40px',
          }}
        >
          <span>🌐</span>
          <span>📱</span>
          <span>🤖</span>
          <span>⛓️</span>
          <span>📊</span>
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
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
            Web Development
          </div>
          <div
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
            Mobile Apps
          </div>
          <div
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
            AI/ML
          </div>
          <div
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
            Blockchain
          </div>
          <div
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
            Data Analytics
          </div>
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
          }}
        >
          From Web Apps to AI/ML • Mobile to Blockchain
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
