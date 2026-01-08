'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Users } from 'lucide-react'
import dynamic from 'next/dynamic'
import ScrollReveal from '@/components/animations/ScrollReveal'
import ParallaxSection from '@/components/animations/ParallaxSection'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Visionary Beginnings',
      description: 'Delivering end-to-end digital solutions that empower businesses with excellence, creativity, and cutting-edge technology.',
    },
    {
      icon: Users,
      title: 'Expert Engineers',
      description: 'Our team of skilled developers and innovators build scalable SaaS platforms, websites, and apps tailored to drive business growth and digital transformation.',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'We consistently focus on innovation, quality, and client success across all our projects and solutions.',
    },
  ]

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* 3D Database Visualization Background */}
      <ParallaxSection speed={0.3}>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 hidden lg:block pointer-events-none">
          <Scene type="database" />
        </div>
      </ParallaxSection>
      
      <div className="container-custom relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 glow-text">
              Unlock your business potential with us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Trenz Software IT Solutions, we specialize in creating SaaS applications, websites, and
              software products tailored for businesses of all sizes. Our goal is to empower companies
              with innovative technology that drives growth, efficiency, and long-term success.
            </p>
          </div>
        </ScrollReveal>

        {/* Creative Feature Cards with Diagonal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollReveal 
                key={feature.title} 
                direction={index === 1 ? 'up' : index === 0 ? 'left' : 'right'} 
                delay={index * 0.2}
              >
                <motion.div
                  whileHover={{ y: -15, rotateZ: index % 2 === 0 ? 2 : -2 }}
                  className="group relative p-8 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 transition-all duration-500 animated-border h-full"
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mb-6 glow-effect"
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
