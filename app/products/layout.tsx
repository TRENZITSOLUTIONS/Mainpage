import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Trenz Technologies',
  description: 'Enterprise-grade software products including Trenz POS - Point of Sale system for modern retail businesses.',
  keywords: 'Trenz POS, point of sale, retail software, POS system, inventory management',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


