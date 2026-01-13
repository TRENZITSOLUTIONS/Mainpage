'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone, Mail, Instagram, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@trenztechnologies.com',
      link: 'mailto:contact@trenztechnologies.com',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '9944865057',
      link: 'tel:+919944865057',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@trenztechnologies',
      link: 'https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz',
      gradient: 'from-pink-500 to-purple-500',
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, #00f5ff, transparent)' 
                : i % 3 === 1
                ? 'radial-gradient(circle, #a855f7, transparent)'
                : 'radial-gradient(circle, #3b82f6, transparent)',
              x: mousePos.x * (300 + i * 100) - 200,
              y: mousePos.y * (300 + i * 100) - 200,
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

        {/* Main Content */}
        <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
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
              Get in Touch
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="block text-white">Contact</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trenz Technologies
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          {/* Contact Cards - Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group relative block"
                >
                  <div className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all overflow-hidden rounded-lg">
                    {/* Hover Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-white mb-2 text-sm md:text-base uppercase tracking-wider">
                          {info.title}
                        </h3>
                        <p className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base break-all">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Bottom Spacer */}
          <div className="mt-20" />
        </div>
      </div>
    </div>
  )
}
