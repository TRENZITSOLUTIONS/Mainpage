import type { Metadata } from 'next'
import Script from 'next/script'
import { Syne, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import CustomCursor from '@/components/CustomCursor'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: {
    default: 'Trenz Technologies - Software Development & IT Solutions Company',
    template: '%s | Trenz Technologies',
  },
  description: 'Trenz Technologies offers product engineering, application development, cloud solutions, digital transformation, and IT consulting services. Enterprise-grade solutions for startups, businesses, and government.',
  keywords: 'Trenz Technologies, software development, IT solutions, product engineering, cloud solutions, digital transformation, IT consulting, web development, mobile app development, SaaS',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Trenz Technologies',
    title: 'Trenz Technologies - Software Development & IT Solutions Company',
    description: 'Trenz Technologies offers product engineering, application development, cloud solutions, digital transformation, and IT consulting services.',
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  verification: {
    google: 'a4XcQkAeOx7rjQGClWXwKDo1K1TwA-tC1V2FhPsloCo',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1QZKCL1NSN"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1QZKCL1NSN');
            `,
          }}
        />
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
