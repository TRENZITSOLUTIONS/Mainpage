'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  
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

  const y = useTransform(scrollYProgress, [0, 1], [0, -500])

  return (
    <div className="pt-20 min-h-screen bg-black relative overflow-hidden">
      {/* Mesmerizing Background - Particle Field */}
      <div className="fixed inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: Math.random() > 0.5 ? '#00f5ff' : '#ff00ff',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mousePos.x * 100,
              y: y.get() + mousePos.y * 100,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Animated Grid Overlay */}
      <motion.div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          x: mousePos.x * 100,
          y: y.get() + mousePos.y * 100,
        }}
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="container-custom relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono">
            <ArrowLeft className="w-5 h-5" />
            <span>← HOME</span>
          </Link>
        </motion.div>

        {/* Hero - Full Screen */}
        <div className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mb-32"
          >
            <motion.span
              className="inline-block text-cyan-400 text-sm font-mono tracking-[0.5em] uppercase mb-8"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              [ OUR PORTFOLIO ]
            </motion.span>
            <h1 className="text-9xl md:text-[15rem] lg:text-[20rem] font-black leading-[0.8]">
              <motion.span
                className="block text-white"
                animate={{
                  textShadow: [
                    '0 0 40px rgba(0, 245, 255, 0.6)',
                    '0 0 80px rgba(0, 245, 255, 0.9)',
                    '0 0 40px rgba(0, 245, 255, 0.6)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                OUR
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                PROJECTS
              </motion.span>
            </h1>
          </motion.div>

          {/* Projects - Immersive Cards */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-200px' }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 10, z: 100 }}
                className="group"
                style={{ perspective: '2000px' }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative min-h-[500px] bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden">
                    {/* Animated Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    {/* Floating Number */}
                    <div className="absolute top-12 right-12 text-[12rem] font-black text-white/5 group-hover:text-cyan-400/20 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="relative z-10 p-16 flex flex-col justify-between h-full min-h-[500px]">
                      <div>
                        <h3 className="text-7xl md:text-8xl font-black text-white mb-12 group-hover:text-cyan-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-2xl text-gray-400 leading-relaxed max-w-4xl">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-16">
                        <motion.span
                          className="text-cyan-400 font-mono text-lg uppercase tracking-wider"
                          whileHover={{ x: 10 }}
                        >
                          Explore Project
                        </motion.span>
                        <motion.div
                          whileHover={{ x: 20, rotate: 45, scale: 1.2 }}
                          className="w-16 h-16 border-2 border-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 transition-colors"
                        >
                          <ExternalLink className="w-8 h-8 text-cyan-400 group-hover:text-black transition-colors" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
