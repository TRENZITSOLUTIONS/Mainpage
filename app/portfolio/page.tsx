'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    name: 'DigiOcean',
    tag: 'Core Platform',
    description: 'A comprehensive digital platform engineered for scalability and performance, serving as the backbone for enterprise operations.',
    color: 'cyan',
    year: '2025',
    category: 'Platform',
  },
  {
    name: 'Jewellry',
    tag: 'E-commerce',
    description: 'A premium e-commerce solution with advanced inventory management, real-time analytics, and seamless payment integration.',
    color: 'purple',
    year: '2024',
    category: 'Web Application',
  },
  {
    name: 'Gym App',
    tag: 'Native Mobile',
    description: 'A native mobile application for fitness management with workout tracking, membership management, and push notifications.',
    color: 'pink',
    year: '2024',
    category: 'Mobile App',
  },
  {
    name: 'Iedutrack',
    tag: 'LMS System',
    description: 'A learning management system enabling educational institutions to manage courses, assessments, and student progress digitally.',
    color: 'blue',
    year: '2023',
    category: 'SaaS',
  },
]

const getGradientClass = (color: string) => {
  if (color === 'cyan') return 'from-cyan-400 to-blue-600'
  if (color === 'purple') return 'from-purple-400 to-pink-600'
  if (color === 'pink') return 'from-pink-400 to-rose-600'
  return 'from-blue-400 to-cyan-400'
}

const getBgGradient = (color: string) => {
  if (color === 'cyan') return 'from-cyan-900/20'
  if (color === 'purple') return 'from-purple-900/20'
  if (color === 'pink') return 'from-pink-900/20'
  return 'from-blue-900/20'
}

export default function PortfolioPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 text-pink-400 text-sm font-semibold mb-6"
            >
              Our Portfolio
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">PROJECTS</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of successful projects delivered across industries — from startups to enterprise-grade platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 px-4 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative border-b border-white/10 py-12 md:py-16 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${getBgGradient(project.color)} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-full group-hover:translate-y-0 ease-in-out`} />

                <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGradientClass(project.color)} text-white`}>
                        {project.category}
                      </span>
                      <span className="text-neutral-500 font-mono text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {project.name}
                    </h3>
                    <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                    <span className="text-neutral-500 font-mono text-sm mt-3 block">{project.tag}</span>
                  </div>

                  <div className="flex items-center gap-4 md:mt-8">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-10 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-xl text-neutral-400 mb-10">
              Let&apos;s turn your idea into the next success story.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
