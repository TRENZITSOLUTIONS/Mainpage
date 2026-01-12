'use client'

import { motion } from 'framer-motion'
import { Smartphone, Cloud, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      number: '01',
      icon: Smartphone,
      title: 'App Development',
      description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals.',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      number: '02',
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions.',
      gradient: 'from-accent-500 to-accent-600',
    },
    {
      number: '03',
      icon: Globe,
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that showcase your brand and drive conversions.',
      gradient: 'from-primary-500 to-accent-500',
    },
  ]

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.01]" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-500/3 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4">
            <span>Our Service</span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9]">
            <span className="block text-white">What We</span>
            <span className="block gradient-text">Offer</span>
          </h2>
        </motion.div>

        {/* Services - Asymmetric Layout */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Visual Element */}
                <div className={`flex-shrink-0 ${isEven ? 'lg:w-1/3' : 'lg:w-1/3'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
                    className={`relative w-full aspect-square bg-gradient-to-br ${service.gradient} rounded-3xl p-8 flex items-center justify-center`}
                  >
                    <Icon className="w-24 h-24 text-white opacity-80" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-black/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <span className="text-lg font-bold text-white">{service.number}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center lg:text-left`}>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed mb-6 max-w-2xl">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}
                    >
                      Explore Service
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
