'use client'

import { motion } from 'framer-motion'
import { Smartphone, Cloud, Globe, Code, Network, Package, Briefcase } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function Services() {
  const services = [
    {
      number: '01',
      icon: Smartphone,
      title: 'App Development',
      description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals. From idea to launch, we build apps that engage and deliver results.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions for businesses of all sizes.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: Globe,
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that not only showcase your brand but also drive conversions and customer engagement.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      number: '04',
      icon: Code,
      title: 'Software Development & Maintenance',
      description: 'We provide custom software solutions along with continuous maintenance and support to ensure your systems run smoothly and adapt to changing business needs.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      number: '05',
      icon: Network,
      title: 'Blockchain Development',
      description: 'We build secure and scalable blockchain applications, smart contracts, and decentralized platforms to help businesses adopt the latest in Web3 technology.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      number: '06',
      icon: Package,
      title: 'All Products Trial',
      description: 'We offer free trials for our products and solutions, giving you hands-on experience before making a full commitment.',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      number: '07',
      icon: Briefcase,
      title: 'IT Consulting',
      description: 'We provide expert IT consulting services to help you adopt the right technologies, optimize operations, and accelerate digital transformation.',
      gradient: 'from-rose-500 to-pink-500',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      
      {/* 3D Code Blocks Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 hidden xl:block pointer-events-none">
        <Scene type="code" />
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
            Our Service
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 glow-text">
            What We Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 overflow-hidden animated-border"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Number Badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-6xl font-bold text-slate-700 group-hover:text-primary-500/30 transition-colors">
                    {service.number}
                  </span>
                </div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg glow-effect`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors group-hover:translate-x-2 transition-transform"
                  >
                    Learn More
                    <span className="ml-2">→</span>
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

