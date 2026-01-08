'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'

export default function Projects() {
  const projects = [
    {
      name: 'DigiOcean',
      description: 'A comprehensive digital ocean management platform that helps businesses manage their digital infrastructure efficiently.',
      gradient: 'from-blue-500 to-cyan-500',
      slug: 'digiocean',
      size: 'large'
    },
    {
      name: 'Jewellry',
      description: 'E-commerce platform for jewelry retail with advanced catalog management and customer engagement features.',
      gradient: 'from-purple-500 to-pink-500',
      slug: 'jewellry',
      size: 'medium'
    },
    {
      name: 'Gym app',
      description: 'Fitness tracking and workout management application with social features and progress analytics.',
      gradient: 'from-orange-500 to-red-500',
      slug: 'gym-app',
      size: 'medium'
    },
    {
      name: 'Iedutrack',
      description: 'Educational tracking and management system for institutions to monitor student progress and performance.',
      gradient: 'from-green-500 to-emerald-500',
      slug: 'iedutrack',
      size: 'large'
    },
  ]

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      
      <div className="container-custom relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Complete Projects
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 glow-text">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Showcasing innovative solutions that drive business success
            </p>
          </div>
        </ScrollReveal>

        {/* Creative Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isLarge = project.size === 'large'
            return (
              <ScrollReveal 
                key={project.name} 
                direction={index % 2 === 0 ? 'left' : 'right'} 
                delay={index * 0.15}
              >
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 transition-all duration-500 animated-border ${isLarge ? 'md:row-span-2' : ''}`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between min-h-[300px]">
                    <div>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors glow-effect"
                      >
                        <ExternalLink className="w-8 h-8 text-primary-400 group-hover:text-white transition-colors" />
                      </motion.div>
                      
                      <h3 className={`${isLarge ? 'text-5xl' : 'text-4xl'} font-bold text-white mb-4 group-hover:text-primary-400 transition-colors`}>
                        {project.name}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>

                    <MagneticButton strength={0.3}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all glow-effect`}
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </MagneticButton>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl`} />
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
