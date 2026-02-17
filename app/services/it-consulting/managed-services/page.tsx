import { Metadata } from 'next'
import ManagedServicesContent from './content'

export const metadata: Metadata = {
  title: 'Managed Services & 24/7 Support | IT Services',
  description: 'We provide managed services and 24/7 support in Chennai – proactive monitoring, rapid issue resolution, and scalable operations to ensure reliable systems and business continuity.',
  keywords: 'managed IT services chennai, 24/7 IT support near me, offshore managed services chennai, managed support services company, enterprise managed services chennai',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/it-consulting/managed-services',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Managed Services & 24/7 Support in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/it-consulting/managed-services',
    description: 'best enterprise managed services chennai, best 24/7 managed support company in chennai, top IT operations support services chennai',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – Managed Services & 24/7 Support',
    description: 'managed services chennai, best managed IT services near me, best managed services provider, best 24/7 IT support company in chennai, enterprise managed chennai',
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
    url: 'https://www.trenztechnologies.com/services/it-consulting/managed-services',
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
    url: 'https://www.trenztechnologies.com/services/it-consulting/managed-services',
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
      <ManagedServicesContent />
    </>
  )
}
