import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : REVIEWS.length - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0));
  };

  const current = REVIEWS[activeIndex];

  return (
    <section className="py-24 sm:py-32 bg-ivory text-charcoal overflow-hidden border-b border-stone-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-border">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-3">
              Client Perspectives
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-charcoal">
              Stories of <span className="italic">Refined Living</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-none border border-charcoal/20 bg-cream text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300 flex items-center justify-center shadow-sm"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-none border border-charcoal/20 bg-cream text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300 flex items-center justify-center shadow-sm"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Feature Card (Split Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream/50 border border-stone-border/80 p-8 sm:p-12 lg:p-16">
          
          {/* Customer Interior Photo */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-cream shadow-luxury">
              <img
                src={current.image}
                alt={current.author + "'s interior"}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
            </div>
            <div className="absolute top-4 left-4 bg-ivory/95 backdrop-blur-sm px-3 py-1.5 border border-stone-border text-[10px] uppercase tracking-wider text-charcoal font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              <span>Verified Installation</span>
            </div>
          </div>

          {/* Review Text & Author Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-gold mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
                <span className="text-xs uppercase tracking-widest text-stone-muted ml-2">
                  5.0 Exceptional
                </span>
              </div>

              {/* Title & Quote */}
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-charcoal mb-6">
                "{current.title}"
              </h3>

              <p className="text-base sm:text-lg text-charcoal-700 font-light leading-relaxed mb-8 italic">
                "{current.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-6 border-t border-stone-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-editorial text-xl font-medium text-charcoal">
                  {current.author}
                </h4>
                <p className="text-xs text-stone-muted tracking-wider uppercase">
                  {current.role} • {current.city}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase tracking-widest text-stone-muted block">Featured Piece</span>
                <span className="text-xs font-semibold text-charcoal">{current.product}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
