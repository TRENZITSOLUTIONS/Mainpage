'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Code,
  Network,
  FileText,
  Webhook,
  CreditCard,
  Blocks,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'REST API Design',
    description:
      'Well-structured, versioned RESTful APIs following OpenAPI standards with consistent endpoint naming, proper HTTP methods, and comprehensive error handling.',
  },
  {
    icon: Network,
    title: 'GraphQL APIs',
    description:
      'Flexible, efficient GraphQL endpoints that let clients request exactly the data they need -- reducing over-fetching and improving performance for complex data relationships.',
  },
  {
    icon: CreditCard,
    title: 'Third-Party Integrations',
    description:
      'Seamless connections with payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), ERPs (SAP, Oracle), and hundreds of other platforms.',
  },
  {
    icon: Blocks,
    title: 'Microservices Communication',
    description:
      'Event-driven and message-based communication patterns using RabbitMQ, Kafka, or AWS SQS for reliable, decoupled microservice architectures.',
  },
]

const benefits = [
  'Comprehensive API documentation with interactive Swagger/OpenAPI specs',
  'Webhook systems for real-time event notifications and automation',
  'OAuth 2.0, JWT, and API key authentication and authorization',
  'Rate limiting, throttling, and caching for optimal performance',
  'API versioning strategies for backward-compatible evolution',
  'Automated testing suites ensuring reliability and data integrity',
]

export default function ApiDevelopmentIntegrationsPage() {
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
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              API Development & Third-Party Integrations
            </h1>
          </div>

          {/* Detailed Description */}
          <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
            APIs are the backbone of modern software ecosystems. We design,
            build, and maintain robust RESTful APIs and GraphQL endpoints that
            connect your applications, services, and data seamlessly -- enabling
            powerful integrations and scalable architectures.
          </p>
          <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
            From connecting your platform to payment gateways and CRMs to
            building internal microservices communication layers, our API
            engineering ensures reliable data flow, strong security, and
            developer-friendly documentation. We follow industry standards so
            your APIs are easy to consume, maintain, and extend.
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
                  Battle-tested experience integrating with 100+ third-party platforms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  Security-first approach with OAuth 2.0, encryption, and input validation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  Thorough documentation ensuring your team and partners can integrate effortlessly
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">&#10003;</span>
                <span>
                  Scalable architecture designed for high throughput and low latency
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
              Ready to Connect Your Systems?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Let us build the APIs and integrations that power your digital
              ecosystem. Get in touch to discuss your integration needs.
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
