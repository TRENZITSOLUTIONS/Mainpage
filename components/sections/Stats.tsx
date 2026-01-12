'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, Briefcase, Star } from 'lucide-react'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

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

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={containerRef} className="relative py-40 bg-black overflow-hidden">
      {/* Animated Background Text */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[20rem] md:text-[30rem] font-black text-white/5 select-none">
          STATS
        </h2>
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary-500/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      <div className="container-custom relative z-10" ref={ref}>
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
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.2 }}
      whileHover={{ scale: 1.1, y: -20, rotateY: 5 }}
      className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-primary-500/50 transition-all overflow-hidden group"
      style={{ perspective: '1000px' }}
    >
      {/* Animated Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-8`}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
          className="text-7xl md:text-8xl font-black text-white mb-4"
        >
          {count}{stat.suffix}
        </motion.div>
        
        <p className="text-2xl text-gray-400 font-medium">{stat.label}</p>
      </div>
    </motion.div>
  )
}
