'use client'

import { motion } from 'framer-motion'
import { Smartphone, Cloud, Globe, Code, Network, Package, Briefcase } from 'lucide-react'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'We design and develop mobile applications that are user-friendly, scalable, and tailored to your business goals. From idea to launch, we build apps that engage and deliver results.',
      features: ['iOS & Android Development', 'Cross-Platform Solutions', 'UI/UX Design', 'App Store Optimization'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Cloud,
      title: 'SaaS Development',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions for businesses of all sizes.',
      features: ['Cloud Infrastructure', 'API Development', 'Subscription Management', 'Multi-tenancy'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: Globe,
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that not only showcase your brand but also drive conversions and customer engagement.',
      features: ['Responsive Design', 'SEO Optimization', 'E-commerce Solutions', 'CMS Integration'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      number: '04',
      icon: Code,
      title: 'Software Development & Maintenance',
      description: 'We provide custom software solutions along with continuous maintenance and support to ensure your systems run smoothly and adapt to changing business needs.',
      features: ['Custom Software', 'System Integration', 'Maintenance & Support', 'Legacy Modernization'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      number: '05',
      icon: Network,
      title: 'Blockchain Development',
      description: 'We build secure and scalable blockchain applications, smart contracts, and decentralized platforms to help businesses adopt the latest in Web3 technology.',
      features: ['Smart Contracts', 'DApps Development', 'NFT Solutions', 'DeFi Platforms'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      number: '06',
      icon: Package,
      title: 'All Products Trial',
      description: 'We offer free trials for our products and solutions, giving you hands-on experience before making a full commitment.',
      features: ['Free Trials', 'Demo Access', 'Proof of Concept', 'Risk-Free Testing'],
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      number: '07',
      icon: Briefcase,
      title: 'IT Consulting',
      description: 'We provide expert IT consulting services to help you adopt the right technologies, optimize operations, and accelerate digital transformation.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Architecture Design'],
      gradient: 'from-rose-500 to-pink-500',
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        {/* 3D Network Visualization */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 hidden lg:block pointer-events-none">
          <Scene type="network" />
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
              Our Services
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 glow-text">
              Best Service
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        
        {/* 3D Code Blocks Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 hidden xl:block pointer-events-none">
          <Scene type="code" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 animated-border">
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg glow-effect`}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>
                      <div className="mt-4 text-center">
                        <span className="text-4xl font-bold text-slate-700">{service.number}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} glow-effect`} />
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <div className="mt-12 border-b border-slate-700" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
