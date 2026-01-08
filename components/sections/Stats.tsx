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
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      value: 100,
      suffix: '+',
      label: 'Complete project',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Star,
      value: 200,
      suffix: '+',
      label: 'Client review',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg glow-effect`}
      >
        <Icon className="w-10 h-10 text-white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.2 }}
        className="text-6xl md:text-7xl font-bold mb-2 glow-text"
      >
        {count}{stat.suffix}
      </motion.div>
                <p className="text-xl text-gray-300 font-semibold">{stat.label}</p>
    </motion.div>
  )
}

