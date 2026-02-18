import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government Projects & E-Governance Solutions | Trenzit Solutions',
  description:
    'Deliver secure, compliant e-governance platforms and public service portals with Trenzit Solutions. We build citizen management systems, government IT infrastructure, and regulatory-compliant software for the public sector.',
  keywords:
    'e-governance solutions, government software development, public sector IT, government project management, citizen management systems, public service portals, compliance, data security',
}

export default function GovernmentProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
