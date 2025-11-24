import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const BenefitCard: React.FC<{ image: string, title: string, description: string, delay: number }> = ({ image, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative h-64 overflow-hidden border border-white/10 hover:border-pacific-500/50 transition-colors duration-500 bg-navy-900"
  >
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
      />
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-navy-900/0 group-hover:via-navy-900/60 transition-all duration-500"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-end p-8">
      <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-pacific-400 transition-colors">{title}</h3>
        <p className="text-slate-300 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100">{description}</p>
      </div>
      
      {/* Tech Decoration Line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-pacific-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
    </div>
  </motion.div>
);

export const Membership: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id="membership" className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading 
          title="Membership Access" 
          subtitle="Join a premier network defining the future of Pacific security." 
          theme="dark" 
        />
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BenefitCard 
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                title="Global Access" 
                description="Direct introductions to government stakeholders across Taiwan, Japan, and the U.S."
                delay={0.1}
              />
              <BenefitCard 
                image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
                title="Industrial Network" 
                description="Connect with vetted suppliers and manufacturing partners in the APAC region."
                delay={0.2}
              />
              <BenefitCard 
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                title="Policy Intel" 
                description="Exclusive briefings on regulatory shifts, export controls, and defense budgets."
                delay={0.3}
              />
              <BenefitCard 
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
                title="Integration" 
                description="Opportunities for cross-domain capability testing and co-production pilots."
                delay={0.4}
              />
            </div>
          </div>

          {/* Action / Visual Side */}
          <div className="lg:w-1/2 flex flex-col">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-navy-900 border border-white/10 p-12 relative overflow-hidden h-full flex flex-col justify-between group/card"
             >
                {/* Default Background */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-pacific-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
                
                {/* Hover Background Image */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <img 
                    src="/images/rocket-launch.jpg" 
                    alt="Rocket Launch" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/90 to-navy-900/40 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-navy-900/30 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-6">Ready to Deploy?</h3>
                  <p className="text-slate-400 mb-10 leading-relaxed">
                     Membership is by application only. We select companies with high-potential dual-use technologies capable of strengthening the industrial base.
                  </p>
                  <div className="space-y-6">
                      <button 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="w-full py-6 bg-pacific-600 hover:bg-pacific-500 text-white font-bold text-lg uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] flex items-center justify-center gap-3 group"
                      >
                          Apply Now
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <p className="text-center text-xs text-green-500 font-mono uppercase">
                          Current Cohort: Q3 2025 Open
                      </p>
                  </div>
                </div>

                {/* Decorative Visual Element */}
                <div className="relative z-10 mt-12 flex items-center justify-between border-t border-white/5 pt-6 opacity-60">
                    <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-mono text-green-500">READY TO LAUNCH</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                        UPIA-SECURE
                    </div>
                </div>
             </motion.div>
          </div>

        </div>
        <div className="space-y-4 mt-12">
           {["Priority for international delegations", "High-visibility branding", "Executive roundtables"].map((item, i) => (
               <div key={i} className="flex items-center gap-3 text-slate-300">
                   <div className="flex items-center justify-center w-5 h-5 rounded-full border border-pacific-500/30 bg-pacific-500/10">
                      <Check className="w-3 h-3 text-pacific-500" />
                   </div>
                   <span className="text-sm uppercase tracking-wider font-medium">{item}</span>
               </div>
           ))}
        </div>
      </div>
    </section>
  );
};