'use client'

import { motion } from 'framer-motion'

interface ShimmerTextProps {
  text: string
  className?: string
}

export default function ShimmerText({ text, className = '' }: ShimmerTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        backgroundPosition: ['200% center', '-200% center']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        background: 'linear-gradient(90deg, #fff 0%, #0ea5e9 50%, #fff 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {text}
    </motion.span>
  )
}

