import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Architecture & Migration Services | Trenzit Solutions',
  description:
    'Expert cloud architecture design and migration services by Trenzit Solutions. We plan and execute seamless cloud migrations with zero-downtime strategies, hybrid cloud solutions, and disaster recovery planning.',
  keywords:
    'cloud migration services, cloud architecture design, cloud migration strategy, hybrid cloud solutions, disaster recovery, zero-downtime migration, lift and shift, cloud re-architecture',
}

export default function CloudArchitectureMigrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
