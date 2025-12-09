import * as React from "react"
import { cn } from "../../lib/utils"
import { ChevronRight, ArrowDown } from "lucide-react"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      ctaText,
      ctaHref,
      backgroundImage,
      ...props
    },
    ref,
  ) => {
    return (
      <div 
        className={cn("relative h-screen w-full overflow-hidden flex items-center justify-center", className)} 
        ref={ref} 
        {...props}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" /> {/* Slightly lighter overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10" /> {/* Top/Bottom fades */}
          <img 
            src={backgroundImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-90 animate-fade-in scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 text-center mt-10"> {/* Adjusted top margin */}
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">
              {title}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            {subtitle?.regular}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accentLight to-accent block mt-2 italic font-light">
              {subtitle?.gradient}
            </span>
          </h1>

          {/* Description */}
          <p className="font-sans font-light text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            {description}
          </p>

          {/* CTA */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <a
              href={ctaHref}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-accent text-primary rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(215,181,109,0.4)]"
            >
              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">
                {ctaText}
              </span>
              <ChevronRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
            </a>
          </div>

          {/* Scroll Indicator - Moved relative below CTA */}
          <div className="mt-16 animate-slide-up opacity-0 flex justify-center" style={{ animationDelay: '1.0s' }}>
            <div className="animate-bounce">
              <a 
                href="#about" 
                className="group flex flex-col items-center gap-3 transition-opacity duration-300 hover:opacity-90"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 group-hover:text-accent transition-colors">
                  Scroll
                </span>
                <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/20 bg-white/5 p-1 backdrop-blur-md group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <div className="h-2 w-1 rounded-full bg-white group-hover:bg-accent mt-2 animate-pulse" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }