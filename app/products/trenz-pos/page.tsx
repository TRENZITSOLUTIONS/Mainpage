import { Metadata } from 'next'
import TrenzPOSClient from './TrenzPOSClient'

export const metadata: Metadata = {
  title: 'Trenz POS | Smart Point of Sale Software for Retail & Businesses',
  description: 'Trenz POS is a powerful point-of-sale software designed for retail stores, supermarkets, and enterprises. Manage billing, inventory, reports, and sales seamlessly with secure and scalable POS solutions.',
  keywords: 'Trenz POS software, retail POS system Chennai, billing software for retail shop, inventory management POS, supermarket POS software India, cloud POS solution, point of sale software company',
  alternates: {
    canonical: 'https://www.trenztechnologies.com/products/trenz-pos',
  },
  openGraph: {
    title: 'Trenz POS – Advanced Retail Billing & Inventory Softwares',
    description: 'Smart POS solution for retail businesses with real-time billing, inventory control, reporting dashboards, and secure transaction management.',
    url: 'https://www.trenztechnologies.com/products/trenz-pos',
    siteName: 'Trenz Technologies',
    images: [
      {
        url: 'https://www.trenztechnologies.com/logo.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trenz POS – Retail Billing & Inventory Management Software',
    description: 'Powerful POS software built for retail stores and enterprises. Simplify billing, track inventory, and monitor performance in real time.',
    images: ['https://www.trenztechnologies.com/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Trenz POS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows, Web-based",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trenz Technologies",
      "url": "https://www.trenztechnologies.com/",
      "logo": "https://www.trenztechnologies.com/logo.jpeg",
      "telephone": "+91 9944865057"
    },
    "description": "Trenz POS is a secure and scalable retail point-of-sale software offering billing automation, inventory tracking, reporting dashboards, and enterprise-level performance management."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrenzPOSClient />
    </>
  )
}
