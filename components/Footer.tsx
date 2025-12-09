
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, MessageCircle, Mail, Phone, MapPin, ChevronRight, Camera } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
            {/* Brand Column */}
            <div className="space-y-6">
                <a href="#home" className="flex items-center gap-3 group">
                    <Logo className="h-10 w-10 text-accent group-hover:text-white transition-colors duration-300" />
                    <span className="font-serif text-xl font-bold tracking-[0.2em] text-white">BRIAN ISAJI</span>
                </a>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Capturing authentic moments and transforming them into timeless visual stories. Based in Nairobi, available worldwide.
                </p>
                <div className="flex gap-4 pt-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-black hover:scale-110 transition-all duration-300 border border-white/10 hover:border-accent">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-black hover:scale-110 transition-all duration-300 border border-white/10 hover:border-accent">
                        <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-black hover:scale-110 transition-all duration-300 border border-white/10 hover:border-accent">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-serif text-lg text-white mb-8">Quick Links</h4>
                <ul className="space-y-4">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors"></span>
                                <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Services */}
            <div>
                <h4 className="font-serif text-lg text-white mb-8">Services</h4>
                <ul className="space-y-4">
                    {['Wedding Photography', 'Portrait Sessions', 'Corporate Events', 'Real Estate', 'Commercial'].map((service) => (
                        <li key={service}>
                            <a href="#contact" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                                <ChevronRight size={14} className="text-white/20 group-hover:text-accent" />
                                <span className="group-hover:translate-x-1 transition-transform">{service}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h4 className="font-serif text-lg text-white mb-8">Contact Us</h4>
                <div className="space-y-6">
                    <div className="flex gap-4 items-start group">
                        <Phone size={20} className="text-accent mt-1 group-hover:scale-110 transition-transform" />
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                            <a href="tel:+254792409104" className="text-white hover:text-accent transition-colors">+254 792 409 104</a>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start group">
                        <Mail size={20} className="text-accent mt-1 group-hover:scale-110 transition-transform" />
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                            <a href="mailto:brianisaji40@gmail.com" className="text-white hover:text-accent transition-colors break-words">brianisaji40@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start group">
                        <MapPin size={20} className="text-accent mt-1 group-hover:scale-110 transition-transform" />
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Location</p>
                            <p className="text-gray-300">Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center md:text-left">
                &copy; {new Date().getFullYear()} Brian Isaji Photography. All rights reserved.
            </p>
            <div className="flex gap-6">
                <a href="#" className="text-[10px] text-gray-600 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</a>
                <a href="#" className="text-[10px] text-gray-600 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/254792409104" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:-translate-y-2 hover:scale-110 transition-all duration-300 group animate-fade-in"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
        <MessageCircle size={32} className="text-white fill-white" />
        <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
        </span>
      </a>
    </footer>
  );
};

export default Footer;
