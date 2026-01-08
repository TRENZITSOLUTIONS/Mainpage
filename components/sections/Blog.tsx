'use client'

import { motion } from 'framer-motion'
import { Calendar, Tag } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      date: '29 Aug 2025',
      category: 'SAAS',
      title: 'How SaaS is Transforming Business Operations',
      description: 'Discover how Software as a Service is revolutionizing the way businesses operate and scale.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      date: '22 Aug 2025',
      category: 'Mobile Apps',
      title: 'Why Custom Apps Are a Game-Changer for Startups',
      description: 'Learn why custom mobile applications can give startups a competitive edge in the market.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      date: '15 Aug 2025',
      category: 'Web Development',
      title: 'The Future of Websites in a Digital-First World',
      description: 'Explore the latest trends and technologies shaping the future of web development.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Insights & Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 glow-text">
            Empowering Businesses with Smart Digital Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 overflow-hidden animated-border"
            >
              {/* Image Placeholder with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-400 flex items-center border border-primary-500/30">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.description}
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors group-hover:translate-x-2 transition-transform"
                >
                  Read More
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

