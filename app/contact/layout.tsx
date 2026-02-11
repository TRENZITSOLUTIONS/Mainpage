import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Trenz Technologies | Get In Touch',
  description: 'Contact Trenz Technologies for software development, cloud solutions, digital transformation, and IT consulting services. Reach us via email, phone, or our contact form.',
  keywords: 'contact Trenz Technologies, get in touch, software development inquiry, IT consulting contact, hire developers',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
