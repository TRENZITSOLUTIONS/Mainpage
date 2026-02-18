import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Development & Third-Party Integrations | Trenzit Solutions',
  description:
    'Professional API development and third-party integration services. We design and build RESTful APIs, GraphQL endpoints, and seamless integrations with payment gateways, CRMs, ERPs, and more.',
  keywords:
    'API development, REST API, GraphQL development, API integration services, third-party integration, payment gateway integration, webhook development, microservices architecture',
}

export default function ApiDevelopmentIntegrationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
