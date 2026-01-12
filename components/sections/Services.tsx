'use client'

import { motion } from 'framer-motion'
import { Smartphone, Cloud, Globe, Code, Network, Package, Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function Services() {
  const services = [
    {
      number: '01',
      icon: Smartphone,
      title: 'App Development',
      description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals. From idea to launch, we build apps that engage and deliver results.',
      gradient: 'from-primary-500 to-primary-600',
      slug: 'app-development'
    },
    {
      number: '02',
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions for businesses of all sizes.',
      gradient: 'from-accent-500 to-accent-600',
      slug: 'saas-solutions'
    },
    {
      number: '03',
      icon: Globe,
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that not only showcase your brand but also drive conversions and customer engagement.',
      gradient: 'from-primary-500 to-accent-500',
      slug: 'website-development'
    },
    {
      number: '04',
      icon: Code,
      title: 'Software Development & Maintenance',
      description: 'We provide custom software solutions along with continuous maintenance and support to ensure your systems run smoothly and adapt to changing business needs.',
      gradient: 'from-primary-600 to-accent-500',
      slug: 'software-development-&-maintenance'
    },
    {
      number: '05',
      icon: Network,
      title: 'Blockchain Development',
      description: 'We build secure and scalable blockchain applications, smart contracts, and decentralized platforms to help businesses adopt the latest in Web3 technology.',
      gradient: 'from-accent-500 to-primary-500',
      slug: 'blockchain-development'
    },
    {
      number: '06',
      icon: Package,
      title: 'All Products Trial',
      description: 'We offer free trials for our products and solutions, giving you hands-on experience before making a full commitment.',
      gradient: 'from-primary-500 to-primary-600',
      slug: 'all-products-trial'
    },
    {
      number: '07',
      icon: Briefcase,
      title: 'IT Consulting',
      description: 'We provide expert IT consulting services to help you adopt the right technologies, optimize operations, and accelerate digital transformation.',
      gradient: 'from-accent-600 to-accent-500',
      slug: 'it-consulting'
    },
  ]

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background Effects - Static for performance */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/3 rounded-full filter blur-3xl pointer-events-none" />
      
      {/* 3D Code Blocks Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 hidden xl:block pointer-events-none">
        <Scene type="code" />
      </div>
      
      <div className="container-custom relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
              Our Service
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to transform your business
            </p>
          </div>
        </ScrollReveal>

        {/* Unique Zigzag Layout */}
        <div className="space-y-8">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <ScrollReveal 
                key={service.number} 
                direction={isEven ? 'left' : 'right'} 
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.02, x: isEven ? -10 : 10 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center group`}
                >
                  {/* Icon & Number Section */}
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg relative`}
                    >
                      <Icon className="w-12 h-12 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border border-primary-500/30">
                        <span className="text-xs font-bold text-primary-400">{service.number}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center md:text-left`}>
                    <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                      {service.description}
                    </p>
                    <MagneticButton strength={0.2}>
                      <Link
                        href={`/services/${service.slug}`}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </MagneticButton>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
