'use client'

import { motion } from 'framer-motion'
import { Rocket, Award } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import ParallaxSection from '@/components/animations/ParallaxSection'

export default function History() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
              Our History
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6 glow-text">
              Where Innovation Meets Excellence
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions
              has grown into a trusted partner for companies across industries. From our early days of
              crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and
              enterprise software, we have consistently focused on innovation, quality, and client success.
            </p>
          </div>
        </ScrollReveal>

        {/* Creative Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <ParallaxSection speed={0.2}>
            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative p-10 bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-500 h-full"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mb-8 glow-effect"
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 text-white">Visionary Beginnings</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Visionary Beginnings – Delivering end-to-end digital solutions that empower businesses
                  with excellence, creativity, and cutting-edge technology.
                </p>
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScrollReveal>
          </ParallaxSection>

          <ParallaxSection speed={-0.2}>
            <ScrollReveal direction="right" delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="group relative p-10 bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-500 h-full"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mb-8 glow-effect"
                >
                  <Award className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 text-white">Expert Engineers</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our team of skilled developers and innovators build scalable SaaS platforms, websites,
                  and apps tailored to drive business growth and digital transformation.
                </p>
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </div>
    </section>
  )
}
