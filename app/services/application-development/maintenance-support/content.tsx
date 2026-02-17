'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function MaintenanceSupportContent() {
    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
                <Link
                    href="/services/application-development"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Application Development
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Ongoing Maintenance & Support</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We provide comprehensive application maintenance and support services that keep your systems running reliably, securely, and efficiently. Our proactive monitoring, rapid incident response, and regular updates ensure minimal downtime and optimal performance.
                    </p>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        From security patches and performance tuning to database optimization and infrastructure scaling, our devoted support team handles the technical details so your business can focus on growth and innovation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">24/7 Proactive Monitoring</h3>
                            <p className="text-gray-400">Continuous system monitoring with automated alerts, health checks, and log aggregation. We detect and resolve issues before they impact your users, ensuring maximum uptime and reliability.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Security & Compliance Updates</h3>
                            <p className="text-gray-400">Regular patching of dependencies and frameworks, OS security updates, vulnerability assessments, and compliance audits. We stay ahead of security threats to protect your data and users.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Performance & Optimization</h3>
                            <p className="text-gray-400">Continuous database query optimization, caching strategy refinement, infrastructure scaling, and load testing. We ensure your application performs efficiently even as traffic and data grow.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Incident Response & Resolution</h3>
                            <p className="text-gray-400">Rapid response to critical issues with guaranteed SLAs, root cause analysis, and preventive measures. Our team works quickly to minimize impact and prevent recurrence.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Support Plans</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Standard: Business hours support with regular check-ins</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Premium: 24/7 support with guaranteed response times</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Enterprise: Dedicated support team with custom SLAs</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Monthly reports: Performance analytics and recommendations</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
