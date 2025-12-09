import React from 'react';
import { HeroSection } from './ui/hero-section-dark';

const Hero: React.FC = () => {
  return (
    <div id="home">
      <HeroSection
        title="Brian Isaji Photography"
        subtitle={{
          regular: "Capturing Life.",
          gradient: "Creating Art.",
        }}
        description="Where light, emotion, and storytelling come together. Professional photography that feels personal, meaningful, and beautifully crafted."
        ctaText="View Portfolio"
        ctaHref="#portfolio"
        // Using a moody, dark, high-quality landscape/portrait image
        backgroundImage="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2000&auto=format&fit=crop"
      />
    </div>
  );
};

export default Hero;