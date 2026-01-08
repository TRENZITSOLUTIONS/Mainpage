'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/Particles'
import ScrollReveal from '@/components/animations/ScrollReveal'
import MagneticButton from '@/components/animations/MagneticButton'

const Scene = dynamic(() => import('@/components/3D/Scene'), { ssr: false })

const blogPosts: Record<string, any> = {
  'how-saas-is-transforming-business-operations': {
    title: 'How SaaS is Transforming Business Operations',
    date: '29 Aug 2025',
    category: 'SAAS',
    author: 'Admin',
    content: `
      Software as a Service (SaaS) has revolutionized how businesses operate in the digital age. 
      From startups to enterprise-level organizations, SaaS solutions are transforming traditional 
      business models and operational workflows.
      
      ## The Rise of SaaS
      
      SaaS platforms have become the backbone of modern business operations. They offer 
      unparalleled flexibility, scalability, and cost-effectiveness compared to traditional 
      software solutions. Companies can now access enterprise-grade tools without the massive 
      upfront investment in infrastructure.
      
      ## Key Benefits
      
      - **Cost Efficiency**: Pay-as-you-go models eliminate large capital expenditures
      - **Scalability**: Easily adjust resources based on business needs
      - **Accessibility**: Access from anywhere, anytime with internet connection
      - **Automatic Updates**: Always have the latest features and security patches
      - **Integration**: Seamlessly connect with other business tools
      
      ## Future Outlook
      
      The SaaS market continues to grow exponentially, with new innovations in AI, machine 
      learning, and automation driving further transformation. Businesses that embrace SaaS 
      solutions are better positioned to adapt to changing market conditions and scale 
      efficiently.
    `,
    gradient: 'from-blue-500 to-cyan-500'
  },
  'why-custom-apps-are-game-changer-for-startups': {
    title: 'Why Custom Apps Are a Game-Changer for Startups',
    date: '22 Aug 2025',
    category: 'Mobile Apps',
    author: 'Admin',
    content: `
      In today's competitive startup landscape, custom mobile applications have become 
      essential tools for growth and differentiation. Startups that invest in custom app 
      development gain significant advantages over competitors using generic solutions.
      
      ## Competitive Advantage
      
      Custom apps allow startups to create unique user experiences tailored to their 
      specific business needs. This level of personalization is impossible with off-the-shelf 
      solutions and can be a key differentiator in crowded markets.
      
      ## Key Advantages
      
      - **Brand Identity**: Create a unique brand experience
      - **Feature Customization**: Build exactly what you need
      - **Scalability**: Grow with your business from day one
      - **Data Ownership**: Full control over user data and analytics
      - **Integration**: Connect seamlessly with your existing systems
      
      ## ROI Considerations
      
      While custom development requires initial investment, the long-term benefits often 
      outweigh the costs. Custom apps can streamline operations, improve customer engagement, 
      and provide valuable insights through analytics.
    `,
    gradient: 'from-purple-500 to-pink-500'
  },
  'the-future-of-websites-in-digital-first-world': {
    title: 'The Future of Websites in a Digital-First World',
    date: '15 Aug 2025',
    category: 'Web Development',
    author: 'Admin',
    content: `
      As we move further into a digital-first world, websites are evolving beyond simple 
      information displays. Modern websites are becoming interactive experiences, business 
      platforms, and customer engagement tools all in one.
      
      ## Evolution of Web Design
      
      Websites have transformed from static pages to dynamic, interactive experiences. 
      Modern web development incorporates AI, real-time data, and personalized content to 
      create engaging user experiences.
      
      ## Emerging Trends
      
      - **AI Integration**: Chatbots, personalized content, and smart recommendations
      - **Progressive Web Apps**: App-like experiences in the browser
      - **Voice Search Optimization**: Adapting to voice-first interactions
      - **Augmented Reality**: Immersive product experiences
      - **Performance First**: Speed and optimization as priorities
      
      ## What This Means for Businesses
      
      Businesses need to invest in modern web development to stay competitive. A well-designed 
      website is no longer optional—it's a critical component of your digital presence and 
      customer acquisition strategy.
    `,
    gradient: 'from-green-500 to-emerald-500'
  }
}

export default function BlogDetailsPage() {
  const params = useParams()
  const slug = params?.slug as string
  // Normalize slug to handle variations
  const normalizedSlug = slug?.toLowerCase().replace(/\s+/g, '-')
  const post = blogPosts[normalizedSlug] || blogPosts['how-saas-is-transforming-business-operations']

  return (
    <div className="pt-20 min-h-screen bg-slate-900">
      <ParticleBackground />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* 3D Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 hidden lg:block pointer-events-none">
        <Scene type="code" />
      </div>

      <div className="container-custom relative z-10 max-w-4xl">
        {/* Back Button */}
        <ScrollReveal direction="left" delay={0.1}>
          <Link href="/">
            <MagneticButton className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 mb-8">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </MagneticButton>
          </Link>
        </ScrollReveal>

        {/* Article Header */}
        <div className="py-12">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center space-x-4 mb-6">
              <span className={`px-4 py-2 bg-gradient-to-r ${post.gradient} text-white rounded-full text-sm font-semibold`}>
                {post.category}
              </span>
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent mb-8`}>
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">By {post.author}</span>
              <MagneticButton>
                <button className="p-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-primary-500 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-400" />
                </button>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Article Content */}
        <ScrollReveal direction="up" delay={0.3}>
          <article className="prose prose-invert prose-lg max-w-none py-12">
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {post.content.split('\n').map((paragraph: string, index: number) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-white mt-12 mb-6">
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  )
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={index} className="ml-6 mb-2">
                      {paragraph.replace('-', '').trim()}
                    </li>
                  )
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-6">
                      {paragraph.trim()}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </article>
        </ScrollReveal>

        {/* Related Posts */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="py-20 border-t border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== normalizedSlug)
                .slice(0, 2)
                .map(([key, relatedPost]) => (
                  <Link key={key} href={`/blog/${key}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-primary-500/50 transition-all"
                    >
                      <h4 className="text-xl font-bold text-white mb-2">{relatedPost.title}</h4>
                      <p className="text-gray-400 text-sm">{relatedPost.date}</p>
                    </motion.div>
                  </Link>
                ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

