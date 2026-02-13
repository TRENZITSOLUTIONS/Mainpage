'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Cloud } from 'lucide-react'

export default function CloudArchitecturePage() {
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
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">Cloud Architecture & Migration</h1>
          </div>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We design and execute seamless cloud migrations and architectures that modernize your infrastructure while minimizing risk and downtime. Our cloud migration experts combine deep technical expertise with proven methodologies to ensure successful transitions to AWS, Azure, or Google Cloud.
          </p>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            From initial assessment to post-migration optimization, we handle architecture design, infrastructure migration, disaster recovery planning, and cost optimization to ensure your cloud transformation drives business value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Infrastructure Assessment & Planning</h3>
              <p className="text-gray-400">Comprehensive evaluation of your existing infrastructure, application dependencies, performance baselines, and cloud readiness. We create detailed migration roadmaps with cost projections and timeline estimates.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Lift & Shift Migration</h3>
              <p className="text-gray-400">Rapid rehosting of applications to the cloud with minimal refactoring, leveraging VM migrations and managed services. Ideal for quick cloud adoption while maintaining existing application architecture and reducing disruption.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Cloud-Native Refactoring</h3>
              <p className="text-gray-400">Modernize applications with microservices architecture, containerization, serverless functions, and cloud-native managed services. Unlock scalability, reduce operational overhead, and optimize costs through cloud-native design patterns.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Disaster Recovery & High Availability</h3>
              <p className="text-gray-400">Multi-region setup with automated failover, backup strategies, and business continuity planning. We ensure your applications remain available even during regional outages or unexpected failures.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 rounded-xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Migration Methodology</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">→</span><span>Pre-migration: Assessment and infrastructure audit</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">→</span><span>Execution: Phased rollout with continuous monitoring</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">→</span><span>Validation: Testing and cutover procedures</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">→</span><span>Post-migration: Optimization and knowledge transfer</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
