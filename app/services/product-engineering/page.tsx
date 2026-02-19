import { Metadata } from 'next'
import ProductEngineeringContent from './content'

export const metadata: Metadata = {
  title: 'Product Engineering & Custom Software | Trenz Technologies',
  description: 'Trenz Technologies offers comprehensive product engineering services, including custom software development, SaaS products, enterprise systems, and scalable architectures.',
  keywords: 'product engineering, custom software development, SaaS development, enterprise systems, scalable architecture, government IT projects, Trenz Technologies',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/product-engineering',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Product Engineering & Custom Software – Trenz Technologies',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/product-engineering',
    description: 'We build custom software and SaaS products that scale. Robust, secure architectures that power your business.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: 'Product Engineering & Custom Software – Trenz Technologies',
    description: 'Expert product engineering and custom software development. From concept to deployment.',
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
    url: 'https://www.trenztechnologies.com/services/product-engineering',
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
    url: 'https://www.trenztechnologies.com/services/product-engineering',
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
        'name': 'Product Engineering',
        'item': 'https://www.trenztechnologies.com/services/product-engineering',
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
      <ProductEngineeringContent />
    </>
  )
}
