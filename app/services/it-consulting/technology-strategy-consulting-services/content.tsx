'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Compass,
    Map,
    Layers,
    CheckCircle2,
    ArrowRight,
    BarChart3,
} from 'lucide-react'

const features = [
    {
        icon: Compass,
        title: 'Technology Assessment',
        description:
            'We conduct in-depth evaluations of your current technology landscape, identifying strengths, gaps, and opportunities for improvement. Our assessments provide a clear picture of where you stand and where you need to go.',
    },
    {
        icon: Map,
        title: 'Digital Roadmap Planning',
        description:
            'We create actionable, phased roadmaps that align technology investments with your business goals. Every initiative is prioritized by impact, feasibility, and strategic value to ensure measurable progress.',
    },
    {
        icon: Layers,
        title: 'Architecture Advisory',
        description:
            'Our architects design scalable, resilient system architectures that support long-term growth. We evaluate microservices, event-driven, and serverless patterns to recommend the best fit for your needs.',
    },
    {
        icon: BarChart3,
        title: 'IT Governance & Risk Assessment',
        description:
            'We establish governance frameworks and risk mitigation strategies that protect your technology investments. From compliance alignment to security audits, we ensure your IT operations meet industry standards.',
    },
]

const deliverables = [
    'Comprehensive technology landscape assessment reports',
    'Multi-year digital transformation roadmaps with milestone tracking',
    'Architecture blueprints and technology stack recommendations',
    'IT governance frameworks aligned with industry best practices',
    'Risk assessment matrices with mitigation strategies',
    'Vendor evaluation and technology selection guidance',
]

export default function TechnologyStrategyAdvisoryContent() {
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
                            <Compass className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Technology Strategy & Advisory Services
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Making the right technology decisions is critical to staying
                        competitive in a rapidly evolving digital landscape. Our Technology
                        Strategy & Advisory services provide expert guidance on architecture,
                        technology selection, and digital roadmap planning to ensure every
                        investment drives real business value.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        We work closely with your leadership and technical teams to assess
                        your current capabilities, identify gaps, and build a clear path
                        forward. From evaluating emerging technologies and selecting the
                        right stack to establishing governance frameworks and managing risk,
                        our advisors bring the strategic insight needed to transform your IT
                        from a cost center into a competitive advantage.
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
                                <span>
                                    Seasoned technology advisors with cross-industry experience in
                                    digital transformation
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>
                                    Vendor-agnostic recommendations focused solely on what is best
                                    for your business
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>
                                    Actionable roadmaps with clear milestones, not theoretical
                                    reports that gather dust
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>
                                    Ongoing advisory support to adapt strategies as your business
                                    and the market evolve
                                </span>
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
                            Ready to Define Your Technology Strategy?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let our experts help you chart a clear technology path that aligns
                            with your business vision. Get in touch to discuss your strategic
                            goals and technology challenges.
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
