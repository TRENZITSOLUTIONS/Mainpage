'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Server } from 'lucide-react'

export default function ServerProvisioningClient() {
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
                        <h1 className="text-4xl md:text-5xl font-black text-white">Server Provisioning & Management</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We provision, configure, and manage cloud infrastructure for optimal availability, security, and cost efficiency. Our Infrastructure-as-Code approach ensures reproducible, version-controlled deployments while container orchestration enables scalable, resilient applications.
                    </p>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        From initial setup to daily operations, monitoring, patch management, and disaster recovery, our team handles infrastructure complexity so you can focus on application development and business growth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Infrastructure as Code</h3>
                            <p className="text-gray-400">We manage infrastructure using Terraform and CloudFormation for reproducible, version-controlled deployments. IaC enables consistent environments, faster provisioning, disaster recovery, and infrastructure auditing.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Container Orchestration & Kubernetes</h3>
                            <p className="text-gray-400">We design and manage Kubernetes clusters (EKS, AKS, GKE) and ECS for scalable, resilient container deployments. Automated scaling, self-healing, and declarative configuration management reduce operational overhead.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Load Balancing & Auto-Scaling</h3>
                            <p className="text-gray-400">We implement intelligent load balancing, auto-scaling groups, traffic management, and DNS failover. Applications automatically scale based on demand while distributing traffic across healthy instances for reliability.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Backup, Recovery & Disaster Recovery</h3>
                            <p className="text-gray-400">We implement automated snapshots, cross-region replication, backup retention policies, and tested disaster recovery procedures. RTO and RPO guarantees ensure business continuity during failures.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 rounded-xl border border-blue-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Management Services Include</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>24/7 monitoring and alerting</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Patch management and OS updates</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Performance tuning and capacity planning</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Incident response and root cause analysis</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
