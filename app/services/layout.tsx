import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Trenz Technologies',
  description: 'Product Engineering, Application Development, Cloud Solutions, Digital Transformation, and IT Consulting services. Enterprise-grade solutions for your business.',
  keywords: 'IT services, software development, cloud solutions, digital transformation, product engineering, application development',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

