'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Cloud, Globe, Code, CheckCircle, Mail, Phone, Instagram, Sparkles, Zap, Target, Users, Award } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      number: '01',
      title: 'App Development',
      description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals. From idea to launch, we build apps that engage and deliver results.',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'SaaS Solutions',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions for businesses of all sizes.',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that not only showcase your brand but also drive conversions and customer engagement.',
      icon: Globe,
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const projects = [
    { name: 'DigiOcean', description: 'Digital infrastructure management platform' },
    { name: 'Jewellry', description: 'E-commerce platform for jewelry business' },
    { name: 'Gym App', description: 'Fitness tracking and management solution' },
    { name: 'Iedutrack', description: 'Educational management system' }
  ]

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Code, value: '100+', label: 'Complete Projects' },
    { icon: Award, value: '200+', label: 'Client Reviews' }
  ]

  const historyPoints = [
    {
      title: 'Visionary Beginnings',
      description: 'Delivering end-to-end digital solutions that empower businesses with excellence, creativity, and cutting-edge technology.'
    },
    {
      title: 'Expert Engineers',
      description: 'Our team of skilled developers and innovators build scalable SaaS platforms, websites, and apps tailored to drive business growth and digital transformation.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.15),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                IT Solutions & Innovation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">We Bridge</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Vision to Reality
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Unlock your business potential with us. We specialize in creating SaaS applications, websites, and software products tailored for businesses of all sizes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-400 uppercase tracking-wider">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-6xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">
                        {service.number}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 relative bg-slate-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                Where Innovation Meets <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Excellence</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Founded with a vision to empower businesses through technology, Trenz Software IT Solutions has grown into a trusted partner for companies across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {historyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
                From our early days of crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and enterprise software, we have consistently focused on <span className="text-blue-400 font-semibold">innovation, quality, and client success</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 sm:py-32 relative bg-slate-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Complete <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Showcasing our expertise through successful implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <p className="text-slate-400 text-lg">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Get in touch with us today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.a
              href="mailto:contact@trenztechnologies.com"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-slate-400 mb-2 uppercase tracking-wider">Email</div>
              <div className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors break-all">
                contact@trenztechnologies.com
              </div>
            </motion.a>

            <motion.a
              href="tel:+919944865057"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-slate-400 mb-2 uppercase tracking-wider">Phone</div>
              <div className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                9944865057
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-pink-500/50 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-slate-400 mb-2 uppercase tracking-wider">Instagram</div>
              <div className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                @trenztechnologies
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}
