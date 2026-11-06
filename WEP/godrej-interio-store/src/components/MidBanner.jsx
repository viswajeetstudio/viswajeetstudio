import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MidBanner({ onExplore }) {
  return (
    <section className="w-full py-6 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Full-width Horizontal Banner with Interior Photos + Angled Turquoise-Teal Polygon Overlay */}
        <div className="relative h-[220px] sm:h-[240px] md:h-[260px] rounded-[2px] overflow-hidden shadow-sm flex items-stretch bg-[#1A1A1A]">
          
          {/* Left Interior Photo */}
          <div className="w-1/3 h-full relative overflow-hidden hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
              alt="Living Room Decor"
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Right Interior Photo */}
          <div className="w-full sm:w-2/3 h-full relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
              alt="Modular Interio Space"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Center Angled Turquoise-Teal Polygon Overlay (#5BC2C7) */}
          <div 
            className="absolute inset-0 sm:left-[12%] sm:right-[15%] h-full bg-[#5BC2C7] flex flex-col justify-center px-6 sm:px-14 z-10 transition-all shadow-xl"
            style={{
              clipPath: typeof window !== 'undefined' && window.innerWidth > 768 
                ? 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' 
                : 'none'
            }}
          >
            {/* Subtle Texture & Scrim for AA Accessibility */}
            <div className="max-w-lg text-white">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-[2px] inline-block mb-1.5 text-white">
                FLAGSHIP SPOTLIGHT
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-[0.06em] text-white leading-tight drop-shadow-sm font-sans">
                NEW! FURNITURE COLLECTION
              </h2>
              <p className="text-xs sm:text-[13px] text-white/95 mt-1.5 max-w-md font-medium leading-relaxed drop-shadow-sm">
                Architectural ergonomics engineered for modern urban homes. Experience solid wood craftsmanship and 10-year durability at Mohan Estate.
              </p>

              <button
                type="button"
                onClick={onExplore}
                className="mt-3 inline-flex items-center gap-1.5 text-white hover:text-white/80 font-bold text-xs uppercase tracking-wider group"
              >
                <span>EXPLORE STORE GALLERY</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Overlapping Bottom-Right Cutout Product Accent */}
          <div className="absolute -bottom-2 right-4 sm:right-8 md:right-12 z-20 w-32 sm:w-44 md:w-52 pointer-events-none filter drop-shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&q=80"
              alt="Armchair Cutout Accent"
              className="w-full h-auto object-contain transform hover:scale-105 transition-transform"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
