import { Metadata } from 'next'
import MaintenanceSupportContent from './content'

export const metadata: Metadata = {
  title: 'Ongoing Maintenance & Support Services | IT Solutions',
  description: 'Trenz Technologies delivers ongoing maintenance and support services ensuring uptime security updates performance monitoring system stability and uninterrupted',
  keywords: 'Ongoing maintenance and support services providing 24/7 IT support software updates bug fixes performance monitoring security and long term system reliability',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/application-development/maintenance-support',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Ongoing Maintenance & Support Services in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/application-development/maintenance-support',
    description: 'Trenz Technologies delivers ongoing maintenance and support services ensuring proactive monitoring regular updates issue resolution performance optimization.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – Ongoing Maintenance & Support Services',
    description: 'Trenz Technologies provides ongoing maintenance and support services including system monitoring updates troubleshooting performance optimization stability',
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
    url: 'https://www.trenztechnologies.com/services/application-development/maintenance-support',
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
    url: 'https://www.trenztechnologies.com/services/application-development/maintenance-support',
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
      <MaintenanceSupportContent />
    </>
  )
}
