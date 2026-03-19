'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Zap, Brain, CheckCircle, FileText, Image, BarChart3, Trash2 } from 'lucide-react';
import { VideoModal } from './VideoModal';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

interface StatCounter {
  end: number;
  label: string;
  suffix: string;
}

const AnimatedCounter = ({ end, label, suffix }: StatCounter) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / 30;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-foreground/60 mt-1">{label}</div>
    </div>
  );
};

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate glowing particles
  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(generatedParticles);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingAnimation = {
    animate: { y: [0, -25, 0] },
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  };

  const pulseAnimation = {
    animate: { opacity: [0.5, 1, 0.5] },
    transition: { duration: 3, repeat: Infinity },
  };

  const stats = [
    { label: 'Active Teams', value: '10K+' },
    { label: 'Productivity Boost', value: '98%' },
    { label: 'AI Tools', value: '50+' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Moving gradient waves - multiple animated layers */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(135deg, rgba(30, 27, 75, 0.5), rgba(88, 28, 135, 0.3), rgba(6, 182, 212, 0.25))',
              'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(30, 27, 75, 0.5), rgba(88, 28, 135, 0.3))',
              'linear-gradient(135deg, rgba(88, 28, 135, 0.3), rgba(6, 182, 212, 0.25), rgba(30, 27, 75, 0.5))',
              'linear-gradient(135deg, rgba(30, 27, 75, 0.5), rgba(88, 28, 135, 0.3), rgba(6, 182, 212, 0.25))',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.1) 25%, rgba(0, 212, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.1) 75%, rgba(0, 212, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.1) 25%, rgba(0, 212, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.1) 75%, rgba(0, 212, 255, 0.1) 76%, transparent 77%, transparent)',
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Premium animated glowing orbs with parallax effect */}
        <motion.div
          animate={{
            x: mousePosition.x / 40,
            y: mousePosition.y / 40,
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            x: { type: 'spring', stiffness: 60, damping: 20 },
            y: { type: 'spring', stiffness: 60, damping: 20 },
            scale: { duration: 4, repeat: Infinity },
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/40 via-purple-500/20 to-transparent rounded-full blur-3xl"
          style={{ filter: 'drop-shadow(0 0 80px rgba(168, 85, 247, 0.5))' }}
        />
        <motion.div
          animate={{
            x: -mousePosition.x / 40,
            y: -mousePosition.y / 40,
            scale: [1, 0.85, 1],
          }}
          transition={{ 
            x: { type: 'spring', stiffness: 60, damping: 20 },
            y: { type: 'spring', stiffness: 60, damping: 20 },
            scale: { duration: 6, repeat: Infinity, delay: 0.5 },
          }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-tl from-cyan-600/40 via-cyan-500/20 to-transparent rounded-full blur-3xl"
          style={{ filter: 'drop-shadow(0 0 80px rgba(6, 182, 212, 0.5))' }}
        />
        <motion.div
          animate={{
            x: mousePosition.x / 60,
            y: mousePosition.y / 60,
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            x: { type: 'spring', stiffness: 80, damping: 25 },
            y: { type: 'spring', stiffness: 80, damping: 25 },
            scale: { duration: 5, repeat: Infinity, delay: 1 },
          }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-bl from-indigo-600/30 via-purple-600/20 to-transparent rounded-full blur-3xl"
          style={{ filter: 'drop-shadow(0 0 60px rgba(79, 70, 229, 0.4))' }}
        />
        {/* Additional accent orb */}
        <motion.div
          animate={{
            x: -mousePosition.x / 50,
            y: mousePosition.y / 50,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            x: { type: 'spring', stiffness: 70, damping: 22 },
            y: { type: 'spring', stiffness: 70, damping: 22 },
            scale: { duration: 4.5, repeat: Infinity, delay: 1.5 },
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"
          style={{ filter: 'drop-shadow(0 0 50px rgba(236, 72, 153, 0.3))' }}
        />

        {/* Glowing particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, x: `${particle.x}%`, y: `${particle.y}%` }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [`${particle.y}%`, `${particle.y - 20}%`],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(0, 212, 255, 0.8), rgba(124, 58, 237, 0.4))`,
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(124, 58, 237, 0.3)',
            }}
          />
        ))}
      </div>

      {/* Content - adjusted top padding and spacing to better fit laptop viewports */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left content */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div variants={item} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm hover:border-cyan-500/50 transition-colors cursor-pointer">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-sm text-cyan-300">AI Powered Productivity Suite</span>
              </div>
            </motion.div>

            {/* Main Headline - slightly smaller on laptops */}
            <motion.h1 
              variants={item} 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
            >
              Supercharge Your Team's Productivity with Cognify
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Cognify is an all-in-one platform that combines powerful AI tools and intelligent project management for modern teams. Work smarter, faster, and together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-start gap-4 pt-2"
            >
              <a href="https://project-mgt-ruby.vercel.app/">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-background font-semibold rounded-full hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 212, 255, 0.8)', boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-4 bg-background/50 border border-cyan-500/30 text-foreground font-semibold rounded-full backdrop-blur-sm hover:bg-background/80 transition-all flex items-center gap-2"
              >
                <Play size={20} className="fill-cyan-400 text-cyan-400" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Statistics Counters */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -5 }}
                className="p-4 sm:p-5 bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border border-cyan-500/30 rounded-2xl backdrop-blur-md hover:border-cyan-400/60 hover:bg-cyan-500/20 transition-all shadow-lg"
                style={{ boxShadow: '0 0 30px rgba(0, 212, 255, 0.15)' }}
              >
                <AnimatedCounter end={10} label="Active Teams" suffix="K+" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -5 }}
                className="p-4 sm:p-5 bg-gradient-to-br from-purple-500/15 to-purple-500/5 border border-purple-500/30 rounded-2xl backdrop-blur-md hover:border-purple-400/60 hover:bg-purple-500/20 transition-all shadow-lg"
                style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.15)' }}
              >
                <AnimatedCounter end={98} label="Productivity Boost" suffix="%" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -5 }}
                className="p-4 sm:p-5 bg-gradient-to-br from-indigo-500/15 to-indigo-500/5 border border-indigo-500/30 rounded-2xl backdrop-blur-md hover:border-indigo-400/60 hover:bg-indigo-500/20 transition-all shadow-lg"
                style={{ boxShadow: '0 0 30px rgba(79, 70, 229, 0.15)' }}
              >
                <AnimatedCounter end={50} label="AI Tools" suffix="+" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Floating AI feature cards grid - made slightly more compact */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 auto-rows-max h-fit"
          >
            {/* Card 1 - Article Generator */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08, y: [0, -25, 0] }}
              className="p-5 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent border border-purple-500/40 rounded-2xl backdrop-blur-xl shadow-2xl hover:shadow-purple-500/40 transition-all"
              style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.25)' }}
            >
              <motion.div className="mb-2 inline-block p-2 bg-purple-500/20 rounded-lg">
                <FileText className="text-purple-400" size={22} />
              </motion.div>
              <h3 className="text-sm font-semibold text-purple-200 mb-1">Article Generator</h3>
              <p className="text-xs text-purple-200/80">AI-powered content creation</p>
            </motion.div>

            {/* Card 2 - Image Creator */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08, y: [0, -25, 0] }}
              className="p-5 bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent border border-cyan-500/40 rounded-2xl backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/40 transition-all"
              style={{ boxShadow: '0 0 40px rgba(6, 182, 212, 0.25)' }}
            >
              <motion.div className="mb-2 inline-block p-2 bg-cyan-500/20 rounded-lg">
                <Image className="text-cyan-400" size={22} />
              </motion.div>
              <h3 className="text-sm font-semibold text-cyan-200 mb-1">Image Creator</h3>
              <p className="text-xs text-cyan-200/80">Generate stunning visuals</p>
            </motion.div>

            {/* Card 3 - Analytics */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08, y: [0, -25, 0] }}
              className="p-5 bg-gradient-to-br from-indigo-500/20 via-indigo-500/10 to-transparent border border-indigo-500/40 rounded-2xl backdrop-blur-xl shadow-2xl hover:shadow-indigo-500/40 transition-all"
              style={{ boxShadow: '0 0 40px rgba(79, 70, 229, 0.25)' }}
            >
              <motion.div className="mb-2 inline-block p-2 bg-indigo-500/20 rounded-lg">
                <BarChart3 className="text-indigo-400" size={22} />
              </motion.div>
              <h3 className="text-sm font-semibold text-indigo-200 mb-1">Analytics</h3>
              <p className="text-xs text-indigo-200/80">Real-time insights & reports</p>
            </motion.div>

            {/* Card 4 - Resume Analyzer */}
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08, y: [0, -25, 0] }}
              className="p-5 bg-gradient-to-br from-pink-500/20 via-pink-500/10 to-transparent border border-pink-500/40 rounded-2xl backdrop-blur-xl shadow-2xl hover:shadow-pink-500/40 transition-all"
              style={{ boxShadow: '0 0 40px rgba(236, 72, 153, 0.25)' }}
            >
              <motion.div className="mb-2 inline-block p-2 bg-pink-500/20 rounded-lg">
                <Brain className="text-pink-400" size={22} />
              </motion.div>
              <h3 className="text-sm font-semibold text-pink-200 mb-1">Resume Analyzer</h3>
              <p className="text-xs text-pink-200/80">Optimize your CV instantly</p>
            </motion.div>

            {/* Card 5 - Background Remover */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              whileHover={{ scale: 1.08, y: [0, -25, 0] }}
              className="p-5 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/40 rounded-2xl backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/40 transition-all sm:col-span-2"
              style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.25)' }}
            >
              <motion.div className="mb-2 inline-block p-2 bg-emerald-500/20 rounded-lg">
                <Trash2 className="text-emerald-400" size={22} />
              </motion.div>
              <h3 className="text-sm font-semibold text-emerald-200 mb-1">Background Remover</h3>
              <p className="text-xs text-emerald-200/80">Remove backgrounds in seconds</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
}