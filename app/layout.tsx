import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trenz Technologies - We Bridge Vision to Reality',
  description: 'Unlock your business potential with us. We specialize in creating SaaS applications, websites, and software products tailored for businesses of all sizes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navigation />
        <main className="min-h-screen bg-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

