import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scalable & Secure Software Architectures | Trenzit Solutions',
  description:
    'Design robust, scalable, and secure system architectures with Trenzit Solutions. We specialize in microservices, containerization, CI/CD pipelines, and cloud-native development for high-performance applications.',
  keywords:
    'scalable architecture, secure software design, microservices architecture, cloud-native development, containerization, CI/CD pipelines, load balancing, performance monitoring',
}

export default function ScalableArchitecturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
