'use client'

import { motion } from 'framer-motion'

interface BlobAnimationProps {
  className?: string
  color?: string
  size?: number
}

export default function BlobAnimation({ 
  className = '', 
  color = '#0ea5e9',
  size = 400 
}: BlobAnimationProps) {
  return (
    <div className={`absolute ${className}`} style={{ width: size, height: size }}>
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl opacity-30"
        style={{ background: color }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
          borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '60% 40% 30% 70% / 60% 30% 70% 40%', '30% 70% 70% 30% / 30% 30% 70% 70%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )
}

