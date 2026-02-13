'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Database } from 'lucide-react'

export default function APIDevelopmentPage() {
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
              <Database className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">API Development & Integrations</h1>
          </div>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We design and build enterprise-grade APIs that securely connect systems, enable seamless third-party integrations, and power modern mobile and web applications. Our expertise spans RESTful architectures, GraphQL schemas, gRPC services, and event-driven microservices.
          </p>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We focus on API security, scalability, comprehensive documentation, and developer experience to ensure your integrations are reliable, maintainable, and future-proof.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">RESTful, GraphQL & gRPC APIs</h3>
              <p className="text-gray-400">We design and implement APIs using REST for simplicity, GraphQL for efficient queries and real-time subscriptions, and gRPC for high-performance microservices. We choose the right architecture for your use case.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Third-Party Integrations</h3>
              <p className="text-gray-400">Seamless integration with Stripe, Salesforce, AWS services, Slack, Shopify, and enterprise systems. We handle authentication, data mapping, error handling, and synchronization for reliable integrations that work consistently.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Security & Authentication</h3>
              <p className="text-gray-400">OAuth 2.0, JWT tokens, API key management, rate limiting, encryption, and CORS policies protect your data and APIs from unauthorized access. We implement industry best practices for secure API communication.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Documentation & Developer Experience</h3>
              <p className="text-gray-400">Interactive OpenAPI/Swagger documentation, example requests, SDK generation, comprehensive tests, and sandbox environments empower developers to integrate quickly and confidently.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-xl border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Integration Patterns</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Webhook management for event-driven workflows</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Message queues and async processing with RabbitMQ, Kafka</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>API versioning and backward compatibility</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>Monitoring, alerting, and performance optimization</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
