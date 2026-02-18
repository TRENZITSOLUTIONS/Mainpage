import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Driven Systems & Machine Learning Solutions | Trenzit Solutions',
  description:
    'Leverage AI and machine learning to enhance decision-making and operations with Trenzit Solutions. We build ML models, NLP systems, computer vision solutions, recommendation engines, and intelligent chatbots.',
  keywords:
    'AI solutions, machine learning development, artificial intelligence services, NLP solutions, AI-driven automation, ML model development, computer vision, recommendation engine, chatbot development',
}

export default function AiDrivenSystemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
