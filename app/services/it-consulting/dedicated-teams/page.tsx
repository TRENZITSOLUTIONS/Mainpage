import { Metadata } from 'next'
import DedicatedTeamsContent from './content'

export const metadata: Metadata = {
  title: 'Dedicated Development Teams | Digital Technology',
  description: 'We provide dedicated development teams in Chennai – skilled engineers, flexible engagement models, and scalable delivery to support long-term product and business growth.',
  keywords: 'dedicated development teams chennai, dedicated software developers near me, offshore development team chennai, dedicated engineering team services',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/it-consulting/dedicated-teams',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Dedicated Development Teams in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/it-consulting/dedicated-teams',
    description: 'best dedicated development teams chennai, best dedicated software development companies in chennai, best dedicated developer services in chennai',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – Dedicated Development Teams',
    description: 'dedicated development teams chennai, best dedicated software developers near me, best development team agency, best dedicated development company in chennai',
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
    url: 'https://www.trenztechnologies.com/services/it-consulting/dedicated-teams',
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
    url: 'https://www.trenztechnologies.com/services/it-consulting/dedicated-teams',
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
      <DedicatedTeamsContent />
    </>
  )
}
