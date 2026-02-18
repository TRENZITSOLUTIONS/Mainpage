import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data & Analytics Solutions | Trenzit Solutions',
  description:
    'Turn data into actionable insights with advanced analytics and visualization from Trenzit Solutions. We deliver data warehousing, business intelligence dashboards, predictive analytics, and real-time reporting.',
  keywords:
    'data analytics services, business intelligence, data visualization, predictive analytics, data warehousing, BI dashboards, ETL pipelines, real-time analytics',
}

export default function DataAnalyticsSolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
