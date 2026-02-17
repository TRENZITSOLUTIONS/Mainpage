'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BarChart3 } from 'lucide-react'

export default function DataAnalyticsContent() {
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
                            <BarChart3 className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">Data & Analytics Solutions</h1>
                    </div>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        We transform raw data into actionable business intelligence through modern data warehousing, advanced analytics, and real-time dashboards. Our data strategy experts help you design scalable data platforms that deliver insights and drive data-driven decision making.
                    </p>

                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        From data ingestion and transformation to predictive analytics and real-time monitoring, we build end-to-end data solutions on Snowflake, BigQuery, Redshift, and managed cloud platforms.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Data Warehousing & Architecture</h3>
                            <p className="text-gray-400">We design and implement data warehousing solutions using Snowflake, Google BigQuery, Amazon Redshift, and Azure Synapse. Centralized data repositories enable fast analytics, cost-effective storage, and seamless data integration from multiple sources.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">ETL & Data Pipelines</h3>
                            <p className="text-gray-400">We build reliable ETL pipelines using Apache Spark, Apache Airflow, cloud-native services, and managed ETL tools. Automated data ingestion, transformation, and validation ensure data quality and pipeline reliability.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">BI & Data Visualization</h3>
                            <p className="text-gray-400">We create interactive dashboards and visualizations using Tableau, Power BI, Looker, and other platforms. Executive dashboards, sales funnels, and operational metrics provide real-time visibility into your business performance.</p>
                        </div>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">Real-Time Analytics & Streaming</h3>
                            <p className="text-gray-400">We implement streaming data processing using Kafka, Flink, and cloud streams for real-time dashboards and monitoring. Real-time insights enable faster decision-making and immediate response to business events.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 rounded-xl border border-blue-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Analytics Capabilities</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Historical data analysis and trend identification</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Predictive analytics and forecasting</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Customer segmentation and behavior analysis</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">•</span><span>Anomaly detection and alerting</span></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
