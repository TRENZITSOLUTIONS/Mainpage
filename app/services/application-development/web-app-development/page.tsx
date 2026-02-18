'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Globe,
  Layout,
  Server,
  Smartphone,
  Gauge,
  Search,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description:
      'Pixel-perfect, interactive user interfaces built with React, Next.js, Angular, or Vue -- optimized for performance and accessibility across all devices.',
  },
  {
    icon: Server,
    title: 'Backend Systems',
    description:
      'Robust server-side architectures using Node.js, Python, or .NET with secure authentication, database management, and business logic layers.',
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description:
      'PWAs that combine the reach of the web with the experience of native apps -- offline support, push notifications, and home-screen installation.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description:
      'Lightning-fast load times through code splitting, lazy loading, caching strategies, and CDN integration for a smooth user experience.',
  },
]

const benefits = [
  'Responsive design that works flawlessly on desktop, tablet, and mobile',
  'SEO-friendly architecture with server-side rendering and meta optimization',
  'Scalable infrastructure ready to handle growing user demands',
  'Clean, maintainable codebase with comprehensive testing coverage',
  'Continuous integration and deployment pipelines for rapid iteration',
  'Cross-browser compatibility ensuring consistent experiences everywhere',
]

export default function WebAppDevelopmentPage() {
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
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Web Application Development
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            We build responsive, fast, and scalable web applications using
            modern frameworks like React, Next.js, Angular, and Vue. Our
            full-stack approach ensures every layer of your application --
            from the user interface to the database -- is engineered for
            performance and reliability.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Whether you need a single-page application, a complex enterprise
            portal, or a progressive web app that works offline, our team
            delivers production-ready solutions built on industry best
            practices. We focus on SEO-friendly architecture, clean code, and
            scalable design so your web application grows with your business.
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
                  Deep expertise in React, Next.js, Angular, and Vue ecosystems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  Agile development with transparent progress and iterative delivery
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  Pixel-perfect implementations that match your design vision
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  End-to-end ownership from architecture to deployment and monitoring
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
              Ready to Build Your Web Application?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Let us transform your ideas into a powerful, high-performance web
              application. Get in touch to discuss your project requirements.
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
