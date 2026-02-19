'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    ArrowLeft,
    BarChart3,
    Database,
    TrendingUp,
    Activity,
    LayoutDashboard,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react'

const features = [
    {
        icon: Database,
        title: 'Data Warehousing & ETL Pipelines',
        description:
            'Build centralized data warehouses with robust ETL pipelines that extract, transform, and load data from multiple sources into a single source of truth for your organization.',
    },
    {
        icon: LayoutDashboard,
        title: 'Business Intelligence Dashboards',
        description:
            'Design interactive, self-service BI dashboards that empower stakeholders to explore metrics, track KPIs, and make confident data-driven decisions in real time.',
    },
    {
        icon: TrendingUp,
        title: 'Predictive Analytics',
        description:
            'Apply statistical modeling and machine learning to forecast trends, anticipate customer behavior, optimize inventory, and identify risks before they materialize.',
    },
    {
        icon: Activity,
        title: 'Real-Time Analytics & Visualization',
        description:
            'Stream and analyze data as it arrives with real-time processing engines. Visualize live metrics, anomalies, and operational health through intuitive dashboards and alerts.',
    },
]

const deliverables = [
    'Scalable data warehouse architecture on cloud or on-premises infrastructure',
    'Automated ETL/ELT pipelines for reliable, scheduled data ingestion',
    'Custom BI dashboards with drill-down, filtering, and export capabilities',
    'Predictive models for forecasting, segmentation, and risk scoring',
    'Real-time streaming analytics with alerting and anomaly detection',
    'Data governance frameworks with quality monitoring and lineage tracking',
]

export default function DataAnalyticsSolutionsContent() {
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
                            <BarChart3 className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white">
                            Data & Analytics Solutions
                        </h1>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                        Data is your most valuable strategic asset, but only when it is
                        accessible, reliable, and actionable. We help organizations harness
                        the full potential of their data through modern warehousing,
                        advanced analytics, and compelling visualizations that reveal the
                        insights hiding in your numbers.
                    </p>
                    <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
                        Whether you need to consolidate scattered data sources, build
                        executive dashboards, or deploy predictive models that forecast
                        demand and identify risks, our analytics team delivers end-to-end
                        solutions. We handle everything from data pipeline engineering and
                        quality assurance to interactive reporting and real-time streaming
                        analytics.
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
                                    Expertise across leading platforms including Snowflake,
                                    Databricks, BigQuery, and Power BI
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>
                                    End-to-end data solutions from ingestion and transformation
                                    to visualization and insights
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>
                                    Strong focus on data quality, governance, and security
                                    compliance
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">&#10003;</span>
                                <span>
                                    Scalable architectures that grow with your data volume and
                                    analytical complexity
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
                            Ready to Unlock the Power of Your Data?
                        </h2>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let us build the analytics foundation that turns your raw data
                            into strategic advantage. Get in touch to discuss your data goals.
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
