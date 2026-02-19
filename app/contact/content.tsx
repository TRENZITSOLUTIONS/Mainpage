'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const mailtoLink = `mailto:contact@trenztechnologies.com?subject=${encodeURIComponent(formData.subject || 'New Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`)}`
        window.location.href = mailtoLink
    }

    return (
        <div className="bg-black text-neutral-200 min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-32 px-4 md:px-10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/15 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.span
                            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6"
                        >
                            Contact Us
                        </motion.span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                            LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CONNECT</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s build something great together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-20 px-4 md:px-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-8">Get in touch</h2>
                                <p className="text-neutral-400 leading-relaxed mb-8">
                                    Whether you need a complete digital solution, a dedicated development team, or strategic IT consulting — we&apos;re here to help.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a href="mailto:contact@trenztechnologies.com" className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email</h4>
                                        <p className="text-neutral-400 group-hover:text-cyan-400 transition-colors">contact@trenztechnologies.com</p>
                                    </div>
                                </a>

                                <a href="tel:+919944865057" className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Phone</h4>
                                        <p className="text-neutral-400 group-hover:text-purple-400 transition-colors">+91 99448 65057</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Location</h4>
                                        <p className="text-neutral-400">India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Support</h4>
                                        <p className="text-neutral-400">24/7 Available</p>
                                    </div>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="pt-8 border-t border-white/10">
                                <h4 className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Follow Us</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.instagram.com/trenztechnologies?utm_source=qr&igsh=Y3puczR4MnlyOHVz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                                    >
                                        Instagram
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                                        LinkedIn
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                                        Twitter / X
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3"
                        >
                            <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                                <p className="text-neutral-500 text-sm mb-6">Fill out the form and we&apos;ll get back to you as soon as possible.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm text-neutral-400 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            placeholder="+91 99448 65057"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm text-neutral-400 mb-2">Subject *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        >
                                            <option value="" className="bg-black">Select a subject</option>
                                            <option value="Product Engineering" className="bg-black">Product Engineering</option>
                                            <option value="Application Development" className="bg-black">Application Development</option>
                                            <option value="Cloud Solutions" className="bg-black">Cloud Solutions</option>
                                            <option value="Digital Transformation" className="bg-black">Digital Transformation</option>
                                            <option value="IT Consulting" className="bg-black">IT Consulting</option>
                                            <option value="General Inquiry" className="bg-black">General Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
