import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Debug OG Image',
  description: 'Debugging Open Graph image functionality',
  openGraph: {
    title: 'Debug OG Image - Last Minute Projects',
    description: 'Testing Open Graph image functionality',
    images: ['/og-image'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image'],
  },
}

export default function DebugOGPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          OG Image Debug Page
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Test Links */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Test Links
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Direct OG Image:</p>
                <a 
                  href="https://lastminuteproject.vercel.app/og-image" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-yellow hover:text-orange-500 underline text-sm break-all"
                >
                  https://lastminuteproject.vercel.app/og-image
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Homepage:</p>
                <a 
                  href="https://lastminuteproject.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-yellow hover:text-orange-500 underline text-sm"
                >
                  https://lastminuteproject.vercel.app
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">This Debug Page:</p>
                <a 
                  href="https://lastminuteproject.vercel.app/debug-og" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-yellow hover:text-orange-500 underline text-sm"
                >
                  https://lastminuteproject.vercel.app/debug-og
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Debuggers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Social Media Debuggers
            </h2>
            <div className="space-y-3">
              <a 
                href="https://developers.facebook.com/tools/debug/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-brand-yellow hover:text-orange-500 underline"
              >
                Facebook Sharing Debugger
              </a>
              <a 
                href="https://cards-dev.twitter.com/validator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-brand-yellow hover:text-orange-500 underline"
              >
                Twitter Card Validator
              </a>
              <a 
                href="https://www.linkedin.com/post-inspector/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-brand-yellow hover:text-orange-500 underline"
              >
                LinkedIn Post Inspector
              </a>
              <a 
                href="https://www.opengraph.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-brand-yellow hover:text-orange-500 underline"
              >
                OpenGraph.xyz
              </a>
            </div>
          </div>

          {/* Expected Meta Tags */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Expected Meta Tags
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm font-mono">
              <div className="space-y-2">
                <div>&lt;meta property="og:title" content="Last Minute Projects - Complete Software Projects for Students" /&gt;</div>
                <div>&lt;meta property="og:description" content="Complete software projects for students—any tech stack, on time..." /&gt;</div>
                <div>&lt;meta property="og:image" content="https://lastminuteproject.vercel.app/og-image" /&gt;</div>
                <div>&lt;meta property="og:url" content="https://lastminuteproject.vercel.app" /&gt;</div>
                <div>&lt;meta property="og:type" content="website" /&gt;</div>
                <div>&lt;meta name="twitter:card" content="summary_large_image" /&gt;</div>
                <div>&lt;meta name="twitter:image" content="https://lastminuteproject.vercel.app/og-image" /&gt;</div>
              </div>
            </div>
          </div>

          {/* Troubleshooting Steps */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Troubleshooting Steps
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Deploy the changes to Vercel</li>
              <li>Test the OG image URL directly: <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">/og-image</code></li>
              <li>Use social media debuggers to test the preview</li>
              <li>Clear browser cache and try again</li>
              <li>Wait 24-48 hours for social media cache to clear</li>
              <li>Check if the image loads in the debugger tools</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
