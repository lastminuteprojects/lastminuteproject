import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { CookieConsent } from '@/components/cookie-consent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lastminuteproject.vercel.app'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  title: {
    default: 'Last Minute Projects - Complete Software Projects for Students',
    template: '%s | Last Minute Projects'
  },
  description: 'Complete software projects for students—any tech stack, on time. From web apps to AI/ML, mobile to blockchain. We build it all with complete code, docs & demos.',
  keywords: ['AI', 'ML', 'Web Development', 'Mobile Development', 'Blockchain', 'Data Analytics', 'Student Projects', 'Python', 'JavaScript', 'React', 'Next.js', 'Flutter', 'Solidity'],
  authors: [{ name: 'Last Minute Projects' }],
  creator: 'Last Minute Projects',
  publisher: 'Last Minute Projects',
  category: 'Technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lastminuteproject.vercel.app',
    title: 'Last Minute Projects - Complete Software Projects for Students',
    description: 'Complete software projects for students—any tech stack, on time. From web apps to AI/ML, mobile to blockchain. We build it all with complete code, docs & demos.',
    siteName: 'Last Minute Projects',
    images: [
      {
        url: 'https://lastminuteproject.vercel.app/og-image',
        width: 1200,
        height: 630,
        alt: 'Last Minute Projects - Complete Software Projects for Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Minute Projects - Complete Software Projects for Students',
    description: 'Complete software projects for students—any tech stack, on time. From web apps to AI/ML, mobile to blockchain.',
    images: ['https://lastminuteproject.vercel.app/og-image'],
    creator: '@lastminuteprojects',
    site: '@lastminuteprojects',
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
  alternates: {
    canonical: 'https://lastminuteproject.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fbbf24" />
        <meta name="msapplication-TileColor" content="#fbbf24" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Additional OG tags for better compatibility */}
        <meta property="og:image" content="https://lastminuteproject.vercel.app/og-image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Last Minute Projects - Complete Software Projects for Students" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lastminuteproject.vercel.app" />
        <meta property="og:title" content="Last Minute Projects - Complete Software Projects for Students" />
        <meta property="og:description" content="Complete software projects for students—any tech stack, on time. From web apps to AI/ML, mobile to blockchain. We build it all with complete code, docs & demos." />
        <meta property="og:site_name" content="Last Minute Projects" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lastminuteproject.vercel.app/og-image" />
        <meta name="twitter:title" content="Last Minute Projects - Complete Software Projects for Students" />
        <meta name="twitter:description" content="Complete software projects for students—any tech stack, on time. From web apps to AI/ML, mobile to blockchain." />
        <meta name="twitter:creator" content="@lastminuteprojects" />
        <meta name="twitter:site" content="@lastminuteprojects" />
      </head>
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
          <SpeedInsights />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
