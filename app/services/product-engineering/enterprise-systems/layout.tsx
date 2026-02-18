import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Systems - ERP, CRM & POS Solutions | Trenzit Solutions',
  description:
    'Build enterprise-grade ERP, CRM, and POS systems with Trenzit Solutions. We deliver workflow automation, data integration, and powerful reporting dashboards for scalable business operations.',
  keywords:
    'ERP development, CRM solutions, POS system development, enterprise software, workflow automation, data integration, reporting dashboards, enterprise resource planning',
}

export default function EnterpriseSystemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
