import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
  theme?: 'dark' | 'light';
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, theme = 'light', align = 'left' }) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <span className={`h-[2px] w-6 ${isDark ? 'bg-pacific-500' : 'bg-navy-900'}`}></span>
          <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-pacific-400' : 'text-slate-500'}`}>
            UPIA System
          </span>
        </div>
        
        <h2 className={`text-4xl md:text-6xl font-bold tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-navy-900'}`}>
          {title}
        </h2>
        
        {subtitle && (
          <p className={`max-w-2xl text-lg md:text-xl font-light leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};