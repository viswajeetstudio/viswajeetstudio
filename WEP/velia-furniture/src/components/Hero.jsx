import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Compass, Sparkles, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Hero = () => {
  const { navigateTo } = useShop();

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Cinematic Image with Subtle Parallax & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-full"
        >
          <img
            src="./images/products/bed-architectural-modern.webp"
            alt="Architectural Luxury Interior"
            className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05]"
          />
        </motion.div>
        {/* Editorial Gradients & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-20 text-ivory">
        <div className="max-w-3xl">
          
          {/* Subtle Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-none bg-ivory/10 backdrop-blur-md border border-ivory/20 mb-6 text-gold-light"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-medium">
              Autumn / Winter 2026 Collection
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.06] tracking-tight mb-6 text-ivory"
          >
            Furniture That <br />
            <span className="italic font-light text-gold-light">Defines</span> Your Space.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-ivory/85 font-light leading-relaxed max-w-2xl mb-10 tracking-wide"
          >
            Thoughtfully designed furniture that brings comfort, character, and timeless elegance into your home. Handcrafted from sustainably harvested solid hardwoods and fine materials.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <button
              onClick={() => navigateTo('shop')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-ivory text-charcoal hover:bg-gold hover:text-charcoal-900 transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-luxury"
            >
              <span>Explore Collection</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('brand-story');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigateTo('about');
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-ivory/40 text-ivory hover:border-gold hover:text-gold transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-sm"
            >
              <span>Discover Our Story</span>
            </button>
          </motion.div>

        </div>

        {/* Bottom Feature Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 sm:mt-24 pt-8 border-t border-ivory/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-ivory/80"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-gold">
              <span className="font-editorial text-sm font-semibold">01</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ivory">Solid Hardwoods</p>
              <p className="text-[11px] text-ivory/60">Seasoned Teak & Sheesham</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-gold">
              <span className="font-editorial text-sm font-semibold">02</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ivory">Artisan Joinery</p>
              <p className="text-[11px] text-ivory/60">Mortise & Tenon Precision</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-gold">
              <span className="font-editorial text-sm font-semibold">03</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ivory">White-Glove Care</p>
              <p className="text-[11px] text-ivory/60">Room placement & assembly</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-gold">
              <span className="font-editorial text-sm font-semibold">04</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ivory">Lifetime Frame</p>
              <p className="text-[11px] text-ivory/60">10-year warranty standard</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-ivory/50 hover:text-ivory transition-colors">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-1">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
