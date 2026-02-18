'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Code,
  Layers,
  Paintbrush,
  Cloud,
  CreditCard,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Requirements Analysis & Planning',
    description:
      'We work closely with stakeholders to gather, document, and validate requirements, ensuring the final product aligns perfectly with your business goals.',
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    description:
      'Intuitive, user-centered interfaces crafted through research, wireframing, and iterative prototyping for an exceptional user experience.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description:
      'End-to-end engineering across frontend, backend, databases, and APIs using modern frameworks and industry best practices.',
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud Deployment',
    description:
      'Cloud-native deployments on AWS, Azure, or GCP with auto-scaling, high availability, and cost-optimized infrastructure.',
  },
]

const deliverables = [
  'Custom-built web and mobile applications tailored to your workflows',
  'Multi-tenant SaaS platforms with role-based access control',
  'Subscription and billing management systems',
  'Seamless third-party integrations and API ecosystems',
  'Comprehensive documentation and knowledge transfer',
  'Post-launch support, monitoring, and iterative improvements',
]

export default function CustomSoftwareSaasPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-10 py-20">
        <Link
          href="/services/product-engineering"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Product Engineering
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Custom Software & SaaS Development
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            Every business is unique, and off-the-shelf software rarely fits
            perfectly. We design and build custom software solutions and SaaS
            platforms from the ground up, precisely tailored to your operational
            needs and growth ambitions.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            Whether you need a standalone enterprise application or a
            multi-tenant SaaS product with subscription billing, our team
            handles the full lifecycle -- from discovery and UX design through
            development, testing, deployment, and ongoing support. We leverage
            modern tech stacks and cloud-native architectures to ensure your
            product is fast, reliable, and ready to scale.
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
                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
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
            className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <ul className="space-y-3 text-gray-300">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
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
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Proven track record delivering custom SaaS products across
                  industries
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Agile methodology with transparent sprints and continuous
                  delivery
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Modern tech stack: React, Next.js, Node.js, Python, and more
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">&#10003;</span>
                <span>
                  Dedicated support team for post-launch maintenance and
                  enhancements
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-10 bg-gradient-to-br from-cyan-600/20 to-blue-700/20 rounded-xl border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Let us turn your vision into a powerful, scalable software product.
              Get in touch to discuss your project requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all"
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
