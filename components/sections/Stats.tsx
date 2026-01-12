'use client'

import { motion } from 'framer-motion'
import { Users, Briefcase, Star } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Team member',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Briefcase,
      value: 100,
      suffix: '+',
      label: 'Complete project',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Star,
      value: 200,
      suffix: '+',
      label: 'Client review',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  return (
    <section className="relative py-40 bg-black overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.1),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-6">
            [ OUR NUMBERS ]
          </div>
          <h2 className="text-7xl md:text-9xl font-black leading-[0.9]">
            <span className="block text-white">Key</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
        </motion.div>

        {/* Stats - Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.1, y: -20 }}
                className="text-center p-12 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-7xl font-black text-white mb-4">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-xl text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
