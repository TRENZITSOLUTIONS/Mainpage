import { Metadata } from 'next'
import MobileAppsDevelopmentContent from './content'

export const metadata: Metadata = {
  title: 'Mobile App Development Services | App Solutions',
  description: 'Trenz Technologies delivers mobile app development services with secure scalable architecture performance cross platform apps and user driven experiences',
  keywords: 'Mobile app development company delivering custom Android iOS and cross platform apps with secure scalable architecture UI UX design integration and maintenance',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/application-development/mobile-apps',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Mobile App Development Services in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/application-development/mobile-apps',
    description: 'Trenz Technologies builds scalable mobile apps delivering Android and iOS solutions with secure architecture, cloud backend, API integration, and performance focus',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – Custom Mobile App Development Service',
    description: 'Trenz Technologies delivers mobile app development services including Android iOS apps UI UX design backend APIs cloud integration testing and ongoing maintenance',
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
    url: 'https://www.trenztechnologies.com/services/application-development/mobile-apps',
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
    url: 'https://www.trenztechnologies.com/services/application-development/mobile-apps',
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
      <MobileAppsDevelopmentContent />
    </>
  )
}
