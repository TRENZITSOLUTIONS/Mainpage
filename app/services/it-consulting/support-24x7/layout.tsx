import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '24/7 Technical Support & Monitoring | Trenzit Solutions',
  description:
    'Round-the-clock technical support and monitoring services by Trenzit Solutions. We provide 24/7 monitoring, incident response, SLA management, proactive maintenance, performance dashboards, and escalation management to keep your systems running smoothly.',
  keywords:
    '24/7 IT support, technical support services, IT monitoring, incident response, SLA management, round the clock support, proactive maintenance, performance monitoring',
}

export default function Support24x7Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
