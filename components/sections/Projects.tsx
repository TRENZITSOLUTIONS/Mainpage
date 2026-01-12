'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      name: 'DigiOcean',
      description: 'A comprehensive digital ocean management platform that helps businesses manage their digital infrastructure efficiently.',
      gradient: 'from-cyan-500 to-blue-500',
      slug: 'digiocean',
    },
    {
      name: 'Jewellry',
      description: 'E-commerce platform for jewelry retail with advanced catalog management and customer engagement features.',
      gradient: 'from-purple-500 to-pink-500',
      slug: 'jewellry',
    },
    {
      name: 'Gym app',
      description: 'Fitness tracking and workout management application with social features and progress analytics.',
      gradient: 'from-blue-500 to-cyan-500',
      slug: 'gym-app',
    },
    {
      name: 'Iedutrack',
      description: 'Educational tracking and management system for institutions to monitor student progress and performance.',
      gradient: 'from-pink-500 to-purple-500',
      slug: 'iedutrack',
    },
  ]

  return (
    <section className="relative py-40 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <div className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-6">
            [ OUR PORTFOLIO ]
          </div>
          <h2 className="text-7xl md:text-9xl font-black leading-[0.9]">
            <span className="block text-white">Complete</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects - Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 10, z: 50 }}
              className="group"
              style={{ perspective: '1000px' }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative min-h-[400px] bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden">
                  {/* Animated Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  
                  {/* Number Badge */}
                  <div className="absolute top-8 right-8 text-8xl font-black text-white/5 group-hover:text-cyan-400/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[400px]">
                    <div>
                      <h3 className="text-5xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xl text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                        View Project
                      </span>
                      <motion.div
                        whileHover={{ x: 10, rotate: 45 }}
                        className="w-12 h-12 border-2 border-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-cyan-400 group-hover:text-black transition-colors" />
                      </motion.div>
                    </div>
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
