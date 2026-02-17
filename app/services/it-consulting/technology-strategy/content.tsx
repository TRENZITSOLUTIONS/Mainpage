'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Lightbulb } from 'lucide-react'

export default function TechnologyStrategyContent() {
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

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                            <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Technology Strategy & Advisory</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We provide strategic technology consulting that helps organizations align IT investments with business goals, navigate digital transformation, and make informed decisions about architecture, tools, and cloud platforms.
                    </p>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        From comprehensive digital transformation assessments to technology stack planning, process optimization, and change management, we guide your organization through complex technology decisions with proven frameworks and industry best practices.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Digital Transformation Assessment</h3>
                            <p className="text-gray-400">We evaluate your current technology state, business objectives, and competitive landscape. Our assessments identify modernization opportunities, transformation risks, and develop detailed roadmaps with clear phases, timelines, and investment requirements.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Technology Stack & Architecture Planning</h3>
                            <p className="text-gray-400">We advise on optimal technology stacks, cloud platforms, and architectural patterns that balance innovation, scalability, maintainability, and total cost of ownership. Recommendations account for team skills, vendor lock-in, and future flexibility.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Development & Operations Optimization</h3>
                            <p className="text-gray-400">We review development workflows, deployment pipelines, monitoring practices, and operational procedures. Optimization recommendations improve time-to-market, reliability, observability, and reduce operational overhead through modern DevOps practices.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Organizational Change Management</h3>
                            <p className="text-gray-400">We guide teams through technology transitions by building capability, developing training programs, and ensuring adoption of new practices. Change management expertise minimizes disruption and accelerates realization of benefits from digital initiatives.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-green-900/10 to-emerald-900/10 rounded-xl border border-green-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Advisory Services</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Executive workshops and strategic planning sessions</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Technology risk assessment and mitigation planning</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Vendor evaluation and selection guidance</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Build vs. buy vs. partner recommendations</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
