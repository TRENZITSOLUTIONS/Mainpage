'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Zap,
  Search,
  Server,
  Code2,
  Database,
  Plug,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Legacy Assessment & Strategy',
    description:
      'Conduct a thorough assessment of your existing systems to evaluate technical debt, risk, and modernization options. We deliver a prioritized roadmap with clear milestones and ROI projections.',
  },
  {
    icon: Server,
    title: 'Re-Platforming & Cloud Migration',
    description:
      'Move legacy applications from outdated infrastructure to modern cloud platforms while preserving business logic, data integrity, and operational continuity.',
  },
  {
    icon: Code2,
    title: 'Code Refactoring & Architecture Redesign',
    description:
      'Restructure monolithic codebases into clean, maintainable architectures using microservices, modular design patterns, and modern frameworks that enable faster development cycles.',
  },
  {
    icon: Plug,
    title: 'API-First Modernization',
    description:
      'Wrap legacy systems with modern APIs to unlock integrations, enable new digital channels, and create an interoperable architecture without a full rewrite.',
  },
]

const deliverables = [
  'Comprehensive legacy system assessment with risk and cost analysis',
  'Phased modernization roadmap with incremental delivery milestones',
  'Re-platformed applications running on modern cloud infrastructure',
  'Refactored codebases with improved test coverage and documentation',
  'Database migration with full data validation and zero data loss',
  'API layers enabling seamless integration with modern systems and partners',
]

export default function ModernizationPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/digital-transformation"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Digital Transformation
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Legacy System Modernization Services
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Aging systems slow your business down, increase maintenance costs,
            and create security vulnerabilities. Our legacy modernization
            services upgrade your outdated technology to modern, scalable
            architectures -- without disrupting the operations your business
            depends on.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            We take a pragmatic, incremental approach to modernization. Whether
            you need to re-platform a mainframe application, refactor a
            monolithic codebase, migrate databases, or expose legacy
            functionality through modern APIs, we build a strategy that
            balances speed, risk, and cost. The outcome is a system that is
            easier to maintain, faster to enhance, and ready for the future.
          </p>

          {/* Features Grid */}
          <h2 className="text-2xl font-bold text-white mb-6">
            Key Capabilities
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
                <feature.icon className="w-8 h-8 text-orange-400 mb-4" />
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
            className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-500/30 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <ul className="space-y-3 text-gray-300">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
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
                <span className="text-orange-400 mt-1">&#10003;</span>
                <span>
                  Proven track record modernizing enterprise systems across
                  finance, healthcare, and government sectors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">&#10003;</span>
                <span>
                  Incremental modernization strategies that minimize risk and
                  deliver value at every stage
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">&#10003;</span>
                <span>
                  Deep expertise in both legacy technologies and modern
                  frameworks, bridging old and new
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">&#10003;</span>
                <span>
                  Comprehensive testing and validation ensuring zero data loss
                  and business continuity
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-10 bg-gradient-to-br from-orange-600/20 to-red-700/20 rounded-xl border border-orange-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Modernize Your Legacy Systems?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Let us help you transform aging technology into a modern,
              competitive advantage. Get in touch to discuss your modernization
              roadmap.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-orange-400 hover:to-red-500 transition-all"
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
