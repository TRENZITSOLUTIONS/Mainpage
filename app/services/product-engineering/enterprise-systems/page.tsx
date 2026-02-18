'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Database,
  Users,
  ShoppingCart,
  Workflow,
  BarChart3,
  Link2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'ERP Implementation',
    description:
      'End-to-end Enterprise Resource Planning systems that unify finance, HR, supply chain, and operations into a single source of truth.',
  },
  {
    icon: Users,
    title: 'CRM Customization',
    description:
      'Tailored Customer Relationship Management platforms that streamline sales pipelines, marketing campaigns, and customer support workflows.',
  },
  {
    icon: ShoppingCart,
    title: 'POS Systems',
    description:
      'Feature-rich Point of Sale solutions with inventory management, payment processing, and real-time sales analytics for retail and hospitality.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Intelligent process automation that eliminates manual bottlenecks, reduces errors, and accelerates business operations across departments.',
  },
]

const deliverables = [
  'Fully integrated ERP modules covering finance, inventory, HR, and procurement',
  'Custom CRM dashboards with lead scoring and sales forecasting',
  'Multi-location POS systems with centralized management',
  'Automated approval workflows and notification systems',
  'Data migration from legacy systems with zero downtime',
  'Real-time reporting dashboards and business intelligence tools',
]

export default function EnterpriseSystemsPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/product-engineering"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Product Engineering
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Enterprise Systems - ERP, CRM & POS Solutions
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Modern enterprises need integrated, intelligent systems that break
            down data silos and drive operational excellence. We build
            enterprise-grade ERP, CRM, and POS solutions engineered for
            reliability, scalability, and seamless cross-departmental
            collaboration.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Our team specializes in designing systems that centralize your
            business data, automate critical workflows, and deliver actionable
            insights through powerful dashboards. Whether you are modernizing
            legacy infrastructure or building from scratch, we ensure a smooth
            transition with minimal disruption to your day-to-day operations.
          </p>

          {/* Features Grid */}
          <h2 className="text-2xl font-bold text-white mb-6">
            Core Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 bg-slate-900/50 rounded-xl border border-slate-800"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* What We Deliver */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <ul className="space-y-3 text-gray-300">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 bg-slate-900/50 rounded-xl border border-slate-800 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Deep expertise in ERP, CRM, and POS ecosystems across
                  industries
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Proven data migration strategies for seamless legacy system
                  transitions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Scalable architectures that grow with your organization
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Comprehensive training, documentation, and long-term support
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-10 bg-gradient-to-br from-cyan-600/20 to-blue-700/20 rounded-xl border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Streamline Your Enterprise Operations
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              From ERP to CRM to POS, we build the backbone systems your
              business relies on. Let us discuss how we can transform your
              operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
