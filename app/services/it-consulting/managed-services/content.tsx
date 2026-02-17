'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, HeadphonesIcon } from 'lucide-react'

export default function ManagedServicesContent() {
    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
                <Link
                    href="/services/it-consulting"
                    className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to IT Consulting
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                            <HeadphonesIcon className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Managed Services & 24/7 Support</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We provide comprehensive managed IT services that handle infrastructure management, continuous monitoring, and 24/7 incident response so your teams can focus on strategic initiatives. Our experienced support specialists ensure maximum uptime, security, and optimal performance.
                    </p>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        From cloud infrastructure optimization and proactive security to backup management and strategic capacity planning, our managed services reduce operational complexity while maintaining service quality and compliance.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Cloud & Infrastructure Management</h3>
                            <p className="text-gray-400">End-to-end management of cloud infrastructure, servers, databases, and networking. Provisioning, optimization, cost management, scaling, and lifecycle management handled by our experts.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">24/7 Monitoring & Proactive Alerting</h3>
                            <p className="text-gray-400">Continuous system monitoring with intelligent alerting detects issues before they impact your business. Automated responses to routine events reduce mean time to resolution (MTTR) and ensure consistent service availability.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Incident Response & Expert Support</h3>
                            <p className="text-gray-400">Quick, expert response to incidents with guaranteed SLAs ensures rapid resolution and minimal downtime. Root cause analysis and preventive recommendations reduce recurring issues. Escalation paths to senior engineers ensure complex problems get expertise.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Security, Compliance & Maintenance</h3>
                            <p className="text-gray-400">Proactive patch management, security updates, vulnerability assessments, and compliance monitoring keep systems secure and regulatory-compliant. Backup management, disaster recovery testing, and capacity planning ensure business continuity.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-green-900/10 to-emerald-900/10 rounded-xl border border-green-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Service Includes</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Tier 1, 2, and 3 technical support with expert escalation</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Proactive maintenance and performance tuning</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Backup management and disaster recovery readiness</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Monthly reports on system health, costs, and recommendations</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Capacity planning and strategic technology updates</span></li>
                        </ul>
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-br from-emerald-900/10 to-teal-900/10 rounded-xl border border-emerald-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Support Tiers & SLAs</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span><span><strong>Standard:</strong> Business hours support, P3 response 4h, P2 8h, P1 24h</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span><span><strong>Premium:</strong> 24/7 support, P3 response 2h, P2 4h, P1 1h</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span><span><strong>Enterprise:</strong> Dedicated team, custom SLAs, 99.99% uptime guarantee</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
