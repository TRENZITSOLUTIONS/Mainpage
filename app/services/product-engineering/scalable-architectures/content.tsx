'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function ScalableArchitecturesContent() {
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

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Scalable Cloud Architecture & Infrastructure Solutions</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We design scalable cloud architectures that support rapid growth, high traffic, and mission-critical operations. Our infrastructure solutions focus on elasticity, uptime, cost optimization, and long-term maintainability.
                    </p>
                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        From microservices to multi-region deployment, we build systems that scale efficiently without compromising performance or security.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Cloud-Native Architecture Design</h3>
                            <p className="text-gray-400">We implement microservices, containerized deployments, and serverless architectures to enable elastic scalability and faster release cycles. Our cloud-native solutions are optimized for AWS, Azure, and GCP environments, ensuring high availability and fault tolerance.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Observability & Monitoring</h3>
                            <p className="text-gray-400">We establish full-stack observability using centralized logging, distributed tracing, and real-time metrics monitoring. This allows proactive issue detection, performance optimization, and improved system reliability under heavy workloads..</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Infrastructure Cost Optimization</h3>
                            <p className="text-gray-400">We design right-sized cloud infrastructure with autoscaling policies, workload balancing, and performance tuning to reduce unnecessary cloud spend. Our approach ensures maximum resource utilization while maintaining performance stability.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Disaster Recovery & Business Continuity</h3>
                            <p className="text-gray-400">We build resilient systems with multi-region deployment strategies, automated backups, failover mechanisms, and recovery runbooks. This ensures minimal downtime and rapid restoration during outages or infrastructure failures.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Deliverables</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>CI/CD pipeline configuration and DevOps setup</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Load testing and chaos engineering reports</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Monitoring dashboards and alerting systems</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
