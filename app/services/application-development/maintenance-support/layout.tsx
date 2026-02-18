import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Maintenance & Support Services | Trenzit Solutions',
  description:
    'Reliable application maintenance and support services including bug fixes, performance monitoring, security updates, and feature enhancements. We provide 24/7 technical support to keep your software running smoothly.',
  keywords:
    'application maintenance, software support services, app maintenance, ongoing software support, 24/7 technical support, bug fixing, performance monitoring, security updates',
}

export default function MaintenanceSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
