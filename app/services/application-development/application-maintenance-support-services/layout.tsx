import Script from 'next/script'

export default function MaintenanceSupportLayout({
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
