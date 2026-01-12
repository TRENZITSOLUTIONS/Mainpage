'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Smartphone, Cloud, Globe, Code, Network, Package, Briefcase, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals. From idea to launch, we build apps that engage and deliver results.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions for businesses of all sizes.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'We craft modern, responsive, and high-performance websites that not only showcase your brand but also drive conversions and customer engagement.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Software Development & Maintenance',
      description: 'We provide custom software solutions along with continuous maintenance and support to ensure your systems run smoothly and adapt to changing business needs.',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Network,
      title: 'Blockchain Development',
      description: 'We build secure and scalable blockchain applications, smart contracts, and decentralized platforms to help businesses adopt the latest in Web3 technology.',
      color: 'from-cyan-500 to-green-500',
    },
    {
      icon: Package,
      title: 'All Products Trial',
      description: 'We offer free trials for our products and solutions, giving you hands-on experience before making a full commitment.',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Briefcase,
      title: 'IT Consulting',
      description: 'We provide expert IT consulting services to help you adopt the right technologies, optimize operations, and accelerate digital transformation.',
      color: 'from-pink-500 to-cyan-500',
    },
  ]

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

  return (
    <div className="pt-20 min-h-screen bg-black relative overflow-hidden">
      {/* Mesmerizing Background - Rotating Orbs */}
      <div className="fixed inset-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, #00f5ff, transparent)' 
                : i % 3 === 1
                ? 'radial-gradient(circle, #ff00ff, transparent)'
                : 'radial-gradient(circle, #00ff88, transparent)',
              x: mousePos.x * (400 + i * 150),
              y: mousePos.y * (400 + i * 150),
              rotate: rotate.get() + i * 72,
              scale: scale.get(),
            }}
            animate={{
              scale: [1, 1.4, 0.9, 1],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated Lines */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
          style={{
            top: `${i * 2}%`,
            left: 0,
            width: '100%',
          }}
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
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

        {/* Hero - Massive Typography */}
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
              [ OUR SERVICES ]
            </motion.span>
            <h1 className="text-9xl md:text-[15rem] lg:text-[20rem] font-black leading-[0.8]">
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
                WHAT WE
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
                OFFER
              </motion.span>
            </h1>
          </motion.div>

          {/* Services - 3D Carousel Effect */}
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200, rotateY: index % 2 === 0 ? -90 : 90 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? 30 : -30, rotateY: 5 }}
                  className="group"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative p-16 bg-gradient-to-br from-gray-900/30 to-gray-950/30 backdrop-blur-xl border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all overflow-hidden cursor-pointer">
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Floating Number */}
                    <div className="absolute top-8 right-8 text-[10rem] font-black text-white/5 group-hover:text-cyan-400/20 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="relative z-10 flex items-center gap-16">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-40 h-40 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                      >
                        <Icon className="w-20 h-20 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-6xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-2xl text-gray-400 leading-relaxed max-w-4xl">
                          {service.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 20, rotate: 45, scale: 1.2 }}
                        className="text-6xl text-white/20 group-hover:text-cyan-400 transition-colors"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
