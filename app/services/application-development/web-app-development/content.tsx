'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Code } from 'lucide-react'

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

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                            <Code className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Web App Development</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We are a specialized web application development company building modern, scalable, and high-performance web solutions for startups and enterprises. Our expertise spans React, Next.js, Vue, and modern web frameworks.
                    </p>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        From concept to launch, we develop responsive web applications with exceptional user experience, SEO optimization, and production-ready code architecture.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">React & Next.js Development</h3>
                            <p className="text-gray-400">We build component-driven web applications with React and Next.js, featuring server-side rendering (SSR), static site generation (SSG), and API routes for full-stack development in a single framework.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Responsive & Accessible Design</h3>
                            <p className="text-gray-400">Mobile-first, WCAG-compliant interfaces that deliver seamless user experience across all devices. We optimize for accessibility, ensuring your web app reaches all users effectively.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">TypeScript & Quality Assurance</h3>
                            <p className="text-gray-400">Type-safe development with comprehensive testing coverage including unit tests, integration tests, and end-to-end tests for maximum reliability and reduced bugs.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Performance & SEO Optimization</h3>
                            <p className="text-gray-400">We optimize for Core Web Vitals, implement lazy loading, code splitting, and caching strategies. Our SEO-friendly architecture ensures better search engine rankings and organic visibility.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-xl border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Frontend: React, Next.js, Vue.js, TailwindCSS, Framer Motion</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>State management: Redux, Zustand, Context API</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Testing: Jest, React Testing Library, Cypress</span></li>
                            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Build tools: Vite, Webpack, TypeScript</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
