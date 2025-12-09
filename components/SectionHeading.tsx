import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = true // Default to true for dark mode website
}) => {
  return (
    <div className={`mb-20 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-serif text-4xl md:text-6xl font-medium mb-6 tracking-wide ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans font-light text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-[1px] w-24 bg-accent mt-8 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;