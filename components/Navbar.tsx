import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
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
            <img src={isScrolled ? 'images/LogoDarkWithName.svg' : 'images/LogoLightWithName.svg'} alt="UPIA" className="h-8" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-pacific-500' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onOpenModal}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors border ${
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
              <button 
                onClick={onOpenModal}
                className="w-full py-3 bg-navy-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-pacific-600 transition-colors">
                Join UPIA
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};