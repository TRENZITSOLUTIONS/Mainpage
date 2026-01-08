'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Users } from 'lucide-react'
import dynamic from 'next/dynamic'

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
      description: 'Our team of skilled developers and innovators build scalable SaaS platforms, websites, and apps tailored to drive business growth.',
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
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 hidden lg:block pointer-events-none">
        <Scene type="database" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 glow-text">
            Unlock your business potential with us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Trenz Software IT Solutions, we specialize in creating SaaS applications, websites, and
            software products tailored for businesses of all sizes. Our goal is to empower companies
            with innovative technology that drives growth, efficiency, and long-term success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 animated-border"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center mb-6 glow-effect">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

