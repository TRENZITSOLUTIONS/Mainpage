import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Trenz Technologies | Digital Innovation Company',
  description: 'Learn about Trenz Technologies — our mission, vision, and why businesses choose us for digital transformation, software development, and IT consulting.',
  keywords: 'about Trenz Technologies, IT company, software development company, digital transformation, technology partner, mission vision',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
