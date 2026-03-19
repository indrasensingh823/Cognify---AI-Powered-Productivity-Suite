'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export function CTA() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const benefits = [
    'No credit card required',
    '14-day free trial',
    'Cancel anytime',
  ];

  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-purple-600/10 to-blue-600/10" />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-cyan-600/0 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Main heading */}
          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Start Your AI Journey Today
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of teams already boosting their productivity with Cognify. Experience the power of AI-driven collaboration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a href="https://project-mgt-ruby.vercel.app/">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-background font-semibold rounded-full hover:shadow-2xl transition-all flex items-center gap-2 text-lg"
            >
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
              </a>
              <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 212, 255, 0.8)', boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-background/50 border border-cyan-500/30 text-foreground font-semibold rounded-full backdrop-blur-sm hover:bg-background/80 transition-all text-lg"
            >
              Contact Sales
            </motion.button>
              </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check size={20} className="text-cyan-400 flex-shrink-0" />
                <span className="text-foreground/70 text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
