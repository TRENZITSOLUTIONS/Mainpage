'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Image from 'next/image'
import Link from 'next/link'
import { Code, Sparkles, Zap, Mail, Phone, Cpu, Network, ArrowUpRight } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- Components ---

// 1. The Preloader (Builds Anticipation)
const Preloader = ({ setLoading }: { setLoading: (val: boolean) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2 items-center overflow-hidden h-16">
          <motion.span 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            TRENZ
          </motion.span>
          <motion.span 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="text-4xl md:text-6xl font-serif italic text-cyan-400"
          >
            technologies
          </motion.span>
        </div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          onAnimationComplete={() => setLoading(false)}
          className="h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"
        />
      </div>
    </motion.div>
  )
}

// 2. Custom Cursor (The "fluid" feel)
const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 20, stiffness: 400 } // Looser spring for "liquid" feel
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

// 3. Magnetic Button (High interaction)
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

const SERVICES = [
  {
    id: 1,
    title: 'App Engineering',
    desc: 'Native and Cross-platform architectures that scale to millions.',
    icon: Code,
    gradient: 'from-cyan-400 to-blue-600'
  },
  {
    id: 2,
    title: 'SaaS Ecosystems',
    desc: 'Enterprise-grade cloud solutions designed for massive data throughput.',
    icon: Cpu,
    gradient: 'from-purple-400 to-pink-600'
  },
  {
    id: 3,
    title: 'Digital Experience',
    desc: 'Award-winning web interfaces that convert visitors into fanatics.',
    icon: Network,
    gradient: 'from-blue-400 to-cyan-400'
  }
]

const PROJECTS = [
  { name: 'DigiOcean', tag: 'Core Platform', color: 'cyan', year: '2025' },
  { name: 'Jewellry', tag: 'E-commerce', color: 'purple', year: '2024' },
  { name: 'Gym App', tag: 'Native Mobile', color: 'pink', year: '2024' },
  { name: 'Iedutrack', tag: 'LMS System', color: 'blue', year: '2023' }
]

