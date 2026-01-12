'use client'

import { motion } from 'framer-motion'
import { Rocket, Award } from 'lucide-react'

export default function History() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.01]" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4">
            <span>Our History</span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9]">
            <span className="block text-white">Where Innovation</span>
            <span className="block gradient-text">Meets Excellence</span>
          </h2>
        </motion.div>

        {/* Content - Split Layout */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left - Large Text */}
          <div className="col-span-12 lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-400 leading-relaxed"
            >
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions
              has grown into a trusted partner for companies across industries. From our early days of
              crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and
              enterprise software, we have consistently focused on innovation, quality, and client success.
            </motion.p>
          </div>

          {/* Right - Cards */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Visionary Beginnings</h3>
              <p className="text-gray-400">
                Delivering end-to-end digital solutions that empower businesses with excellence, creativity, and cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Expert Engineers</h3>
              <p className="text-gray-400">
                Our team of skilled developers and innovators build scalable SaaS platforms, websites, and apps tailored to drive business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
