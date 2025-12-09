import React from 'react';
import { ModernAbout } from './ui/modern-about';
import SectionHeading from './SectionHeading';
import { Camera, Heart, Lightbulb, Clock, Sparkles, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Intro Header */}
            <SectionHeading 
                title="Behind the Lens" 
                subtitle="A glimpse into the passion, vision, and heart that drives every image I create."
            />

            {/* Top Section: Split Layout */}
            <ModernAbout
                imageSrc="https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=1000&auto=format&fit=crop"
                badgeText="Storyteller"
                title="A Little About Me"
                description={
                    <>
                        <p className="mb-6">
                            I’m Brian Isaji, a photographer passionate about capturing the subtle, powerful moments that often go unnoticed. My work is inspired by real human connection — the quiet expressions, the gentle gestures, the stories behind every face and every place.
                        </p>
                        <p className="mb-8">
                            With a warm, natural style, I focus on creating photographs that feel honest, emotive, and timeless. Whether I’m documenting a portrait session, a celebration, or a creative project, my goal is always the same:
                            to make every image feel personal, meaningful, and beautifully crafted.
                        </p>
                        <div className="border-l-2 border-accent pl-6 py-1 mt-8">
                            <p className="font-serif text-2xl italic text-white/90">
                                "Photography that feels like you."
                            </p>
                        </div>
                    </>
                }
                ctaText="View Portfolio"
                ctaHref="#portfolio"
            />

            {/* Bottom Section: Feature Grid */}
            <div className="mt-40">
                <div className="text-center mb-20">
                     <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Why Choose Me</h3>
                     <h2 className="font-serif text-3xl md:text-5xl text-white">The Experience</h2>
                     <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-8 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-white/5 hover:border-accent/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(215,181,109,0.2)]">
                            <div className="w-14 h-14 bg-black/50 rounded-xl border border-white/10 flex items-center justify-center mb-8 group-hover:border-accent/50 group-hover:text-accent transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="font-serif text-2xl text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

const features = [
    {
        icon: <Heart size={24} className="text-white group-hover:text-accent transition-colors" />,
        title: "Authentic Connection",
        description: "I prioritize making you feel comfortable and seen, allowing genuine emotions to unfold naturally in front of the camera without forced poses."
    },
    {
        icon: <Sparkles size={24} className="text-white group-hover:text-accent transition-colors" />,
        title: "Timeless Editing",
        description: "My editing style focuses on true-to-life tones, rich contrasts, and classic aesthetics that will look beautiful and relevant for decades to come."
    },
    {
        icon: <Lightbulb size={24} className="text-white group-hover:text-accent transition-colors" />,
        title: "Creative Direction",
        description: "Not sure what to do with your hands? I provide gentle, clear guidance on posing and styling to ensure you look your absolute best."
    },
    {
        icon: <Camera size={24} className="text-white group-hover:text-accent transition-colors" />,
        title: "Top-Tier Equipment",
        description: "Using professional-grade cameras and prime lenses to ensure every detail is sharp, vibrant, and perfectly captured even in low light."
    },
    {
        icon: <Clock size={24} className="text-white group-hover:text-accent transition-colors" />,
        title: "Timely Delivery",
        description: "I know you're excited to see your photos. I deliver tailored sneak peeks quickly within 48 hours and the full gallery on schedule."
    },
    {
        icon: <Users size={24} className="text-white group-hover:text-accent transition-colors" />,
        title: "Personalized Approach",
        description: "Every session is unique. I take the time to understand your vision, location preferences, and style to tailor the experience to your needs."
    }
];

export default About;