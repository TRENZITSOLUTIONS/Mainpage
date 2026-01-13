'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { Code, Sparkles, Zap, ArrowRight, Mail, Phone, Instagram, Terminal, Cpu, Network } from 'lucide-react'
import Link from 'next/link'

// Custom Cursor
const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
    </motion.div>
  )
}

// Grain Overlay
const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.15] mix-blend-overlay">
    <svg className="w-full h-full">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
)

// Magnetic Button
const MagneticButton = ({ children, href, className = '' }: { children: React.ReactNode, href: string, className?: string }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden px-6 py-4 border border-cyan-400/30 rounded-none uppercase tracking-widest text-xs font-bold hover:text-black transition-all duration-300 min-w-[200px] md:min-w-[240px] group text-center block ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
    </motion.a>
  )
}

const SERVICES = [
  {
    id: 1,
    title: 'App Development',
    desc: 'Mobile and web applications that are user-friendly, scalable, and tailored to your business goals.',
    icon: Code,
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 2,
    title: 'SaaS Solutions',
    desc: 'Powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions.',
    icon: Cpu,
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 3,
    title: 'Website Development',
    desc: 'Modern, responsive, and high-performance websites that showcase your brand and drive conversions.',
    icon: Network,
    gradient: 'from-blue-400 to-cyan-500'
  }
]

const PROJECTS = [
  { name: 'DigiOcean', tag: 'Platform', color: 'cyan' },
  { name: 'Jewellry', tag: 'E-commerce', color: 'purple' },
  { name: 'Gym App', tag: 'Mobile', color: 'pink' },
  { name: 'Iedutrack', tag: 'Education', color: 'blue' }
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -200])
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="bg-black text-neutral-200 min-h-[400vh] selection:bg-cyan-500 selection:text-black font-sans overflow-x-hidden cursor-none">
      <CustomCursor />
      <GrainOverlay />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-[100] mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Terminal className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
          <span className="tracking-[0.5em] text-xs md:text-sm font-bold">TRENZ</span>
        </motion.div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        </div>
        <MagneticButton href="#contact" className="hidden md:block min-w-[140px]">
          Contact
        </MagneticButton>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }} 
          className="relative z-10 text-center px-4 w-full"
        >
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-serif italic mix-blend-overlay opacity-80 mb-[-0.1em]">
              WE BRIDGE
            </h1>
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-400 to-purple-500">
              VISION TO
            </h1>
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400">
              REALITY
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }} 
            className="mt-6 md:mt-8 text-xs md:text-base uppercase tracking-[0.3em] text-neutral-500"
          >
            Where Code Meets Innovation
          </motion.p>
        </motion.div>
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Manifesto Strip */}
      <section className="py-12 md:py-24 border-y border-white/5 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden z-20">
        <div className="whitespace-nowrap flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }} 
            className="flex gap-12 md:gap-16 items-center"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-12">
                <span className="text-4xl md:text-6xl lg:text-8xl font-serif italic text-white/10">Building The Future</span>
                <Zap className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-cyan-500/50" />
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-white/20">Code & Design</span>
                <Sparkles className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-purple-500/50" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative pt-24 md:pt-32 px-4 md:px-10 z-10 w-full overflow-hidden">
        <div className="relative border-t border-white/20 pt-10">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: '100%' }} 
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-0 left-0 h-[1px] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
            <div className="relative w-full md:w-auto">
              <div className="flex flex-col md:block items-center md:items-start text-center md:text-left">
                <span className="md:absolute md:-top-12 md:left-2 text-[10px] uppercase tracking-[0.4em] text-neutral-500 flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-0">
                  <div className="w-2 h-2 bg-cyan-500 animate-pulse rounded-full" />
                  What We Build
                </span>
                
                <h2 className="text-[20vw] md:text-[15vw] leading-[0.8] font-serif italic text-white mix-blend-difference">
                  SERVICES
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-4 w-full mt-2">
                  <h2 className="text-[20vw] md:text-[15vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-white">
                    WE OFFER
                  </h2>
                  <div className="h-[1px] w-12 md:w-20 bg-white/20 hidden md:block"></div>
                  <div className="hidden md:flex flex-col items-end text-right">
                    <span className="text-xs uppercase tracking-widest text-neutral-500">Solutions</span>
                    <span className="text-4xl font-mono">003</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[400px] border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-2 md:pl-8 pb-2">
              <p className="text-base md:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed text-center md:text-left">
                We specialize in creating SaaS applications, websites, and software products tailored for businesses of all sizes. From idea to launch, we build solutions that engage and deliver results.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 mt-16 md:mt-32">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { value: '50+', label: 'Team Members', icon: Sparkles },
              { value: '100+', label: 'Projects', icon: Code },
              { value: '200+', label: 'Happy Clients', icon: Zap }
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="text-center p-8 border border-white/10 bg-black/40 backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-400 text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-4 md:px-10 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black mb-8">
              WHERE <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">INNOVATION</span>
            </h2>
            <h2 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black mb-8">
              MEETS <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">EXCELLENCE</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed mb-6">
              Founded with a vision to empower businesses through technology, Trenz Software IT Solutions has grown into a trusted partner for companies across industries.
            </p>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
              From our early days of crafting simple web solutions to developing scalable SaaS platforms, mobile apps, and enterprise software, we have consistently focused on <span className="text-cyan-400 font-semibold">innovation, quality, and client success</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative pt-24 md:pt-32 px-4 md:px-10 z-10 w-full overflow-hidden">
        <div className="relative border-t border-white/20 pt-10">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: '100%' }} 
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-0 left-0 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
            <div className="relative w-full md:w-auto">
              <div className="flex flex-col md:block items-center md:items-start text-center md:text-left">
                <span className="md:absolute md:-top-12 md:left-2 text-[10px] uppercase tracking-[0.4em] text-neutral-500 flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-0">
                  <div className="w-2 h-2 bg-purple-500 animate-pulse rounded-full" />
                  Our Work
                </span>
                
                <h2 className="text-[20vw] md:text-[15vw] leading-[0.8] font-serif italic text-white mix-blend-difference">
                  THE
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-4 w-full mt-2">
                  <h2 className="text-[20vw] md:text-[15vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-white">
                    VAULT
                  </h2>
                  <div className="h-[1px] w-12 md:w-20 bg-white/20 hidden md:block"></div>
                  <div className="hidden md:flex flex-col items-end text-right">
                    <span className="text-xs uppercase tracking-widest text-neutral-500">Projects</span>
                    <span className="text-4xl font-mono">004</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[400px] border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-2 md:pl-8 pb-2">
              <p className="text-base md:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed text-center md:text-left">
                Showcasing our expertise through successful implementations. Each project represents innovation, quality, and client success.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 mt-16 md:mt-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen relative flex flex-col items-center justify-center border-t border-white/10 bg-black py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] bg-cyan-900/20 rounded-full blur-[100px] md:blur-[150px] animate-pulse"></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-0 max-w-[95vw] md:max-w-[90vw]">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md">
              Get In Touch
            </span>
          </div>

          <div className="flex flex-col items-center justify-center leading-none text-center">
            <span className="text-[5vw] md:text-[3vw] font-light tracking-[0.5em] md:tracking-[1em] uppercase text-neutral-400 mb-2 md:mb-4">
              Let's
            </span>
            
            <h2 className="text-[16vw] md:text-[15vw] font-bold tracking-tighter text-transparent relative group cursor-default w-full text-center">
              <span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:2px_rgba(6,182,212,0.8)] transition-all duration-500 z-10">
                CONNECT
              </span>
              <span className="relative z-20 bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-cyan-500/20 group-hover:to-transparent transition-all duration-500">
                CONNECT
              </span>
            </h2>
          </div>

          <p className="text-center text-neutral-300 max-w-xl mx-auto mt-8 md:mt-12 mb-12 md:mb-16 font-light leading-relaxed text-sm md:text-base px-4">
            Ready to transform your ideas into reality? Get in touch with us today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Mail, label: 'Email', value: 'contact@trenztechnologies.com', href: 'mailto:contact@trenztechnologies.com' },
              { icon: Phone, label: 'Phone', value: '9944865057', href: 'tel:+919944865057' },
              { icon: Instagram, label: 'Instagram', value: '@trenztechnologies', href: 'https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz' }
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-8 border border-white/10 bg-black/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-xs text-neutral-400 mb-3 uppercase tracking-wider">{contact.label}</div>
                  <div className="text-sm md:text-base font-bold group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all break-all">
                    {contact.value}
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 text-[10px] uppercase tracking-widest text-neutral-600 bg-black z-20 relative gap-4 md:gap-0">
        <div className="text-center md:text-left">
          Trenz Technologies <span className="mx-2">//</span> Est. 2020
        </div>
        <div className="flex gap-6 md:gap-8">
          <a href="mailto:contact@trenztechnologies.com" className="hover:text-cyan-400 transition-colors">Email</a>
          <a href="tel:+919944865057" className="hover:text-cyan-400 transition-colors">Phone</a>
          <a href="https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a>
        </div>
      </footer>
    </div>
  )
}

