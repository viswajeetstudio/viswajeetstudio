import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, TreePine, Award, Hammer, Clock, Globe } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AboutView = () => {
  const { navigateTo } = useShop();

  return (
    <div className="pt-28 pb-24 bg-ivory text-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Masthead */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-4">
            The Atelier Legacy
          </span>
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-charcoal mb-6">
            In Pursuit of <span className="italic">Timeless Form</span>
          </h1>
          <p className="text-base sm:text-xl text-stone-muted font-light leading-relaxed">
            Founded with a singular conviction: that a home's furniture should not simply occupy space, but imbue everyday life with tactile poetry and architectural calm.
          </p>
        </div>

        {/* Hero Architectural Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-center">
          <div className="md:col-span-7 overflow-hidden shadow-luxury">
            <img
              src="./images/products/dining-sunlit-teak.webp"
              alt="Atelier Woodworking"
              className="w-full h-[450px] sm:h-[550px] object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="md:col-span-5 space-y-6 md:pl-4">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block">
              1. Our Origins
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-charcoal">
              Rooted in Nordic Calm & Mediterranean Warmth
            </h2>
            <p className="text-sm sm:text-base text-stone-muted font-light leading-relaxed">
              Vélia Atelier was conceived as an antidote to fast furniture. We collaborate with generational master woodcrafters in small family-run workshops across Europe and Asia, uniting Scandinavian ergonomic restraint with the warmth of natural hardwoods.
            </p>
            <p className="text-sm sm:text-base text-stone-muted font-light leading-relaxed">
              Every log of Sheesham, Teak, and Oak is kiln-dried for up to 90 days to achieve optimum structural equilibrium, preventing warping or cracking across seasonal climate shifts.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Craftsmanship */}
        <div className="py-16 border-y border-stone-border mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              Uncompromising Standards
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-charcoal">
              The Four Atelier Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-cream/40 border border-stone-border/70 flex flex-col justify-between">
              <div>
                <TreePine className="w-8 h-8 text-gold mb-6 stroke-[1.5]" />
                <h4 className="font-editorial text-2xl font-normal text-charcoal mb-2">Sustainable Timber</h4>
                <p className="text-xs text-stone-muted leading-relaxed">
                  100% of our hardwoods originate from FSC-certified sustainable plantations. For every tree harvested, five indigenous saplings are planted.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gold mt-6 block font-semibold">Pillar 01</span>
            </div>

            <div className="p-8 bg-cream/40 border border-stone-border/70 flex flex-col justify-between">
              <div>
                <Hammer className="w-8 h-8 text-gold mb-6 stroke-[1.5]" />
                <h4 className="font-editorial text-2xl font-normal text-charcoal mb-2">Mortise & Tenon</h4>
                <p className="text-xs text-stone-muted leading-relaxed">
                  We refuse cheap staple guns and glue-only joints. Traditional interlocking timber joinery ensures each frame endures through generations.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gold mt-6 block font-semibold">Pillar 02</span>
            </div>

            <div className="p-8 bg-cream/40 border border-stone-border/70 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-8 h-8 text-gold mb-6 stroke-[1.5]" />
                <h4 className="font-editorial text-2xl font-normal text-charcoal mb-2">10-Year Guarantee</h4>
                <p className="text-xs text-stone-muted leading-relaxed">
                  We stand irrevocably behind every joint, spring, and veneer with a comprehensive 10-year structural warranty on all frames.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gold mt-6 block font-semibold">Pillar 03</span>
            </div>

            <div className="p-8 bg-cream/40 border border-stone-border/70 flex flex-col justify-between">
              <div>
                <Globe className="w-8 h-8 text-gold mb-6 stroke-[1.5]" />
                <h4 className="font-editorial text-2xl font-normal text-charcoal mb-2">Bespoke Concierge</h4>
                <p className="text-xs text-stone-muted leading-relaxed">
                  Our private client concierge provides fabric swatches, dimensional customizations, and 3D floor plan rendering for architect clients.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gold mt-6 block font-semibold">Pillar 04</span>
            </div>
          </div>
        </div>

        {/* Global Studios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-ivory border border-stone-border">
            <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-2">Studio 01</span>
            <h4 className="font-editorial text-2xl font-normal text-charcoal mb-2">Stockholm Flagship</h4>
            <p className="text-xs text-stone-muted leading-relaxed mb-4">
              Birger Jarlsgatan 42, Östermalm, Stockholm <br />
              Displaying Scandinavian living room curations and minimalist lighting.
            </p>
            <span className="text-xs text-charcoal font-semibold">stockholm@velia-atelier.com</span>
          </div>

          <div className="p-8 bg-ivory border border-stone-border">
            <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-2">Studio 02</span>
            <h4 className="font-editorial text-2xl font-normal text-charcoal mb-2">Milan Design Pavilion</h4>
            <p className="text-xs text-stone-muted leading-relaxed mb-4">
              Via della Spiga 18, Quadrilatero della Moda, Milano <br />
              Home to our marble dining suites and artisan majolica credenzas.
            </p>
            <span className="text-xs text-charcoal font-semibold">milano@velia-atelier.com</span>
          </div>

          <div className="p-8 bg-ivory border border-stone-border">
            <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-2">Studio 03</span>
            <h4 className="font-editorial text-2xl font-normal text-charcoal mb-2">New York Gallery</h4>
            <p className="text-xs text-stone-muted leading-relaxed mb-4">
              450 West 14th Street, Meatpacking District, New York <br />
              Dedicated private architectural viewing suites and trade lounge.
            </p>
            <span className="text-xs text-charcoal font-semibold">newyork@velia-atelier.com</span>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-charcoal text-ivory p-12 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-editorial text-3xl sm:text-5xl font-normal mb-4">
              Begin Your Interior Story
            </h3>
            <p className="text-sm sm:text-base text-ivory/80 font-light mb-8 leading-relaxed">
              Explore our current collection of 21 handcrafted living, dining, and bedroom furniture creations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigateTo('shop')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-ivory text-charcoal hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
              >
                <span>Explore Collection</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="https://viswajeetstudio.github.io/viswajeet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/60 text-gold hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
              >
                <span>Contact Viswajeet Studio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
