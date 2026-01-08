'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'location',
      content: 'No:2/699, VGN Nagar, 3rd Street, Iyappanthangal Chennai-600056',
      link: null,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call us',
      content: '+91 7448665057',
      link: 'tel:+917448665057',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'trenzitsolutions@gmail.com',
      link: 'mailto:trenzitsolutions@gmail.com',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
              Contact Us
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 glow-text">
              Get in touch with us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-8 glow-text">Contact Information</h2>
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-4 p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 animated-border"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center flex-shrink-0 glow-effect`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 capitalize">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-primary-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 h-64 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <p className="text-gray-400 relative z-10">Map will be embedded here</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 animated-border"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center glow-effect">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Send us a message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="Yourmail@.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    placeholder="Description"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all glow-effect"
                >
                  <span>Leave A Comment</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
