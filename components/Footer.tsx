'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, Instagram } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    company: [
      { href: '#about', label: 'About Us' },
      { href: '#services', label: 'Services' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ],
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4">
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Trenz Technologies
              </motion.h3>
            </Link>
            <p className="text-slate-400 mb-4">
              Perfect for all IT Solutions
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact
              <span className="ml-2">→</span>
            </Link>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center"
                  >
                    <span>{link.label}</span>
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">CONTACT INFO</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:contact@trenztechnologies.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors break-all"
                >
                  contact@trenztechnologies.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+919944865057"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  9944865057
                </a>
              </li>
              <li className="flex items-center">
                <Instagram className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  @trenztechnologies
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">NEWSLETTER</h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Here"
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-lg"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500"
        >
          <p>© Copyright 2025, All Rights Reserved by Trenz</p>
        </motion.div>
      </div>
    </footer>
  )
}
