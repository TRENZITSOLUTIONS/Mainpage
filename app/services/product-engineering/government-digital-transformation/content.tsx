'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Building2,
    Shield,
    Database,
    Users,
    CheckCircle2,
    ArrowRight,
    Search,
} from 'lucide-react'

const features = [
    {
        icon: Building2,
        title: 'E-Governance Platforms',
        description:
            'End-to-end digital service delivery systems for permits, licensing, and citizen engagement. Designed to improve accessibility and transparency.',
    },
    {
        icon: Database,
        title: 'Public Data Systems',
        description:
            'Open data portals and centralized reporting platforms that enable data-driven policy decisions and administrative accountability.',
    },
    {
        icon: Shield,
        title: 'Compliance & Security',
        description:
            'Rigorous adherence to government IT standards, encryption protocols, and role-based access controls for citizen data protection.',
    },
    {
        icon: Users,
        title: 'Citizen-Centric Portals',
        description:
            'Inclusive, accessible interfaces designed for diverse user groups, ensuring equitable access to public services across all demographics.',
    },
]

const deliverables = [
    'Mission-critical e-governance service platforms',
    'Citizen service portals with integrated tracking',
    'Administrative dashboards for real-time reporting',
    'High-availability infrastructure with disaster recovery',
    'Comprehensive audit trails and compliance reports',
    'Training and capacity building for government staff',
]

export default function GovernmentProjectsContent() {
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
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Government & Public Sector Solutions
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Modernizing public service through elite digital infrastructure. We
                        partner with government agencies to build secure, transparent, and
                        highly efficient e-governance platforms.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        Our public sector solutions are built on a foundation of security,
                        interoperability, and accessibility. We understand the unique
                        challenges of government digital transformation -- from managing
                        massive datasets to ensuring 24/7 service availability for millions
                        of citizens. By combining agile development with rigorous compliance
                        frameworks, we deliver systems that reduce bureaucratic friction and
                        strengthen public trust in digital governance.
                    </p>

                    {/* Features Grid */}
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Core Service Areas
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
                                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
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
                        className="p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl border border-blue-500/30 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Project Deliverables
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            {deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>Deep expertise in government IT standards and protocols</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>
                                    Proven track record of delivering high-impact public systems
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>Security-first, resident-first design philosophy</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>Scalable architecture designed for mission-critical use</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center p-10 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 rounded-xl border border-blue-500/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Modernizing Your Digital Governance?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us partner with you to build the digital infrastructure of the
                            future. Get in touch for a consultation on public sector digital
                            transformation.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-400 hover:to-indigo-400 transition-all"
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
