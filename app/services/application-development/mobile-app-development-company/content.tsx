'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Smartphone,
    Layers,
    Paintbrush,
    Store,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react'

const features = [
    {
        icon: Smartphone,
        title: 'Native iOS & Android',
        description:
            'High-performance native applications built with Swift/Kotlin that leverage platform-specific capabilities for the best possible user experience.',
    },
    {
        icon: Layers,
        title: 'Cross-Platform Development',
        description:
            'Cost-effective cross-platform solutions using React Native and Flutter that share a single codebase while delivering near-native performance on both iOS and Android.',
    },
    {
        icon: Paintbrush,
        title: 'Mobile UI/UX Design',
        description:
            'Intuitive, gesture-driven interfaces designed following Apple Human Interface Guidelines and Google Material Design principles for a seamless mobile experience.',
    },
    {
        icon: Store,
        title: 'App Store Optimization',
        description:
            'Strategic ASO including keyword optimization, compelling descriptions, screenshot design, and review management to maximize your app visibility and downloads.',
    },
]

const benefits = [
    'Push notification systems for real-time user engagement and retention',
    'Offline-first capabilities with intelligent data synchronization',
    'Secure biometric authentication (Face ID, Touch ID, fingerprint)',
    'In-app purchase and subscription billing integration',
    'Analytics and crash reporting for data-driven improvements',
    'Continuous delivery pipeline for rapid app store updates',
]

export default function MobileAppsDevelopmentContent() {
    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
                <Link
                    href="/services/application-development"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
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
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                            <Smartphone className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Mobile App Development - iOS & Android
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        We create powerful, intuitive mobile applications for iOS and
                        Android that engage users and drive business results. Whether you
                        need a native app for maximum performance or a cross-platform
                        solution for broader reach, we deliver polished mobile experiences.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        Our mobile development team is proficient in React Native, Flutter,
                        Swift, and Kotlin -- enabling us to choose the right technology for
                        your specific requirements. From concept and UI/UX design through
                        development, testing, and app store submission, we handle the
                        entire mobile lifecycle so you can focus on growing your business.
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
                        className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            What We Deliver
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            {benefits.map((item) => (
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
                                <span>
                                    Extensive experience shipping apps on both App Store and Google Play
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1">&#10003;</span>
                                <span>
                                    Expertise in React Native and Flutter for cost-effective cross-platform delivery
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1">&#10003;</span>
                                <span>
                                    User-first design philosophy backed by thorough usability testing
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1">&#10003;</span>
                                <span>
                                    End-to-end service from design and development to store submission and support
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center p-10 bg-gradient-to-br from-purple-600/20 to-pink-700/20 rounded-xl border border-purple-500/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Launch Your Mobile App?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            From concept to app store, we bring your mobile vision to life.
                            Get in touch to discuss your iOS or Android project.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-400 hover:to-pink-500 transition-all"
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
