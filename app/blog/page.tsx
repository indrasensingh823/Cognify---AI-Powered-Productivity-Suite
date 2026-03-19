'use client';

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  image: string;
  featured?: boolean;
}

const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: 'The Future of AI in Productivity: What We Learned in 2024',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way teams work and collaborate. From automation to intelligent insights, discover the trends shaping productivity.',
    category: 'AI Trends',
    readTime: 8,
    date: 'Mar 12, 2025',
    image: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.3))',
    featured: true,
  },
  {
    id: 2,
    title: 'How Cognify Saves Teams 10+ Hours Per Week',
    excerpt: 'Real case studies from our customers showing how automation and AI-powered tools are transforming their workflows and boosting productivity dramatically.',
    category: 'Case Studies',
    readTime: 6,
    date: 'Jun 10, 2025',
    image: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3))',
    featured: true,
  },
  {
    id: 3,
    title: 'Mastering AI Article Generation: Best Practices',
    excerpt: 'A comprehensive guide to getting the best results from AI article generation tools. Learn tips, tricks, and strategies used by professional content creators.',
    category: 'Tutorials',
    readTime: 7,
    date: 'Sep 8, 2025',
    image: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3))',
  },
  {
    id: 4,
    title: 'Why Teams Are Switching to AI-Powered Project Management',
    excerpt: 'Discover why modern teams prefer AI-enhanced project management tools and how they improve collaboration, deadline tracking, and team morale.',
    category: 'Product Updates',
    readTime: 5,
    date: 'Jan 15, 2026',
    image: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))',
  },
  {
    id: 5,
    title: 'Building Better Content with AI: A Beginner\'s Guide',
    excerpt: 'New to AI content creation? Learn the fundamentals of using AI tools to produce high-quality, engaging content that resonates with your audience.',
    category: 'Tutorials',
    readTime: 9,
    date: 'Feb 20, 2026',
    image: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.3))',
  },
  {
    id: 6,
    title: 'The ROI of Automation: Data Insights from 1000+ Teams',
    excerpt: 'Analysis of productivity metrics from thousands of Cognify users. See the real numbers on how automation impacts business outcomes and team efficiency.',
    category: 'Analytics',
    readTime: 10,
    date: 'Apr 5, 2025',
    image: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3))',
  },
  {
    id: 7,
    title: 'Integrating Cognify with Your Favorite Tools',
    excerpt: 'Step-by-step guide to integrating Cognify with Slack, Notion, Zapier, and other popular productivity apps to maximize your workflow efficiency.',
    category: 'Integrations',
    readTime: 6,
    date: 'Jul 18, 2025',
    image: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))',
  },
  {
    id: 8,
    title: 'Security & Privacy: How We Protect Your Data',
    excerpt: 'Learn about Cognify\'s enterprise-grade security measures, encryption standards, and privacy practices that keep your data safe and compliant.',
    category: 'Security',
    readTime: 5,
    date: 'Nov 22, 2025',
    image: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(168, 85, 247, 0.3))',
  },
];

const categories = ['All', 'AI Trends', 'Case Studies', 'Tutorials', 'Product Updates', 'Analytics', 'Integrations', 'Security'];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticles = blogArticles.filter((a) => a.featured);

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

      <main className="pt-28 pb-20">
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
              <span className="text-sm text-cyan-300">AI Insights & Updates</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Blog & Resources
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest AI trends, productivity tips, and insights from our experts.
            </p>
          </motion.div>
        </div>

        {/* Featured Articles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredArticles.map((article) => (
              <motion.div
                key={article.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/2 border border-cyan-500/30 rounded-2xl overflow-hidden backdrop-blur-xl cursor-pointer hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: article.image }}
                />

                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full mb-4">
                      <span className="text-xs font-semibold text-cyan-300">{article.category}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground group-hover:text-white/80 transition-colors mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {article.readTime} min
                      </div>
                    </div>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500/30 border border-cyan-500/50 text-cyan-300'
                      : 'bg-white/5 border border-white/10 text-muted-foreground hover:border-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                variants={item}
                whileHover={{ y: -4 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
              >
                {/* Category Badge */}
                <div className="absolute top-1.5 right-4 z-10 px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full">
                  <span className="text-xs font-semibold text-cyan-200">{article.category}</span>
                </div>

                <div className="p-6 top-4 relative z-10 flex flex-col justify-between h-full">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 group-hover:text-white/70 transition-colors">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime} min read</span>
                    </div>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}