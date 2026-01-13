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

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@trenztechnologies.com',
      link: 'mailto:contact@trenztechnologies.com',
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
      delay: 0,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9944865057',
      link: 'tel:+919944865057',
      gradient: 'from-purple-500 via-pink-500 to-cyan-500',
      delay: 0.2,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@trenztechnologies',
      link: 'https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz',
      gradient: 'from-pink-500 via-purple-500 to-cyan-500',
      delay: 0.4,
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-black relative overflow-hidden">
      {/* Mesmerizing Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large Morphing Orbs */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${400 + i * 300}px`,
              height: `${400 + i * 300}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(0, 245, 255, 0.3), transparent)' 
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
              x: mousePos.x * (500 + i * 200) - (400 + i * 300) / 2,
              y: mousePos.y * (500 + i * 200) - (400 + i * 300) / 2,
            }}
            animate={{
              scale: [1, 1.3, 0.9, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated Grid Lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
            style={{
              left: `${(i * 5)}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 245, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
      }} />

      <div className="container-custom relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Main Content - Centered */}
        <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center py-20">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.span
              className="inline-block text-cyan-400 text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-6"
              animate={{
                opacity: [0.5, 1, 0.5],
                letterSpacing: ['0.3em', '0.5em', '0.3em'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Get in Touch
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6">
              <motion.span
                className="block text-white mb-2"
                animate={{
                  textShadow: [
                    '0 0 30px rgba(0, 245, 255, 0.5)',
                    '0 0 60px rgba(0, 245, 255, 0.8)',
                    '0 0 30px rgba(0, 245, 255, 0.5)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                Let's
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Connect
              </motion.span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-6">
              Ready to transform your ideas into reality? Reach out to us through any of these channels.
            </p>
          </motion.div>

          {/* Contact Cards - Staggered Animation */}
          <div className="w-full max-w-4xl space-y-6 md:space-y-8">
            {contacts.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -90 : 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: contact.delay }}
                  whileHover={{ scale: 1.02, y: -8, rotateY: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group block"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative p-8 md:p-12 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-2xl border-2 border-cyan-500/30 hover:border-cyan-500/70 rounded-2xl overflow-hidden transition-all duration-500">
                    {/* Animated Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    {/* Glowing Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: '0 0 40px rgba(0, 245, 255, 0.5)',
                      }}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                      >
                        <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="text-xs md:text-sm font-mono text-cyan-400 uppercase tracking-widest mb-2">
                          {contact.label}
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors break-all">
                          {contact.value}
                        </div>
                      </div>

                      {/* Arrow Indicator */}
                      <motion.div
                        className="hidden md:flex text-4xl text-cyan-400/50 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all"
                        whileHover={{ x: 10, rotate: 45 }}
                      >
                        →
                      </motion.div>
                    </div>

                    {/* Hover Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
