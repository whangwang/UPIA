import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string; // Added bio as optional
}

const team: TeamMember[] = [
  {
    name: "James Chen",
    role: "Executive Director",
    image: "images/team-1.jpg"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Former DARPA program manager specializing in autonomous systems and AI integration.",
    image: "images/team-2.jpg"
  },
  {
    name: "Marcus Thorne",
    role: "Director of Operations",
    bio: "20-year veteran of naval logistics and supply chain resilience strategy.",
    image: "images/team-3.jpg"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Policy",
    bio: "Expert in international defense cooperation and export control regulations.",
    image: "images/team-4.jpg"
  }
];

export const Team: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <SectionHeading 
          title="Leadership" 
          subtitle="Guided by experts in defense policy, industrial strategy, and advanced technology."
          theme="light"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors duration-300"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-navy-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-navy-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-slate-500">{member.role}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                      <Linkedin className="w-5 h-5 text-navy-900 hover:text-pacific-500 transition-colors" />
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};