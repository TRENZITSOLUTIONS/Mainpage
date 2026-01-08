'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import History from '@/components/sections/History'
import Projects from '@/components/sections/Projects'
import Stats from '@/components/sections/Stats'
import Blog from '@/components/sections/Blog'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <History />
      <Projects />
      <Stats />
      <Blog />
    </div>
  )
}

