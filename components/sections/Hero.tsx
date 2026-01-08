'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'
import TextReveal from '@/components/animations/TextReveal'
import BlobAnimation from '@/components/animations/BlobAnimation'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Blobs */}
      <BlobAnimation className="top-20 left-10" color="#0ea5e9" size={500} />
      <BlobAnimation className="top-40 right-20" color="#8b5cf6" size={400} />
      <BlobAnimation className="bottom-20 left-1/2" color="#ec4899" size={450} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* 3D Network Visualization Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-40 hidden lg:block pointer-events-none"
      >
        <Scene type="network" />
      </motion.div>
      
      {/* 3D Geometric Shapes Background */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]), opacity }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-30 hidden xl:block pointer-events-none"
      >
        <Scene type="geometric" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Text Content */}
          <div className="text-left lg:text-left space-y-8">
            <ScrollReveal direction="down" delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-400 text-sm font-semibold mb-4 glow-effect"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Transforming Businesses Through Technology</span>
              </motion.div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <TextReveal text="We Bridge" className="block" delay={0.3} />
                  <span className="gradient-text glow-text block mt-2">
                    <TextReveal text="Vision to Reality" className="block" delay={0.5} />
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Empowering businesses with innovative SaaS applications, websites, and software solutions
                  that drive growth, efficiency, and long-term success.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton strength={0.5}>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold text-lg flex items-center space-x-2 glow-effect hover:shadow-2xl hover:shadow-primary-500/50 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </MagneticButton>
                
                <MagneticButton strength={0.3}>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-primary-500 hover:bg-primary-500/10 transition-all animated-border"
                    >
                      Our Services
                    </motion.button>
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Stats Preview */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className="flex items-center space-x-8 pt-8 border-t border-slate-700">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* 3D Database Visualization for Mobile/Tablet */}
          <div className="w-full h-96 lg:hidden">
            <Scene type="database" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center glow-effect cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 right-1/4 hidden xl:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary-500/30">
          <Zap className="w-8 h-8 text-primary-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 hidden xl:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      >
        <div className="w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-purple-500/30">
          <Rocket className="w-8 h-8 text-purple-400" />
        </div>
      </motion.div>
    </section>
  )
}
