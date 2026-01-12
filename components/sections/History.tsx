'use client'

import { motion } from 'framer-motion'
import { Rocket, Award } from 'lucide-react'

export default function History() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              background: i === 0 
                ? 'radial-gradient(circle, #00f5ff, transparent)' 
                : i === 1 
                ? 'radial-gradient(circle, #ff00ff, transparent)'
                : 'radial-gradient(circle, #00ff88, transparent)',
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
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

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <div className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-6">
            [ OUR HISTORY ]
          </div>
          <h2 className="text-7xl md:text-9xl font-black leading-[0.9]">
            <span className="block text-white">Where Innovation</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meets Excellence
            </span>
          </h2>
        </motion.div>

        {/* Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl text-gray-300 leading-relaxed">
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions
              has grown into a trusted partner for companies across industries. From our early days of
              crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and
              enterprise software, we have consistently focused on innovation, quality, and client success.
            </p>
          </motion.div>

          {/* Right - Cards */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6"
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-black text-white mb-4">Visionary Beginnings</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Delivering end-to-end digital solutions that empower businesses with excellence, creativity, and cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-black text-white mb-4">Expert Engineers</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our team of skilled developers and innovators build scalable SaaS platforms, websites, and apps tailored to drive business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
