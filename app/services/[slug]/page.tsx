'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

const serviceDetails: Record<string, any> = {
  'app-development': {
    title: 'App Development',
    description: 'We design and develop mobile and web applications that are user-friendly, scalable, and tailored to your business goals.',
    features: [
      'iOS & Android Native Development',
      'Cross-Platform Solutions (React Native, Flutter)',
      'Progressive Web Apps (PWA)',
      'UI/UX Design & Prototyping',
      'App Store Optimization',
      'Performance Optimization',
      'API Integration',
      'Real-time Features'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '📱'
  },
  'saas-solutions': {
    title: 'SaaS Solutions',
    description: 'Our team creates powerful SaaS platforms that streamline workflows, automate processes, and provide scalable solutions.',
    features: [
      'Cloud Infrastructure Setup',
      'Multi-tenant Architecture',
      'Subscription Management',
      'API Development & Integration',
      'Payment Gateway Integration',
      'Analytics & Reporting',
      'Automated Workflows',
      'Scalable Database Design'
    ],
    gradient: 'from-purple-500 to-pink-500',
    icon: '☁️'
  },
  'website-development': {
    title: 'Website Development',
    description: 'We craft modern, responsive, and high-performance websites that showcase your brand and drive conversions.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'E-commerce Solutions',
      'CMS Integration',
      'Fast Loading Times',
      'Mobile-First Approach',
      'Content Management',
      'Analytics Integration'
    ],
    gradient: 'from-green-500 to-emerald-500',
    icon: '🌐'
  },
  'software-development-&-maintenance': {
    title: 'Software Development & Maintenance',
    description: 'We provide custom software solutions along with continuous maintenance and support to ensure your systems run smoothly.',
    features: [
      'Custom Software Development',
      'System Integration',
      'Maintenance & Support',
      'Legacy Modernization',
      'Performance Optimization',
      'Security Updates',
      'Bug Fixing & Testing',
      'Documentation & Training'
    ],
    gradient: 'from-orange-500 to-red-500',
    icon: '💻'
  },
  'blockchain-development': {
    title: 'Blockchain Development',
    description: 'We build secure and scalable blockchain applications, smart contracts, and decentralized platforms for Web3 technology.',
    features: [
      'Smart Contract Development',
      'DApps Development',
      'NFT Solutions',
      'DeFi Platforms',
      'Token Development',
      'Blockchain Integration',
      'Security Auditing',
      'Web3 Consulting'
    ],
    gradient: 'from-indigo-500 to-purple-500',
    icon: '⛓️'
  },
  'all-products-trial': {
    title: 'All Products Trial',
    description: 'We offer free trials for our products and solutions, giving you hands-on experience before making a full commitment.',
    features: [
      'Free Trial Access',
      'Demo Sessions',
      'Proof of Concept',
      'Risk-Free Testing',
      'Full Feature Access',
      'Expert Support',
      'No Credit Card Required',
      'Easy Upgrade Path'
    ],
    gradient: 'from-teal-500 to-cyan-500',
    icon: '🎁'
  },
  'it-consulting': {
    title: 'IT Consulting',
    description: 'We provide expert IT consulting services to help you adopt the right technologies and accelerate digital transformation.',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'Process Optimization',
      'Architecture Design',
      'Cloud Migration',
      'Security Assessment',
      'Technology Selection',
      'Implementation Planning'
    ],
    gradient: 'from-rose-500 to-pink-500',
    icon: '🎯'
  }
}

export default function ServiceDetailsPage() {
  const params = useParams()
  const slug = params?.slug as string
  const service = serviceDetails[slug] || serviceDetails['app-development']

  return (
    <div className="pt-20 min-h-screen bg-slate-900">
      <ParticleBackground />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* 3D Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 hidden lg:block pointer-events-none">
        <Scene type="network" />
      </div>

      <div className="container-custom relative z-10">
        {/* Back Button */}
        <ScrollReveal direction="left" delay={0.1}>
          <Link href="/services">
            <MagneticButton className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 mb-8">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </MagneticButton>
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <div className="py-20">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-6xl mb-4">{service.icon}</div>
            <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6`}>
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              {service.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="py-20">
          <ScrollReveal direction="up" delay={0.3}>
            <h2 className="text-4xl font-bold text-white mb-12">What We Offer</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature: string, index: number) => (
              <ScrollReveal key={feature} direction="scale" delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 transition-all"
                >
                  <CheckCircle2 className={`w-6 h-6 mb-4 bg-gradient-to-br ${service.gradient} text-transparent bg-clip-text`} />
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="py-20 text-center">
            <MagneticButton strength={0.5}>
              <Link
                href="/contact"
                className={`inline-block px-12 py-6 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold text-lg glow-effect hover:shadow-2xl transition-all`}
              >
                Get Started Today
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

