import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legacy System Modernization Services | Trenzit Solutions',
  description:
    'Upgrade legacy systems to modern, scalable architectures with Trenzit Solutions. We offer legacy assessment, re-platforming, code refactoring, database migration, and API-first modernization strategies.',
  keywords:
    'legacy modernization, system modernization, legacy system upgrade, application modernization, re-platforming services, code refactoring, database migration, API-first modernization',
}

export default function ModernizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
