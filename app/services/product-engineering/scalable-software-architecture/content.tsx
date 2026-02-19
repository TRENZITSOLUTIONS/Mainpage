'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Shield,
    Server,
    Activity,
    Cloud,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
} from 'lucide-react'

const features = [
    {
        icon: Cloud,
        title: 'Cloud-Native Architecture',
        description:
            'We implement microservices, containerization, and serverless architectures to enable elastic scalability. Our solutions are optimized for AWS, Azure, and GCP.',
    },
    {
        icon: Activity,
        title: 'Observability & Monitoring',
        description:
            'Full-stack observability using centralized logging, distributed tracing, and real-time metrics. Proactive issue detection and improved reliability under heavy workloads.',
    },
    {
        icon: TrendingUp,
        title: 'Infrastructure Cost Optimization',
        description:
            'Right-sized cloud infrastructure with autoscaling policies and performance tuning. Our approach ensures maximum resource utilization without compromising stability.',
    },
    {
        icon: Server,
        title: 'Disaster Recovery & BC',
        description:
            'Resilient systems with multi-region deployment, automated backups, and failover mechanisms. Minimal downtime and rapid restoration during infrastructure failures.',
    },
]

const deliverables = [
    'Fully automated CI/CD pipeline and DevOps environment setup',
    'Scalable, cloud-native architecture design and implementation',
    'Comprehensive load testing and chaos engineering reports',
    'Real-time monitoring dashboards and proactive alerting systems',
    'Disaster recovery plans and automated failover configurations',
    'Infrastructure-as-Code (IaC) templates for repeatable deployments',
]

export default function ScalableArchitecturesContent() {
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
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Scalable Cloud Architectures
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Build for tomorrow&apos;s scale today. We design scalable cloud
                        architectures that support rapid growth, high traffic, and
                        mission-critical operations.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        Our infrastructure solutions focus on elasticity, uptime, cost
                        optimization, and long-term maintainability. From microservices to
                        multi-region deployment, we build systems that scale efficiently
                        without compromising performance or security. We establish
                        full-stack observability and rigorous testing to ensure your
                        platform remains stable under any load.
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
                                <span>Elastic architectures designed for extreme scale</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">&#10003;</span>
                                <span>Expertise in major cloud platforms (AWS, Azure, GCP)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">&#10003;</span>
                                <span>
                                    Focus on Infrastructure-as-Code for maximum repeatability
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">&#10003;</span>
                                <span>Proactive performance tuning and chaos engineering</span>
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
                            Ready to Build for Scale?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us help you design a foundation that can handle any amount of
                            growth. Get in touch to discuss your architecture needs.
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
