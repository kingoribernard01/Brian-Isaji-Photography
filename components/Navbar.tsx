import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col relative z-50">
          <a href="#" className="flex items-center gap-4 group">
            <Logo className="h-12 w-12 text-accent group-hover:text-white transition-colors duration-300" />
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-white group-hover:text-accent transition-colors duration-300">
              BRIAN ISAJI
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="flex items-center bg-white/5 rounded-full px-6 py-2 backdrop-blur-sm border border-white/5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium tracking-widest uppercase text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <a 
            href="#contact"
            className="ml-6 px-6 py-2 border border-accent/50 text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-all duration-300 rounded-full"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden focus:outline-none relative z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-serif text-4xl text-gray-400 hover:text-white hover:scale-105 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#contact"
          className="mt-8 px-10 py-4 border border-accent text-accent text-sm font-bold uppercase tracking-widest"
          onClick={() => setIsOpen(false)}
        >
          Book a Session
        </a>
      </div>
    </nav>
  );
};

export default Navbar;