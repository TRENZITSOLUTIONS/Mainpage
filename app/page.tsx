'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Smartphone, Cloud, Globe, Mail, Phone, Instagram, Sparkles, Zap, Rocket, Code2, Layers, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      desc: 'Mobile and web applications that are user-friendly, scalable, and tailored to your business goals.',
      gradient: 'from-cyan-500 via-blue-500 to-purple-600',
      delay: 0
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      desc: 'Powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions.',
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
      delay: 0.2
    },
    {
      icon: Globe,
      title: 'Website Development',
      desc: 'Modern, responsive, and high-performance websites that showcase your brand and drive conversions.',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      delay: 0.4
    }
  ]

  const projects = [
    { name: 'DigiOcean', tag: 'Platform', bgColor: 'bg-cyan-500/20', borderColor: 'border-cyan-500/30', textColor: 'text-cyan-300' },
    { name: 'Jewellry', tag: 'E-commerce', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-500/30', textColor: 'text-purple-300' },
    { name: 'Gym App', tag: 'Mobile', bgColor: 'bg-pink-500/20', borderColor: 'border-pink-500/30', textColor: 'text-pink-300' },
    { name: 'Iedutrack', tag: 'Education', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-500/30', textColor: 'text-blue-300' }
  ]

  const stats = [
    { value: '50+', label: 'Team Members', icon: TrendingUp },
    { value: '100+', label: 'Projects', icon: Code2 },
    { value: '200+', label: 'Happy Clients', icon: Layers }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: `${400 + i * 300}px`,
              height: `${400 + i * 300}px`,
              background: i === 0 
                ? 'radial-gradient(circle, #00f5ff, transparent)' 
                : i === 1
                ? 'radial-gradient(circle, #a855f7, transparent)'
                : 'radial-gradient(circle, #3b82f6, transparent)',
              x: mousePos.x * (300 + i * 200) - 200,
              y: mousePos.y * (300 + i * 200) - 200,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            TRENZ
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold"
            >
              Get Quote
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          style={{ y }}
          className="container mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Digital Innovation Studio
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-[0.9] mb-8"
          >
            <motion.span
              className="block text-white mb-2"
              animate={{
                textShadow: [
                  '0 0 40px rgba(0, 245, 255, 0.5)',
                  '0 0 80px rgba(0, 245, 255, 0.8)',
                  '0 0 40px rgba(0, 245, 255, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              WE BRIDGE
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            >
              VISION TO
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['100%', '0%', '100%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            >
              REALITY
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Unlock your business potential with innovative technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
              />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-cyan-500/30 rounded-full font-semibold text-lg hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-cyan-400 uppercase tracking-wider">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-4">
              OUR <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-400">What we build for you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: service.delay }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative p-8 bg-black/40 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`} />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2, type: 'spring' }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center p-8 bg-black/40 border border-white/10 rounded-3xl backdrop-blur-xl"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              WHERE <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">INNOVATION</span> MEETS EXCELLENCE
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions has grown into a trusted partner for companies across industries.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From our early days of crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and enterprise software, we have consistently focused on <span className="text-cyan-400 font-semibold">innovation, quality, and client success</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-right"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">PROJECTS</span>
            </h2>
            <p className="text-xl text-gray-400">Our work speaks for itself</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 2 : -2, y: -10 }}
                className="group relative p-10 bg-black/40 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-block px-4 py-1 ${project.bgColor} ${project.borderColor} border rounded-full ${project.textColor} text-sm mb-4`}>
                      {project.tag}
                    </span>
                    <h3 className="text-5xl md:text-6xl font-black group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {project.name}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 90, scale: 1.2 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-32 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-6">
              LET'S <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">CONNECT</span>
            </h2>
            <p className="text-2xl text-gray-400">Ready to transform your ideas into reality?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Mail, label: 'Email', value: 'contact@trenztechnologies.com', href: 'mailto:contact@trenztechnologies.com', gradient: 'from-cyan-500 to-blue-500' },
              { icon: Phone, label: 'Phone', value: '9944865057', href: 'tel:+919944865057', gradient: 'from-purple-500 to-pink-500' },
              { icon: Instagram, label: 'Instagram', value: '@trenztechnologies', href: 'https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz', gradient: 'from-pink-500 to-rose-500' }
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 50, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
                  className="group relative p-10 bg-black/40 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-sm text-gray-400 mb-3 uppercase tracking-wider">{contact.label}</div>
                  <div className="text-lg font-bold group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all break-all">
                    {contact.value}
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 Trenz Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