// Service Card Component
function ServiceCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [-2, 2] : [2, -2])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const Icon = service.icon

  return (
    <div ref={cardRef} className={`flex ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} relative group px-0 md:px-10`}>
      <motion.div 
        style={{ y, rotate, scale }} 
        className="relative w-[90vw] md:w-[55vw] min-h-[300px] md:min-h-[400px] bg-neutral-900 overflow-hidden border border-white/5 group-hover:border-cyan-500/30 transition-all duration-700"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 z-20 transition-opacity duration-300`}></div>
        
        <div className="p-8 md:p-12 relative z-30 h-full flex flex-col justify-between">
          <div>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
              {service.title}
            </h3>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl">
              {service.desc}
            </p>
          </div>
        </div>
      </motion.div>
      
      <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-2 md:-right-24' : '-left-2 md:-left-24'} text-[6rem] md:text-[12rem] font-bold text-white/5 -z-10 select-none font-serif italic hidden md:block`}>
        0{service.id}
      </div>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [-2, 2] : [2, -2])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  const colorClasses: Record<string, string> = {
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-300',
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-300',
    pink: 'from-pink-500/20 to-pink-500/5 border-pink-500/30 text-pink-300',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-300'
  }

  return (
    <div ref={cardRef} className={`flex ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} relative group px-0 md:px-10`}>
      <motion.div 
        style={{ y, rotate, scale }} 
        className="relative w-[90vw] md:w-[55vw] min-h-[250px] md:min-h-[350px] bg-neutral-900 overflow-hidden border border-white/5 group-hover:border-purple-500/30 transition-all duration-700"
      >
        <div className="p-8 md:p-12 relative z-30 h-full flex flex-col justify-between">
          <div>
            <span className={`inline-block px-4 py-2 bg-gradient-to-r ${colorClasses[project.color]} border rounded-full text-sm mb-6`}>
              {project.tag}
            </span>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
              {project.name}
            </h3>
          </div>
        </div>
      </motion.div>
      
      <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-2 md:-right-24' : '-left-2 md:-left-24'} text-[6rem] md:text-[12rem] font-bold text-white/5 -z-10 select-none font-serif italic hidden md:block`}>
        0{index + 1}
      </div>
    </div>
  )
}
