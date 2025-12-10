import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';
import BookingModal from './BookingModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const openBookingModal = () => {
    setIsOpen(false); // Close mobile menu if open
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Lockup */}
          <a href="#" className="flex items-center gap-4 group relative z-50">
            <Logo className={`text-accent group-hover:text-white transition-all duration-500 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12 md:h-14 md:w-14'}`} />
            <div className="flex flex-col justify-center">
              <span className="font-serif text-lg md:text-xl lg:text-2xl font-medium tracking-[0.25em] text-white group-hover:text-accent transition-colors duration-300 leading-none">
                BRIAN ISAJI
              </span>
              <span className="text-[10px] font-sans tracking-[0.4em] text-gray-400 uppercase mt-1.5 group-hover:text-white transition-colors duration-300 hidden sm:block pl-0.5">
                Photography
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-8">
                  {NAV_ITEMS.map((item) => (
                  <a
                      key={item.label}
                      href={item.href}
                      className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-gray-300 hover:text-white transition-colors duration-300 relative group/link"
                  >
                      {item.label}
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover/link:w-full opacity-0 group-hover/link:opacity-100"></span>
                  </a>
                  ))}
              </div>
            
              <button 
                  onClick={openBookingModal}
                  className="group relative px-7 py-2.5 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(215,181,109,0.2)]"
              >
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  <span className="relative z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors duration-300">
                      Book Session
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
              </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden focus:outline-none relative z-50 text-white hover:text-accent transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-[#050505] z-40 flex flex-col justify-between pt-32 pb-12 px-8 transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          } lg:hidden`}
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* Menu Items */}
          <div className="flex flex-col space-y-4 relative z-10 justify-center h-full">
              {NAV_ITEMS.map((item, index) => (
              <a
                  key={item.label}
                  href={item.href}
                  className={`font-serif text-4xl sm:text-5xl text-gray-400 hover:text-white hover:pl-4 transition-all duration-500 transform ${
                      isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
              >
                  {item.label}
              </a>
              ))}
          </div>

          {/* Mobile Footer Info */}
          <div 
              className={`border-t border-white/10 pt-8 transition-all duration-700 delay-500 relative z-10 ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
              <div className="flex flex-col gap-6">
                  <button 
                      onClick={openBookingModal}
                      className="w-full text-center py-4 bg-accent text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
                  >
                      Book a Session
                  </button>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                      <div className="text-gray-500 text-xs tracking-widest uppercase font-light">
                          <p className="mb-2 text-white font-medium">Brian Isaji Photography</p>
                          <p>Nairobi, Kenya</p>
                          <a href="mailto:brianisaji40@gmail.com" className="hover:text-white transition-colors mt-2 block lowercase">brianisaji40@gmail.com</a>
                      </div>
                      
                      <div className="flex gap-6">
                          <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
                          <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                          <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </nav>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
};

export default Navbar;
