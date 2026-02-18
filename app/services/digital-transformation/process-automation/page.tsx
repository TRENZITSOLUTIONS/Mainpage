'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  RefreshCw,
  Workflow,
  Bot,
  Link2,
  FileText,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Design and implement automated workflows that replace repetitive manual tasks, reduce human error, and accelerate process completion across departments.',
  },
  {
    icon: Bot,
    title: 'Robotic Process Automation (RPA)',
    description:
      'Deploy software robots to handle high-volume, rule-based tasks such as data entry, invoice processing, and report generation with speed and precision.',
  },
  {
    icon: Link2,
    title: 'Integration Automation',
    description:
      'Connect disparate systems and applications through automated data flows, ensuring seamless communication between your CRM, ERP, HR, and finance platforms.',
  },
  {
    icon: FileText,
    title: 'Document Processing & Approval Workflows',
    description:
      'Automate document capture, classification, extraction, and routing. Build intelligent approval workflows with escalation rules, audit trails, and real-time status tracking.',
  },
]

const deliverables = [
  'End-to-end workflow automation tailored to your business processes',
  'RPA bots for data entry, invoice processing, and report generation',
  'Business process mapping and optimization analysis',
  'Automated integration pipelines between enterprise systems',
  'Intelligent document processing with OCR and data extraction',
  'Configurable approval workflows with audit trails and notifications',
]

export default function ProcessAutomationPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/digital-transformation"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Digital Transformation
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Process Automation Services
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Manual, repetitive tasks drain productivity and introduce costly
            errors. Our process automation services help you streamline
            workflows, eliminate bottlenecks, and free your team to focus on
            higher-value work that drives real business growth.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            From robotic process automation and intelligent document handling to
            end-to-end workflow orchestration, we assess your current processes,
            identify automation opportunities, and deliver solutions that
            integrate seamlessly with your existing systems. The result is
            faster turnaround, lower operational costs, and a workforce
            empowered to innovate.
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
                <feature.icon className="w-8 h-8 text-orange-400 mb-4" />
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
            className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-500/30 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <ul className="space-y-3 text-gray-300">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
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
                <span className="text-orange-400 mt-1">&#10003;</span>
                <span>
                  Deep expertise in leading RPA platforms including UiPath,
                  Automation Anywhere, and Power Automate
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">&#10003;</span>
                <span>
                  Thorough process discovery and mapping before any automation
                  is built
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">&#10003;</span>
                <span>
                  Measurable ROI with clear KPIs tracking time saved, error
                  reduction, and cost savings
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">&#10003;</span>
                <span>
                  Ongoing monitoring, maintenance, and optimization of deployed
                  automations
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-10 bg-gradient-to-br from-orange-600/20 to-red-700/20 rounded-xl border border-orange-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Processes?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Let us help you eliminate manual work and unlock operational
              efficiency. Get in touch to discuss your automation goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-orange-400 hover:to-red-500 transition-all"
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
