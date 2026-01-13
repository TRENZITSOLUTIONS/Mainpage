'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const projects = [
    {
      name: 'DigiOcean',
      description: 'A comprehensive digital ocean management platform that helps businesses manage their digital infrastructure efficiently.',
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
      slug: 'digiocean',
    },
    {
      name: 'Jewellry',
      description: 'E-commerce platform for jewelry retail with advanced catalog management and customer engagement features.',
      gradient: 'from-pink-500 via-purple-500 to-cyan-500',
      slug: 'jewellry',
    },
    {
      name: 'Gym app',
      description: 'Fitness tracking and workout management application with social features and progress analytics.',
      gradient: 'from-blue-500 via-cyan-500 to-green-500',
      slug: 'gym-app',
    },
    {
      name: 'Iedutrack',
      description: 'Educational tracking and management system for institutions to monitor student progress and performance.',
      gradient: 'from-purple-500 via-pink-500 to-cyan-500',
      slug: 'iedutrack',
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, #00f5ff, transparent)' 
                : 'radial-gradient(circle, #a855f7, transparent)',
              x: mousePos.x * (200 + i * 100) - 150,
              y: mousePos.y * (200 + i * 100) - 150,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />

      <div className="container-custom relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="min-h-[40vh] flex flex-col justify-center py-12 md:py-20 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.span
              className="inline-block text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Our Portfolio
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="block text-white">Our</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto md:mx-0">
              Showcasing our innovative solutions and successful client collaborations.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg transition-all h-full min-h-[300px] flex flex-col justify-between">
                  {/* Animated Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.2 }}
                        className="w-10 h-10 border-2 border-cyan-400/50 group-hover:border-cyan-400 rounded-lg flex items-center justify-center group-hover:bg-cyan-400 transition-all"
                      >
                        <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:text-black transition-colors" />
                      </motion.div>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="text-cyan-400 text-xs font-mono uppercase tracking-wider">
                      Explore Project →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
