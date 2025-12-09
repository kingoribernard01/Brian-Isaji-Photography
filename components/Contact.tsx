
import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowRight, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-primary relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
       <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

       <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeading 
             title="Let’s Create Something Beautiful" 
             subtitle="Ready to start your project? Fill out the form below and I'll get back to you within 24 hours."
          />

          <div className="mt-16 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-w-7xl mx-auto">
             
             {/* Left Column: Contact Info */}
             <div className="w-full lg:w-5/12 p-10 md:p-16 bg-white/5 relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
                <div>
                   <h3 className="font-serif text-3xl text-white mb-2">Get in Touch</h3>
                   <p className="text-gray-400 font-light text-sm mb-12 leading-relaxed">I'd love to hear about your vision. Reach out via email, phone, or visit the studio.</p>
                   
                   <div className="space-y-8">
                      <div className="flex items-start gap-4 group">
                         <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(215,181,109,0.4)]">
                            <Mail size={20} />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 group-hover:text-accent transition-colors">Email</p>
                            <a href="mailto:brianisaji40@gmail.com" className="text-white text-lg hover:text-accent transition-colors">brianisaji40@gmail.com</a>
                         </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                         <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(215,181,109,0.4)]">
                            <Phone size={20} />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 group-hover:text-accent transition-colors">Phone</p>
                            <a href="tel:+254792409104" className="text-white text-lg hover:text-accent transition-colors">+254 792 409 104</a>
                         </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                         <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(215,181,109,0.4)]">
                            <MapPin size={20} />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 group-hover:text-accent transition-colors">Studio</p>
                            <p className="text-white text-lg">Nairobi, Kenya</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-12 lg:mt-0">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Follow Us</p>
                   <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-white/5 hover:scale-110 transition-all duration-300">
                         <Instagram size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-white/5 hover:scale-110 transition-all duration-300">
                         <Facebook size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-white/5 hover:scale-110 transition-all duration-300">
                         <Twitter size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-white/5 hover:scale-110 transition-all duration-300">
                         <Linkedin size={18} />
                      </a>
                   </div>
                </div>
             </div>

             {/* Right Column: Form */}
             <div className="w-full lg:w-7/12 p-10 md:p-16 bg-[#050505]">
                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group space-y-2">
                         <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 group-focus-within:text-accent transition-colors">Name</label>
                         <input 
                           type="text" 
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent/50 transition-all duration-300 hover:border-white/20" 
                           placeholder="Your Name" 
                         />
                      </div>
                      <div className="group space-y-2">
                         <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 group-focus-within:text-accent transition-colors">Email</label>
                         <input 
                           type="email" 
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent/50 transition-all duration-300 hover:border-white/20" 
                           placeholder="email@example.com" 
                         />
                      </div>
                   </div>

                   <div className="group space-y-2 relative">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 group-focus-within:text-accent transition-colors">Subject</label>
                      <div className="relative">
                        <select 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent/50 transition-all duration-300 hover:border-white/20"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-secondary text-gray-400">Select a subject</option>
                          <option value="Wedding" className="bg-secondary text-white">Wedding Photography</option>
                          <option value="Portrait" className="bg-secondary text-white">Portrait Session</option>
                          <option value="Event" className="bg-secondary text-white">Event Coverage</option>
                          <option value="Commercial" className="bg-secondary text-white">Commercial / Brand</option>
                          <option value="Real Estate" className="bg-secondary text-white">Real Estate</option>
                          <option value="Other" className="bg-secondary text-white">General Inquiry</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4 group-hover:text-white transition-colors" />
                      </div>
                   </div>

                   <div className="group space-y-2">
                       <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 group-focus-within:text-accent transition-colors">Message</label>
                       <textarea 
                         rows={4} 
                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent/50 transition-all duration-300 resize-none hover:border-white/20" 
                         placeholder="Tell me more about your project..."
                       ></textarea>
                   </div>

                   <div className="pt-4">
                      <button type="submit" className="w-full bg-accent text-primary font-bold uppercase tracking-[0.2em] py-5 px-8 rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(215,181,109,0.3)] hover:shadow-[0_0_35px_rgba(215,181,109,0.5)] hover:scale-[1.02] active:scale-95">
                         <span>Send Message</span>
                         <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                </form>
             </div>

          </div>
       </div>
    </section>
  );
}

export default Contact;
