import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Security & Performance Optimization | Trenzit Solutions',
  description:
    'Enterprise-grade cloud security and performance optimization services by Trenzit Solutions. We provide security audits, compliance management (SOC2, HIPAA, GDPR), encryption, DDoS protection, and auto-scaling solutions.',
  keywords:
    'cloud security services, cloud performance optimization, cloud compliance, security audit, cloud infrastructure security, SOC2, HIPAA, GDPR, DDoS protection, auto-scaling',
}

export default function SecurityOptimizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
