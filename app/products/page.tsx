'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ShoppingCart } from 'lucide-react'

const products = [
  {
    slug: 'trenz-pos',
    title: 'Trenz POS',
    description: 'A comprehensive Point of Sale system designed for modern retail businesses. Streamline sales, manage inventory, and grow your business with our powerful POS solution.',
    icon: ShoppingCart,
    gradient: 'from-cyan-400 to-blue-600',
    features: [
      'Real-time sales processing',
      'Inventory management',
      'Customer relationship management',
      'Sales analytics and reporting',
      'Multi-location support',
      'Payment gateway integration'
    ]
  }
]

export default function ProductsPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6"
            >
              Our Products
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">SUCCESS</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade software products designed to solve real business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors group-hover:translate-x-2 transition-transform"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

