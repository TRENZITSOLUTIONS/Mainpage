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
      icon: Smartphone,
      title: 'App Development',
      description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals.',
      gradient: 'from-cyan-500 to-blue-500',
      slug: 'app-development',
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions.',
      gradient: 'from-purple-500 to-pink-500',
      slug: 'saas-solutions',
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that showcase your brand and drive conversions.',
      gradient: 'from-blue-500 to-cyan-500',
      slug: 'website-development',
    },
  ]

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Rotating Background Element */}
      <motion.div
        style={{ rotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/10 rounded-full"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-right mb-32"
        >
          <div className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-6 inline-block">
            [ OUR SERVICES ]
          </div>
          <h2 className="text-7xl md:text-9xl font-black leading-[0.9]">
            <span className="block text-white">What We</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
        </motion.div>

        {/* Services - Staggered Cards */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 20 : -20 }}
                className="group"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="relative p-12 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    
                    <div className="relative z-10 flex items-center gap-12">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center`}
                      >
                        <Icon className="w-16 h-16 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-5xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
                          {service.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 10, rotate: 45 }}
                        className="text-5xl text-white/20 group-hover:text-cyan-400 transition-colors"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
