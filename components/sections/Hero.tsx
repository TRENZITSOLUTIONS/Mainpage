'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import ParticleBackground from '@/components/Particles'
import ScrollReveal from '@/components/animations/ScrollReveal'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Minimal Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.015]" />
      <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-primary-500/3 rounded-full filter blur-[150px] pointer-events-none" />
      
      {/* Subtle Particles */}
      <div className="absolute inset-0 opacity-20">
        <ParticleBackground />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-12 gap-6 min-h-screen items-center py-20">
          {/* Left Side - Large Text */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <span>Digital Innovation Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight"
            >
              <span className="block text-white">We</span>
              <span className="block gradient-text">Bridge</span>
              <span className="block text-white">Vision</span>
              <span className="block text-gray-600">to Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed"
            >
              Empowering businesses with innovative SaaS applications, websites, and software solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-primary-500/20 hover:shadow-xl transition-all"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent text-gray-300 rounded-lg font-semibold border-2 border-gray-700 hover:border-primary-500/50 hover:text-white transition-all"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Creative Visual */}
          <div className="col-span-12 lg:col-span-5 relative hidden lg:block">
            <motion.div
              style={{ y }}
              className="relative h-[600px]"
            >
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute top-0 right-0 w-64 p-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 shadow-2xl"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <div className="w-2 h-2 rounded-full bg-accent-500" />
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 bg-primary-500/30 rounded w-full" />
                  <div className="h-1.5 bg-gray-800 rounded w-3/4" />
                  <div className="h-1.5 bg-gray-800 rounded w-5/6" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-20 left-0 w-56 p-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 shadow-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-4 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 bg-accent-500/30 rounded w-full" />
                  <div className="h-1.5 bg-gray-800 rounded w-2/3" />
                </div>
              </motion.div>

              {/* Center Large Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl border border-primary-500/20 backdrop-blur-sm"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-black gradient-text">VS</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500/20 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
