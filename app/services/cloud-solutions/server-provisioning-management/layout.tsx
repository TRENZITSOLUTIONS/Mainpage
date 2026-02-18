import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Server Provisioning, Management & Maintenance | Trenzit Solutions',
  description:
    'Professional server provisioning, infrastructure management, and ongoing maintenance services by Trenzit Solutions. We deliver infrastructure as code, monitoring, patch management, backup, recovery, and capacity planning.',
  keywords:
    'server provisioning, server management, infrastructure management, server maintenance, IT infrastructure services, infrastructure as code, monitoring, patch management, capacity planning',
}

export default function ServerProvisioningManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
