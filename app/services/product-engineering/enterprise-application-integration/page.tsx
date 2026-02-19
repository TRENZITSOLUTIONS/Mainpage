import { Metadata } from 'next'
import EnterpriseSystemsContent from './content'

export const metadata: Metadata = {
  title: 'Enterprise Systems (ERP, CRM, POS) | Trenz Technologies',
  description: 'Trenz Technologies delivers ERP, CRM, and POS enterprise systems built for scalability, security, and automation to improve efficiency and business growth.',
  keywords: 'enterprise systems, ERP solutions, CRM software, POS systems, process automation, system integration, scalable business software, Trenz Technologies',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/product-engineering/enterprise-application-integration',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Enterprise ERP, CRM & POS Solutions – Trenz Technologies',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/product-engineering/enterprise-application-integration',
    description: 'Enterprise-grade systems engineered for reliability, scalability, and seamless cross-departmental collaboration.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: 'Enterprise ERP, CRM & POS Solutions – Trenz Technologies',
    description: 'Modernize your business with integrated ERP, CRM, and POS systems. Automated workflows and real-time insights.',
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
    url: 'https://www.trenztechnologies.com/services/product-engineering/enterprise-application-integration',
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
    url: 'https://www.trenztechnologies.com/services/product-engineering/enterprise-application-integration',
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
        'name': 'Enterprise Systems',
        'item': 'https://www.trenztechnologies.com/services/product-engineering/enterprise-application-integration',
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
      <EnterpriseSystemsContent />
    </>
  )
}
