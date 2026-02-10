import type { Metadata } from 'next'
import { Syne, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Trenz Technologies - Digital Alchemy',
  description: "We don't just write code. We engineer dominance. High-impact digital infrastructure for businesses.",
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
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
        <Navigation />
        {children}
      </body>
    </html>
  )
}
