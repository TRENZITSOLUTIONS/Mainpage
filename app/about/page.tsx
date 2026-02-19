import { Metadata } from 'next'
import AboutContent from './content'

export const metadata: Metadata = {
  title: 'About Trenz Technologies | Our Mission, Vision & Values',
  description: 'Learn about Trenz Technologies, a full-service technology partner specializing in product engineering, cloud solutions, and digital transformation. Our mission is to empower businesses with innovation.',
  keywords: 'about Trenz Technologies, software development agency, IT consulting firm, technology partner, product engineering company, mission and vision, core values',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'About Trenz Technologies | Our Mission, Vision & Values',
    type: 'website',
    url: 'https://www.trenztechnologies.com/about',
    description: 'Empowering businesses through cutting-edge technology and strategic innovation.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: 'About Trenz Technologies | Our Mission, Vision & Values',
    description: 'Team of experts building digital infrastructure for the modern era.',
    creator: '@trenztech',
    images: ['https://www.trenztechnologies.com/logo.jpeg'],
  },
  other: {
    audience: 'all',
    'revisit-after': '3 days',
    language: 'english',
    distribution: 'global',
    rating: 'general',
    copyright: 'by https://www.trenztechnologies.com/',
    url: 'https://www.trenztechnologies.com/about',
    contact: 'contact@trenztechnologies.com',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Trenz Technologies',
      url: 'https://www.trenztechnologies.com',
      logo: 'https://www.trenztechnologies.com/logo.jpeg',
      description: 'Full-service technology company specializing in product engineering, cloud solutions, and digital transformation.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Karambakkam, Buddhar Colony, Porur,',
        addressLocality: 'Chennai',
        postalCode: '600125',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 9944865057',
        contactType: 'customer service',
        email: 'contact@trenztechnologies.com',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  )
}
