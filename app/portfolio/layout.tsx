import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Trenz Technologies | Our Projects & Success Stories',
  description: 'Explore our portfolio of successful projects including web applications, mobile apps, SaaS platforms, and enterprise solutions built by Trenz Technologies.',
  keywords: 'portfolio, projects, case studies, success stories, web development, mobile apps, SaaS, enterprise solutions',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
