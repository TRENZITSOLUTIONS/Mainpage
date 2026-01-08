'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      name: 'DigiOcean',
      description: 'A comprehensive digital ocean management platform',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Jewellry',
      description: 'E-commerce platform for jewelry retail',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Gym app',
      description: 'Fitness tracking and workout management application',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Iedutrack',
      description: 'Educational tracking and management system',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Complete Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 glow-text">
            Our Portfolio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 animated-border"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h3>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors glow-effect"
                  >
                    <ExternalLink className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors group-hover:translate-x-2 transition-transform"
                >
                  View Project
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

