'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Building2,
  Landmark,
  Globe,
  Users,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Landmark,
    title: 'E-Governance Platforms',
    description:
      'Digital platforms that modernize government operations, enabling paperless workflows, transparent processes, and efficient inter-departmental coordination.',
  },
  {
    icon: Globe,
    title: 'Public Service Portals',
    description:
      'Citizen-facing web and mobile portals that provide easy access to government services, applications, certificates, and real-time status tracking.',
  },
  {
    icon: Users,
    title: 'Citizen Management Systems',
    description:
      'Comprehensive systems for managing citizen records, grievances, feedback, and service requests with full audit trails and accountability.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Data Security',
    description:
      'Solutions designed to meet stringent government regulations, data protection standards, and accessibility requirements from the ground up.',
  },
]

const deliverables = [
  'End-to-end e-governance platforms with role-based access and audit logging',
  'Public service portals with multilingual support and accessibility compliance',
  'Citizen identity and record management systems',
  'Automated compliance reporting and regulatory documentation',
  'Secure infrastructure with encryption, backups, and disaster recovery',
  'Ongoing system maintenance, updates, and dedicated support contracts',
]

export default function GovernmentProjectsPage() {
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
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Government Projects & E-Governance Solutions
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Governments around the world are digitizing public services to
            improve efficiency, transparency, and citizen satisfaction. We
            partner with public sector organizations to design, build, and
            maintain secure e-governance platforms that serve millions of
            citizens reliably.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Our team understands the unique challenges of government IT --
            strict compliance requirements, accessibility mandates, data
            sovereignty concerns, and the need for long-term maintainability.
            We deliver solutions that meet these demands while providing
            intuitive interfaces for both government staff and the public they
            serve.
          </p>

          {/* Features Grid */}
          <h2 className="text-2xl font-bold text-white mb-6">
            Key Focus Areas
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
                  Experience delivering large-scale government and public sector
                  projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Deep understanding of regulatory compliance, data sovereignty,
                  and accessibility standards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Robust security practices including encryption, audit logging,
                  and disaster recovery
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Long-term maintenance contracts with dedicated support teams
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
              Partner With Us for Public Sector Innovation
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Bring digital transformation to government services. Contact us to
              explore how we can help modernize public sector operations.
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
