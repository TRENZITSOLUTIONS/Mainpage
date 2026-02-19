'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Server,
    Globe,
    Layers,
    Link2,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react'

const features = [
    {
        icon: Server,
        title: 'AWS Services & Solutions',
        description:
            'Leverage the full breadth of Amazon Web Services -- from EC2 and Lambda to RDS, S3, and beyond. We architect, deploy, and optimize AWS environments for performance, security, and cost efficiency.',
    },
    {
        icon: Globe,
        title: 'Microsoft Azure Solutions',
        description:
            "Harness Azure's enterprise-grade capabilities including Azure DevOps, Active Directory integration, Virtual Machines, and Azure Kubernetes Service for seamless cloud operations.",
    },
    {
        icon: Layers,
        title: 'Google Cloud Platform',
        description:
            "Tap into Google Cloud's strengths in data analytics, machine learning, and container orchestration with BigQuery, GKE, Cloud Functions, and a rich ecosystem of managed services.",
    },
    {
        icon: Link2,
        title: 'Cross-Cloud Integration',
        description:
            'Unify workloads across multiple cloud providers with consistent networking, identity management, and data synchronization strategies that prevent vendor lock-in.',
    },
]

const deliverables = [
    'Multi-cloud architecture strategy aligned to your business requirements',
    'Platform-specific optimization for AWS, Azure, and Google Cloud',
    'Unified monitoring and management dashboards across all providers',
    'Cross-cloud networking, security policies, and identity federation',
    'Cost analysis and optimization across all cloud environments',
    'Vendor-agnostic infrastructure-as-code templates for portability',
]

export default function MultiCloudSupportContent() {
    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
                <Link
                    href="/services/cloud-solutions"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
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
                            <Server className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Multi-Cloud Support - AWS, Azure & Google Cloud
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        No single cloud provider excels at everything. Our multi-cloud
                        approach lets you leverage the unique strengths of AWS, Azure, and
                        Google Cloud while maintaining a unified, manageable infrastructure
                        that avoids vendor lock-in.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        With certified expertise across all three major platforms, we help
                        you select the right services for each workload, design
                        cross-cloud architectures, and implement consistent governance and
                        security policies. Whether you need AWS for compute, Azure for
                        enterprise integration, or Google Cloud for analytics, we bring it
                        all together into a cohesive strategy.
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
                                    Certified professionals across AWS, Azure, and Google Cloud
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>
                                    Vendor-agnostic recommendations focused on your business
                                    needs, not partnerships
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>
                                    Unified management and observability across all cloud
                                    environments
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">&#10003;</span>
                                <span>
                                    Proven cost optimization strategies that reduce cloud spend
                                    without sacrificing performance
                                </span>
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
                            Ready to Optimize Your Cloud Strategy?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us help you harness the best of every cloud platform. Get in
                            touch to explore a multi-cloud approach tailored to your
                            organization.
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
