'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Send, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
      gradient: 'from-cyan-500 to-blue-500',
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
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])

  return (
    <div className="pt-20 min-h-screen bg-black relative overflow-hidden">
      {/* Mesmerizing Background - Morphing Shapes */}
      <div className="fixed inset-0">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-25"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, #00f5ff, transparent)' 
                : i % 3 === 1
                ? 'radial-gradient(circle, #ff00ff, transparent)'
                : 'radial-gradient(circle, #00ff88, transparent)',
              x: mousePos.x * (400 + i * 100),
              y: mousePos.y * (400 + i * 100),
              rotate: rotate.get() + i * 60,
              scale: scale.get(),
            }}
            animate={{
              scale: [1, 1.5, 0.8, 1],
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated Lines Network */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
          style={{
            left: `${(i * 3.33)}%`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono">
            <ArrowLeft className="w-5 h-5" />
            <span>← HOME</span>
          </Link>
        </motion.div>

        {/* Hero */}
        <div className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mb-32"
          >
            <motion.span
              className="inline-block text-cyan-400 text-sm font-mono tracking-[0.5em] uppercase mb-8"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              [ CONTACT US ]
            </motion.span>
            <h1 className="text-9xl md:text-[15rem] lg:text-[20rem] font-black leading-[0.8] mb-12">
              <motion.span
                className="block text-white"
                animate={{
                  textShadow: [
                    '0 0 40px rgba(0, 245, 255, 0.6)',
                    '0 0 80px rgba(0, 245, 255, 0.9)',
                    '0 0 40px rgba(0, 245, 255, 0.6)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                GET IN
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                TOUCH
              </motion.span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          {/* Contact Section - Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info - 3D Cards */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -100, rotateY: -90 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                    className="group"
                    style={{ perspective: '1000px' }}
                  >
                    <div className="relative p-12 bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all overflow-hidden">
                      {/* Animated Background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <div className="relative z-10 flex items-start gap-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-black text-white mb-3 capitalize text-2xl">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-400 text-xl">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Contact Form - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-12 bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl border-2 border-cyan-500/20"
              style={{ perspective: '1000px' }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-black text-white">Send us a message</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-black text-white mb-3 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-black/50 border-2 border-cyan-500/20 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-black text-white mb-3 uppercase tracking-wider">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="Yourmail@.com"
                      className="w-full px-6 py-4 bg-black/50 border-2 border-cyan-500/20 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-black text-white mb-3 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      placeholder="Description"
                      className="w-full px-6 py-4 bg-black/50 border-2 border-cyan-500/20 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-all resize-none text-lg"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black text-xl hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-3"
                  >
                    <span>LEAVE A COMMENT</span>
                    <Send className="w-6 h-6" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
