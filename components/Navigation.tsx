'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
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

        {/* Desktop Nav */}
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

        {/* Mobile Hamburger Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[105] md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" />

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-3xl font-black uppercase tracking-wider transition-colors",
                      pathname === item.href ? "text-cyan-400" : "text-white hover:text-cyan-400"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 text-center"
              >
                <p className="text-neutral-600 text-xs">contact@trenztechnologies.com</p>
                <p className="text-neutral-600 text-xs mt-1">+91 99448 65057</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
