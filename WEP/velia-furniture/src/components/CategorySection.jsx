import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';

export const CategorySection = () => {
  const { navigateTo } = useShop();

  const handleCategoryClick = (categoryName) => {
    navigateTo('shop', categoryName);
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-border">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-3">
              Curated Spaces
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-charcoal">
              Shop by <span className="italic">Category</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-charcoal-500 max-w-md font-light leading-relaxed">
            Every room tells a story. Explore our distinct collections tailored for harmonious living, from convivial dining halls to restorative bedroom suites.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* 1. Large Feature Card: Living Room (Spans 7 cols on desktop) */}
          <div
            onClick={() => handleCategoryClick('Living Room')}
            className="md:col-span-7 group relative h-[420px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-charcoal cursor-pointer shadow-subtle hover:shadow-luxury transition-all duration-500"
          >
            <img
              src="./images/products/sofa-scandi-3seater.webp"
              alt="Living Room Collection"
              className="w-full h-full object-cover object-center filter brightness-[0.9] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end text-ivory">
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold-light font-medium mb-2">
                12 Handcrafted Designs
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal mb-3 text-ivory">
                Living Room
              </h3>
              <p className="text-sm text-ivory/80 font-light max-w-md mb-6 line-clamp-2">
                Sculptural sofas, organic coffee tables, and tailored lounge pieces designed for mindful living.
              </p>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-ivory group-hover:text-gold transition-colors">
                <span>Explore Collection</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

          {/* 2. Bedroom (Spans 5 cols on desktop) */}
          <div
            onClick={() => handleCategoryClick('Bedroom')}
            className="md:col-span-5 group relative h-[420px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-charcoal cursor-pointer shadow-subtle hover:shadow-luxury transition-all duration-500"
          >
            <img
              src="./images/products/bed-architectural-modern.webp"
              alt="Bedroom Sanctuary"
              className="w-full h-full object-cover object-center filter brightness-[0.88] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end text-ivory">
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold-light font-medium mb-2">
                08 Sculpted Designs
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-normal mb-3 text-ivory">
                Bedroom
              </h3>
              <p className="text-sm text-ivory/80 font-light mb-6 line-clamp-2">
                Floating platform beds, integrated niche headboards, and soothing bedside tables.
              </p>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-ivory group-hover:text-gold transition-colors">
                <span>Explore Collection</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

          {/* 3. Dining Room (Spans 4 cols on desktop) */}
          <div
            onClick={() => handleCategoryClick('Dining Room')}
            className="md:col-span-4 group relative h-[380px] sm:h-[420px] overflow-hidden bg-charcoal cursor-pointer shadow-subtle hover:shadow-luxury transition-all duration-500"
          >
            <img
              src="./images/products/dining-marble-black.webp"
              alt="Dining Room Suites"
              className="w-full h-full object-cover object-center filter brightness-[0.88] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-ivory">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-medium mb-1.5">
                14 Grand Suites
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal mb-2 text-ivory">
                Dining Room
              </h3>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-ivory group-hover:text-gold transition-colors mt-2">
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

          {/* 4. Office & Storage (Spans 4 cols on desktop) */}
          <div
            onClick={() => handleCategoryClick('Office & Storage')}
            className="md:col-span-4 group relative h-[380px] sm:h-[420px] overflow-hidden bg-charcoal cursor-pointer shadow-subtle hover:shadow-luxury transition-all duration-500"
          >
            <img
              src="./images/products/sideboard-cane-rattan.webp"
              alt="Office Furniture & Credenzas"
              className="w-full h-full object-cover object-center filter brightness-[0.88] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-ivory">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-medium mb-1.5">
                09 Sideboards & Armoires
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal mb-2 text-ivory">
                Office & Storage
              </h3>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-ivory group-hover:text-gold transition-colors mt-2">
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

          {/* 5. Sofas & Seating (Spans 4 cols on desktop) */}
          <div
            onClick={() => handleCategoryClick('Sofas & Seating')}
            className="md:col-span-4 group relative h-[380px] sm:h-[420px] overflow-hidden bg-charcoal cursor-pointer shadow-subtle hover:shadow-luxury transition-all duration-500"
          >
            <img
              src="./images/products/chair-tufted-rocking-ottoman.jpg"
              alt="Sofas & Seating"
              className="w-full h-full object-cover object-center filter brightness-[0.88] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-ivory">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-medium mb-1.5">
                11 Lounge Chairs & Sofas
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal mb-2 text-ivory">
                Sofas & Seating
              </h3>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-ivory group-hover:text-gold transition-colors mt-2">
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
