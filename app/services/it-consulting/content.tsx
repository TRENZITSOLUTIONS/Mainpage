'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, HeadphonesIcon, Lightbulb, Users, Clock } from 'lucide-react'

const subServices = [
    {
        title: 'Technology Strategy & Advisory',
        desc: 'Expert guidance on technology decisions, architecture, and digital roadmap.',
        icon: Lightbulb,
        href: '/services/it-consulting/technology-strategy-consulting-services',
    },
    {
        title: 'Dedicated Development Teams',
        desc: 'Extended teams of skilled developers working exclusively on your projects.',
        icon: Users,
        href: '/services/it-consulting/dedicated-development-team-services',
    },
    {
        title: 'Managed Services',
        desc: 'Complete IT infrastructure management and support.',
        icon: HeadphonesIcon,
        href: '/services/it-consulting/it-managed-services-company',
    },
    {
        title: '24/7 Support',
        desc: 'Round-the-clock monitoring, maintenance, and incident response.',
        icon: Clock,
        href: '/services/it-consulting/24-7-it-support-services',
    },
]

export default function ITConsultingContent() {
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
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                            <HeadphonesIcon className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            IT Consulting
                        </h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
                        Strategic technology guidance to help you make the right decisions. From technology strategy to dedicated teams and managed services, we&apos;re your trusted IT partner.
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
                                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-green-500/50 transition-all duration-300 h-full">
                                            <Icon className="w-8 h-8 text-green-400 mb-4" />
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors flex items-center gap-2">
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

                    <div className="p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Why Choose Our IT Consulting?</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Proven track record across industries</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Flexible engagement models</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Transparent communication and reporting</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Cost-effective solutions tailored to your needs</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
