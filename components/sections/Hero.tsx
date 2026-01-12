'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Create transforms for background orbs
  const orb0X = useTransform(x, (value) => {
    if (globalThis.window === undefined) return 0
    return (value / globalThis.window.innerWidth) * 200 - 200
  })
  const orb0Y = useTransform(y, (value) => {
    if (globalThis.window === undefined) return 0
    return (value / globalThis.window.innerHeight) * 200 - 200
  })
  const orb1X = useTransform(x, (value) => {
    if (globalThis.window === undefined) return 0
    return (value / globalThis.window.innerWidth) * 300 - 300
  })
  const orb1Y = useTransform(y, (value) => {
    if (globalThis.window === undefined) return 0
    return (value / globalThis.window.innerHeight) * 300 - 300
  })
  const orb2X = useTransform(x, (value) => {
    if (globalThis.window === undefined) return 0
    return (value / globalThis.window.innerWidth) * 400 - 400
  })
  const orb2Y = useTransform(y, (value) => {
    if (globalThis.window === undefined) return 0
    return (value / globalThis.window.innerHeight) * 400 - 400
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    globalThis.addEventListener('mousemove', handleMouseMove)
    return () => globalThis.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const orbConfigs = [
    {
      id: 'orb-0',
      bg: 'radial-gradient(circle, #00f5ff, #0066ff)',
      x: orb0X,
      y: orb0Y,
      size: 400,
    },
    {
      id: 'orb-1',
      bg: 'radial-gradient(circle, #ff00ff, #ff0066)',
      x: orb1X,
      y: orb1Y,
      size: 600,
    },
    {
      id: 'orb-2',
      bg: 'radial-gradient(circle, #00ff88, #00ccff)',
      x: orb2X,
      y: orb2Y,
      size: 800,
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black cursor-none">
      {/* Custom Cursor */}
      <motion.div
        style={{
          x: useTransform(x, (value) => value - 10),
          y: useTransform(y, (value) => value - 10),
        }}
        className="fixed w-5 h-5 rounded-full bg-cyan-400 pointer-events-none z-50 mix-blend-difference"
      />

      {/* Animated Background - Fluid Morphing */}
      <div className="absolute inset-0 overflow-hidden">
        {orbConfigs.map((orb, i) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: orb.bg,
              x: orb.x,
              y: orb.y,
            }}
            animate={{
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      <div className="container-custom relative z-10 w-full">
        <div className="min-h-screen flex flex-col justify-center py-20">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.span
              className="inline-block text-cyan-400 text-sm font-mono tracking-[0.5em] uppercase"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              [ TRENZ SOFTWARE ]
            </motion.span>
          </motion.div>

          {/* Main Headline - Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-[0.85] mb-8 relative"
          >
            <motion.span
              className="block text-white"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 245, 255, 0.5)',
                  '0 0 40px rgba(0, 245, 255, 0.8)',
                  '0 0 20px rgba(0, 245, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              WE BUILD
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
              DIGITAL
            </motion.span>
            <motion.span
              className="block text-white/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              EXPERIENCES
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Transforming ideas into powerful digital solutions. We craft SaaS platforms, 
            websites, and software that don&apos;t just work—they mesmerize.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap gap-6"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Start Your Project</span>
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold text-lg hover:bg-cyan-400/10 transition-all"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex flex-wrap gap-12"
          >
            {[
              { num: '50+', label: 'Team Members' },
              { num: '100+', label: 'Projects' },
              { num: '200+', label: 'Happy Clients' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + i * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-cyan-400 mb-2">{stat.num}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-cyan-400 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
