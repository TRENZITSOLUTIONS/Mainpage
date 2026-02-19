import HomeContent from './HomeContent'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trenz Technologies',
    url: 'https://www.trenztechnologies.com',
    logo: 'https://www.trenztechnologies.com/logo.jpeg',
    description: 'Trenz Technologies is a full-service technology company specializing in product engineering, application development, cloud solutions, digital transformation, and IT consulting.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Karambakkam, Buddhar Colony, Porur,',
      addressLocality: 'Chennai',
      postalCode: '600125',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 9944865057',
      contactType: 'customer service',
      email: 'contact@trenztechnologies.com',
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
      <HomeContent />
    </>
  )
}
