import React from "react";
import { cn } from "../../lib/utils";
import { ArrowRight, Star } from "lucide-react";

interface ModernAboutProps {
  imageSrc: string;
  badgeText: string;
  title: string;
  description: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export const ModernAbout = ({
  imageSrc,
  badgeText,
  title,
  description,
  ctaText = "Read more",
  ctaHref = "#",
}: ModernAboutProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
       {/* Image Section */}
       <div className="relative w-full lg:w-1/2 max-w-md lg:max-w-full">
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(215,181,109,0.2)]">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
             <img
               src={imageSrc}
               alt="About Profile"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-8 z-20 animate-fade-in">
             <div className="bg-secondary/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-[280px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/10">
                <div className="flex -space-x-3 shrink-0">
                   {/* Placeholder avatars for community feel */}
                   {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-gray-800 overflow-hidden relative">
                         <img 
                            src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                            alt="Client" 
                            className="w-full h-full object-cover opacity-80" 
                         />
                      </div>
                   ))}
                   <div className="w-10 h-10 rounded-full border-2 border-secondary bg-accent flex items-center justify-center text-[10px] font-bold text-black">
                      50+
                   </div>
                </div>
                <div>
                   <p className="text-white text-sm font-bold">{badgeText}</p>
                   <div className="flex text-accent text-[10px] mt-1">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                   </div>
                </div>
             </div>
          </div>
          
          {/* Decorative Blur behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blur-[100px] -z-10 pointer-events-none rounded-full" />
       </div>

       {/* Text Section */}
       <div className="w-full lg:w-1/2 text-left">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
             {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent rounded-full mb-10" />
          
          <div className="font-sans text-gray-400 leading-relaxed space-y-6 text-lg font-light">
             {description}
          </div>

          {ctaHref && (
             <a 
               href={ctaHref}
               className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-white/5 hover:bg-accent hover:text-black border border-white/10 hover:border-accent rounded-full transition-all duration-300 text-xs font-bold uppercase tracking-widest text-white group"
             >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
             </a>
          )}
       </div>
    </div>
  );
};