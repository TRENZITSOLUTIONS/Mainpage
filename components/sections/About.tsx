'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Users } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Visionary Beginnings',
      description: 'Delivering end-to-end digital solutions that empower businesses with excellence, creativity, and cutting-edge technology.',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      icon: Users,
      title: 'Expert Engineers',
      description: 'Our team of skilled developers and innovators build scalable SaaS platforms, websites, and apps tailored to drive business growth and digital transformation.',
      gradient: 'from-accent-500 to-accent-600',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'We consistently focus on innovation, quality, and client success across all our projects and solutions.',
      gradient: 'from-primary-500 to-accent-500',
    },
  ]

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/3 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6">
              Unlock your business potential with us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              At Trenz Software IT Solutions, we specialize in creating SaaS applications, websites, and
              software products tailored for businesses of all sizes. Our goal is to empower companies
              with innovative technology that drives growth, efficiency, and long-term success.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollReveal 
                key={feature.title} 
                direction="up" 
                delay={0.2 + index * 0.1}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-primary-500/30 transition-all duration-300 h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
