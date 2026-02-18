'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Cloud,
  GitBranch,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Network,
} from 'lucide-react'

const features = [
  {
    icon: Cloud,
    title: 'Cloud Architecture Design',
    description:
      'We design robust, scalable cloud architectures tailored to your workloads, ensuring high availability, fault tolerance, and optimal resource utilization across your entire infrastructure.',
  },
  {
    icon: GitBranch,
    title: 'Migration Planning & Execution',
    description:
      'Comprehensive migration strategies covering assessment, planning, and execution. We evaluate lift-and-shift versus re-architecture approaches to find the best path for every workload.',
  },
  {
    icon: Network,
    title: 'Hybrid & Multi-Cloud',
    description:
      'Bridge on-premises and cloud environments with hybrid architectures that provide flexibility, compliance, and seamless connectivity between your existing systems and cloud resources.',
  },
  {
    icon: ShieldCheck,
    title: 'Disaster Recovery & Business Continuity',
    description:
      'Implement resilient disaster recovery solutions with automated failover, geo-redundant backups, and tested recovery procedures to keep your business running no matter what.',
  },
]

const deliverables = [
  'Detailed cloud architecture blueprints and migration roadmaps',
  'Zero-downtime migration execution with rollback strategies',
  'Lift-and-shift and re-architecture assessments for each workload',
  'Hybrid cloud connectivity and integration configurations',
  'Disaster recovery plans with defined RPO and RTO targets',
  'Post-migration performance validation and optimization',
]

export default function CloudArchitectureMigrationPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/cloud-solutions"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Cloud Solutions
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Cloud Architecture & Migration Services
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Moving to the cloud is more than a technology shift -- it is a
            strategic transformation that can redefine how your organization
            operates. We design cloud architectures that align with your
            business objectives and execute migrations that minimize risk and
            disruption.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Whether you are migrating a legacy monolith, adopting a
            microservices architecture, or building a hybrid cloud strategy,
            our team brings deep expertise across all major platforms. We
            handle every phase -- from initial assessment and dependency
            mapping through cutover and post-migration validation -- ensuring
            your systems are faster, more resilient, and ready for growth.
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
                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
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
            className="p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <ul className="space-y-3 text-gray-300">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
                <span className="text-blue-400 mt-1">&#10003;</span>
                <span>
                  Proven zero-downtime migration strategies for mission-critical
                  systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">&#10003;</span>
                <span>
                  Deep expertise across AWS, Azure, and Google Cloud
                  architectures
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">&#10003;</span>
                <span>
                  Comprehensive dependency mapping and risk assessment before
                  every migration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">&#10003;</span>
                <span>
                  Post-migration support with performance monitoring and
                  optimization
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-10 bg-gradient-to-br from-blue-600/20 to-cyan-700/20 rounded-xl border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Let us architect a cloud strategy that powers your business
              forward. Get in touch to discuss your migration goals and
              infrastructure needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all"
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
