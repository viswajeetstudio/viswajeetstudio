import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const PromoBanner = () => {
  const { navigateTo } = useShop();

  return (
    <section className="relative py-28 sm:py-36 bg-charcoal text-ivory overflow-hidden">
      {/* Background Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/products/dining-marble-black.webp"
          alt="Luxury Living Pavilion"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.08] transform scale-105"
        />
        {/* Layered luxury overlay */}
        <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Complimentary Interior Consultations</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-ivory mb-6">
            Make Room for <br />
            <span className="italic text-gold-light">Beautiful Living.</span>
          </h2>

          <p className="text-base sm:text-xl text-ivory/85 font-light leading-relaxed mb-10 tracking-wide max-w-xl">
            Discover furniture that transforms everyday spaces into something extraordinary. Hand-curated suites designed to elevate every gathering and quiet moment.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => navigateTo('shop')}
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-ivory text-charcoal hover:bg-gold hover:text-charcoal-900 transition-all duration-300 text-xs uppercase tracking-[0.2em] font-semibold shadow-luxury"
            >
              <span>Shop Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo('collections')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-ivory/40 text-ivory hover:border-gold hover:text-gold transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium"
            >
              <span>View Lookbook 2026</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
