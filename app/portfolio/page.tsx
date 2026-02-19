import { Metadata } from 'next'
import PortfolioContent from './content'

export const metadata: Metadata = {
  title: 'Our Case Studies & Portfolio | Trenz Technologies',
  description: 'Explore our portfolio of successful projects delivered across industries. From custom software to mobile apps and enterprise platforms, see how we help businesses grow.',
  keywords: 'portfolio, case studies, software development projects, web development showcase, mobile app portfolio, digital transformation success, Trenz Technologies',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Our Case Studies & Portfolio – Trenz Technologies',
    type: 'website',
    url: 'https://www.trenztechnologies.com/portfolio',
    description: 'A showcase of our work and the impact we’ve delivered for our clients.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: 'Our Case Studies & Portfolio – Trenz Technologies',
    description: 'Transforming ideas into high-performance digital products. Check out our latest projects.',
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
    url: 'https://www.trenztechnologies.com/portfolio',
    contact: 'contact@trenztechnologies.com',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Portfolio',
    description: 'A showcase of successful projects delivered across industries.',
    url: 'https://www.trenztechnologies.com/portfolio',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            name: 'DigiOcean',
            description: 'Core Platform for enterprise operations.',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'CreativeWork',
            name: 'Jewellry',
            description: 'Premium e-commerce solution.',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'CreativeWork',
            name: 'Gym App',
            description: 'Native mobile fitness management application.',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'CreativeWork',
            name: 'Iedutrack',
            description: 'Learning Management System (LMS).',
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
      <PortfolioContent />
    </>
  )
}
