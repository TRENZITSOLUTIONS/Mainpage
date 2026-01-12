'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Cloud, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const services = [
    {
      number: '01',
      icon: Smartphone,
      title: 'App Development',
      description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals.',
      gradient: 'from-primary-500 to-primary-600',
      slug: 'app-development',
    },
    {
      number: '02',
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions.',
      gradient: 'from-accent-500 to-accent-600',
      slug: 'saas-solutions',
    },
    {
      number: '03',
      icon: Globe,
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that showcase your brand and drive conversions.',
      gradient: 'from-primary-500 to-accent-500',
      slug: 'website-development',
    },
  ]

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]),
        }}
        className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-accent-500/10 rounded-full filter blur-[200px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Sticky Title */}
        <div className="sticky top-20 mb-32">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-right"
          >
            <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4">
              <span>Our Service</span>
            </div>
            <h2 className="text-8xl md:text-9xl font-black leading-[0.85]">
              <span className="block text-white">What We</span>
              <span className="block gradient-text">Offer</span>
            </h2>
          </motion.div>
        </div>

        {/* Services - Pin Scroll Effect */}
        <div className="space-y-40">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-200px' }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                {/* Large Visual */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: isEven ? 5 : -5 }}
                  className={`flex-shrink-0 w-full lg:w-2/5`}
                >
                  <div className={`relative aspect-square bg-gradient-to-br ${service.gradient} rounded-3xl p-12 flex flex-col items-center justify-center overflow-hidden`}>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 opacity-10"
                    >
                      <div className="absolute inset-0 border-4 border-white/20 rounded-full" style={{ transform: 'scale(1.5)' }} />
                      <div className="absolute inset-0 border-4 border-white/20 rounded-full" style={{ transform: 'scale(2)' }} />
                    </motion.div>
                    <Icon className="w-32 h-32 text-white relative z-10" />
                    <div className="absolute bottom-8 right-8 w-16 h-16 bg-black/30 rounded-2xl flex items-center justify-center backdrop-blur-sm relative z-10">
                      <span className="text-2xl font-black text-white">{service.number}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center lg:text-left`}
                >
                  <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold text-lg hover:shadow-2xl transition-all`}
                    >
                      Explore Service
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
