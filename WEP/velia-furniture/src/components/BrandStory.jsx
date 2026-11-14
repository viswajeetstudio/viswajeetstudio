import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, TreePine, Award } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const BrandStory = () => {
  const { navigateTo } = useShop();

  return (
    <section id="brand-story" className="py-24 sm:py-32 bg-ivory text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Interior Photograph */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 overflow-hidden bg-cream shadow-luxury">
              <img
                src="./images/products/dining-sunlit-teak.webp"
                alt="Crafted With Purpose interior"
                className="w-full h-[450px] sm:h-[550px] lg:h-[620px] object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Architectural Floating Inset Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 bg-charcoal text-ivory p-6 sm:p-8 max-w-xs shadow-2xl border-l-2 border-gold hidden sm:block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold block mb-2 font-medium">
                Nordic & Japanese Philosophy
              </span>
              <p className="font-editorial text-2xl font-light leading-snug">
                "Simplicity is the ultimate sophistication."
              </p>
              <span className="text-xs text-stone-muted mt-3 block font-sans">
                Atelier Architectural Manifesto
              </span>
            </div>

            {/* Subtle decorative outline background */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-gold/30 -z-0 hidden md:block" />
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">
              <Award className="w-4 h-4" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-charcoal mb-6">
              Crafted With Purpose. <br />
              <span className="italic text-walnut">Made to Last.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 font-light leading-relaxed mb-6">
              We believe furniture is more than just an object. It is part of the moments, memories, and experiences that make a house feel like home.
            </p>

            <p className="text-sm sm:text-base text-stone-muted font-light leading-relaxed mb-8">
              Every curve is considered, every plank of timber is dried to ideal humidity levels, and every joint is constructed by master craftsmen who honor ancestral woodworking traditions. We reject mass manufacturing in favor of intentional, generational design.
            </p>

            {/* Craft Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-10 pb-8 border-b border-stone-border">
              <div className="flex items-start gap-3">
                <TreePine className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">FSC Certified</h4>
                  <p className="text-[11px] text-stone-muted mt-0.5">100% sustainable responsibly harvested timber.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">Generational Joinery</h4>
                  <p className="text-[11px] text-stone-muted mt-0.5">Mortise and tenon bonds that outlast nails.</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <button
                onClick={() => navigateTo('about')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-all duration-300 text-xs uppercase tracking-[0.2em] font-semibold shadow-luxury"
              >
                <span>Discover Our Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
