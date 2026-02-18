import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managed IT Services | Trenzit Solutions',
  description:
    'Comprehensive managed IT services by Trenzit Solutions. We handle infrastructure management, network administration, cloud management, helpdesk services, vendor management, and IT asset management so you can focus on your core business.',
  keywords:
    'managed IT services, IT infrastructure management, managed cloud services, IT outsourcing, managed network services, IT service management, helpdesk services, vendor management',
}

export default function ManagedServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
