import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  title: {
    default: 'Last Minute Projects - AI/ML & LLM Projects for Students',
    template: '%s | Last Minute Projects'
  },
  description: 'AI/ML & LLM projects for students—any stack, on time. From idea to working code with docs, demos and explanation.',
  keywords: ['AI', 'ML', 'LLM', 'Machine Learning', 'Artificial Intelligence', 'Student Projects', 'Python', 'JavaScript', 'React', 'Next.js'],
  authors: [{ name: 'Last Minute Projects' }],
  creator: 'Last Minute Projects',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lastminuteprojects.com',
    title: 'Last Minute Projects - AI/ML & LLM Projects for Students',
    description: 'AI/ML & LLM projects for students—any stack, on time.',
    siteName: 'Last Minute Projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Minute Projects - AI/ML & LLM Projects for Students',
    description: 'AI/ML & LLM projects for students—any stack, on time.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
          <Analytics />
          {/* <SpeedInsights /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
