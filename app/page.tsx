'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Zap, ArrowUpRight, Mail, Phone, Instagram, Menu, X, Sparkles, Terminal, Cpu, Globe, Layers } from 'lucide-react'

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [menuOpen, setMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / globalThis.innerWidth - 0.5) * 100,
        y: (e.clientY / globalThis.innerHeight - 0.5) * 100
      })
    }
    globalThis.addEventListener('mousemove', handleMouseMove)
    return () => globalThis.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: Code2,
      title: 'App Development',
      desc: 'Mobile and web applications that are user-friendly, scalable, and tailored to your business goals.',
      color: '#06b6d4',
      delay: 0
    },
    {
      icon: Cpu,
      title: 'SaaS Solutions',
      desc: 'Powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions.',
      color: '#a855f7',
      delay: 0.1
    },
    {
      icon: Globe,
      title: 'Website Development',
      desc: 'Modern, responsive, and high-performance websites that showcase your brand and drive conversions.',
      color: '#3b82f6',
      delay: 0.2
    }
  ]

  const projects = [
    { name: 'DigiOcean', tag: 'Platform' },
    { name: 'Jewellry', tag: 'E-commerce' },
    { name: 'Gym App', tag: 'Mobile' },
    { name: 'Iedutrack', tag: 'Education' }
  ]

  const stats = [
    { value: '50+', label: 'Team Members', icon: Layers },
    { value: '100+', label: 'Projects', icon: Code2 },
    { value: '200+', label: 'Happy Clients', icon: Sparkles }
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => {
          const bgColors = [
            'radial-gradient(circle, #06b6d4, transparent)',
            'radial-gradient(circle, #a855f7, transparent)',
            'radial-gradient(circle, #3b82f6, transparent)'
          ]
          return (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full blur-3xl opacity-30"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                background: bgColors[i % 3],
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                x: [0, mousePos.x * 2, 0],
                y: [0, mousePos.y * 2, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )
        })}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8"
      >
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-black tracking-tight">TRENZ</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold"
            >
              Get Quote
            </motion.button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-6 space-y-4 bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10"
            >
              {['Services', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-cyan-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs md:text-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Digital Innovation Studio
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] mb-6"
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.1}deg) rotateY(${mousePos.x * 0.1}deg)`
            }}
          >
            <span className="block text-white">WE BRIDGE</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              VISION TO
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              REALITY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Unlock your business potential with innovative technology that drives growth, efficiency, and long-term success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-500/30 rounded-full font-semibold text-lg hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-cyan-400 uppercase tracking-wider">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
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
                  className="group relative p-8 bg-gradient-to-br from-black/40 to-black/20 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{
                      background: `radial-gradient(circle, ${service.color}, transparent)`
                    }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 w-16 h-16 mb-6 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
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
                  className="text-center p-8 bg-gradient-to-br from-black/40 to-black/20 border border-white/10 rounded-3xl backdrop-blur-xl"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8">
              WHERE <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">INNOVATION</span>
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8">
              MEETS <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">EXCELLENCE</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6">
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions has grown into a trusted partner for companies across industries.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              From our early days of crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and enterprise software, we have consistently focused on <span className="text-cyan-400 font-semibold">innovation, quality, and client success</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
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
                className="group relative p-10 bg-gradient-to-br from-black/40 to-black/20 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all" />
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-4 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-4">
                      {project.tag}
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {project.name}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 90, scale: 1.2 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 md:px-8 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
              LET'S <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">CONNECT</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">Ready to transform your ideas into reality?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Mail, label: 'Email', value: 'contact@trenztechnologies.com', href: 'mailto:contact@trenztechnologies.com' },
              { icon: Phone, label: 'Phone', value: '9944865057', href: 'tel:+919944865057' },
              { icon: Instagram, label: 'Instagram', value: '@trenztechnologies', href: 'https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz' }
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group p-8 bg-gradient-to-br from-black/40 to-black/20 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-xs text-gray-400 mb-3 uppercase tracking-wider">{contact.label}</div>
                  <div className="text-sm md:text-base font-bold group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all break-all">
                    {contact.value}
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>© 2025 Trenz Technologies. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="mailto:contact@trenztechnologies.com" className="hover:text-cyan-400 transition-colors">Email</a>
            <a href="tel:+919944865057" className="hover:text-cyan-400 transition-colors">Phone</a>
            <a href="https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
