import { Metadata } from 'next'
import ContactContent from './content'

export const metadata: Metadata = {
  title: 'Contact Trenz Technologies | Get a Quote for Your Project',
  description: 'Reach out to Trenz Technologies for expert software development, cloud solutions, and IT consulting. Get a quote for your project and let\'s build something great together.',
  keywords: 'contact Trenz Technologies, hire software developers, IT consulting quote, custom software development inquiry, cloud migration consultation, business technology partnership',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Contact Trenz Technologies | Get a Quote for Your Project',
    type: 'website',
    url: 'https://www.trenztechnologies.com/contact',
    description: 'Ready to transform your business? Let\'s discuss how we can build something extraordinary together.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: 'Contact Trenz Technologies | Get a Quote for Your Project',
    description: 'Have a project in mind? We\'d love to hear from you. Reach out today.',
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
    url: 'https://www.trenztechnologies.com/contact',
    contact: 'contact@trenztechnologies.com',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Trenz Technologies',
      url: 'https://www.trenztechnologies.com',
      logo: 'https://www.trenztechnologies.com/logo.jpeg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 9944865057',
        contactType: 'customer service',
        email: 'contact@trenztechnologies.com',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Tamil'],
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  )
}
