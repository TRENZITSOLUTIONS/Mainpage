'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Code, Database, Shield, Building2 } from 'lucide-react'

const subServices = [
  {
    title: 'Custom Software & SaaS',
    desc: 'Tailored solutions designed specifically for your business needs and workflows.',
    icon: Code,
    href: '/services/product-engineering/custom-software-saas',
  },
  {
    title: 'Enterprise Systems',
    desc: 'ERP, CRM, POS systems built for scale, security, and performance.',
    icon: Database,
    href: '/services/product-engineering/enterprise-systems',
  },
  {
    title: 'Scalable Architectures',
    desc: 'Secure, scalable infrastructure that grows with your business.',
    icon: Shield,
    href: '/services/product-engineering/scalable-architectures',
  },
  {
    title: 'Government Projects',
    desc: 'E-governance, public systems & services, and ongoing maintenance.',
    icon: Building2,
    href: '/services/product-engineering/government-projects',
  },
]

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
            {subServices.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link href={service.href} className="block group">
                    <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 h-full">
                      <Icon className="w-8 h-8 text-cyan-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="text-gray-400">{service.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Our Product Engineering?</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>End-to-end development from concept to deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>Modern tech stack and best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>Agile methodology with continuous delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>Dedicated support and maintenance</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
