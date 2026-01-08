'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function ProjectsPage() {
  const projects = [
    {
      name: 'DigiOcean',
      description: 'A comprehensive digital ocean management platform that helps businesses manage their digital infrastructure efficiently.',
      longDescription: 'DigiOcean is a powerful platform designed to streamline digital operations and infrastructure management. Built with modern technologies, it provides real-time monitoring, automated scaling, and comprehensive analytics.',
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['SaaS', 'Cloud', 'Management'],
    },
    {
      name: 'Jewellry',
      description: 'E-commerce platform for jewelry retail with advanced catalog management and customer engagement features.',
      longDescription: 'Jewellry is a full-featured e-commerce solution specifically designed for jewelry retailers. It includes inventory management, customer relationship tools, and a beautiful, responsive shopping experience.',
      gradient: 'from-purple-500 to-pink-500',
      tags: ['E-commerce', 'Retail', 'Web App'],
    },
    {
      name: 'Gym app',
      description: 'Fitness tracking and workout management application with social features and progress analytics.',
      longDescription: 'A comprehensive fitness application that helps users track workouts, monitor progress, and achieve their fitness goals. Features include workout plans, nutrition tracking, and community engagement.',
      gradient: 'from-orange-500 to-red-500',
      tags: ['Mobile App', 'Fitness', 'Health'],
    },
    {
      name: 'Iedutrack',
      description: 'Educational tracking and management system for institutions to monitor student progress and performance.',
      longDescription: 'Iedutrack is an educational management platform that enables institutions to track student progress, manage courses, and generate comprehensive reports. It simplifies administrative tasks and enhances learning outcomes.',
      gradient: 'from-green-500 to-emerald-500',
      tags: ['Education', 'Management', 'SaaS'],
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        {/* 3D Geometric Shapes */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 hidden lg:block pointer-events-none">
          <Scene type="geometric" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-400 text-sm font-semibold mb-4 glow-effect"
              whileHover={{ scale: 1.05 }}
            >
              Our Portfolio
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 glow-text">
              Complete Projects
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Showcasing our successful projects and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
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
                  
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-gray-400 text-sm mb-6">{project.longDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-semibold border border-primary-500/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all glow-effect flex items-center space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 border-2 border-slate-600 rounded-lg hover:border-primary-500 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-400 hover:text-primary-400 transition-colors" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
