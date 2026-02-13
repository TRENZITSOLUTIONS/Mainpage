'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function SecurityOptimizationPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/cloud-solutions"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Cloud Solutions
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">Security, Optimization & Cost Control</h1>
          </div>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We provide comprehensive cloud security, performance, and cost optimization services that protect your infrastructure while maximizing efficiency and ROI. Our experts implement industry best practices, security frameworks, and cost governance to ensure your cloud investment delivers value.
          </p>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            From implementing zero-trust security architecture to eliminating cloud waste and optimizing resource utilization, we help you achieve a secure, performant, and cost-effective cloud environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Cloud Security</h3>
              <p className="text-gray-400">We design and implement comprehensive security strategies including IAM policies, VPC configuration, encryption at rest and in transit, DDoS protection, and zero-trust security architecture. Compliance frameworks (SOC2, PCI-DSS, HIPAA, GDPR) ensure regulatory requirements are met.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Performance Optimization</h3>
              <p className="text-gray-400">We optimize infrastructure for speed and reliability through intelligent load balancing, caching strategies, database query optimization, CDN configuration, and auto-scaling. Monitoring and alerting ensure consistent performance.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Cost Optimization & FinOps</h3>
              <p className="text-gray-400">We reduce cloud spending through Reserved Instances, Savings Plans, spot pricing strategies, right-sizing recommendations, waste elimination, and chargeback models. Continuous cost monitoring and optimization delivers consistent savings.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Compliance & Continuous Audit</h3>
              <p className="text-gray-400">We implement continuous monitoring, audit logging, automated security scanning, vulnerability assessments, and compliance reporting. Automated controls enforce your security and compliance policies continuously.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 rounded-xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Typical Results</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>30-40% reduction in cloud costs through optimization</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>Enhanced security posture with zero-trust architecture</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>99.99% availability with automated scaling</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>Full compliance visibility with automated reporting</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
