'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Award } from 'lucide-react'

export default function History() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ x, opacity }}
        className="absolute inset-0 grid-pattern opacity-[0.02]"
      />

      {/* Animated Lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
          style={{
            top: `${10 + i * 10}%`,
            left: 0,
            right: 0,
            width: '100%',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        {/* Sticky Header */}
        <div className="sticky top-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4">
              <span>Our History</span>
            </div>
            <h2 className="text-8xl md:text-9xl font-black leading-[0.85]">
              <span className="block text-white">Where Innovation</span>
              <span className="block gradient-text">Meets Excellence</span>
            </h2>
          </motion.div>
        </div>

        {/* Content - Split with Animation */}
        <div className="grid grid-cols-12 gap-16">
          {/* Left - Large Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed">
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions
              has grown into a trusted partner for companies across industries. From our early days of
              crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and
              enterprise software, we have consistently focused on innovation, quality, and client success.
            </p>
          </motion.div>

          {/* Right - Floating Cards */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-primary-500/50 transition-all"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6"
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-black text-white mb-4">Visionary Beginnings</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Delivering end-to-end digital solutions that empower businesses with excellence, creativity, and cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-accent-500/50 transition-all"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6"
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
