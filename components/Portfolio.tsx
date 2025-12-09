import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { X, ZoomIn, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';
import { cn } from '../lib/utils';

const categories = ['All', 'Travel', 'Culture', 'Portrait', 'Event', 'Drone', 'Conservation', 'Real Estate'];

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setActiveCategory(category);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  }, [selectedItem, filteredItems]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  }, [selectedItem, filteredItems]);

  useEffect(() => {
    if (!selectedItem) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedItem(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handlePrev, handleNext]);

  return (
    <section id="portfolio" className="py-32 bg-secondary relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A curated selection of moments that reflect my style — natural, emotional, and beautifully lit."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border",
                activeCategory === category
                  ? "bg-accent text-black border-accent"
                  : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className={cn(
          "columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 transition-opacity duration-300",
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        )}>
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Hover Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   
                   {/* Floating Action Button */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ArrowUpRight className="text-white w-6 h-6" />
                   </div>

                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-2xl text-white italic leading-tight">
                        {item.title}
                      </h3>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          {/* Prev Button */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-accent transition-all p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-full z-50 group border border-white/5 hover:border-accent/20"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-accent transition-all p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-full z-50 group border border-white/5 hover:border-accent/20"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 z-50"
            onClick={() => setSelectedItem(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="max-w-7xl w-full h-full flex flex-col items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[85vh] w-auto group">
                <img 
                  key={selectedItem.id} // Add key to force re-render animation on change
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title}
                  className="max-h-[85vh] w-auto object-contain shadow-2xl rounded-sm animate-fade-in"
                />
            </div>
            
            <div className="mt-8 text-center animate-slide-up" key={`text-${selectedItem.id}`}>
              <h3 className="font-serif text-3xl text-white mb-2">{selectedItem.title}</h3>
              <p className="text-accent text-xs uppercase tracking-[0.2em]">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;