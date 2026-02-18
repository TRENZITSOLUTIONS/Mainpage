'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Wrench,
  Bug,
  Activity,
  Sparkles,
  ShieldCheck,
  Database,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Bug,
    title: 'Bug Fixing & Patches',
    description:
      'Rapid identification and resolution of software defects with thorough root-cause analysis, regression testing, and hotfix deployment to minimize downtime.',
  },
  {
    icon: Activity,
    title: 'Performance Monitoring',
    description:
      'Real-time application performance monitoring with alerting dashboards, latency tracking, and proactive bottleneck identification to keep your systems fast.',
  },
  {
    icon: Sparkles,
    title: 'Feature Enhancements',
    description:
      'Continuous improvement of your application with new features, UI refinements, and workflow optimizations based on user feedback and evolving business needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Updates',
    description:
      'Regular security audits, vulnerability patching, dependency updates, and compliance checks to protect your application and user data against emerging threats.',
  },
]

const benefits = [
  'Database optimization including query tuning, indexing, and cleanup',
  '24/7 uptime monitoring with instant alert notifications',
  'Scheduled maintenance windows to minimize business disruption',
  'Detailed monthly health reports with performance metrics and recommendations',
  'Version upgrades for frameworks, libraries, and runtime environments',
  'Disaster recovery planning and backup management',
]

export default function MaintenanceSupportPage() {
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
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Application Maintenance & Support Services
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Launching your application is just the beginning. We provide
            comprehensive maintenance and support services to ensure your
            software stays secure, performant, and up-to-date -- so you can
            focus on your core business while we handle the technology.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Our dedicated support team offers 24/7 monitoring, rapid bug fixes,
            scheduled feature enhancements, and proactive security updates.
            Whether you need ongoing maintenance for a legacy system or
            continuous improvement of a modern application, we tailor our
            support plans to match your operational requirements and budget.
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
                  24/7 technical support with guaranteed response time SLAs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  Proactive monitoring that catches issues before users are affected
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  Flexible support plans from basic maintenance to fully managed services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  Experienced team capable of maintaining diverse tech stacks and legacy systems
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
              Need Reliable Application Support?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Keep your software running at peak performance with our
              maintenance and support services. Get in touch to explore
              a support plan tailored to your needs.
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
