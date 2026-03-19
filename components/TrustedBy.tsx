'use client';

import { motion } from 'framer-motion';

const companies = [
  { name: 'TechCorp', initials: 'TC' },
  { name: 'InnovateLabs', initials: 'IL' },
  { name: 'FutureStack', initials: 'FS' },
  { name: 'AgencyHub', initials: 'AH' },
];

export function TrustedBy() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-foreground/60 text-sm font-medium mb-12"
        >
          Trusted by leading companies worldwide
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  {company.initials}
                </div>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-cyan-400 transition-colors">
                  {company.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
