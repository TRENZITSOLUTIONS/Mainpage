'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      name: 'DigiOcean',
      description: 'A comprehensive digital ocean management platform that helps businesses manage their digital infrastructure efficiently.',
      gradient: 'from-primary-500 to-primary-600',
      slug: 'digiocean',
    },
    {
      name: 'Jewellry',
      description: 'E-commerce platform for jewelry retail with advanced catalog management and customer engagement features.',
      gradient: 'from-accent-500 to-accent-600',
      slug: 'jewellry',
    },
    {
      name: 'Gym app',
      description: 'Fitness tracking and workout management application with social features and progress analytics.',
      gradient: 'from-primary-500 to-accent-500',
      slug: 'gym-app',
    },
    {
      name: 'Iedutrack',
      description: 'Educational tracking and management system for institutions to monitor student progress and performance.',
      gradient: 'from-accent-500 to-primary-500',
      slug: 'iedutrack',
    },
  ]

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.01]" />
      
      <div className="container-custom relative z-10">
        {/* Header - Split */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4">
                <span>Complete Projects</span>
              </div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9]">
                <span className="block text-white">Our</span>
                <span className="block gradient-text">Portfolio</span>
              </h2>
            </motion.div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Showcasing innovative solutions that drive business success
            </motion.p>
          </div>
        </div>

        {/* Projects - Staggered Layout */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="grid grid-cols-12 gap-8 items-center p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-primary-500/30 transition-all cursor-pointer">
                  {/* Number */}
                  <div className="col-span-12 md:col-span-1">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white font-black text-2xl`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 md:col-span-3 flex justify-end">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-accent-500 transition-all"
                    >
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
