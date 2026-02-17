'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Database } from 'lucide-react'

export default function EnterpriseSystemsContent() {
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
                            <Database className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Enterprise Software Development & System Integration</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We design and implement enterprise-grade ERP, CRM, and POS systems focused on process automation, data accuracy, compliance, and long-term scalability.
                    </p>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        Our enterprise software solutions improve operational efficiency, eliminate manual bottlenecks, and support high-availability business environments.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Business Process Automation</h3>
                            <p className="text-gray-400">Automate workflows, reduce manual operations, and optimize end-to-end enterprise processes using custom ERP and CRM development.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Data & Integration</h3>
                            <p className="text-gray-400">We build secure, API-driven integration architectures that connect ERP, CRM, POS, and third-party platforms into a unified ecosystem. Our team develops robust data models, ETL pipelines, and real-time synchronization mechanisms to ensure data accuracy and system interoperability..</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Compliance & Security</h3>
                            <p className="text-gray-400">Security and compliance are built into every enterprise system we develop. We implement role-based access control (RBAC), audit logging, encryption standards, and regulatory compliance frameworks to protect sensitive business data.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Performance & Reliability</h3>
                            <p className="text-gray-400">We architect high-performance enterprise systems with scalable cloud infrastructure and resilient deployment strategies. Through load testing, capacity planning, and optimized database design, we ensure predictable system performance even under heavy usage.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Why Choose Our Enterprise Software Services?</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Enterprise-level security & compliance</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Scalable cloud architecture</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Dedicated development & support teams</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
