import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const benefits = [
  "Access to Indo-Pacific government stakeholders",
  "Introductions to local suppliers across Taiwan and APAC",
  "Cross-domain integration opportunities",
  "Delegation priority for international summits",
  "Policy engagement & regulatory guidance",
  "Exclusive ecosystem briefings & intel",
  "High-visibility branding within the alliance"
];

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 md:py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <SectionHeading title="Membership" theme="light" />
            <p className="text-xl text-slate-600 font-light mb-8 max-w-lg">
                Join a premier network of defense innovators and industrial partners defining the future of Pacific security.
            </p>
            <button className="group flex items-center gap-4 px-8 py-4 bg-navy-900 text-white font-bold uppercase tracking-widest hover:bg-pacific-600 transition-colors">
                Apply for Membership
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 border border-slate-300 flex items-center justify-center group-hover:border-navy-900 transition-colors">
                      <Check className="w-3 h-3 text-navy-900" />
                    </div>
                  </div>
                  <p className="text-slate-700 font-medium group-hover:text-navy-900 transition-colors">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};