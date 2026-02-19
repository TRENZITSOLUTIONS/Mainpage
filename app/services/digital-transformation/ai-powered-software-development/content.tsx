'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    Bot,
    Brain,
    Eye,
    MessageSquare,
    Sparkles,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react'

const features = [
    {
        icon: Brain,
        title: 'Machine Learning Models',
        description:
            'Design, train, and deploy custom ML models for classification, regression, clustering, and anomaly detection tailored to your specific business problems and data.',
    },
    {
        icon: MessageSquare,
        title: 'Natural Language Processing',
        description:
            'Build NLP solutions for sentiment analysis, text summarization, entity extraction, language translation, and intelligent document understanding at scale.',
    },
    {
        icon: Eye,
        title: 'Computer Vision',
        description:
            'Implement image recognition, object detection, visual inspection, and video analytics systems that bring visual intelligence to your operations and products.',
    },
    {
        icon: Sparkles,
        title: 'Chatbots & Virtual Assistants',
        description:
            'Create conversational AI agents that handle customer inquiries, automate support workflows, and provide personalized recommendations around the clock.',
    },
]

const deliverables = [
    'Custom-trained ML models with production-grade inference pipelines',
    'NLP engines for text classification, extraction, and summarization',
    'Computer vision systems for quality inspection and image analysis',
    'Intelligent recommendation engines for personalized user experiences',
    'Conversational AI chatbots integrated with your support channels',
    'Predictive modeling for demand forecasting and risk assessment',
]

export default function AiDrivenSystemsContent() {
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
                            <Bot className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            AI-Driven Systems & Machine Learning Solutions
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Artificial intelligence is no longer a future promise -- it is a
                        competitive necessity. We help businesses leverage machine learning,
                        natural language processing, and computer vision to automate
                        complex decisions, uncover hidden patterns, and deliver intelligent
                        experiences at scale.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        From building custom ML models trained on your proprietary data to
                        deploying production-ready AI systems that integrate with your
                        existing workflows, our team covers the full AI lifecycle. We focus
                        on practical, measurable outcomes -- reducing manual effort,
                        improving accuracy, and enabling capabilities that were previously
                        impossible.
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
                                    Experienced data scientists and ML engineers with deep domain
                                    expertise
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>
                                    Full lifecycle support from data preparation and model
                                    training to deployment and monitoring
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>
                                    Focus on explainable AI and responsible, ethical model
                                    development
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>
                                    Proven MLOps practices for continuous model retraining,
                                    versioning, and performance tracking
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
                            Ready to Build Intelligent Systems?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us help you harness the power of AI and machine learning to
                            transform your operations. Get in touch to explore what is
                            possible.
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
