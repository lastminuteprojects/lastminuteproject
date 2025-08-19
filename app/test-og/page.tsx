import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OG Image Test',
  description: 'Testing the OG image functionality',
  openGraph: {
    title: 'OG Image Test - Last Minute Projects',
    description: 'Testing the dynamic OG image functionality',
    images: ['https://lastminuteproject.vercel.app/og-image'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://lastminuteproject.vercel.app/og-image'],
  },
}

export default function TestOGPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          OG Image Test Page
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This page is testing the Open Graph image functionality. When you share this page on social media, it should show a custom preview image.
        </p>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Test the OG Image:
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Direct OG Image URL:
              </p>
              <code className="text-xs bg-gray-200 dark:bg-gray-600 p-2 rounded block break-all">
                https://lastminuteproject.vercel.app/og-image
              </code>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Testing Tools:
            </h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                • <a href="https://developers.facebook.com/tools/debug/" target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:text-orange-500 underline">
                  Facebook Sharing Debugger
                </a>
              </li>
              <li>
                • <a href="https://cards-dev.twitter.com/validator" target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:text-orange-500 underline">
                  Twitter Card Validator
                </a>
              </li>
              <li>
                • <a href="https://www.linkedin.com/post-inspector/" target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:text-orange-500 underline">
                  LinkedIn Post Inspector
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Expected Preview:
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                The preview should show: "Last Minute Projects - Complete Software Projects" with tech stack icons and feature badges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
