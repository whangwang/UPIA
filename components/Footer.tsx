import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold tracking-tight mb-6">UPIA</h3>
            <p className="text-slate-400 font-light leading-relaxed mb-8">
              Accelerating cross-Pacific defense and dual-use innovation through strategic partnerships and industrial integration.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-pacific-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-pacific-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@upia.org" className="text-white hover:text-pacific-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-mono uppercase">
            © {new Date().getFullYear()} United Pacific Innovation Alliance.
          </p>
          <p className="text-slate-600 text-xs font-mono">
             Designed for High-Impact Defense Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};