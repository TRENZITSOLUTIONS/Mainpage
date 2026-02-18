import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-Cloud Support - AWS, Azure & Google Cloud | Trenzit Solutions',
  description:
    'Vendor-agnostic multi-cloud consulting and support across AWS, Azure, and Google Cloud Platform. Trenzit Solutions helps you leverage the best of each cloud provider with unified management and cross-cloud integration.',
  keywords:
    'AWS cloud services, Azure solutions, Google Cloud Platform, multi-cloud strategy, cloud platform consulting, vendor-agnostic cloud, cross-cloud integration, cloud consulting',
}

export default function MultiCloudSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
