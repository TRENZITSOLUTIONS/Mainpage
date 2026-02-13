'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'

export default function ProcessAutomationPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/digital-transformation"
          className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Digital Transformation
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">Process Automation</h1>
          </div>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We create intelligent automation solutions that eliminate manual tasks, reduce human error, and improve operational efficiency. Our process automation expertise spans serverless functions, CI/CD pipelines, workflow orchestration, and event-driven automation using cutting-edge cloud platforms.
          </p>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            From data synchronization and backup automation to deployment pipelines and business process workflows, we automate repetitive tasks so your teams can focus on high-value, strategic work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Serverless Functions & Event-Driven Automation</h3>
              <p className="text-gray-400">We develop AWS Lambda, Google Cloud Functions, and Azure Functions for event-driven automation. Serverless architecture scales automatically, reduces operational overhead, and enables cost-effective automation without managing infrastructure.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">CI/CD Pipelines & DevOps Automation</h3>
              <p className="text-gray-400">We design end-to-end CI/CD pipelines using GitHub Actions, GitLab CI, CircleCI, and cloud-native services. Automated testing, security scanning, and deployment workflows enable rapid, reliable software delivery with zero-downtime deployments.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Workflow Orchestration & Complex Automation</h3>
              <p className="text-gray-400">We orchestrate complex, multi-step business processes using AWS Step Functions, Google Cloud Workflows, Apache Airflow, and Kubernetes. Coordinate microservices, manage error handling, and automate business-critical workflows reliably.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Scheduled Tasks & Event Management</h3>
              <p className="text-gray-400">We implement cron jobs, AWS EventBridge, Google Cloud Scheduler, and event-based automation for time-triggered and event-triggered tasks. Data backups, report generation, and periodic maintenance run automatically without manual intervention.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 rounded-xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Automation Use Cases</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Daily backups and data synchronization</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Automated scaling based on metrics</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Deployment pipelines with approval workflows</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Log aggregation and alerts</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
