'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users } from 'lucide-react'

export default function DedicatedTeamsPage() {
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">Dedicated Development Teams</h1>
          </div>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            We provide dedicated, committed development teams that work exclusively on your projects as an extension of your internal organization. Whether you need specialized expertise, scaling for major initiatives, or continuous product development, our teams integrate seamlessly with your processes and culture.
          </p>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
            From single specialists to large teams, our professionals deliver consistent quality, deep domain expertise, and long-term stability that drives your product roadmap forward.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Team Composition & Flexible Scaling</h3>
              <p className="text-gray-400">Build and scale teams quickly—from individual specialists for targeted needs to full-stack teams of 20+. Team composition adapts to your project requirements with backend, frontend, mobile, and DevOps specialists.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Seamless Onboarding & Integration</h3>
              <p className="text-gray-400">Streamlined onboarding provides team members with system access, comprehensive documentation, and alignment with your processes, culture, and working conventions. Team leads ensure smooth collaboration and knowledge sharing.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Diverse Skill Sets & Expertise</h3>
              <p className="text-gray-400">Access to full-stack developers, mobile engineers, DevOps specialists, QA engineers, technical architects, and domain-specific expertise. Team composition evolves as your project requirements change.</p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Long-Term Continuity & Stability</h3>
              <p className="text-gray-400">Dedicated teams maintain low turnover, preserving institutional knowledge and project continuity. Strong onboarding and mentoring programs ensure team stability and consistent delivery over years, not months.</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-green-900/10 to-emerald-900/10 rounded-xl border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Engagement Models</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Fixed monthly retainer with flexible scaling</span></li>
              <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Time & materials with transparent billing</span></li>
              <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Performance-based models with KPIs and milestones</span></li>
              <li className="flex items-start gap-3"><span className="text-green-400 mt-1">•</span><span>Hybrid models combining managed services with dedicated teams</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
