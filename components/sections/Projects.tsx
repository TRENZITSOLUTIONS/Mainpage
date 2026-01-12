'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

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
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-primary-500/10 rounded-full"
      />
      <motion.div
        style={{
          rotate: useTransform(scrollYProgress, [0, 1], [360, 0]),
          scale: useTransform(scrollYProgress, [0, 1], [1.2, 1.8]),
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent-500/10 rounded-full"
      />

      <div className="container-custom relative z-10">
        {/* Sticky Header */}
        <div className="sticky top-20 mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4">
              <span>Complete Projects</span>
            </div>
            <h2 className="text-8xl md:text-9xl font-black leading-[0.85]">
              <span className="block text-white">Our</span>
              <span className="block gradient-text">Portfolio</span>
            </h2>
          </motion.div>
        </div>

        {/* Projects - Card Flip Effect */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const y = useTransform(scrollYProgress, [index * 0.2, (index + 1) * 0.2], [100, 0])
            const opacity = useTransform(scrollYProgress, [index * 0.2, (index + 1) * 0.2], [0, 1])
            
            return (
              <motion.div
                key={project.name}
                style={{ y, opacity }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -10 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-primary-500/50 transition-all cursor-pointer"
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    
                    <div className="relative p-12 grid grid-cols-12 gap-8 items-center">
                      {/* Number Badge */}
                      <div className="col-span-12 md:col-span-2">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-white font-black text-3xl`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="col-span-12 md:col-span-8">
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-primary-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="col-span-12 md:col-span-2 flex justify-end">
                        <motion.div
                          whileHover={{ x: 10, rotate: 45 }}
                          className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-accent-500 transition-all"
                        >
                          <ExternalLink className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
