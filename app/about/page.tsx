'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Target, Zap, Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

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

  return (
    <div className="pt-20 min-h-screen bg-black relative overflow-hidden">
      {/* Mesmerizing Background - 3D Layers */}
      <div className="fixed inset-0">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: `${500 + i * 300}px`,
              height: `${500 + i * 300}px`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, #00f5ff, #0066ff)' 
                : 'radial-gradient(circle, #ff00ff, #ff0066)',
              x: mousePos.x * (300 + i * 200) - 250,
              y: mousePos.y * (300 + i * 200) - 250 + y.get(),
              rotate: rotate.get() + i * 45,
            }}
            animate={{
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated Grid */}
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
      }} />

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

        {/* Hero Section - Full Screen Typography */}
        <div className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mb-20"
          >
            <motion.span
              className="inline-block text-cyan-400 text-sm font-mono tracking-[0.5em] uppercase mb-8"
              animate={{
                opacity: [0.5, 1, 0.5],
                letterSpacing: ['0.5em', '0.7em', '0.5em'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              [ ABOUT US ]
            </motion.span>
            <h1 className="text-9xl md:text-[15rem] lg:text-[20rem] font-black leading-[0.8] mb-12">
              <motion.span
                className="block text-white"
                animate={{
                  textShadow: [
                    '0 0 30px rgba(0, 245, 255, 0.5)',
                    '0 0 60px rgba(0, 245, 255, 0.8)',
                    '0 0 30px rgba(0, 245, 255, 0.5)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                WE ARE
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                TRENZ
              </motion.span>
            </h1>
          </motion.div>

          {/* Main Content - Split Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-3xl text-gray-300 leading-relaxed mb-8">
                At Trenz Software IT Solutions, we specialize in creating SaaS applications, websites, and
                software products tailored for businesses of all sizes.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Our goal is to empower companies with innovative technology that drives growth, efficiency, and long-term success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="space-y-6"
            >
              {[
                { label: 'Founded', value: '2020' },
                { label: 'Team Size', value: '50+' },
                { label: 'Projects', value: '100+' },
                { label: 'Clients', value: '200+' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + i * 0.1 }}
                  className="flex items-center justify-between border-b border-cyan-500/20 pb-4"
                >
                  <span className="text-gray-400 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-5xl font-black text-cyan-400">{stat.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Features - Vertical Scroll Animation */}
          <div className="space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: '-200px' }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  whileHover={{ scale: 1.05, x: 50 }}
                  className="flex gap-12 items-start group"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
                  >
                    <Icon className="w-16 h-16 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-6xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-2xl text-gray-400 leading-relaxed max-w-3xl">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* History Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-40"
          >
            <div className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-8">
              [ OUR HISTORY ]
            </div>
            <h2 className="text-7xl md:text-9xl font-black leading-[0.9] mb-12">
              <span className="block text-white">Where Innovation</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Meets Excellence
              </span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl">
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions
              has grown into a trusted partner for companies across industries. From our early days of
              crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and
              enterprise software, we have consistently focused on innovation, quality, and client success.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
