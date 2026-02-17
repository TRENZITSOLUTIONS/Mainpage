import { Metadata } from 'next'
import MultiCloudContent from './content'

export const metadata: Metadata = {
  title: 'AWS Azure Google Cloud Services | Multi-Cloud Solutions',
  description: 'Trenz Technologies delivers AWS, Azure, and Google Cloud services enabling secure cloud infrastructure,optimized performance, and reliable enterprise operations.',
  keywords: 'AWS Azure Google Cloud services chennai, multi cloud services near me, offshore cloud services chennai, cloud services company, enterprise cloud services chennai',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/cloud-solutions/multi-cloud',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'AWS, Azure & Google Cloud Services in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/multi-cloud',
    description: 'best AWS services chennai, best Azure cloud services chennai, best Google Cloud services chennai, top enterprise cloud provider',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – AWS, Azure & Google Cloud Services',
    description: 'AWS Azure Google Cloud services chennai, best multi cloud services near me, best cloud services company in chennai, enterprise cloud services chennai',
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
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/multi-cloud',
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
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/multi-cloud',
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
      <MultiCloudContent />
    </>
  )
}
