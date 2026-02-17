import { Metadata } from 'next'
import GovernmentProjectsClient from './GovernmentProjectsClient'

export const metadata: Metadata = {
  title: 'E-Governance & Government IT Projects | Public Systems & Maintenance | Trenz Technologies',
  description: 'Trenz Technologies delivers secure e-governance platforms, public service systems, and government IT maintenance solutions in Chennai. Scalable, compliant, and citizen-focused digital infrastructure.',
  keywords: 'e governance services chennai, government IT projects company, public service system development, digital government solutions india, government software development chennai, e governance portal development, government IT maintenance services, public sector IT solutions',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/government-projects',
  },
  openGraph: {
    title: 'E-Governance & Government IT Solutions | Trenz Technologies',
    description: 'Secure and scalable e-governance platforms, public service portals, and long-term IT maintenance solutions for government institutions.',
    url: 'https://www.trenztechnologies.com/government-projects',
    siteName: 'Trenz Technologies',
    images: [
      {
        url: 'https://www.trenztechnologies.com/images/government-projects-banner.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government E-Governance & Public IT Systems | Trenz Technologies',
    description: 'End-to-end government IT project execution including portal development, citizen services platforms, and secure infrastructure maintenance.',
    images: ['https://www.trenztechnologies.com/images/government-projects-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GovernmentProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trenz Technologies",
    "image": "https://www.trenztechnologies.com/logo.jpeg",
    "@id": "",
    "url": "https://www.trenztechnologies.com/",
    "telephone": "+91 9944865057",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karambakkam, Buddhar Colony, Porur,",
      "addressLocality": "Chennai",
      "postalCode": "600125",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.038419536577639,
      "longitude": 80.15654609485881
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61586960408843",
      "https://www.instagram.com/trenztechnologies/"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GovernmentProjectsClient />
    </>
  )
}
