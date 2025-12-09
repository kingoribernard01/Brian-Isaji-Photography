import React from 'react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-primary relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Stories Through My Lens" 
          subtitle="Deep dives into specific themes, emotions, and creative visions."
        />

        <div className="mt-20 flex flex-col gap-24 relative">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="sticky top-32 group"
            >
              <div className="relative overflow-hidden bg-[#080808] border border-white/5 rounded-2xl lg:h-[600px] flex flex-col lg:flex-row transition-all duration-500 hover:border-white/10 hover:shadow-2xl shadow-black">
                
                {/* Image Section */}
                <div className="w-full lg:w-3/5 h-[300px] lg:h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative bg-[#080808]">
                    {/* Decorative Number */}
                    <span className="absolute top-4 right-6 lg:top-8 lg:right-8 font-serif text-8xl lg:text-9xl font-bold text-white/[0.03] select-none">
                        0{index + 1}
                    </span>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-accent"></span>
                            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Featured Case Study</span>
                        </div>

                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                            {project.title}
                        </h3>

                        <p className="font-sans text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
                            {project.description}
                        </p>

                        <a href="#" className="inline-flex items-center gap-2 group/btn">
                             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent group-hover/btn:scale-110 transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 text-white group-hover/btn:text-black transition-colors" />
                             </div>
                             <span className="text-xs font-bold uppercase tracking-widest text-white group-hover/btn:text-accent transition-colors">View Project</span>
                        </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;