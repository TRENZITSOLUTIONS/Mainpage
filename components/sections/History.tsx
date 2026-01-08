'use client'

import { motion } from 'framer-motion'
import { Rocket, Award } from 'lucide-react'

export default function History() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Our History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Where Innovation Meets Excellence
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Founded with a vision to empower businesses through technology, Trenz Software IT Solutions
            has grown into a trusted partner for companies across industries. From our early days of
            crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and
            enterprise software, we have consistently focused on innovation, quality, and client success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-primary-500/50 hover:bg-slate-800/70 transition-all duration-300 animated-border"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center mb-6 glow-effect">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Visionary Beginnings</h3>
            <p className="text-gray-300 leading-relaxed">
              Visionary Beginnings – Delivering end-to-end digital solutions that empower businesses
              with excellence, creativity, and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center mb-6 glow-effect">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Expert Engineers</h3>
            <p className="text-gray-300 leading-relaxed">
              Our team of skilled developers and innovators build scalable SaaS platforms, websites,
              and apps tailored to drive business growth and digital transformation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

