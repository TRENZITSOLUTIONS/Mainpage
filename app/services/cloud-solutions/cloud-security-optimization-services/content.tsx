'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Shield,
    Lock,
    Zap,
    DollarSign,
    ClipboardCheck,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react'

const features = [
    {
        icon: Lock,
        title: 'Enterprise Cloud Security',
        description:
            'Strategies including IAM policies, VPC configuration, and encryption. Compliance frameworks (SOC2, PCI-DSS, HIPAA) ensure regulatory requirements are met.',
    },
    {
        icon: Zap,
        title: 'Performance Optimization',
        description:
            'Optimize speed and reliability through load balancing, caching, and database query optimization. Monitoring ensures consistent application performance.',
    },
    {
        icon: DollarSign,
        title: 'Cost Optimization & FinOps',
        description:
            'Reduce cloud spending through Reserved Instances, Savings Plans, and spot pricing. Continuous monitoring and right-sizing deliver consistent savings.',
    },
    {
        icon: ClipboardCheck,
        title: 'Compliance & Audit',
        description:
            'Continuous monitoring, audit logging, and automated security scanning. Automated controls enforce security and compliance policies continuously.',
    },
]

const deliverables = [
    'Zero-trust security architecture and implementation',
    'Cloud cost reduction strategy with FinOps methodology',
    'Infrastructure performance tuning and optimization report',
    'Compliance-ready infrastructure and audit documentation',
    'Vulnerability assessment and remediation roadmap',
    'Automated security monitoring and alerting setup',
]

export default function SecurityOptimizationContent() {
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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Hero Section */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Security, Optimization & Cost Control
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Secure your cloud and optimize your spend. We provide comprehensive
                        cloud security, performance, and cost optimization services that
                        protect your infrastructure while maximizing efficiency and ROI.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        Our experts implement industry best practices, security frameworks,
                        and cost governance to ensure your cloud investment delivers
                        maximum value. From zero-trust architectures to eliminating cloud
                        waste, we help you achieve a secure, performant, and cost-effective
                        cloud environment.
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
                        className="p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            What We Deliver
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
                                <span>
                                    Typical 30-40% reduction in cloud costs via FinOps
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>
                                    Deep expertise in multi-platform security compliance
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>Continuous monitoring and automated auditing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>Strategic approach to zero-trust architecture</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center p-10 bg-gradient-to-br from-blue-600/20 to-cyan-700/20 rounded-xl border border-blue-500/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Is Your Cloud Optimized?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us review your security and spending to find optimization
                            opportunities. Get in touch for a cloud audit.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all"
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