export default function Home() {
  const [loading, setLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -300])
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical' as const,
      gestureOrientation: 'vertical' as const,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      <div ref={containerRef} className="bg-black text-neutral-200 min-h-[400vh] selection:bg-cyan-500 selection:text-black font-sans overflow-x-hidden cursor-none">
        <CustomCursor />
        
        {/* Cinematic Grain - Low opacity for texture */}
        <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.07] mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {/* Hero Section */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden perspective-1000">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }} 
            className="relative z-10 text-center px-4 w-full flex flex-col items-center"
          >
             <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.2 }}
                className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">Available for new projects</span>
              </motion.div>

            <div className="relative">
              <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-difference z-10 relative">
                DIGITAL
              </h1>
              <h1 className="text-[14vw] leading-[0.8] font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-10 relative">
                ALCHEMY
              </h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1.8, duration: 1 }} 
              className="mt-12 text-sm md:text-xl uppercase tracking-[0.3em] text-neutral-400 max-w-xl leading-relaxed"
            >
              We don&apos;t just write code. <br/><span className="text-white font-bold">We engineer dominance.</span>
            </motion.p>
          </motion.div>
          
          {/* Background Atmosphere */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px]" />
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-bounce" />
            <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
          </motion.div>
        </section>

        {/* Infinite Marquee - Angled for aggression */}
        <section className="py-20 bg-black relative z-20 overflow-hidden -skew-y-2 origin-left">
          <div className="absolute inset-0 bg-cyan-900/10 blur-3xl"></div>
          <div className="whitespace-nowrap flex overflow-hidden border-y border-white/10 bg-black/50 backdrop-blur-sm py-4">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: 'linear', duration: 15 }} 
              className="flex gap-20 items-center pr-20"
            >
              {Array.from({ length: 4 }, (_, i) => (
                <div key={`marquee-${i}`} className="flex items-center gap-12 text-white/20">
                  <span className="text-6xl md:text-8xl font-black uppercase">Redefining</span>
                  <Zap className="w-8 h-8 md:w-12 md:h-12 text-cyan-500 animate-pulse" />
                  <span className="text-6xl md:text-8xl font-serif italic">Possibility</span>
                  <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-purple-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative pt-32 pb-24 px-4 md:px-10 z-10 w-full overflow-hidden bg-black">
          <div className="flex flex-col md:flex-row gap-20 mb-32">
             <div className="flex-1">
                <h2 className="text-6xl md:text-8xl font-black text-white mb-6">
                  OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ARSENAL</span>
                </h2>
                <div className="h-1 w-20 bg-cyan-500" />
             </div>
             <div className="flex-1 flex items-end">
                <p className="text-xl md:text-2xl text-neutral-400 max-w-lg leading-relaxed">
                   We specialize in high-impact digital infrastructure. Scalable, secure, and built to outperform your competition.
                </p>
             </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all cursor-pointer"
              >
                View All Services
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.div>
            </Link>
          </div>

          <div className="flex flex-col gap-8 md:gap-0">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* Selected Work (The Vault) */}
        <section id="work" className="relative py-32 bg-neutral-950">
           <div className="container mx-auto px-4 md:px-10 mb-20 flex justify-between items-end">
              <h2 className="text-5xl md:text-7xl font-serif italic text-white">Selected Works</h2>
              <span className="text-xs font-mono text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">2023 - 2025</span>
           </div>
           
           <div className="flex flex-col px-2 md:px-10">
              {PROJECTS.map((project, idx) => (
                 <ProjectRow key={project.name} project={project} index={idx} />
              ))}
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen relative flex flex-col items-center justify-center border-t border-white/10 bg-black py-24 md:py-32 overflow-hidden">
          {/* Abstract BG */}
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          
          <div className="relative z-10 w-full px-4 max-w-6xl mx-auto text-center">
            
            <motion.h2 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-[12vw] leading-[0.8] font-black text-white mb-10 tracking-tighter"
            >
              LET&apos;S BUILD<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-transparent opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default">THE FUTURE</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
               <MagneticButton href="mailto:contact@trenztechnologies.com" className="bg-white text-black border-transparent hover:bg-cyan-400">
                  <Mail className="w-4 h-4" /> Email Us
               </MagneticButton>
               <MagneticButton href="tel:+919944865057">
                  <Phone className="w-4 h-4" /> Schedule Call
               </MagneticButton>
            </div>
            
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 text-left">
               <div>
                  <h4 className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Socials</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                     <li>
                       <a 
                         href="https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="hover:text-cyan-400 transition-colors"
                       >
                         Instagram
                       </a>
                     </li>
                     <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                     <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Twitter / X</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Contact</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                     <li>
                       <a href="mailto:contact@trenztechnologies.com" className="hover:text-cyan-400 transition-colors">
                         contact@trenztechnologies.com
                       </a>
                     </li>
                     <li>
                       <a href="tel:+919944865057" className="hover:text-cyan-400 transition-colors">
                         9944865057
                       </a>
                     </li>
                  </ul>
               </div>
               <div className="col-span-2 text-right">
                  <h4 className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Trenz Technologies</h4>
                  <p className="text-sm text-neutral-600">© 2026 All Rights Reserved.</p>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// --- Sub Components ---

function ServiceCard({ service, index }: { readonly service: typeof SERVICES[0], readonly index: number }) {
  const Icon = service.icon
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border-t border-white/10 py-16 md:py-24 hover:bg-white/5 transition-colors duration-500"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
         <div className="flex items-center gap-8 md:gap-16">
            <span className="text-neutral-600 font-mono text-xl">0{service.id}</span>
            <h3 className="text-4xl md:text-6xl font-bold text-neutral-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
               {service.title}
            </h3>
         </div>
         <div className="md:w-1/3 flex items-start gap-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity`}>
               <Icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed group-hover:text-neutral-200 transition-colors">
               {service.desc}
            </p>
         </div>
      </div>
    </motion.div>
  )
}

function ProjectRow({ project, index }: { readonly project: typeof PROJECTS[0], readonly index: number }) {
   const getGradientClass = () => {
     if (project.color === 'cyan') return 'from-cyan-900/20'
     if (project.color === 'purple') return 'from-purple-900/20'
     if (project.color === 'pink') return 'from-pink-900/20'
     return 'from-blue-900/20'
   }

   return (
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="group relative border-b border-white/10 py-12 md:py-20 flex flex-col md:flex-row justify-between md:items-center cursor-pointer overflow-hidden"
      >
         {/* Hover Gradient Background */}
         <div className={`absolute inset-0 bg-gradient-to-r ${getGradientClass()} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-full group-hover:translate-y-0 ease-in-out`} />

         <div className="relative z-10">
            <h3 className="text-4xl md:text-7xl font-black text-white mix-blend-difference uppercase">
               {project.name}
            </h3>
            <span className="text-neutral-500 font-mono text-sm mt-2 block">{project.tag}</span>
         </div>

         <div className="relative z-10 flex items-center gap-4 mt-6 md:mt-0">
            <span className="text-neutral-500 font-mono">{project.year}</span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
               <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </div>
         </div>
      </motion.div>
   )
}
