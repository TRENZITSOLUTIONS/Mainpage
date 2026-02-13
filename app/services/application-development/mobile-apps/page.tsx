'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Code } from 'lucide-react'

export default function MobileAppsDevelopmentPage() {
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
            <h1 className="text-4xl md:text-5xl font-black text-white">Mobile Apps Development</h1>
          </div>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We are a specialized mobile application development company creating high-performance iOS and Android apps for startups, enterprises, and mid-market companies. Our expertise spans native development with Swift and Kotlin, cross-platform solutions with React Native and Flutter, and end-to-end mobile strategies.
          </p>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            From App Store optimization to offline-first architecture and real-time synchronization, we deliver mobile experiences that drive engagement, retention, and business growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Native iOS & Android Development</h3>
              <p className="text-gray-400">We build production-grade native apps with Swift and Kotlin, providing pixel-perfect experiences, full platform API access, and optimal performance. Native apps enable advanced hardware integration and superior user experience compared to cross-platform solutions.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Cross-Platform Frameworks</h3>
              <p className="text-gray-400">React Native and Flutter development for code sharing between iOS and Android while maintaining native feel and performance. Ideal for rapid deployment and maintaining a single codebase across platforms with 70-90% code reusability.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">App Store & Play Store Optimization</h3>
              <p className="text-gray-400">Complete App Store Optimization (ASO) strategy including metadata optimization, A/B testing, user reviews management, and ongoing submission support. We maximize visibility within app stores and drive organic user acquisition.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Offline-First & Real-Time Sync</h3>
              <p className="text-gray-400">Robust offline capabilities with intelligent synchronization ensure your app works seamlessly even without connectivity. Real-time data sync across devices provides a consistent user experience with no data loss.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-xl border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Capabilities</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Push notifications and deep linking</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Real-time location tracking and maps integration</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Camera, biometrics, and hardware sensor integration</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Analytics, crash reporting, and performance monitoring</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
