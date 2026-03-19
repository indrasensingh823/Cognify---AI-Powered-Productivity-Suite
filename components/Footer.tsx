'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'API Docs', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partners', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Compliance', href: '#' },
  ],
  Resources: [
    { label: 'Help Center', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Status', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

export function Footer() {

  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      setMessageText('Please enter an email ⚠️');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      return;
    }

    const savedEmails = JSON.parse(localStorage.getItem('subscribedEmails') || '[]');

    if (savedEmails.includes(email)) {
      setMessageText('You already subscribed with this email ❌');
    } else {
      savedEmails.push(email);
      localStorage.setItem('subscribedEmails', JSON.stringify(savedEmails));
      setMessageText('Subscribed Successfully 🚀');
      setEmail('');
    }

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <footer className="relative border-t border-border/30 bg-gradient-to-t from-purple-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-2 space-y-4"
          >
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                <Image src="cognifylogo.png" alt="Cognify Logo" width={60} height={60} />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cognify
              </span>
            </Link>
            <p className="text-sm text-foreground/60">
              Empowering teams to work smarter
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Stay Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 lg:col-span-1 space-y-4"
          >
            <h3 className="font-semibold text-foreground">Stay Updated</h3>

            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-background border border-border/50 rounded-lg text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />

              <motion.button
                onClick={handleSubscribe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-background rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                <Sparkles size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30" />

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-foreground/60">
            © 2026 Cognify. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-foreground/60 hover:text-cyan-400 transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>

      {showMessage && (
  <motion.div
    initial={{ opacity: 0, x: 100, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.3 }}
    className="fixed top-6 right-6 z-50"
  >
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 rounded-xl px-5 py-4 shadow-2xl backdrop-blur-md min-w-[280px]">

      <div className="flex items-start gap-3">

        {/* Icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="status"
          className="w-8 h-8 mt-1"
        />

        {/* Content */}
        <div>
          <h3 className="text-sm font-semibold text-cyan-400">
            {messageText}
          </h3>

          <p className="text-xs text-foreground/60 mt-1">
            {messageText.includes('Successfully')
              ? "You’ll receive updates in your inbox."
              : "Try using a different email."}
          </p>
        </div>

      </div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 3 }}
        className="h-[2px] bg-cyan-400 mt-3 rounded-full"
      />
    </div>
  </motion.div>
)}

    </footer>
  );
}