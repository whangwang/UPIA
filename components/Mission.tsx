import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="relative z-10">
            <SectionHeading 
              title="Our Mission" 
              subtitle="Forging a resilient cross-border industrial base."
              theme="light"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg prose-slate"
            >
              <p className="text-2xl md:text-3xl font-medium leading-tight text-navy-900 mb-8">
                UPIA strengthens the Indo-Pacific innovation ecosystem by linking defense-tech startups, dual-use companies, and government stakeholders.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                We accelerate capability development, integration, and co-production to ensure technological superiority and industrial resilience across the Pacific theater. By bridging the gap between commercial innovation and defense requirements, we create a unified front for future security challenges.
              </p>
            </motion.div>
            
            <div className="mt-12 pt-12 border-t border-slate-200">
               <div className="grid grid-cols-2 gap-8">
                  <div>
                      <h4 className="text-4xl font-bold text-navy-900 mb-2">50+</h4>
                      <p className="text-sm uppercase tracking-widest text-slate-500">Alliance Partners</p>
                  </div>
                  <div>
                      <h4 className="text-4xl font-bold text-navy-900 mb-2">2</h4>
                      <p className="text-sm uppercase tracking-widest text-slate-500">Continents Bridged</p>
                  </div>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[600px] w-full bg-slate-100 overflow-hidden"
          >
            {/* Main Image */}
            <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover grayscale opacity-100"
               alt="Abstract Tech"
            />
            
            {/* Tech Overlay Lines */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 pointer-events-none">
                <div className="w-full h-[1px] bg-white/30"></div>
                <div className="space-y-8">
                   {/* Decorative elements */}
                </div>
                <div className="flex justify-between items-end">
                    <div className="font-mono text-xs text-white/70">
                        FIG 01.1<br/>
                        NETWORK TOPOLOGY
                    </div>
                    <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white"></div>
                    </div>
                </div>
            </div>
            
            {/* Blue Tint Overlay */}
            <div className="absolute inset-0 bg-navy-900/20 mix-blend-overlay"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};