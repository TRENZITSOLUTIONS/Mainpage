'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Database,
    Network,
    ShieldCheck,
    BarChart,
    CheckCircle2,
    ArrowRight,
    Settings,
} from 'lucide-react'

const features = [
    {
        icon: Settings,
        title: 'Business Process Automation',
        description:
            'Automate workflows, reduce manual operations, and optimize end-to-end enterprise processes using custom ERP and CRM development tailored to your business rules.',
    },
    {
        icon: Network,
        title: 'Data & System Integration',
        description:
            'Secure, API-driven architectures that connect ERP, CRM, POS, and third-party platforms into a unified ecosystem with real-time synchronization mechanisms.',
    },
    {
        icon: ShieldCheck,
        title: 'Compliance & Security',
        description:
            'Implement role-based access control (RBAC), audit logging, and encryption standards. We ensure regulatory compliance frameworks are met to protect sensitive data.',
    },
    {
        icon: BarChart,
        title: 'Performance & Reliability',
        description:
            'Architect high-performance systems with scalable cloud infrastructure. Load testing and optimized database design ensure predictable performance under heavy usage.',
    },
]

const deliverables = [
    'Custom ERP/CRM/POS systems designed for your specific business needs',
    'Unfied enterprise data strategy and system integration architecture',
    'Automated business process workflows and reporting dashboards',
    'Secure, role-based access control and audit trails',
    'Scalable cloud infrastructure optimized for enterprise workloads',
    'Ongoing maintenance, security updates, and performance monitoring',
]

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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Hero Section */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                            <Database className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Enterprise Systems & Integration
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Orchestrate your business with precision. We design and implement
                        enterprise-grade ERP, CRM, and POS systems focused on process
                        automation, data accuracy, and long-term scalability.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        Our enterprise software solutions improve operational efficiency,
                        eliminate manual bottlenecks, and support high-availability business
                        environments. We build secure, API-driven integration architectures
                        that connect your disparate systems into a unified ecosystem,
                        enabling real-time visibility and data-driven decision making.
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
                                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
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
                        className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            What We Deliver
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            {deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
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
                                <span className="text-cyan-400 mt-1">&#10003;</span>
                                <span>Expertise in large-scale system integration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">&#10003;</span>
                                <span>
                                    Rigorous security and regulatory compliance standards
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">&#10003;</span>
                                <span>High-availability and performance-first architecture</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">&#10003;</span>
                                <span>Dedicated teams for long-term support and evolution</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center p-10 bg-gradient-to-br from-cyan-600/20 to-blue-700/20 rounded-xl border border-cyan-500/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Unified Your Enterprise?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us help you build a robust enterprise foundation that scales
                            with your growth. Get in touch to discuss your system
                            requirements.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all"
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
