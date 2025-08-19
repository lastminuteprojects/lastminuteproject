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
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '50px',
          }}
        >
          <span style={{ fontSize: '50px', marginRight: '20px' }}>🚀</span>
          <span style={{ fontSize: '50px', fontWeight: 'bold', color: '#1e3a8a' }}>
            Last Minute Projects
          </span>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '70px',
            fontWeight: 'bold',
            color: '#1e3a8a',
            textAlign: 'center',
            marginBottom: '30px',
            lineHeight: '1.1',
          }}
        >
          Complete Software Projects
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '36px',
            color: '#1e3a8a',
            textAlign: 'center',
            marginBottom: '50px',
            lineHeight: '1.3',
          }}
        >
          Any Tech Stack • On Time • Complete Code
        </div>

        {/* Tech Icons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            fontSize: '40px',
            marginBottom: '50px',
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
            gap: '20px',
            marginBottom: '50px',
          }}
        >
          {['Web Development', 'Mobile Apps', 'AI/ML', 'Blockchain', 'Data Analytics'].map((feature) => (
            <div
              key={feature}
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                color: '#1e3a8a',
                padding: '12px 20px',
                borderRadius: '25px',
                fontSize: '18px',
                fontWeight: '600',
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
            bottom: '60px',
            fontSize: '28px',
            color: '#1e3a8a',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          From Web Apps to AI/ML • Mobile to Blockchain
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '18px',
            color: '#1e3a8a',
            fontWeight: '500',
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
