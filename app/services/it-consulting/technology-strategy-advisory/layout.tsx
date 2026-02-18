import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Strategy & Advisory Services | Trenzit Solutions',
  description:
    'Expert technology strategy and IT advisory services by Trenzit Solutions. We provide technology assessments, digital roadmap planning, architecture advisory, technology stack selection, IT governance, and risk assessment to drive your digital transformation.',
  keywords:
    'technology strategy, IT advisory services, digital roadmap, technology consulting, IT governance, tech stack consulting, technology assessment, architecture advisory',
}

export default function TechnologyStrategyAdvisoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
