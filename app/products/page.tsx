import { Metadata } from 'next'
import ProductsContent from './content'

export const metadata: Metadata = {
  title: 'Our Software Products | Enterprise-Grade Solutions | Trenz Technologies',
  description: 'Explore our range of software products including Trenz POS. We build scalable, secure, and user-centered products designed to solve real business challenges.',
  keywords: 'software products, Trenz POS, retail software, enterprise applications, SaaS products, billing software, inventory management',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/products',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Our Software Products | Enterprise-Grade Solutions – Trenz Technologies',
    type: 'website',
    url: 'https://www.trenztechnologies.com/products',
    description: 'Scalable and secure software products built to empower your business.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: 'Our Software Products | Enterprise-Grade Solutions – Trenz Technologies',
    description: 'Discover intelligent software solutions designed for growth and efficiency.',
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
    url: 'https://www.trenztechnologies.com/products',
    contact: 'contact@trenztechnologies.com',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Software Products',
    description: 'Enterprise-grade software products designed to solve real business challenges.',
    url: 'https://www.trenztechnologies.com/products',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'SoftwareApplication',
            name: 'Trenz POS',
            url: 'https://www.trenztechnologies.com/products/trenz-pos',
            applicationCategory: 'BusinessApplication',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsContent />
    </>
  )
}
