'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Code, Database, Shield, Building2 } from 'lucide-react'

export default function ProductEngineeringPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Product Engineering
            </h1>
          </div>

          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            We build custom software and SaaS products that scale. From enterprise systems to government solutions, we engineer robust, secure architectures that power your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <Code className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Custom Software & SaaS</h3>
              <p className="text-gray-400">Tailored solutions designed specifically for your business needs and workflows.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <Database className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Systems</h3>
              <p className="text-gray-400">ERP, CRM, POS systems built for scale, security, and performance.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <Shield className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Scalable Architectures</h3>
              <p className="text-gray-400">Secure, scalable infrastructure that grows with your business.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <Building2 className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Government Projects</h3>
              <p className="text-gray-400">E-governance, public systems & services, and ongoing maintenance.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Our Product Engineering?</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>End-to-end development from concept to deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Modern tech stack and best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Agile methodology with continuous delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Dedicated support and maintenance</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

