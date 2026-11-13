import React from 'react';
import { Gem, Compass, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { BRAND_VALUES } from '../data/products';

export const WhyChooseUs = () => {
  const iconMap = {
    Gem: Gem,
    Compass: Compass,
    ShieldCheck: ShieldCheck,
    Truck: Truck
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory text-charcoal border-b border-stone-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-3">
            The Atelier Standard
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-charcoal mb-4">
            Why Choose <span className="italic">Vélia</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-500 font-light leading-relaxed">
            We hold ourselves to an uncompromising benchmark of aesthetic purity, material honesty, and bespoke client service.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_VALUES.map((item) => {
            const Icon = iconMap[item.icon] || Gem;

            return (
              <div
                key={item.number}
                className="group p-8 sm:p-9 bg-cream/30 hover:bg-cream/80 border border-stone-border/70 hover:border-gold/60 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-editorial text-2xl text-stone-muted group-hover:text-gold transition-colors font-medium">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-none bg-ivory border border-stone-border flex items-center justify-center text-charcoal group-hover:text-gold group-hover:border-gold transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-2xl font-normal text-charcoal mb-3 group-hover:text-gold-dark transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stone-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle border accent */}
                <div className="pt-8 mt-8 border-t border-stone-border/40 flex items-center justify-between text-[11px] uppercase tracking-widest text-stone-muted group-hover:text-charcoal transition-colors">
                  <span>Guaranteed</span>
                  <span className="w-6 h-[1px] bg-gold/60 group-hover:w-10 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
