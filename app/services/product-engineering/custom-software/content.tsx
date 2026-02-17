'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Code } from 'lucide-react'

export default function CustomSoftwareContent() {
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                            <Code className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Custom Software & SaaS</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We are a leading custom software development company specializing in scalable SaaS application development, cloud-based platforms, and enterprise software solutions.
                    </p>
                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        From product discovery to deployment and long-term support, we design and build secure, high-performance digital products tailored to complex business workflows.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Software Discovery & Product Strategy</h3>
                            <p className="text-gray-400">Successful software starts with clarity. Our product discovery phase ensures your solution is technically feasible, commercially viable, and aligned with business goals.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Software Architecture & Security Engineering</h3>
                            <p className="text-gray-400">We design cloud-native, microservices-based architectures with DevOps, CI/CD, and security-first development practices.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">SaaS Platform Development</h3>
                            <p className="text-gray-400">We build multi-tenant SaaS platforms with subscription billing, role-based access control, onboarding automation, and analytics dashboards.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">API Integration & Scalable System Development</h3>
                            <p className="text-gray-400">Modern software must integrate seamlessly. We develop API-driven systems with secure third-party integrations and horizontal scaling strategies.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Why Choose Our Custom Software Development Services?</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">1.</span>
                                <span>Scalable cloud architecture</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">2.</span>
                                <span>Secure and compliance-ready solutions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">3.</span>
                                <span>Dedicated development teams</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">4.</span>
                                <span>Long-term technical support</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
