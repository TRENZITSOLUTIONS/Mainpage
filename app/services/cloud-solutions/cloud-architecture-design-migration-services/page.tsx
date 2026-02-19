import { Metadata } from 'next'
import CloudArchitectureMigrationContent from './content'

export const metadata: Metadata = {
  title: 'Cloud Architecture & Migration Services | AWS, Azure, Google Cloud | Trenz Technologies',
  description: 'Trenz Technologies provides expert cloud architecture design and migration services. Secure, scalable infrastructure and seamless transitions for AWS, Azure, and Google Cloud.',
  keywords: 'cloud architecture, cloud migration services, AWS migration, Azure migration, Google Cloud migration, hybrid cloud architecture, cloud infrastructure design, enterprise cloud transition',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/cloud-solutions/cloud-architecture-design-migration-services',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Cloud Architecture & Migration Services in Chennai – Trenz Technologies',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/cloud-architecture-design-migration-services',
    description: 'Trenz Technologies delivers cloud architecture and migration services enabling secure cloud adoption scalable infrastructure and smooth enterprise transitions',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: 'Trenz Technologies – Cloud Architecture & Migration Services',
    description: 'Trenz Technologies delivers cloud architecture and migration services with AWS Azure GCP solutions security automation cost control and scalable cloud infrastructure',
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
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/cloud-architecture-design-migration-services',
    contact: 'contact@trenztechnologies.com',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Trenz Technologies',
    image: 'https://www.trenztechnologies.com/logo.jpeg',
    '@id': '',
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/cloud-architecture-design-migration-services',
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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.trenztechnologies.com/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Cloud Architecture & Migration',
        'item': 'https://www.trenztechnologies.com/services/cloud-solutions/cloud-architecture-design-migration-services',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CloudArchitectureMigrationContent />
    </>
  )
}
