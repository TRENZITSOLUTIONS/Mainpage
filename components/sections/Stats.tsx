'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, Briefcase, Star } from 'lucide-react'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Team member',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      icon: Briefcase,
      value: 100,
      suffix: '+',
      label: 'Complete project',
      gradient: 'from-accent-500 to-accent-600',
    },
    {
      icon: Star,
      value: 200,
      suffix: '+',
      label: 'Client review',
      gradient: 'from-primary-500 to-accent-500',
    },
  ]

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.01]" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-500/3 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Large Text Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            viewport={{ once: true }}
            className="text-[15rem] md:text-[20rem] font-black text-white select-none"
          >
            STATS
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <StatItem key={stat.label} stat={stat} index={index} isInView={isInView} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StatItem({ stat, index, isInView }: { stat: any, index: number, isInView: boolean }) {
  const [count, setCount] = useState(0)
  const Icon = stat.icon

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-primary-500/30 transition-all"
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-6xl md:text-7xl font-black text-white mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-xl text-gray-400 font-medium">{stat.label}</p>
    </motion.div>
  )
}
