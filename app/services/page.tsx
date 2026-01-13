'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Smartphone, Cloud, Globe, Code, Network, Package, Briefcase, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that showcase your brand and drive conversions.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'We provide custom software solutions along with continuous maintenance and support for your systems.',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Network,
      title: 'Blockchain Development',
      description: 'We build secure and scalable blockchain applications, smart contracts, and decentralized platforms.',
      color: 'from-cyan-500 to-green-500',
    },
    {
      icon: Package,
      title: 'All Products Trial',
      description: 'We offer free trials for our products and solutions, giving you hands-on experience before commitment.',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Briefcase,
      title: 'IT Consulting',
      description: 'We provide expert IT consulting services to help you adopt the right technologies and optimize operations.',
      color: 'from-pink-500 to-cyan-500',
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
              background: i % 3 === 0 
                ? 'radial-gradient(circle, #00f5ff, transparent)' 
                : i % 3 === 1
                ? 'radial-gradient(circle, #a855f7, transparent)'
                : 'radial-gradient(circle, #3b82f6, transparent)',
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
              Our Services
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="block text-white">What We</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Offer
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto md:mx-0">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg transition-all h-full">
                  {/* Hover Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
