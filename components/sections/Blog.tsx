'use client'

import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'

export default function Blog() {
  const posts = [
    {
      date: '29 Aug 2025',
      category: 'SAAS',
      title: 'How SaaS is Transforming Business Operations',
      description: 'Discover how Software as a Service is revolutionizing the way businesses operate and scale.',
      gradient: 'from-blue-500 to-cyan-500',
      slug: 'how-saas-is-transforming-business-operations'
    },
    {
      date: '22 Aug 2025',
      category: 'Mobile Apps',
      title: 'Why Custom Apps Are a Game-Changer for Startups',
      description: 'Learn why custom mobile applications can give startups a competitive edge in the market.',
      gradient: 'from-purple-500 to-pink-500',
      slug: 'why-custom-apps-are-game-changer-for-startups'
    },
    {
      date: '15 Aug 2025',
      category: 'Web Development',
      title: 'The Future of Websites in a Digital-First World',
      description: 'Explore the latest trends and technologies shaping the future of web development.',
      gradient: 'from-green-500 to-emerald-500',
      slug: 'the-future-of-websites-in-digital-first-world'
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      
      <div className="container-custom relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Insights & Updates
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 glow-text">
              Empowering Businesses with Smart Digital Solutions
            </h2>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in technology
            </p>
          </div>
        </ScrollReveal>

        {/* Creative Blog Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ScrollReveal 
              key={post.title} 
              direction="scale" 
              delay={index * 0.15}
            >
              <motion.div
                whileHover={{ y: -15, rotateY: 5 }}
                className="group relative h-full bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-500 overflow-hidden animated-border"
                style={{ perspective: '1000px' }}
              >
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-slate-900/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-400 flex items-center border border-primary-500/30">
                      <Tag className="w-4 h-4 mr-2" />
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <MagneticButton strength={0.3}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors group-hover:translate-x-2 transition-transform"
                    >
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </MagneticButton>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
