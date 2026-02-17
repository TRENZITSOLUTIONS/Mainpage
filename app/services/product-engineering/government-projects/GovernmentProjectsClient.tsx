'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Building2 } from 'lucide-react'

export default function GovernmentProjectsClient() {
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
                            <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Government Digital Infrastructure & E-Governance Solutions</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We design and deploy mission-critical digital infrastructure for government agencies, public sector departments, and civic institutions. Our solutions include e-governance platforms, citizen service portals, public data systems, and regulatory-compliant enterprise applications.
                    </p>
                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We focus on transparency, security, interoperability, and long-term operational sustainability.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">E-Governance Platforms</h3>
                            <p className="text-gray-400">End-to-end digital service delivery systems for permits, certificates, licensing, grievance management, and citizen engagement. Designed to improve accessibility, reduce processing time, and enhance service efficiency.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Public Data & Reporting Systems</h3>
                            <p className="text-gray-400">Open data portals, analytics dashboards, and centralized reporting platforms that enable data-driven policy decisions and administrative transparency.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Compliance, Audit & Security Frameworks</h3>
                            <p className="text-gray-400">Role-based access control, audit trails, encryption protocols, and compliance alignment with government IT standards and regulatory frameworks.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">24/7 Operations Support</h3>
                            <p className="text-gray-400">Dedicated support teams, incident response protocols, infrastructure monitoring, and high-availability deployment for uninterrupted public services.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Public Sector Expertise</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Compliance with government IT standards and security frameworks</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Citizen-centric UX for diverse user groups</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>High uptime and disaster recovery protocols</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Transparent operations and accountability tracking</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
