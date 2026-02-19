import { Metadata } from 'next'
import ServerProvisioningManagementContent from './content'

export const metadata: Metadata = {
  title: 'Server Provisioning & Management Services | Trenz Technologies',
  description: 'Trenz Technologies provides expert server provisioning, management, and maintenance services. Automate your infrastructure with IaC, monitoring, and proactive security.',
  keywords: 'server provisioning, server management, infrastructure as code, cloud maintenance, server monitoring, backup and recovery, patch management, Trenz Technologies',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/services/cloud-solutions/server-provisioning-management',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Trenz Technologies' }],
  openGraph: {
    title: 'Server Provisioning & Management Services – Trenz Technologies',
    type: 'website',
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/server-provisioning-management',
    description: 'Reliable server provisioning, management, and maintenance for your digital operations. Focus on your business while we handle your infrastructure.',
    images: ['https://www.facebook.com/photo/?fbid=122100082047232013&set=pb.61586960408843.-2207520000'],
    siteName: 'Trenz Technologies',
  },
  twitter: {
    card: 'summary',
    site: '@trenztech',
    title: 'Server Provisioning & Management Services – Trenz Technologies',
    description: 'Expert server provisioning and management services. Secure, scalable, and reliable infrastructure solutions.',
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
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/server-provisioning-management',
    contact: 'contact@trenztechnologies.com',
  },
}

export default function ServerProvisioningManagementPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Trenz Technologies',
    image: 'https://www.trenztechnologies.com/logo.jpeg',
    '@id': '',
    url: 'https://www.trenztechnologies.com/services/cloud-solutions/server-provisioning-management',
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
        'name': 'Server Provisioning & Management',
        'item': 'https://www.trenztechnologies.com/services/cloud-solutions/server-provisioning-management',
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
      <ServerProvisioningManagementContent />
    </>
  )
}
