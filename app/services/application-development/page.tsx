'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Smartphone, Globe, Code, Wrench } from 'lucide-react'

export default function ApplicationDevelopmentPage() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Application Development
            </h1>
          </div>

          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            From web to mobile, we build applications that deliver exceptional user experiences. Our full-stack development covers everything from frontend interfaces to backend APIs and integrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link
              href="/services/application-development/web-app-development"
              className="block p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-400 transition-colors"
            >
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Web App Development</h3>
              <p className="text-gray-400">Responsive, fast, and scalable web applications built with modern frameworks.</p>
            </Link>

            <Link
              href="/services/application-development/mobile-apps"
              className="block p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-400 transition-colors"
            >
              <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Mobile Apps Development</h3>
              <p className="text-gray-400">Native iOS, Android, and cross-platform mobile solutions.</p>
            </Link>

            <Link
              href="/services/application-development/api-development"
              className="block p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-400 transition-colors"
            >
              <Code className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">API Development & Integrations</h3>
              <p className="text-gray-400">RESTful APIs, GraphQL, and seamless third-party integrations.</p>
            </Link>

            <Link
              href="/services/application-development/maintenance-support"
              className="block p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-400 transition-colors"
            >
              <Wrench className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Ongoing Maintenance & Support</h3>
              <p className="text-gray-400">Continuous updates, bug fixes, and feature enhancements.</p>
            </Link>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Our Development Process</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>User-centric design and development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Cross-platform compatibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Performance optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">✓</span>
                <span>24/7 monitoring and support</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

