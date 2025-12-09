
import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  // Split testimonials into two groups for two marquee rows
  const midPoint = Math.ceil(TESTIMONIALS.length / 2);
  const firstRow = TESTIMONIALS.slice(0, midPoint);
  const secondRow = TESTIMONIALS.slice(midPoint);

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div 
      className="bg-white/5 backdrop-blur-xl border border-white/5 p-8 rounded-2xl relative group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(215,181,109,0.1)] flex flex-col w-[350px] md:w-[450px] flex-shrink-0 mx-4 h-full"
    >
      {/* Golden Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/30 transition-colors duration-500 pointer-events-none" />

      {/* Quote Icon */}
      <div className="absolute -top-5 left-6 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center text-accent shadow-xl group-hover:scale-110 transition-transform duration-300">
        <Quote size={18} className="fill-current" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} className="fill-accent text-accent" />
        ))}
      </div>
      
      <p className="font-serif text-base md:text-lg text-gray-200 mb-6 leading-relaxed italic opacity-90 flex-grow">
        "{testimonial.quote}"
      </p>
      
      <div className="mt-auto border-t border-white/5 pt-4 flex items-center justify-between">
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white mb-1">
            {testimonial.author}
          </h4>
          {testimonial.location && (
            <p className="text-[10px] text-accent font-medium tracking-wide">
               {testimonial.location}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1 text-white/30 group-hover:text-accent transition-colors">
            <span className="text-[10px] uppercase font-bold hidden group-hover:block transition-all">Verified</span>
            <CheckCircle size={16} />
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 mb-16">
          <SectionHeading 
            title="Kind Words" 
            subtitle="Real stories from clients across Kenya who trusted me with their most precious moments."
          />
        </div>

        {/* Marquee Row 1 (Left) */}
        <div className="flex overflow-hidden group mb-8">
          <div className="flex animate-scroll-left group-hover:[animation-play-state:paused] py-4">
            {/* Original */}
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            {/* Duplicate for infinite loop */}
            {firstRow.map((testimonial) => (
              <TestimonialCard key={`dup-${testimonial.id}`} testimonial={testimonial} />
            ))}
             {/* Triplicate for smooth large screen loop */}
             {firstRow.map((testimonial) => (
              <TestimonialCard key={`tri-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Right) */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-scroll-right group-hover:[animation-play-state:paused] py-4">
            {/* Original */}
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            {/* Duplicate for infinite loop */}
            {secondRow.map((testimonial) => (
              <TestimonialCard key={`dup-${testimonial.id}`} testimonial={testimonial} />
            ))}
             {/* Triplicate for smooth large screen loop */}
             {secondRow.map((testimonial) => (
              <TestimonialCard key={`tri-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
