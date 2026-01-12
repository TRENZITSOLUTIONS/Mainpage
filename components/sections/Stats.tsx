'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, Briefcase, Star } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'

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
    <section ref={ref} className="section-padding bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <ScrollReveal key={stat.label} direction="scale" delay={index * 0.2}>
                <StatItem stat={stat} index={index} isInView={isInView} />
              </ScrollReveal>
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
      whileHover={{ scale: 1.1, y: -10 }}
      className="text-center relative"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.15 }}
        transition={{ duration: 0.6 }}
        className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl glow-effect`}
      >
        <Icon className="w-12 h-12 text-white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.2 }}
        className="text-7xl md:text-8xl font-bold mb-4 glow-text"
      >
        {count}{stat.suffix}
      </motion.div>
      <p className="text-2xl text-gray-300 font-semibold">{stat.label}</p>
      
      {/* Decorative Elements */}
      <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-20 rounded-full blur-xl`} />
      <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-20 rounded-full blur-xl`} />
    </motion.div>
  )
}
