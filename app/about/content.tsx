'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Shield, Users, Lightbulb, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const values = [
    {
        icon: Shield,
        title: 'Reliability',
        description: 'We deliver on our promises. Every project is built with production-grade standards from day one.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We stay ahead of the curve, adopting cutting-edge technologies to give our clients a competitive edge.',
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We don\'t just build software — we become an extension of your team, invested in your success.',
    },
    {
        icon: Clock,
        title: 'Commitment',
        description: '24/7 support, dedicated teams, and a relentless focus on delivering results that matter.',
    },
]

export default function AboutContent() {
    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-32 px-4 md:px-10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/15 rounded-full blur-[120px]"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.span
                            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6"
                        >
                            About Us
                        </motion.span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                            THE TEAM BEHIND <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">THE INNOVATION</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                            We are a team of engineers, designers, and strategists building the digital infrastructure that powers modern businesses.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 px-4 md:px-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                Company <span className="text-cyan-400">Overview</span>
                            </h2>
                            <div className="h-1 w-20 bg-cyan-500 mb-8" />
                            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                                Trenz Technologies is a full-service technology company specializing in product engineering, application development, cloud solutions, digital transformation, and IT consulting.
                            </p>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                From startups to enterprises and government bodies, we partner with organizations to build scalable, secure, and high-performance digital solutions that drive real business outcomes.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { number: '50+', label: 'Projects Delivered' },
                                { number: '5+', label: 'Years Experience' },
                                { number: '24/7', label: 'Support Available' },
                                { number: '100%', label: 'Client Satisfaction' },
                            ].map((stat, i) => (
                                <div key={i} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 text-center">
                                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-neutral-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4 md:px-10 border-t border-white/10">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative p-10 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-neutral-400 text-lg leading-relaxed">
                                    To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We are committed to delivering excellence in every line of code, every architecture decision, and every client interaction.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group relative p-10 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-neutral-400 text-lg leading-relaxed">
                                    To become a globally recognized technology partner known for transforming ideas into scalable digital products. We envision a future where every business, regardless of size, has access to world-class technology infrastructure.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 md:px-10 border-t border-white/10">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CHOOSE US</span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                            What sets us apart from the rest.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group flex gap-6 p-8 bg-slate-900/30 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {value.title}
                                        </h3>
                                        <p className="text-neutral-400 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 md:px-10 border-t border-white/10">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Ready to work with us?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-10">
                            Let&apos;s discuss how we can bring your vision to life.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
