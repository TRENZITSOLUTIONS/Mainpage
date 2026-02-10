'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Magnetic Button Component
const MagneticButton = ({ children, href, className = '' }: { children: React.ReactNode, href: string, className?: string }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const center = { x: left + width / 2, y: top + height / 2 }
    x.set((clientX - center.x) * 0.35)
    y.set((clientY - center.y) * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={cn(
        "relative overflow-hidden px-8 py-4 border border-white/20 rounded-full uppercase tracking-widest text-xs font-bold transition-colors duration-300 group inline-block text-center backdrop-blur-sm",
        className
      )}
    >
      <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-[0.19,1,0.22,1] origin-bottom z-0 rounded-full"></div>
    </motion.a>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Work', href: isHome ? '#work' : '/#work' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-[100] text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer relative z-10"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg p-1">
            <Image
              src="/logo.jpeg"
              alt="Trenz Technologies Logo"
              width={48}
              height={48}
              className="object-contain rounded"
              priority
              unoptimized
            />
          </div>
          <span className="tracking-[0.2em] text-sm font-black font-mono hidden md:block mix-blend-difference">
            TRENZ<span className="text-cyan-400">_</span>TECH
          </span>
        </Link>
      </motion.div>
      
      <div className="hidden md:flex gap-10 text-xs tracking-widest font-bold uppercase">
        {navItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
          >
            <Link
              href={item.href}
              className={cn(
                "hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-cyan-400 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300",
                pathname === item.href && "text-cyan-400 after:scale-x-100"
              )}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <MagneticButton href={isHome ? '#contact' : '/#contact'} className="hidden md:block">
          Let&apos;s Talk
        </MagneticButton>
      </motion.div>
    </nav>
  )
}

