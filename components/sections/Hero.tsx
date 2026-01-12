'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Zap } from 'lucide-react'
import ParticleBackground from '@/components/Particles'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      
      {/* Gradient Orbs - Subtle */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      {/* Particle Background - Lighter */}
      <div className="absolute inset-0 opacity-30">
        <ParticleBackground />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <ScrollReveal direction="down" delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"
              >
                <Code className="w-4 h-4" />
                <span>Digital Innovation Experts</span>
              </motion.div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block text-white"
                  >
                    We Bridge
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="block gradient-text mt-2"
                  >
                    Vision to Reality
                  </motion.span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                  Empowering businesses with innovative SaaS applications, websites, and software solutions
                  that drive growth, efficiency, and long-term success.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticButton strength={0.3}>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </MagneticButton>
                
                <MagneticButton strength={0.2}>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-lg border-2 border-primary-500/30 hover:border-primary-500/50 hover:bg-primary-500/5 transition-all"
                    >
                      Our Services
                    </motion.button>
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Stats Preview */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className="flex items-center gap-12 pt-8 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-500">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">200+</div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Animated Grid Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-3xl blur-3xl" />
              
              {/* Card Stack Effect */}
              <div className="relative space-y-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                    <div className="w-3 h-3 rounded-full bg-accent-500" />
                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary-500/20 rounded w-3/4" />
                    <div className="h-2 bg-gray-800 rounded w-full" />
                    <div className="h-2 bg-gray-800 rounded w-5/6" />
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 shadow-2xl"
                >
                  <Zap className="w-12 h-12 text-primary-500 mb-4" />
                  <div className="space-y-2">
                    <div className="h-2 bg-accent-500/20 rounded w-2/3" />
                    <div className="h-2 bg-gray-800 rounded w-full" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex justify-center p-2"
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
