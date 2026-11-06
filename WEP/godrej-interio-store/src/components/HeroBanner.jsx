import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_SLIDES, STORE_INFO } from '../data/storeData';

export default function HeroBanner({ onCtaClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative w-full h-[520px] sm:h-[560px] md:h-[600px] overflow-hidden bg-[#2D3748] select-none">
      {/* Composite Architectural Room Scene */}
      <div className="absolute inset-0 w-full h-full flex">
        
        {/* Left Studio Wall: Cool Architectural Blue Slate */}
        <div className="w-[50%] md:w-[48%] h-full relative overflow-hidden bg-gradient-to-br from-[#1E5274] via-[#2A658D] to-[#1A3E5C]">
          {/* Subtle architectural wall texture / soft spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
          {/* Light modern glass coffee table visual in background left */}
          <div className="absolute bottom-12 left-6 md:left-14 opacity-40 md:opacity-60 pointer-events-none">
            <div className="w-32 md:w-56 h-12 md:h-16 border-t-4 border-white/60 bg-white/10 backdrop-blur-sm rounded-sm transform -skew-x-12" />
          </div>
        </div>

        {/* Right Accent Wall: Warm Horizontal Wood-Slat Wall */}
        <div className="w-[50%] md:w-[52%] h-full relative bg-[#B98357] overflow-hidden">
          {/* Horizontal Wood Slats pattern */}
          <div 
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #6E4424, #6E4424 4px, #A0683B 4px, #A0683B 28px)',
              boxShadow: 'inset 40px 0 60px rgba(0,0,0,0.3)'
            }}
          />
          {/* Soft ambient window light beam on wood slats */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Light Wood Plank Flooring across the Bottom 35% */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[28%] md:h-[32%] z-0"
          style={{
            background: 'linear-gradient(to top, #D6C2A9, #EFE4D6)',
            boxShadow: '0 -15px 30px rgba(0,0,0,0.18)'
          }}
        >
          {/* Subtle wood plank perspective lines */}
          <div 
            className="w-full h-full opacity-30"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #9F8367, #9F8367 1px, transparent 1px, transparent 80px)'
            }}
          />
        </div>
      </div>

      {/* Flagship Product Imagery positioned in foreground right */}
      <div className="absolute right-4 md:right-16 lg:right-28 bottom-6 md:bottom-12 z-10 max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[540px] pointer-events-none flex flex-col items-center">
        {/* Soft realistic drop shadow under furniture */}
        <div className="w-[85%] h-7 bg-black/45 rounded-full blur-md -mb-3 transform scale-y-50" />
        <img
          key={slide.id}
          src={slide.productImg}
          alt={slide.accentTitle}
          className="w-full h-auto object-contain filter drop-shadow-2xl transition-all duration-700 animate-fadeIn"
        />
        {/* Flagship floating badge */}
        <div className="mt-2 bg-brand-charcoal/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-[2px] border border-white/20 text-xs flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="font-bold tracking-wider uppercase text-[11px]">{slide.accentTitle}</span>
          <span className="text-brand-amber font-extrabold text-[12px]">{slide.priceTag}</span>
        </div>
      </div>

      {/* Center-Left Content Container (1200px Grid) */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl text-white pt-6 pb-12">
          
          {/* Script Eyebrow */}
          <div className="mb-2">
            <span className="font-dancing text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-wide drop-shadow-md">
              {slide.scriptEyebrow}
            </span>
          </div>

          {/* Short White Horizontal Divider Line */}
          <div className="w-14 h-[2px] bg-white my-3 drop-shadow" />

          {/* Bold Uppercase Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold uppercase tracking-tight text-white leading-[1.08] drop-shadow-lg font-sans">
            {slide.headline}
          </h1>

          {/* Spaced Uppercase Subheadline */}
          <p className="text-xs sm:text-sm md:text-[15px] font-semibold uppercase tracking-[0.22em] text-[#E0E8F0] mt-3 mb-6 drop-shadow">
            {slide.subheadline}
          </p>

          {/* Enhancement Override #1: High-Contrast Primary CTA Button */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#catalog"
              onClick={onCtaClick}
              className="bg-brand-cyan hover:bg-[#008fca] active:scale-95 text-white font-extrabold uppercase text-xs md:text-sm tracking-[0.08em] px-7 py-3.5 rounded-[2px] shadow-lg transition-all duration-200 flex items-center gap-2.5 group"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#hot-deal"
              className="bg-black/40 hover:bg-black/60 text-white border border-white/40 font-bold uppercase text-xs tracking-[0.08em] px-5 py-3.5 rounded-[2px] backdrop-blur-sm transition-all"
            >
              View Mohan Estate Deals
            </a>
          </div>

          {/* Trust points micro pill */}
          <div className="mt-8 flex items-center gap-4 text-[11px] text-white/90 drop-shadow">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-brand-amber" />
              <span>Free Delhi-NCR Delivery & Assembly</span>
            </span>
            <span className="text-white/40">•</span>
            <span>10-Year Warranty</span>
          </div>

        </div>
      </div>

      {/* Prev / Next Carousel Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-[2px] bg-black/30 hover:bg-brand-cyan text-white flex items-center justify-center transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-[2px] bg-black/30 hover:bg-brand-cyan text-white flex items-center justify-center transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Bottom-Center: Carousel Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? 'w-7 h-2.5 bg-brand-cyan shadow-md'
                : 'w-2.5 h-2.5 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
