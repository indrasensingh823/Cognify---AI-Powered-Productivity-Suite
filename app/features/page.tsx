'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Image, Wand2, FileText, BarChart3, CheckSquare, Zap, PieChart, Hash } from 'lucide-react';

interface AITool {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  features: string[];
  link: string;
}

const aiTools: AITool[] = [
  {
    id: 1,
    name: 'AI Article Generator',
    description: 'Create high-quality, SEO-optimized articles in minutes. Perfect for content creators and marketers.',
    icon: <FileText size={32} />,
    color: 'from-purple-600/20 to-purple-600/5',
    glowColor: 'rgba(168, 85, 247, 0.2)',
    features: ['SEO Optimization', 'Multi-language Support', 'Tone Adjustment'],
    link: 'https://quick-ai-6ltt.vercel.app/ai/write-article',
  },
  {
    id: 2,
    name: 'AI Image Generator',
    description: 'Generate stunning images from text descriptions using advanced AI models. Unleash your creativity.',
    icon: <Image size={32} />,
    color: 'from-cyan-600/20 to-cyan-600/5',
    glowColor: 'rgba(6, 182, 212, 0.2)',
    features: ['Custom Dimensions', 'Style Transfer', 'Batch Generation'],
    link: 'https://quick-ai-6ltt.vercel.app/ai/generate-images',
  },
  {
    id: 3,
    name: 'Background Remover',
    description: 'Remove backgrounds from images instantly with pixel-perfect accuracy. No manual editing needed.',
    icon: <Wand2 size={32} />,
    color: 'from-pink-600/20 to-pink-600/5',
    glowColor: 'rgba(236, 72, 153, 0.2)',
    features: ['Auto-Detection', 'One-Click Replace', 'HD Quality'],
    link: 'https://quick-ai-6ltt.vercel.app/ai/remove-background',
  },
  {
    id: 4,
    name: 'Resume Analyzer',
    description: 'Get AI-powered insights to improve your resume and land your dream job with scoring metrics.',
    icon: <CheckSquare size={32} />,
    color: 'from-blue-600/20 to-blue-600/5',
    glowColor: 'rgba(59, 130, 246, 0.2)',
    features: ['ATS Optimization', 'Score Analysis', 'Suggestions'],
    link: 'https://quick-ai-6ltt.vercel.app/ai/review-resume',
  },
  {
    id: 5,
    name: 'Analytics Dashboard',
    description: 'Real-time analytics and insights for your business. Visualize data and make informed decisions.',
    icon: <BarChart3 size={32} />,
    color: 'from-emerald-600/20 to-emerald-600/5',
    glowColor: 'rgba(16, 185, 129, 0.2)',
    features: ['Real-time Metrics', 'Custom Reports', 'Data Export'],
    link: 'https://project-mgt-ruby.vercel.app/',
  },
  {
    id: 6,
    name: 'Project Management',
    description: 'Organize, track, and collaborate on projects with AI-powered task prioritization and automation.',
    icon: <CheckSquare size={32} />,
    color: 'from-orange-600/20 to-orange-600/5',
    glowColor: 'rgba(249, 115, 22, 0.2)',
    features: ['Team Collaboration', 'Smart Scheduling', 'Progress Tracking'],
    link: 'https://project-mgt-ruby.vercel.app/',
  },
  {
    id: 7,
    name: 'Automation Engine',
    description: 'Automate repetitive tasks and workflows. Save time and increase productivity across your team.',
    icon: <Zap size={32} />,
    color: 'from-violet-600/20 to-violet-600/5',
    glowColor: 'rgba(139, 92, 246, 0.2)',
    features: ['Workflow Builder', 'Triggers & Actions', 'Template Library'],
    link: 'https://project-mgt-ruby.vercel.app/',
  },
 {
  id: 8,
  name: 'Blog Title Generator',
  description: 'Generate catchy, SEO-friendly blog titles instantly using AI. Perfect for bloggers and content creators.',
  icon: <Hash size={32} />,
  color: 'from-fuchsia-600/20 to-pink-600/5',
  glowColor: 'rgba(217, 70, 239, 0.2)',
  features: ['SEO Titles', 'Trending Suggestions', 'Clickbait Optimization'],
  link: 'https://quick-ai-6ltt.vercel.app/ai/blog-titles',
 }
];

export default function FeaturesPage() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Sparkles size={18} className="text-cyan-400" />
              <span className="text-sm text-cyan-300">All-in-One Suite</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Powerful AI Tools for Every Need
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered features designed to supercharge your productivity and creativity.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {aiTools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${tool.color} border border-white/10 rounded-2xl p-6 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20`}
                style={{ boxShadow: `0 0 40px ${tool.glowColor}` }}
              >
                {/* Background gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 p-3 w-fit bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 group-hover:text-white/80 transition-colors">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-white/70 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={tool.link}>
                  <button className="mt-6 w-full py-2 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 text-cyan-300 text-sm font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                    Try Now
                  </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-3xl p-12 text-center backdrop-blur-xl overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-0 left-1/4 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start using Cognify today and experience the power of AI-driven productivity.
              </p>
              <a href="https://project-mgt-ruby.vercel.app/">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
                Get Started Free
              </button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
