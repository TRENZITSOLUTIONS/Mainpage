'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Phone, Mail, Instagram, ArrowRight, Sparkles, Zap, Code, Cloud, Globe, Smartphone, Network, Package, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    { icon: Smartphone, name: 'App Development', color: 'cyan' },
    { icon: Cloud, name: 'SaaS Solutions', color: 'purple' },
    { icon: Globe, name: 'Website Development', color: 'blue' },
    { icon: Code, name: 'Software Development', color: 'pink' },
    { icon: Network, name: 'Blockchain', color: 'green' },
    { icon: Package, name: 'Product Trials', color: 'orange' },
    { icon: Briefcase, name: 'IT Consulting', color: 'indigo' },
  ]

  const projects = [
    { name: 'DigiOcean', desc: 'Digital infrastructure management' },
    { name: 'Jewellry', desc: 'E-commerce platform' },
    { name: 'Gym App', desc: 'Fitness tracking solution' },
    { name: 'Iedutrack', desc: 'Educational management system' },
  ]

  const stats = [
    { value: '50+', label: 'Team Members' },
    { value: '100+', label: 'Projects' },
    { value: '200+', label: 'Happy Clients' },
  ]

  const contacts = [
    { icon: Mail, value: 'contact@trenztechnologies.com', link: 'mailto:contact@trenztechnologies.com' },
    { icon: Phone, value: '9944865057', link: 'tel:+919944865057' },
    { icon: Instagram, value: '@trenztechnologies', link: 'https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz' },
  ]

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll bg-black">
      {/* Fixed Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${400 + i * 300}px`,
              height: `${400 + i * 300}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, #00f5ff, transparent)' 
                : i % 3 === 1
                ? 'radial-gradient(circle, #a855f7, transparent)'
                : 'radial-gradient(circle, #3b82f6, transparent)',
              x: mousePos.x * (400 + i * 200) - 200,
              y: mousePos.y * (400 + i * 200) - 200,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.span
              className="inline-block text-cyan-400 text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Digital Innovation Studio
            </motion.span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6">
              <motion.span
                className="block text-white mb-2"
                animate={{
                  textShadow: [
                    '0 0 30px rgba(0, 245, 255, 0.5)',
                    '0 0 60px rgba(0, 245, 255, 0.8)',
                    '0 0 30px rgba(0, 245, 255, 0.5)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                TRENZ
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                TECHNOLOGIES
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Transforming ideas into powerful digital solutions. We craft SaaS platforms, websites, and software that drive growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats - Floating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mt-20"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-cyan-400 uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services - Horizontal Scroll Section */}
      <section className="relative min-h-screen flex items-center px-4 py-20">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              What We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Build</span>
            </h2>
            <p className="text-lg text-gray-400">Comprehensive digital solutions for your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group p-8 bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects - Showcase */}
      <section className="relative min-h-screen flex items-center px-4 py-20">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg text-gray-400">Showcasing innovation and excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-10 bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </div>
                <p className="text-gray-400 text-lg">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Minimal */}
      <section className="relative min-h-screen flex items-center px-4 py-20">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              We Are <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Trenz</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Founded in 2020, we specialize in creating SaaS applications, websites, and software products tailored for businesses of all sizes.
            </p>
            <p className="text-lg text-gray-400">
              Our goal is to empower companies with innovative technology that drives growth, efficiency, and long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact - Final Section */}
      <section id="contact" className="relative min-h-screen flex items-center px-4 py-20">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-gray-400">Ready to transform your ideas into reality?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contacts.map((contact, i) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={i}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group p-8 bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Contact</div>
                  <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors break-all">
                    {contact.value}
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
