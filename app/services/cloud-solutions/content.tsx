'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Cloud, Server, Shield, DollarSign } from 'lucide-react'

const subServices = [
    {
        title: 'Cloud Architecture & Migration',
        desc: 'Seamless migration strategies and scalable cloud architectures.',
        icon: Cloud,
        href: '/services/cloud-solutions/cloud-architecture-design-migration-services',
    },
    {
        title: 'Multi-Cloud Support',
        desc: 'AWS, Azure, and Google Cloud expertise for optimal platform selection.',
        icon: Server,
        href: '/services/cloud-solutions/multi-cloud-management-services',
    },
    {
        title: 'Security & Optimization',
        desc: 'Enterprise-grade security and performance optimization.',
        icon: Shield,
        href: '/services/cloud-solutions/cloud-security-optimization-services',
    },
    {
        title: 'Server Provisioning & Management',
        desc: 'Server provisioning, management, and maintenance with cost optimization.',
        icon: DollarSign,
        href: '/services/cloud-solutions/cloud-server-provisioning-management-services',
    },
]

export default function CloudSolutionsContent() {
    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
                <Link
                    href="/services"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Services
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                            <Cloud className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Cloud Solutions
                        </h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
                        Migrate to the cloud with confidence. We design, deploy, and manage cloud infrastructure on AWS, Azure, and Google Cloud with a focus on security, optimization, and cost control.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {subServices.map((service, i) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <Link href={service.href} className="block group">
                                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full">
                                            <Icon className="w-8 h-8 text-blue-400 mb-4" />
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                                {service.title}
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </h3>
                                            <p className="text-gray-400">{service.desc}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Why Choose Our Cloud Solutions?</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>Zero-downtime migration strategies</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>Automated scaling and load balancing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>24/7 monitoring and incident response</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>Cost-effective resource management</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
