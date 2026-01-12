'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Target, Zap, Users } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const features = [
    {
      icon: Target,
      title: 'Visionary Beginnings',
      description: 'Delivering end-to-end digital solutions that empower businesses with excellence, creativity, and cutting-edge technology.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Users,
      title: 'Expert Engineers',
      description: 'Our team of skilled developers and innovators build scalable SaaS platforms, websites, and apps tailored to drive business growth.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'We consistently focus on innovation, quality, and client success across all our projects and solutions.',
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
      </motion.div>

      {/* Floating Orbs */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl opacity-20"
          style={{
            width: `${300 + i * 150}px`,
            height: `${300 + i * 150}px`,
            background: i === 0 
              ? 'radial-gradient(circle, #00f5ff, transparent)' 
              : i === 1 
              ? 'radial-gradient(circle, #ff00ff, transparent)'
              : 'radial-gradient(circle, #00ff88, transparent)',
            top: `${20 + i * 30}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

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
            [ ABOUT US ]
          </div>
          <h2 className="text-7xl md:text-9xl font-black leading-[0.9] mb-8">
            <span className="block text-white">Unlock Your</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Business Potential
            </span>
          </h2>
        </motion.div>

        {/* Main Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-300 leading-relaxed max-w-4xl mb-32"
        >
          At Trenz Software IT Solutions, we specialize in creating SaaS applications, websites, and
          software products tailored for businesses of all sizes. Our goal is to empower companies
          with innovative technology that drives growth, efficiency, and long-term success.
        </motion.p>

        {/* Features - 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -20, rotateY: 5 }}
                className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
                style={{ perspective: '1000px' }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
