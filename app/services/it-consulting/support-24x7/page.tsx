'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Clock,
  AlertTriangle,
  FileCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  BarChart3,
} from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description:
      'Continuous, round-the-clock monitoring of your servers, applications, networks, and cloud infrastructure. Our systems detect anomalies in real time, ensuring issues are identified and addressed before they escalate.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description:
      'Rapid incident detection, triage, and resolution by experienced engineers. We follow structured incident management processes to minimize downtime and restore services as quickly as possible.',
  },
  {
    icon: FileCheck,
    title: 'SLA & Escalation Management',
    description:
      'Clearly defined service level agreements with guaranteed response and resolution times. Our multi-tier escalation framework ensures critical issues reach senior engineers immediately.',
  },
  {
    icon: Wrench,
    title: 'Proactive Maintenance',
    description:
      'Scheduled maintenance windows for patching, updates, and performance tuning. We proactively address vulnerabilities and optimize system health to prevent incidents before they occur.',
  },
]

const deliverables = [
  'Round-the-clock infrastructure and application monitoring',
  'Defined incident response procedures with severity classification',
  'SLA-backed response and resolution times for every ticket',
  'Proactive patch management and scheduled maintenance cycles',
  'Real-time performance dashboards and monthly health reports',
  'Multi-tier escalation management with on-call engineer rotation',
]

export default function Support24x7Page() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/it-consulting"
          className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to IT Consulting
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              24/7 Technical Support & Monitoring
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Downtime costs more than money -- it erodes customer trust and
            disrupts business operations. Our 24/7 Technical Support &
            Monitoring service provides round-the-clock surveillance of your
            systems, rapid incident response, and proactive maintenance to
            keep your infrastructure running at peak performance every hour of
            every day.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Our dedicated support engineers work in shifts to ensure there is
            always an expert available when you need one. From real-time
            monitoring dashboards and automated alerting to structured
            escalation procedures and SLA-backed resolution times, we provide
            the safety net your business needs. We do not just react to
            problems -- we anticipate them through proactive maintenance,
            trend analysis, and capacity planning.
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
                <feature.icon className="w-8 h-8 text-green-400 mb-4" />
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
            className="p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What We Deliver
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
                <span className="text-green-400 mt-1">&#10003;</span>
                <span>
                  True 24/7/365 coverage with dedicated shift-based engineering
                  teams -- not just on-call pagers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">&#10003;</span>
                <span>
                  SLA-backed response times with financial penalties if we fall
                  short of our commitments
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">&#10003;</span>
                <span>
                  Proactive approach that reduces incidents over time through
                  root cause analysis and trend monitoring
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">&#10003;</span>
                <span>
                  Real-time dashboards giving you full visibility into system
                  health, incidents, and resolution metrics
                </span>
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
              Ready for Round-the-Clock Peace of Mind?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Stop worrying about system outages and after-hours incidents.
              Get in touch to learn how our 24/7 support and monitoring
              services can protect your business operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all"
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
