'use client'

import { motion } from 'framer-motion'

interface AnimatedGradientProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedGradient({ children, className = '' }: AnimatedGradientProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        background: 'linear-gradient(-45deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9)',
        backgroundSize: '400% 400%'
      }}
    >
      {children}
    </motion.div>
  )
}

