'use client';

import { motion } from 'framer-motion';
import {
  Share2,
  CheckSquare,
  BarChart3,
  FileText,
  Image,
  Wand2,
  FileCheck,
  Layout,
  Hash,
} from 'lucide-react';

const features = [
  {
    icon: Share2,
    title: 'Multi-Tenant Workspaces',
    description: 'Manage multiple teams and projects seamlessly in one platform with complete isolation and custom permissions.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: CheckSquare,
    title: 'Project & Task Management',
    description: 'Organize work with advanced project management, task tracking, and team collaboration features.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get deep insights into team productivity, project progress, and performance metrics with comprehensive dashboards.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileText,
    title: 'AI Article Generator',
    description: 'Generate high-quality articles, blog posts, and content automatically with AI-powered writing assistance.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Image,
    title: 'AI Image Generator',
    description: 'Create stunning images and graphics from text prompts powered by advanced AI models.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Wand2,
    title: 'Background & Object Remover',
    description: 'Remove backgrounds and unwanted objects from images with precision using AI technology.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FileCheck,
    title: 'Resume Analyzer',
    description: 'Analyze and improve resumes with AI-powered suggestions and scoring to increase interview chances.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Hash,
    title: 'Blog Title Generator',
    description: 'Generate catchy and SEO-optimized blog titles instantly using AI to boost your content reach.',
    color: 'from-violet-500 to-fuchsia-500',
  },
];

export function Features() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to boost productivity, collaborate effectively, and create amazing content with AI
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative p-6 bg-gradient-to-br from-card to-card/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-xl`} />

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all`}>
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
