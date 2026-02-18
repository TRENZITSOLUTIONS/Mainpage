'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  HardDrive,
  Code2,
  Activity,
  Archive,
  CheckCircle2,
  ArrowRight,
  Settings,
} from 'lucide-react'

const features = [
  {
    icon: HardDrive,
    title: 'Server Provisioning & Setup',
    description:
      'Rapid, repeatable server provisioning across cloud and on-premises environments. We configure compute, storage, and networking resources to exact specifications with automated deployment pipelines.',
  },
  {
    icon: Code2,
    title: 'Infrastructure as Code',
    description:
      'Manage your entire infrastructure through version-controlled code using Terraform, Ansible, CloudFormation, and Pulumi. Achieve consistent, auditable, and reproducible environments every time.',
  },
  {
    icon: Activity,
    title: 'Monitoring & Alerting',
    description:
      'Comprehensive monitoring with real-time dashboards, intelligent alerting, and anomaly detection. We integrate tools like Prometheus, Grafana, CloudWatch, and Datadog for full-stack visibility.',
  },
  {
    icon: Archive,
    title: 'Backup, Recovery & Patch Management',
    description:
      'Automated backup schedules with tested recovery procedures, plus systematic patch management to keep your servers secure, up-to-date, and protected against known vulnerabilities.',
  },
]

const deliverables = [
  'Automated server provisioning pipelines for rapid, consistent deployments',
  'Infrastructure-as-code repositories with full version control and documentation',
  'Real-time monitoring dashboards with custom alerting rules and escalation policies',
  'Patch management schedules and automated update workflows',
  'Backup and disaster recovery procedures with regular testing and validation',
  'Capacity planning reports with growth projections and scaling recommendations',
]

export default function ServerProvisioningManagementPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/cloud-solutions"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Cloud Solutions
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <HardDrive className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Server Provisioning, Management & Maintenance
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Reliable infrastructure is the backbone of every digital operation.
            We handle the full lifecycle of your servers -- from initial
            provisioning and configuration to ongoing management, monitoring,
            and maintenance -- so you can focus on your core business.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Our infrastructure team combines infrastructure-as-code best
            practices with proactive monitoring and systematic patch management
            to ensure your servers are always secure, performant, and
            available. Whether you run on cloud, on-premises, or hybrid
            environments, we deliver the operational excellence your business
            demands, with capacity planning that scales alongside your growth.
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
                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
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
            className="p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <ul className="space-y-3 text-gray-300">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
                <span className="text-blue-400 mt-1">&#10003;</span>
                <span>
                  Infrastructure-as-code expertise ensuring repeatable,
                  auditable deployments every time
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">&#10003;</span>
                <span>
                  24/7 monitoring with intelligent alerting and rapid incident
                  response
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">&#10003;</span>
                <span>
                  Proactive patch management and security hardening to prevent
                  vulnerabilities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">&#10003;</span>
                <span>
                  Data-driven capacity planning that scales your infrastructure
                  ahead of demand
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-10 bg-gradient-to-br from-blue-600/20 to-cyan-700/20 rounded-xl border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Streamline Your Infrastructure?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Let us take the burden of server management off your shoulders.
              Get in touch to discuss how we can provision, manage, and
              maintain your infrastructure for peak reliability.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all"
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
