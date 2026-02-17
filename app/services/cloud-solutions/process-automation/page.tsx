import { Metadata } from 'next'
import ProcessAutomationContent from './content'

export const metadata: Metadata = {
  title: 'Process Automation Services | Digital Solutions',
  description: 'Trenz Technologies delivers process automation solutions that streamline workflows, improve accuracy, and accelerate operational efficiency across businesses.',
  keywords: 'process automation services, business process automation company, workflow automation services, RPA service provider, automation solutions near me',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/cloud-solutions/process-automation',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Process Automation Services in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/process-automation',
    description: 'leading process automation services chennai, best business process automation companies in chennai, best automation services in chennai',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – Process Automation Services',
    description: 'best process automation services chennai, best business process automation services near me, best automation agency, best process automation company',
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
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/process-automation',
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
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/process-automation',
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
      <ProcessAutomationContent />
    </>
  )
}
