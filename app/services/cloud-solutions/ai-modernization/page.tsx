'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Brain } from 'lucide-react'

export default function AiModernizationPage() {
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
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">AI-Driven Systems & Modernization</h1>
          </div>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We help organizations unlock AI and machine learning potential through intelligent application development and legacy system modernization. Our AI expertise spans small platforms, LLM integration, generative AI, and end-to-end MLOps for production-grade systems.
          </p>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            From predictive analytics and intelligent automation to chatbots powered by LLMs and computer vision applications, we deliver AI-driven solutions that modernize operations and create competitive advantages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Machine Learning & AI Platforms</h3>
              <p className="text-gray-400">We leverage AWS SageMaker, Google Vertex AI, and Azure Machine Learning for training, deploying, and managing ML models. Platforms handle model registry, versioning, and A/B testing for reliable, scalable ML systems.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">LLM Integration & Generative AI</h3>
              <p className="text-gray-400">We integrate OpenAI GPT, Anthropic Claude, and cloud-hosted LLMs into your applications for intelligent chatbots, content generation, document analysis, and automated customer support. Prompt engineering and RAG (Retrieval Augmented Generation) maximize LLM capabilities.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Legacy System Modernization & AI Integration</h3>
              <p className="text-gray-400">We modernize monolithic legacy systems by adding AI capabilities, refactoring with microservices, and migrating to cloud-native architectures. AI augments existing systems without complete rewrites, enabling incremental modernization.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">MLOps & Model Governance</h3>
              <p className="text-gray-400">We implement MLOps practices including model monitoring, drift detection, automatic retraining, and governance frameworks. Production-grade systems ensure reliable, auditable, and compliant AI deployments in regulated industries.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 rounded-xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">AI Applications</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Predictive maintenance and anomaly detection</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>NLP for document analysis and sentiment analysis</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Computer vision for image and video processing</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Recommendation engines and personalization</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
