import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Application Development | Trenzit Solutions',
  description:
    'Build responsive, fast, and scalable web applications with Trenzit Solutions. We leverage modern frameworks like React, Next.js, Angular, and Vue to deliver high-performance, SEO-friendly web apps.',
  keywords:
    'web application development, web app development, React development, Next.js development, progressive web apps, frontend development, responsive web design, scalable web applications',
}

export default function WebAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
