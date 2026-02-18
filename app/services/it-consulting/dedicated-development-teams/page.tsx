'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Users,
  Code2,
  TestTube2,
  Settings,
  CheckCircle2,
  ArrowRight,
  UserPlus,
} from 'lucide-react'

const features = [
  {
    icon: UserPlus,
    title: 'Team Augmentation',
    description:
      'Scale your engineering capacity on demand with skilled professionals who integrate seamlessly into your existing workflows. We match talent to your specific technology stack and domain requirements.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developers',
    description:
      'Access experienced full-stack developers proficient in modern frameworks and languages. From React and Next.js to Node.js, Python, and beyond, our developers deliver production-quality code from day one.',
  },
  {
    icon: TestTube2,
    title: 'QA Engineers',
    description:
      'Dedicated quality assurance engineers who build comprehensive test strategies, automate regression suites, and ensure every release meets the highest standards of reliability and performance.',
  },
  {
    icon: Settings,
    title: 'DevOps Specialists',
    description:
      'Expert DevOps engineers who design and maintain your CI/CD pipelines, infrastructure as code, containerization, and cloud deployments to accelerate your release cycles and improve system stability.',
  },
]

const deliverables = [
  'Carefully vetted developers matched to your technology stack',
  'Dedicated project-based teams with defined roles and responsibilities',
  'Seamless integration with your existing development workflows',
  'Transparent reporting and regular progress updates',
  'Flexible engagement models -- scale up or down as needed',
  'Knowledge transfer and documentation throughout the engagement',
]

export default function DedicatedDevelopmentTeamsPage() {
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
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Dedicated Development Teams
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Building great software requires great people. Our Dedicated
            Development Teams service provides you with extended teams of
            skilled developers, QA engineers, and DevOps specialists who work
            exclusively on your projects as a natural extension of your
            in-house team.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Whether you need to accelerate a product launch, tackle a backlog
            of features, or build an entirely new platform, we assemble the
            right mix of talent for your requirements. Our developers follow
            your processes, attend your standups, and commit to your
            repositories -- giving you full visibility and control while we
            handle recruitment, onboarding, and retention.
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
                  Rigorously vetted developers with proven track records on
                  production-grade projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">&#10003;</span>
                <span>
                  Flexible engagement models that let you scale teams up or
                  down without long-term commitments
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">&#10003;</span>
                <span>
                  Full alignment with your tools, workflows, and communication
                  channels for seamless collaboration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">&#10003;</span>
                <span>
                  Dedicated account management to ensure team performance and
                  client satisfaction
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
              Ready to Build Your Dedicated Team?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Tell us about your project requirements and technology stack. We
              will assemble the perfect team to accelerate your development
              and deliver results.
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
