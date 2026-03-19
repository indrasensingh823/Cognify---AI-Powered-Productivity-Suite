'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Product Manager at TechCorp',
    company: 'TechCorp',
    quote:
      'Cognify has completely transformed how our team works. The AI tools save us hours every day, and the project management features keep everyone aligned. Best platform we\'ve used.',
    rating: 5,
    initials: 'AS',
  },
  {
    name: 'Priya Mehta',
    role: 'Creative Director at InnovateLabs',
    company: 'InnovateLabs',
    quote:
      'The AI image generation and background removal features are incredible. Our design workflow is now 3x faster. Cognify is a game-changer for creative teams.',
    rating: 5,
    initials: 'PM',
  },
  {
    name: 'Rohan Verma',
    role: 'CEO at FutureStack',
    company: 'FutureStack',
    quote:
      'We switched to Cognify and couldn\'t be happier. The analytics dashboard gives us real insights into team productivity. The support team is fantastic too.',
    rating: 5,
    initials: 'RV',
  },
];

export function Testimonials() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Loved by Teams Everywhere
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            See what our customers have to say about Cognify
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group p-8 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all overflow-hidden relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10" />

              <div className="relative z-10 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-cyan-500/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
