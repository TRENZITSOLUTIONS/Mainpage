'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Code,
    Layout,
    Shield,
    Zap,
    CheckCircle2,
    ArrowRight,
    Search,
} from 'lucide-react'

const features = [
    {
        icon: Layout,
        title: 'React & Next.js Development',
        description:
            'We build component-driven web applications with React and Next.js, featuring SSR, SSG, and optimized performance out of the box.',
    },
    {
        icon: Search,
        title: 'Performance & SEO',
        description:
            'Optimized for Core Web Vitals, with SEO-friendly architecture that ensures high rankings and organic visibility for your brand.',
    },
    {
        icon: Shield,
        title: 'TypeScript & Testing',
        description:
            'Type-safe development with comprehensive coverage, including unit, integration, and E2E tests for maximum production reliability.',
    },
    {
        icon: Zap,
        title: 'Responsive Design',
        description:
            'Mobile-first, accessible, and high-performance interfaces that deliver a seamless experience across all devices and screen sizes.',
    },
]

const deliverables = [
    'Production-ready React/Next.js web application',
    'Responsive UI/UX design following modern web standards',
    'Comprehensive documentation and API integration guides',
    'SEO-optimized architecture and metadata management',
    'Automated testing suites and deployment pipelines',
    'Post-launch performance monitoring and maintenance support',
]

export default function WebAppDevelopmentContent() {
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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Hero Section */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 rounded-xl flex items-center justify-center">
                            <Code className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Web App Development
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Modern web solutions for modern businesses. We specialize in building
                        high-performance, scalable web applications using React, Next.js, and
                        expert cloud-native architectures.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        From startups to enterprises, we deliver web applications that are as
                        powerful as they are beautiful. Our team combines deep technical
                        expertise with a product-driven mindset to ensure every line of code
                        drives business value. We focus on speed, security, and exceptional
                        user experiences that keep your customers engaged and your business
                        growing.
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
                                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
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
                        className="p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/30 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            What We Deliver
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            {deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
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
                                <span className="text-purple-400 mt-1">&#10003;</span>
                                <span>Expertise in modern web stacks (Next.js, React, Node)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1">&#10003;</span>
                                <span>Mobile-first and highly responsive design philosophy</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1">&#10003;</span>
                                <span>Rigorous testing and quality assurance practices</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1">&#10003;</span>
                                <span>Scalable architecture designed for future growth</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center p-10 bg-gradient-to-br from-purple-600/20 to-blue-700/20 rounded-xl border border-purple-500/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Launch Your Web Application?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us help you build a web experience that delights users and
                            scales with your business. Get in touch for a project consultation.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-400 hover:to-blue-400 transition-all"
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
