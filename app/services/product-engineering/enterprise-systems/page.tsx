import { Metadata } from 'next'
import EnterpriseSystemsContent from './content'

export const metadata: Metadata = {
  title: 'Enterprise Systems (ERP, CRM, POS) | Software Solutions',
  description: 'Trenz Technologies delivers ERP, CRM and POS enterprise systems built for scalability, security and automation to improve efficiency control and business growth.',
  keywords: 'Enterprise software company delivering ERP, CRM and POS solutions, integration, automation, cloud systems and scalable business management software services',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/product-engineering/enterprise-systems',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Enterprise ERP, CRM & POS Solutions in Chennai – Trenz',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/product-engineering/enterprise-systems',
    description: 'Trenz Technologies builds enterprise systems including ERP, CRM, and POS solutions for process automation, system integration, scalability, and business control.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: '',
  },
  twitter: {
    card: 'summary',
    site: ' ',
    title: 'Trenz Technologies – ERP, CRM & POS Enterprise Solutions',
    description: 'Trenz Technologies delivers scalable cloud architectures with DevOps automation API development data platforms system integration and enterprise modernization .',
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
    url: 'https://www.trenztechnologies.com/services/product-engineering/enterprise-systems',
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
    url: 'https://www.trenztechnologies.com/services/product-engineering/enterprise-systems',
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
      <EnterpriseSystemsContent />
    </>
  )
}
