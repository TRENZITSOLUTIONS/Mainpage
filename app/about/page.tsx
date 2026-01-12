'use client'

import { motion } from 'framer-motion'
import { Target, Users, Zap, Award, Rocket, Code } from 'lucide-react'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function AboutPage() {
  const values = [
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
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every project we deliver meets the highest standards of quality, ensuring long-term success for our clients.',
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      description: 'We help businesses scale and grow through innovative technology solutions and strategic digital transformation.',
    },
    {
      icon: Code,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and frameworks to build solutions that are future-proof and scalable.',
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        {/* 3D Database Visualization */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 hidden lg:block pointer-events-none">
          <Scene type="database" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-400 text-sm font-semibold mb-4 glow-effect"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 glow-text">
              Unlock your business potential with us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Trenz Software IT Solutions, we specialize in creating SaaS applications, websites, and
              software products tailored for businesses of all sizes. Our goal is to empower companies
              with innovative technology that drives growth, efficiency, and long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Our History
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 glow-text">
              Where Innovation Meets Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions
              has grown into a trusted partner for companies across industries. From our early days of
              crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and
              enterprise software, we have consistently focused on innovation, quality, and client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        
        {/* 3D Data Flow Background */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 hidden xl:block pointer-events-none">
          <Scene type="dataflow" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 animated-border"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center mb-6 glow-effect"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
