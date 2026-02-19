import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Services - Trenz Technologies',
  description: 'Product Engineering, Application Development, Cloud Solutions, Digital Transformation, and IT Consulting services. Enterprise-grade solutions for your business.',
  keywords: 'IT services, software development, cloud solutions, digital transformation, product engineering, application development',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1QZKCL1NSN"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1QZKCL1NSN');
          `,
        }}
      />
      {children}
    </>
  )
}


