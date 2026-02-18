'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, BarChart3, Users, Package, CreditCard, MapPin } from 'lucide-react'

export default function TrenzPOSPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/products"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Products
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Trenz POS
            </h1>
          </div>

          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            A comprehensive Point of Sale system designed for modern retail businesses. Streamline sales, manage inventory, and grow your business with our powerful POS solution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <ShoppingCart className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Real-time Sales Processing</h3>
              <p className="text-gray-400">Fast, reliable transaction processing with instant receipt generation.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <Package className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Inventory Management</h3>
              <p className="text-gray-400">Track stock levels, manage suppliers, and automate reordering.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <Users className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Customer Relationship Management</h3>
              <p className="text-gray-400">Build customer profiles, track purchase history, and manage loyalty programs.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <BarChart3 className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Sales Analytics & Reporting</h3>
              <p className="text-gray-400">Comprehensive reports and insights to drive business decisions.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Multi-location Support</h3>
              <p className="text-gray-400">Manage multiple store locations from a single dashboard.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <CreditCard className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Payment Gateway Integration</h3>
              <p className="text-gray-400">Accept all major payment methods including cards, UPI, and digital wallets.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Intuitive, user-friendly interface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Cloud-based for access anywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Secure and PCI-compliant</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Customizable to your business needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>24/7 customer support</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Retail Operations?</h2>
            <p className="text-gray-300 mb-6">Get in touch to schedule a demo or learn more about Trenz POS.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


