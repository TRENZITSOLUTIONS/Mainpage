import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software & SaaS Development | Trenzit Solutions',
  description:
    'Build tailored software solutions and scalable SaaS platforms with Trenzit Solutions. From requirements analysis to cloud deployment, we deliver full-stack custom applications designed for growth.',
  keywords:
    'custom software development, SaaS development, software as a service, custom application development, full-stack development, SaaS multi-tenancy, subscription management, scalable cloud deployment',
}

export default function CustomSoftwareSaasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
