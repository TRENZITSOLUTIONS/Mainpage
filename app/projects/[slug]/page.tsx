'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

const projectDetails: Record<string, any> = {
  'digiocean': {
    name: 'DigiOcean',
    description: 'A comprehensive digital ocean management platform that helps businesses manage their digital infrastructure efficiently.',
    longDescription: 'DigiOcean is a powerful platform designed to streamline digital operations and infrastructure management. Built with modern technologies, it provides real-time monitoring, automated scaling, and comprehensive analytics. The platform enables businesses to optimize their cloud resources, reduce costs, and improve operational efficiency.',
    features: [
      'Real-time Infrastructure Monitoring',
      'Automated Scaling & Resource Management',
      'Cost Optimization Analytics',
      'Multi-cloud Support',
      'Security & Compliance Tools',
      'API Integration',
      'Custom Dashboards',
      'Automated Backups'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['SaaS', 'Cloud', 'Management', 'DevOps'],
    date: '2024',
    tech: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
  },
  'jewellry': {
    name: 'Jewellry',
    description: 'E-commerce platform for jewelry retail with advanced catalog management and customer engagement features.',
    longDescription: 'Jewellry is a full-featured e-commerce solution specifically designed for jewelry retailers. It includes inventory management, customer relationship tools, and a beautiful, responsive shopping experience. The platform features advanced product customization, virtual try-on capabilities, and seamless payment processing.',
    features: [
      'Advanced Product Catalog',
      'Virtual Try-On Technology',
      'Inventory Management',
      'Customer Relationship Management',
      'Secure Payment Processing',
      'Order Tracking System',
      'Multi-currency Support',
      'Mobile App Integration'
    ],
    gradient: 'from-purple-500 to-pink-500',
    tags: ['E-commerce', 'Retail', 'Web App', 'Mobile'],
    date: '2024',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Redis']
  },
  'gym-app': {
    name: 'Gym app',
    description: 'Fitness tracking and workout management application with social features and progress analytics.',
    longDescription: 'A comprehensive fitness application that helps users track workouts, monitor progress, and achieve their fitness goals. Features include workout plans, nutrition tracking, and community engagement. The app uses AI to personalize workout recommendations and provides detailed analytics on user performance.',
    features: [
      'Workout Planning & Tracking',
      'Nutrition & Calorie Tracking',
      'Progress Analytics & Charts',
      'Social Community Features',
      'AI-Powered Recommendations',
      'Wearable Device Integration',
      'Video Exercise Library',
      'Personal Trainer Connect'
    ],
    gradient: 'from-orange-500 to-red-500',
    tags: ['Mobile App', 'Fitness', 'Health', 'AI'],
    date: '2024',
    tech: ['React Native', 'Firebase', 'TensorFlow', 'GraphQL']
  },
  'iedutrack': {
    name: 'Iedutrack',
    description: 'Educational tracking and management system for institutions to monitor student progress and performance.',
    longDescription: 'Iedutrack is an educational management platform that enables institutions to track student progress, manage courses, and generate comprehensive reports. It simplifies administrative tasks and enhances learning outcomes. The platform includes features for attendance tracking, grade management, parent-teacher communication, and learning analytics.',
    features: [
      'Student Progress Tracking',
      'Course Management System',
      'Attendance Management',
      'Grade & Assessment Tools',
      'Parent-Teacher Portal',
      'Learning Analytics Dashboard',
      'Assignment & Submission System',
      'Communication Tools'
    ],
    gradient: 'from-green-500 to-emerald-500',
    tags: ['Education', 'Management', 'SaaS', 'Analytics'],
    date: '2024',
    tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'WebSockets']
  }
}

export default function ProjectDetailsPage() {
  const params = useParams()
  const slug = params?.slug as string
  // Handle different slug formats
  const normalizedSlug = slug?.toLowerCase().replace(/\s+/g, '-')
  const project = projectDetails[normalizedSlug] || projectDetails['digiocean']

  return (
    <div className="pt-20 min-h-screen bg-slate-900">
      <ParticleBackground />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* 3D Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 hidden lg:block pointer-events-none">
        <Scene type="geometric" />
      </div>

      <div className="container-custom relative z-10">
        {/* Back Button */}
        <ScrollReveal direction="left" delay={0.1}>
          <Link href="/projects">
            <MagneticButton className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 mb-8">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </MagneticButton>
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <div className="py-20">
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-6`}>
              {project.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              {project.longDescription}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {project.tags.map((tag: string) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold border border-primary-500/30"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-5 h-5" />
                <span>{project.tech.join(', ')}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="py-20">
          <ScrollReveal direction="up" delay={0.3}>
            <h2 className="text-4xl font-bold text-white mb-12">Key Features</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature: string, index: number) => (
              <ScrollReveal key={feature} direction="scale" delay={0.05 * index}>
                <motion.div
                  whileHover={{ y: -10, x: 10 }}
                  className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 transition-all"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient} mb-4`} />
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="py-20 flex items-center justify-center space-x-4">
            <MagneticButton strength={0.5}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold flex items-center space-x-2 glow-effect`}
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live Project</span>
              </motion.button>
            </MagneticButton>
            <MagneticButton strength={0.5}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold flex items-center space-x-2 border border-slate-700"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </motion.button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

