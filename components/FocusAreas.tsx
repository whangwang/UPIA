import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Brain, 
  Radio, 
  Wifi, 
  Zap, 
  Factory, 
  Lock, 
  ShieldCheck
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const areas = [
  {
    title: "Autonomous Systems",
    description: "Uncrewed platforms across all domains: air, sea (surface/subsurface), and land.",
    icon: Plane,
  },
  {
    title: "AI & C2",
    description: "Advanced mission autonomy, fleet orchestration, and battle management systems.",
    icon: Brain,
  },
  {
    title: "Sensing & ISR",
    description: "Next-gen radar, optical sensors, RF detection, and SATCOM integration.",
    icon: Radio,
  },
  {
    title: "Resilient Comms",
    description: "Mesh networks, anti-jamming capabilities, and distributed edge nodes.",
    icon: Wifi,
  },
  {
    title: "Energy & Power",
    description: "High-density batteries, hybrid generators, and deployable microgrids.",
    icon: Zap,
  },
  {
    title: "Industrial Base",
    description: "Advanced manufacturing, robotics, munitions, and supply chain co-production.",
    icon: Factory,
  },
  {
    title: "Cyber Defense",
    description: "Defensive cyber operations, secure software supply chains, and hardened infrastructure.",
    icon: Lock,
  },
  {
    title: "Industrial Resilience",
    description: "Strengthening supply chains against geopolitical disruption.",
    icon: ShieldCheck,
  }
];

export const FocusAreas: React.FC = () => {
  return (
    <section id="focus" className="py-24 md:py-32 bg-navy-900 relative">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading 
          title="Focus Areas" 
          subtitle="Supporting innovators across critical defense and dual-use technology sectors."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative border-r border-b border-white/10 p-10 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="mb-6">
                <area.icon className="w-8 h-8 text-white stroke-[1.5]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {area.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {area.description}
              </p>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-pacific-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};