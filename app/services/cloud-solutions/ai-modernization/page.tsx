import { Metadata } from 'next'
import AiModernizationContent from './content'

export const metadata: Metadata = {
  title: 'AI-Driven Systems And Modernization | Digital Solutions',
  description: 'We deliver AI-driven systems and modernization solutions in Chennai – intelligent platforms, and automation-led innovation to drive smarter digital transformation.',
  keywords: 'AI systems modernization company chennai, AI modernization services near me, intelligent systems company chennai, digital modernization agency near me, AI consulting services',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/cloud-solutions/ai-modernization',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'AI-Driven Systems & Modernization Services in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/ai-modernization',
    description: 'Top AI-driven systems modernization services chennai, best AI modernization companies in chennai, best intelligent systems modernization services in chennai',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – AI-Driven Systems And Modernization Services',
    description: 'best AI-driven systems modernization services chennai, best AI modernization services near me, best AI modernization agency, best AI systems modernization company in chennai',
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
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/ai-modernization',
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
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/ai-modernization',
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
      <AiModernizationContent />
    </>
  )
}
