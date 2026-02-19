import { Metadata } from 'next'
import Support24x7Content from './content'

export const metadata: Metadata = {
  title: '24/7 Technical Support & Monitoring | Trenz Technologies',
  description: 'Proactive 24/7 technical support and infrastructure monitoring services by Trenz Technologies. Guaranteed SLAs, rapid incident response, and round-the-clock maintenance.',
  keywords: '24/7 technical support, infrastructure monitoring, incident response, SLA-backed support, proactive maintenance, IT support Chennai, Trenz Technologies',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/it-consulting/24-7-it-support-services',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: '24/7 Technical Support & Monitoring – Trenz Technologies',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/it-consulting/24-7-it-support-services',
    description: 'Round-the-clock surveillance and support for your business-critical infrastructure. Rapid resolution and proactive monitoring.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: '24/7 Technical Support & Monitoring – Trenz Technologies',
    description: 'Expert technical support available 24/7. Minimize downtime with our proactive monitoring and rapid response teams.',
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
    url: 'https://www.trenztechnologies.com/services/it-consulting/24-7-it-support-services',
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
    url: 'https://www.trenztechnologies.com/services/it-consulting/24-7-it-support-services',
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
        'name': 'Support 24/7',
        'item': 'https://www.trenztechnologies.com/services/it-consulting/24-7-it-support-services',
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
      <Support24x7Content />
    </>
  )
}
