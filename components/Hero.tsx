import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-navy-900">
      {/* Background Video */}
      <div className="absolute right-0 top-0 bottom-0 w-3/4 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/20 z-10 mix-blend-multiply"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-left opacity-100 mix-blend-overlay"
        >
          <source src="/videos/hero.mov" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2670&auto=format&fit=crop" 
            alt="Autonomous Maritime System"
            className="w-full h-full object-cover object-left"
          />
        </video>
        
        {/* Gradients for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/40 to-navy-900/20 z-10"></div>
      </div>

      <div className="relative z-20 w-full max-w-screen-2xl mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="h-[2px] w-12 bg-white"></div>
            <span className="text-white font-bold tracking-[0.2em] text-sm uppercase">
              Defense & Dual-Use Alliance
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl text-white tracking-tighter leading-[1.05] mb-8"
          >
            Building the Next Generation of
            <span className="block mt-8 md:mt-4 font-bold text-5xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pacific-400 to-white">
              Cross-Pacific Defense & Dual-Use Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-12 font-light"
          >
            UPIA connects leading U.S. and Asia-Pacific defense-tech startups with government, industry, and research partners to accelerate autonomy, AI, sensing, communications, and industrial resilience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="group relative px-8 py-4 bg-white text-navy-900 font-bold uppercase tracking-widest hover:bg-pacific-500 hover:text-white transition-all duration-300">
              <span className="flex items-center gap-2 justify-center">
                Join UPIA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Tech Decoration */}
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-50 z-20">
        <div className="text-right font-mono text-xs text-white space-y-1">
          <p>STATUS: OPERATIONAL</p>
          <p>GRID: PACIFIC-01</p>
          <p>SYNC: 100%</p>
        </div>
      </div>
    </section>
  );
};