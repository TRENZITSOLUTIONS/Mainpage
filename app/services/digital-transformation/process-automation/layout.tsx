import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process Automation Services | Trenzit Solutions',
  description:
    'Streamline workflows and eliminate manual processes with intelligent automation from Trenzit Solutions. We deliver workflow automation, RPA, business process mapping, and integration automation solutions.',
  keywords:
    'process automation, workflow automation, RPA services, robotic process automation, business process automation, document processing automation, approval workflow automation',
}

export default function ProcessAutomationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
