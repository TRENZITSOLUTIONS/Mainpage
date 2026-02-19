'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    HeadphonesIcon,
    Shield,
    Activity,
    Cloud,
    CheckCircle2,
    ArrowRight,
    Users,
} from 'lucide-react'

const features = [
    {
        icon: Cloud,
        title: 'Infrastructure Management',
        description:
            'End-to-end management of cloud servers, databases, and networking. We handle provisioning, optimization, and scaling so you don’t have to.',
    },
    {
        icon: Activity,
        title: '24/7 Monitoring & Alerting',
        description:
            'Continuous system monitoring with intelligent alerting to detect issues before they impact your business. Automated responses ensure maximum uptime.',
    },
    {
        icon: Shield,
        title: 'Security & Compliance',
        description:
            'Proactive patch management, security updates, and vulnerability assessments keep your systems secure and compliant with industry standards.',
    },
    {
        icon: Users,
        title: 'Expert Support Tiers',
        description:
            'Access to Tier 1, 2, and 3 technical support with guaranteed SLAs. Our quick response times ensure rapid resolution of any incidents.',
    },
]

const deliverables = [
    '24/7 proactive system monitoring and incident response',
    'Automated patch management and security update schedules',
    'Monthly system health, performance, and cost reports',
    'Disaster recovery planning and regular backup testing',
    'Cloud cost optimization and right-sizing recommendations',
    'Dedicated support portal with SLA tracking and reporting',
]

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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Hero Section */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                            <HeadphonesIcon className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Managed Services
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Stability and peace of mind for your IT operations. We provide
                        comprehensive managed services that handle infrastructure
                        management, monitoring, and 24/7 incident response.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        Our experienced support specialists ensure your systems are secure,
                        performant, and always available. From cloud-native infrastructure
                        optimization to proactive security hardening and capacity planning,
                        we reduce operational complexity so your internal teams can focus on
                        innovation. With guaranteed SLAs and expert escalation paths, we
                        are the reliable partner your business needs.
                    </p>

                    {/* Features Grid */}
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Key Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="p-6 bg-slate-900/50 rounded-xl border border-slate-800"
                            >
                                <feature.icon className="w-8 h-8 text-green-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* What We Deliver */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            What We Deliver
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            {deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Why Choose Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="p-8 bg-slate-900/50 rounded-xl border border-slate-800 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Why Choose Us
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Multi-tier support with expert escalation paths</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>
                                    Proactive maintenance to prevent issues before they occur
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Guaranteed response times and service level agreements</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Strategic technology updates and capacity planning</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center p-10 bg-gradient-to-br from-green-600/20 to-emerald-700/20 rounded-xl border border-green-500/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Need Expert IT Management?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us handle the complexity of your IT operations while you focus
                            on growth. Get in touch to discuss our managed service packages.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
