'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Cloud, Zap, HeadphonesIcon, ShoppingCart } from 'lucide-react'

const services = [
    {
        slug: 'product-engineering',
        title: 'Product Engineering',
        description: 'Custom software & SaaS products, Enterprise systems (ERP, CRM, POS), Scalable, secure architectures',
        icon: Code,
        gradient: 'from-cyan-400 to-blue-600',
        features: [
            'Custom software & SaaS products',
            'Enterprise systems (ERP, CRM, POS)',
            'Scalable, secure architectures',
            'Government Projects (e-governance, public systems & services and maintenance)'
        ]
    },
    {
        slug: 'application-development',
        title: 'Application Development',
        description: 'Web app development, Mobile apps development, API development & integrations, Ongoing maintenance & support',
        icon: Smartphone,
        gradient: 'from-purple-400 to-pink-600',
        features: [
            'Web app development',
            'Mobile apps development',
            'API development & integrations',
            'Ongoing maintenance & support'
        ]
    },
    {
        slug: 'cloud-solutions',
        title: 'Cloud Solutions',
        description: 'Cloud architecture & migration, AWS, Azure & Google Cloud, Security, optimization & cost control',
        icon: Cloud,
        gradient: 'from-blue-400 to-cyan-400',
        features: [
            'Cloud architecture & migration',
            'AWS, Azure & Google Cloud',
            'Security, optimization & cost control',
            'Server provisioning & management and maintenance'
        ]
    },
    {
        slug: 'digital-transformation',
        title: 'Digital Transformation',
        description: 'Process automation, Data & analytics solutions, AI-driven systems & modernization',
        icon: Zap,
        gradient: 'from-orange-400 to-red-600',
        features: [
            'Process automation',
            'Data & analytics solutions',
            'AI-driven systems & modernization'
        ]
    },
    {
        slug: 'it-consulting',
        title: 'IT Consulting',
        description: 'Technology strategy & advisory, Dedicated development teams, Managed services & 24/7 support',
        icon: HeadphonesIcon,
        gradient: 'from-green-400 to-emerald-600',
        features: [
            'Technology strategy & advisory',
            'Dedicated development teams',
            'Managed services & 24/7 support'
        ]
    },
    {
        slug: 'trenz-pos',
        title: 'Trenz POS',
        description: 'Custom point-of-sale solutions for retail businesses with integrated inventory management and reporting.',
        icon: ShoppingCart,
        gradient: 'from-green-400 to-emerald-600',
        features: [
            'Retail billing system',
            'Inventory management',
            'Sales analytics & reporting',
            'Multi-store support'
        ]
    }
]

export default function ServicesContent() {
    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-32 px-4 md:px-10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/20 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.span
                            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6"
                        >
                            Our Services
                        </motion.span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ARSENAL</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                            We specialize in high-impact digital infrastructure. Scalable, secure, and built to outperform your competition.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 md:px-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <span className="text-cyan-400 mt-1">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group-hover:translate-x-2 transition-transform"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
