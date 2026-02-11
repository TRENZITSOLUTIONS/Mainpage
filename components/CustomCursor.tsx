'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 20, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10)
      cursorY.set(e.clientY - 10)
    }
    globalThis.addEventListener('mousemove', moveCursor)
    return () => globalThis.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center blur-[2px]"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    />
  )
}
