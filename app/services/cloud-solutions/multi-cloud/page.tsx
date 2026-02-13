'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Server } from 'lucide-react'

export default function MultiCloudPage() {
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
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">AWS, Azure & Google Cloud</h1>
          </div>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We provide expert guidance and implementation for multi-cloud and hybrid cloud strategies, leveraging deep expertise across AWS, Azure, and Google Cloud. Our cloud architects help you choose the right platform for each workload, optimize costs, and build architectures that avoid vendor lock-in.
          </p>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            Whether you're standardizing on a single platform, distributing workloads across multiple clouds, or maintaining hybrid environments, we provide architecture guidance, implementation support, and optimization to maximize cloud value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">AWS Ecosystem Optimization</h3>
              <p className="text-gray-400">We architect and optimize AWS solutions leveraging EC2, RDS, Lambda, S3, ECS, DynamoDB, and 200+ services. Cost optimization through Reserved Instances, Savings Plans, and right-sizing strategies reduces your cloud spend significantly.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Azure Integration & Hybrid Cloud</h3>
              <p className="text-gray-400">We design Azure solutions with AKS, App Service, Cosmos DB, and seamless integration with Microsoft tools. Hybrid architectures connecting on-premises and Azure resources enable gradual cloud adoption with minimal disruption.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Google Cloud Data & AI/ML</h3>
              <p className="text-gray-400">We leverage Google Cloud's strengths in BigQuery for data warehousing, Cloud Run for containerized workloads, Vertex AI for machine learning, and real-time analytics. Ideal for data-driven applications and AI initiatives.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Multi-Cloud Architecture & FinOps</h3>
              <p className="text-gray-400">We design distributed, multi-cloud architectures that leverage each provider's strengths while avoiding lock-in. Cost governance through FinOps practices, chargeback models, and continuous optimization ensures cloud investments deliver ROI.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 rounded-xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Service & Certifications</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>AWS Solution Architect & Advanced Network expertise</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Azure Solutions Architect with hybrid cloud specialization</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Google Cloud Professional expertise in data and ML</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Cost optimization and FinOps best practices</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
