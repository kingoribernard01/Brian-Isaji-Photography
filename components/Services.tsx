import React from 'react';
import { Camera, Sliders, Film, Lightbulb, FileText, Layers, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-secondary relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Expertise & Services" 
          subtitle="Comprehensive visual solutions bridging the gap between creative vision and strategic execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(215,181,109,0.15)] overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="font-serif text-4xl text-white/5 group-hover:text-white/10 transition-colors font-bold select-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Footer / Link indicator */}
                <div className="pt-6 border-t border-white/5 flex items-center text-accent text-xs font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span>Learn More</span>
                  <ArrowUpRight size={14} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const servicesData = [
  {
    title: "Visual Storytelling",
    description: "Beyond simple photography, I craft narrative-driven imagery. Whether for commercial campaigns, events, or personal branding, I focus on capturing the 'why' behind the moment, ensuring every frame communicates emotion and intent.",
    icon: <Camera size={26} strokeWidth={1.5} />,
  },
  {
    title: "Photo Editing",
    description: "High-end post-production services including color grading, retouching, and composite work. I ensure consistency in tone and mood, elevating raw images into polished, professional assets that align with your brand's aesthetic.",
    icon: <Sliders size={26} strokeWidth={1.5} />,
  },
  {
    title: "Video Editing",
    description: "Transforming raw footage into cinematic stories. I specialize in pacing, sound design, and color grading to create compelling video content for social media reels, corporate documentaries, and event highlights.",
    icon: <Film size={26} strokeWidth={1.5} />,
  },
  {
    title: "Creative Consultancy",
    description: "Strategic visual advice for brands and individuals. I help define your visual identity, plan content roadmaps, and provide direction on how to best communicate your message through visual media.",
    icon: <Lightbulb size={26} strokeWidth={1.5} />,
  },
  {
    title: "Editorial Support",
    description: "Refining the narrative to complement your visuals. I assist with captioning, storytelling copy, and structuring editorial content to ensure the written word enhances the impact of the imagery.",
    icon: <FileText size={26} strokeWidth={1.5} />,
  },
  {
    title: "Project Workflow",
    description: "Optimizing the creative process. From pre-production planning and asset management to final delivery systems, I help streamline workflows to ensure projects are delivered on time and to the highest standard.",
    icon: <Layers size={26} strokeWidth={1.5} />,
  },
];

export default Services;