'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    ShoppingCart,
    BarChart3,
    Users,
    Package,
    CreditCard,
    MapPin,
    CheckCircle2,
    ArrowRight,
    Zap,
} from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: 'Real-time Sales Processing',
        description:
            'Fast, reliable transaction processing with instant receipt generation. Handle high-volume sales periods with ease and zero lag.',
    },
    {
        icon: Package,
        title: 'Inventory Management',
        description:
            'Track stock levels across multiple locations, manage suppliers, and set up automated reordering to never run out of bestsellers.',
    },
    {
        icon: Users,
        title: 'Customer Management',
        description:
            'Build rich customer profiles, track purchase history, and manage unified loyalty programs to keep your customers coming back.',
    },
    {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description:
            'Comprehensive real-time reports and visual insights into sales trends, employee performance, and inventory turnover.',
    },
]

const deliverables = [
    'Fully integrated cloud-based Point of Sale platform',
    'Intuitive touch-optimized interface for faster checkout',
    'Unified inventory and stock movement tracking',
    'Multi-store and multi-warehouse management dashboard',
    'Customized reporting and automated daily sales summaries',
    'Secure payment gateway integration (Cards, UPI, Wallets)',
]

export default function TrenzPOSContent() {
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
                    {/* Hero Section */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                            <ShoppingCart className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Trenz POS
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        The future of retail operations. Trenz POS is a comprehensive,
                        cloud-native Point of Sale system designed to streamline sales,
                        automate inventory, and provide deep business insights.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        Designed for modern retail environments, Trenz POS eliminates
                        operational friction. Whether you run a single boutique or a large
                        retail chain, our platform provides the tools you need to manage
                        transactions, track stock in real-time, and build lasting
                        relationships with your customers through integrated loyalty and
                        CRM features. Built on a secure, scalable architecture, it ensures
                        your business stays open and profitable 24/7.
                    </p>

                    {/* Features Grid */}
                    <h2 className="text-2xl font-bold text-white mb-6">
                        System Capabilities
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

                    {/* What is Included */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Platform Deliverables
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

                    {/* Why Trenz POS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="p-8 bg-slate-900/50 rounded-xl border border-slate-800 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Why Choose Trenz POS
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Fast offline mode: Process sales even without internet</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Mobile-ready: Manage your business from your smartphone</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>Secure and PCI-compliant transaction processing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                <span>24/7 dedicated support and automated updates</span>
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
                            Ready to Transform Your Retail Operations?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Join hundreds of businesses that use Trenz POS to drive growth and
                            efficiency. Get in touch for a live demo today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all"
                            >
                                Get a Demo
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
