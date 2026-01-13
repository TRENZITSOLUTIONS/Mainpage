'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center"
            >
              {!logoError ? (
                <Image
                  src="/logo.png"
                  alt="Trenz Technologies Logo"
                  fill
                  className="object-contain"
                  priority
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="text-lg md:text-xl font-bold gradient-text glow-text">
                  TT
                </div>
              )}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl md:text-2xl font-bold gradient-text glow-text hidden sm:block"
            >
              Trenz Technologies
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/50 rounded-full"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
        >
          <div className="container-custom py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
