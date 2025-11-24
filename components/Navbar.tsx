import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Capabilities', href: '#focus' },
    { name: 'Membership', href: '#membership' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-slate-200 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            {/* Simple geometric logo mark */}
            <div className={`w-8 h-8 flex items-center justify-center ${isScrolled ? 'bg-navy-900' : 'bg-white'}`}>
                <div className={`w-3 h-3 ${isScrolled ? 'bg-white' : 'bg-navy-900'}`}></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight leading-none ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
                UPIA
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-pacific-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors border ${
                isScrolled 
                ? 'bg-navy-900 text-white border-navy-900 hover:bg-pacific-600 hover:border-pacific-600' 
                : 'bg-white text-navy-900 border-white hover:bg-slate-200'
            }`}>
              Join UPIA
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-navy-900' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 top-full">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-navy-900 hover:text-pacific-600 tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
                 <button className="w-full py-3 bg-navy-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-pacific-600 transition-colors">
                    Contact
                 </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};