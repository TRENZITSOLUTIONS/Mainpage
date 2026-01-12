'use client'

import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

export default function BlogPage() {
  const posts = [
    {
      date: '29 Aug 2025',
      category: 'SAAS',
      author: 'Admin',
      title: 'How SaaS is Transforming Business Operations',
      description: 'Discover how Software as a Service is revolutionizing the way businesses operate and scale. Learn about the key benefits and trends shaping the future of SaaS.',
      longDescription: 'Software as a Service (SaaS) has become the backbone of modern business operations. From startups to enterprise-level organizations, companies are leveraging SaaS solutions to streamline workflows, reduce costs, and accelerate growth. This transformation is not just about adopting new technology—it\'s about fundamentally changing how businesses operate, collaborate, and deliver value to customers.',
      gradient: 'from-blue-500 to-cyan-500',
      slug: 'how-saas-is-transforming-business-operations',
      tags: ['SAAS', 'Business', 'Technology'],
    },
    {
      date: '22 Aug 2025',
      category: 'Mobile Apps',
      author: 'Admin',
      title: 'Why Custom Apps Are a Game-Changer for Startups',
      description: 'Learn why custom mobile applications can give startups a competitive edge in the market. Explore the benefits and success stories.',
      longDescription: 'In today\'s competitive market, startups need every advantage they can get. Custom mobile applications provide a unique opportunity to differentiate your brand, engage customers directly, and create a seamless user experience. Unlike generic solutions, custom apps are tailored to your specific business needs, allowing you to implement features that directly address your target audience\'s pain points.',
      gradient: 'from-purple-500 to-pink-500',
      slug: 'why-custom-apps-are-game-changer-for-startups',
      tags: ['Mobile Apps', 'Startups', 'Innovation'],
    },
    {
      date: '15 Aug 2025',
      category: 'Web Development',
      author: 'Admin',
      title: 'The Future of Websites in a Digital-First World',
      description: 'Explore the latest trends and technologies shaping the future of web development. From AI integration to progressive web apps.',
      longDescription: 'The digital landscape is evolving at an unprecedented pace. Websites are no longer static pages but dynamic, interactive experiences that adapt to user behavior and preferences. The future of web development lies in creating immersive, fast, and intelligent web experiences that seamlessly blend functionality with aesthetics. From AI-powered personalization to progressive web apps that work offline, the possibilities are endless.',
      gradient: 'from-green-500 to-emerald-500',
      slug: 'the-future-of-websites-in-digital-first-world',
      tags: ['Web Development', 'Future', 'Technology'],
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        {/* 3D Network Visualization */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 hidden lg:block pointer-events-none">
          <Scene type="network" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-400 text-sm font-semibold mb-4 glow-effect"
              whileHover={{ scale: 1.05 }}
            >
              Insights & Updates
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 glow-text">
              Empowering Businesses with Smart Digital Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with the latest trends, insights, and innovations in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="space-y-16">
            {posts.map((post, index) => (
              <ScrollReveal 
                key={post.slug} 
                direction={index % 2 === 0 ? 'left' : 'right'} 
                delay={index * 0.15}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-primary-500/50 transition-all duration-500 animated-border"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="p-8 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4 flex-wrap">
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-400 flex items-center border border-primary-500/30"
                          >
                            <Tag className="w-4 h-4 mr-2" />
                            {post.category}
                          </motion.span>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {post.date}
                          </div>
                          <div className="text-gray-400 text-sm">
                            by {post.author}
                          </div>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                          {post.description}
                        </p>
                        
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {post.longDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-semibold border border-slate-600/50"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        
                        <MagneticButton strength={0.3}>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors group-hover:translate-x-2 transition-transform"
                          >
                            Read Full Article
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                        </MagneticButton>
                      </div>
                      
                      {/* Decorative Element */}
                      <div className={`hidden md:block w-32 h-32 bg-gradient-to-br ${post.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity glow-effect`} />
                    </div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-64 h-64 bg-gradient-to-br ${post.gradient} opacity-5 rounded-full blur-3xl`} />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Back to Home */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="mt-16 text-center">
              <MagneticButton strength={0.3}>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-full font-semibold hover:border-primary-500/50 transition-all animated-border"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

