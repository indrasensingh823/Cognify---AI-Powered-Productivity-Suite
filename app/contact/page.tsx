'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle, } from 'lucide-react';
import { Twitter, Linkedin, Github, } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setStatus('error');
        setErrorMessage('Please fill in all fields.');
        return;
      }

      // Using Formspree endpoint - Replace YOUR_FORM_ID with your actual Formspree ID
      // Get your form ID from https://formspree.io after creating a form
      const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'PLACEHOLDER';
      
      if (FORMSPREE_ID === 'PLACEHOLDER') {
        setStatus('error');
        setErrorMessage('Contact form is not configured. Please try again later.');
        return;
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
      console.error('[v0] Contact form error:', error);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Sparkles size={18} className="text-cyan-400" />
              <span className="text-sm text-cyan-300">Get in Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Contact Us
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Contact Information Cards */}
            <motion.div variants={item} className="lg:col-span-1 space-y-6">
              {/* Email Card */}
              <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-600/5 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">support@cognify.ai</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get in touch via email. We usually respond within 24 hours.
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-600/5 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Phone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground"><a href="tel:+919876543210">+91 98765 43210</a></p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Call us Mon-Fri, 9am-6pm EST for immediate assistance.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-gradient-to-br from-pink-600/20 to-pink-600/5 border border-pink-500/30 rounded-2xl p-6 backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <MapPin className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-sm text-muted-foreground">Tech Park, Sector 62, Noida, Uttar Pradesh 201309, India</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tech Park, Sector 62, Noida, Uttar Pradesh 201309, India
                </p>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
               <h3 className="font-semibold mb-4">Follow Us</h3>

                <div className="flex gap-3">

                  <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-500/50               transition-all duration-300 flex items-center justify-center text-cyan-300">
                    <Twitter size={18} />
                  </button>

                  <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-500/50               transition-all duration-300 flex items-center justify-center text-cyan-300">
                    <Linkedin size={18} />
                  </button>

                  <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-500/50               transition-all duration-300 flex items-center justify-center text-cyan-300">
                    <Github size={18} />
                  </button>

                  <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-500/50  transition-all duration-300 flex items-center justify-center text-cyan-300 font-bold">
                    <FaDiscord size={18} />
                  </button>

                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={item}
              className="lg:col-span-2 bg-gradient-to-br from-cyan-600/10 via-purple-600/10 to-pink-600/10 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl"
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <CheckCircle className="text-cyan-400" size={64} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mt-4 mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-xs text-center">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="abc@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {errorMessage && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Cognify and our services.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                q: 'What is Cognify?',
                a: 'Cognify is an all-in-one AI-powered productivity suite designed to help teams work smarter and faster.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.',
              },
              {
                q: 'How do I cancel my subscription?',
                a: 'You can cancel anytime from your account settings. Your data will be available for 30 days after cancellation.',
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. We use enterprise-grade encryption and comply with GDPR, SOC 2, and other security standards.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="font-semibold mb-2 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
