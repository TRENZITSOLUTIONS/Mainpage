import { Metadata } from 'next'
import ScalableArchitecturesContent from './content'

export const metadata: Metadata = {
  title: 'Secure Cloud & System Architectures | Digital Solutions',
  description: 'Trenz Technologies designs scalable secure architectures for enterprise software delivering high performance reliability data security and future ready growth',
  keywords: 'Architecture services company delivering scalable secure system design, cloud and multi cloud solutions, DevOps frameworks, zero trust security, and enterprise platforms .',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/product-engineering/scalable-architectures',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Scalable & Secure Architecture Services in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/product-engineering/scalable-architectures',
    description: 'Trenz Technologies builds scalable secure architectures delivering cloud platforms DevOps automation API integration data systems performance and enterprise readiness',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – Scalable Secure Architecture Services',
    description: 'Trenz Technologies delivers scalable secure architectures with cloud solutions DevOps automation API development data platforms system integration and business',
    creator: '',
    images: [' '],
  },
  other: {
    audience: 'all',
    'revisit-after': '3 days',
    language: 'english',
    distribution: 'global',
    rating: 'general',
    copyright: 'by https://www.trenztechnologies.com/',
    url: 'https://www.trenztechnologies.com/services/product-engineering/scalable-architectures',
    contact: '',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Trenz Technologies',
    image: 'https://www.trenztechnologies.com/logo.jpeg',
    '@id': '',
    url: 'https://www.trenztechnologies.com/services/product-engineering/scalable-architectures',
    telephone: '+91 9944865057',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Karambakkam, Buddhar Colony, Porur,',
      addressLocality: 'Chennai',
      postalCode: '600125',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.038419536577639,
      longitude: 80.15654609485881,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61586960408843',
      'https://www.instagram.com/trenztechnologies/',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScalableArchitecturesContent />
    </>
  )
}
