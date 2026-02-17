import { Metadata } from 'next'
import ServerProvisioningClient from './ServerProvisioningClient'

export const metadata: Metadata = {
  title: 'Server Provisioning & Management Services | IT Infrastructure Maintenance | Trenz Technologies',
  description: 'Trenz Technologies provides secure server provisioning, cloud and on-premise server management, performance optimization, and 24/7 infrastructure maintenance services in Chennai and across India.',
  keywords: 'server provisioning services chennai, server management company, IT infrastructure maintenance, cloud server setup services, dedicated server management, enterprise server support india, server monitoring and maintenance services',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/server-provisioning-management',
  },
  openGraph: {
    title: 'Server Provisioning & Infrastructure Management | Trenz Technologies',
    description: 'End-to-end server provisioning, infrastructure monitoring, security hardening, and proactive maintenance for enterprise-grade IT environments.',
    url: 'https://www.trenztechnologies.com/server-provisioning-management',
    siteName: 'Trenz Technologies',
    images: [
      {
        url: 'https://www.trenztechnologies.com/images/server-management-banner.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Server Provisioning & Maintenance Services',
    description: 'Scalable server deployment, 24/7 monitoring, backup management, and infrastructure optimization for business continuity.',
    images: ['https://www.trenztechnologies.com/images/server-management-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServerProvisioningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Server Provisioning & Management Services",
    "provider": {
      "@type": "Organization",
      "name": "Trenz Technologies",
      "url": "https://www.trenztechnologies.com/",
      "logo": "https://www.trenztechnologies.com/logo.jpeg",
      "telephone": "+91 9944865057"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Server Provisioning, Infrastructure Management, 24/7 Maintenance",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressCountry": "IN"
        }
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServerProvisioningClient />
    </>
  )
}
