import React from 'react';
import { SectionHeading } from './SectionHeading';

// Placeholder logos using geometric shapes or text for the demo since we don't have real SVG assets
const LogoPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <div className="h-12 flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
     <span className="text-xl md:text-2xl font-bold tracking-tighter text-navy-900">{name}</span>
  </div>
);

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-2">Strategic Partners</h2>
                <p className="text-slate-500">Collaborating with industry leaders across the Pacific.</p>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-slate-200 mb-2"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-20 items-center justify-center">
            {['AERODYNAMICS', 'PACIFIC_AI', 'DEFENSE_SYS', 'OCEAN_TECH', 'CYBER_OPS', 'KINETIC', 'ORBITAL', 'SYNTHETICS', 'LOGISTICS_PRIME', 'AUTONOMY_LABS'].map((name) => (
                <LogoPlaceholder key={name} name={name} />
            ))}
        </div>
      </div>
    </section>
  );
};