import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PromoTrio({ onSelectCategory }) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        
        {/* Column 1: Royal Blue (#0066B3) */}
        <div 
          onClick={() => onSelectCategory && onSelectCategory('Chairs')}
          className="group relative h-[240px] sm:h-[260px] md:h-[280px] bg-[#0066B3] overflow-hidden p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all hover:brightness-105"
        >
          {/* Subtle Scrim for Accessible Contrast (WCAG AA) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          {/* Top text block */}
          <div className="relative z-10">
            <span className="font-dancing text-xl sm:text-2xl text-blue-100 font-semibold tracking-wide drop-shadow-sm block">
              Great offers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.06em] text-white mt-1 drop-shadow">
              NEW ARRIVALS
            </h2>
            <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-white uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              <span>EXPLORE CHAIRS & BEDS</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Cutout Product Vignette at bottom */}
          <div className="absolute -bottom-2 -right-4 sm:right-2 w-[180px] sm:w-[220px] transition-transform duration-500 group-hover:scale-105 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80"
              alt="New Arrivals Furniture"
              className="w-full h-auto object-contain filter drop-shadow-xl"
            />
          </div>
        </div>

        {/* Column 2: Lime Yellow-Green (#9BB41A / Scrimmed #8AA314 for AAA Contrast) */}
        <div 
          onClick={() => onSelectCategory && onSelectCategory('Storage')}
          className="group relative h-[240px] sm:h-[260px] md:h-[280px] bg-[#9BB41A] overflow-hidden p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all hover:brightness-105 border-y md:border-y-0 md:border-x border-lime-600/30"
        >
          {/* Accessible Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" />

          {/* Centered Headlines */}
          <div className="relative z-10 text-center">
            <span className="font-dancing text-xl sm:text-2xl text-yellow-100 font-semibold tracking-wide drop-shadow-sm block">
              Festive Makeover
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.08em] text-white mt-1 drop-shadow-md">
              BIG SALE
            </h2>
            <span className="inline-block bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-[2px] mt-2 shadow">
              UP TO 50% OFF STORAGE & MEDIA
            </span>
          </div>

          {/* Wide Interior Showcase Photo at Bottom */}
          <div className="relative z-10 mt-auto pt-3">
            <div className="w-full h-28 sm:h-32 rounded-[2px] overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
                alt="Big Sale Interior Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Column 3: Vibrant Orange (#F37021) */}
        <div 
          onClick={() => onSelectCategory && onSelectCategory('Living')}
          className="group relative h-[240px] sm:h-[260px] md:h-[280px] bg-[#F37021] overflow-hidden p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all hover:brightness-105"
        >
          {/* Accessible Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          {/* Top text block */}
          <div className="relative z-10">
            <span className="font-dancing text-xl sm:text-2xl text-orange-100 font-semibold tracking-wide drop-shadow-sm block">
              Comfortable Living
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.06em] text-white mt-1 drop-shadow">
              LIVING ROOM
            </h2>
            <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-white uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              <span>EXPLORE SECTIONALS & SOFAS</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Lifestyle Sofa Vignette at Bottom */}
          <div className="absolute -bottom-2 -right-4 sm:right-2 w-[190px] sm:w-[230px] transition-transform duration-500 group-hover:scale-105 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400&q=80"
              alt="Living Room Sofa Collection"
              className="w-full h-auto object-contain filter drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
