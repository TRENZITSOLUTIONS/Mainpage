'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Zap, Bot, BarChart3, RefreshCw } from 'lucide-react'

const subServices = [
    {
        title: 'Process Automation',
        desc: 'Streamline workflows and eliminate manual processes with intelligent automation.',
        icon: RefreshCw,
        href: '/services/digital-transformation/business-process-automation-services',
    },
    {
        title: 'Data & Analytics Solutions',
        desc: 'Turn data into actionable insights with advanced analytics and visualization.',
        icon: BarChart3,
        href: '/services/digital-transformation/data-analytics-consulting-services',
    },
    {
        title: 'AI-Driven Systems',
        desc: 'Leverage machine learning and AI to enhance decision-making and operations.',
        icon: Bot,
        href: '/services/digital-transformation/ai-powered-software-development',
    },
    {
        title: 'Modernization',
        desc: 'Upgrade legacy systems to modern, scalable architectures.',
        icon: Zap,
        href: '/services/digital-transformation/legacy-application-modernization-services',
    },
]

export default function DigitalTransformationContent() {
    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
                <Link
                    href="/services"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Services
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Digital Transformation
                        </h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
                        Transform your business with intelligent automation, data-driven insights, and AI-powered systems. We modernize legacy systems and unlock new capabilities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {subServices.map((service, i) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <Link href={service.href} className="block group">
                                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 h-full">
                                            <Icon className="w-8 h-8 text-orange-400 mb-4" />
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors flex items-center gap-2">
                                                {service.title}
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </h3>
                                            <p className="text-gray-400">{service.desc}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Transformation Benefits</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>Increased operational efficiency</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>Real-time data-driven decisions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>Reduced costs and improved ROI</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>Competitive advantage through innovation</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
