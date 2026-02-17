import { Metadata } from 'next'
import CustomSoftwareContent from './content'

export const metadata: Metadata = {
  title: 'Custom Software & SaaS Products | Business Solutions',
  description: 'Trenz Technologies delivers custom software and SaaS product development focused on innovation, scalability, security, and long-term business growth success.',
  keywords: 'Custom software development company in Chennai, SaaS product development, cloud software solutions, enterprise and startup applications, end-to-end development',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/product-engineering/custom-software',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Custom Software & SaaS Development in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/product-engineering/custom-software',
    description: 'Trenz Technologies builds custom software and SaaS solutions for web and mobile apps, cloud systems, API integrations, automation tools, and enterprise platforms.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – Custom Software & SaaS Services',
    description: 'Trenz Technologies delivers custom software and SaaS products including web and mobile apps, cloud platforms, APIs, automation tools, and enterprise solutions..',
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
    url: 'https://www.trenztechnologies.com/services/product-engineering/custom-software',
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
    url: 'https://www.trenztechnologies.com/services/product-engineering/custom-software',
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
      <CustomSoftwareContent />
    </>
  )
}
