'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Code2, Sparkles } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useTransform(y, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [10, -10])
  const rotateY = useTransform(x, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-10, 10])

  const words = ['We', 'Bridge', 'Vision', 'to', 'Reality']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-black cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Cursor Effect */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-primary-500 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: useTransform(x, (value) => value - 12),
          y: useTransform(y, (value) => value - 12),
          scale: isHovering ? 1.5 : 1,
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary-500/5"
            style={{
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 20}%`,
              width: '20%',
              height: '20%',
            }}
            animate={{
              borderColor: [
                'rgba(99, 102, 241, 0.05)',
                'rgba(168, 85, 247, 0.1)',
                'rgba(99, 102, 241, 0.05)',
              ],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-3xl"
          style={{
            width: 300 + i * 100,
            height: 300 + i * 100,
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-12 gap-6 min-h-screen items-center py-20">
          {/* Left - Text with Morphing Effect */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium"
            >
              <Code2 className="w-4 h-4" />
              <span>Digital Innovation Studio</span>
            </motion.div>

            {/* Morphing Text */}
            <div className="relative h-32 md:h-40 lg:h-48">
              {words.map((word, index) => (
                <motion.h1
                  key={word}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{
                    opacity: currentWordIndex === index ? 1 : 0,
                    y: currentWordIndex === index ? 0 : 50,
                    rotateX: currentWordIndex === index ? 0 : -90,
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute text-7xl md:text-8xl lg:text-9xl font-black leading-none"
                  style={{
                    color: index === 1 || index === 2 ? 'transparent' : 'white',
                    backgroundImage: index === 1 || index === 2 
                      ? 'linear-gradient(135deg, rgb(99, 102, 241), rgb(168, 85, 247))'
                      : 'none',
                    WebkitBackgroundClip: index === 1 || index === 2 ? 'text' : 'none',
                    backgroundClip: index === 1 || index === 2 ? 'text' : 'none',
                  }}
                >
                  {word}
                </motion.h1>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed"
            >
              Empowering businesses with innovative SaaS applications, websites, and software solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right - 3D Interactive Element */}
          <div className="col-span-12 lg:col-span-5 relative hidden lg:block">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative h-[500px] perspective-1000"
            >
              {/* 3D Card Stack */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, z: -100 }}
                  animate={{ opacity: 1, z: i * 50 }}
                  transition={{ duration: 1, delay: 0.7 + i * 0.2 }}
                  style={{
                    transform: `translateZ(${i * 50}px)`,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800 p-8 shadow-2xl"
                >
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                    <div className="w-3 h-3 rounded-full bg-accent-500" />
                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary-500/30 rounded w-full" />
                    <div className="h-2 bg-gray-800 rounded w-3/4" />
                    <div className="h-2 bg-gray-800 rounded w-5/6" />
                  </div>
                  {i === 0 && (
                    <div className="absolute bottom-8 right-8">
                      <Sparkles className="w-12 h-12 text-primary-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Animation */}
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
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
