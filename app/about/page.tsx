'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Target, Zap, Users, ArrowLeft, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    {
      icon: Target,
      title: 'Visionary Beginnings',
      description: 'Delivering end-to-end digital solutions that empower businesses with excellence, creativity, and cutting-edge technology.',
    },
    {
      icon: Users,
      title: 'Expert Engineers',
      description: 'Our team of skilled developers and innovators build scalable SaaS platforms, websites, and apps tailored to drive business growth.',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'We consistently focus on innovation, quality, and client success across all our projects and solutions.',
    },
  ]

  const stats = [
    { label: 'Founded', value: '2020' },
    { label: 'Team Size', value: '50+' },
    { label: 'Projects', value: '100+' },
    { label: 'Clients', value: '200+' },
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
        <div className="min-h-[60vh] flex flex-col justify-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center md:text-left"
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
              About Us
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="block text-white">We Are</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trenz Technologies
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto md:mx-0">
              At Trenz Technologies, we specialize in creating SaaS applications, websites, and
              software products tailored for businesses of all sizes. Our goal is to empower companies 
              with innovative technology that drives growth, efficiency, and long-term success.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-cyan-500/20 rounded-lg"
              >
                <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="space-y-8 md:space-y-12 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="p-6 md:p-8 bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6">
            Our History
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            <span className="block text-white">Where Innovation</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meets Excellence
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl">
            Founded with a vision to empower businesses through technology, Trenz Technologies
            has grown into a trusted partner for companies across industries. From our early days of
            crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and
            enterprise software, we have consistently focused on innovation, quality, and client success.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
