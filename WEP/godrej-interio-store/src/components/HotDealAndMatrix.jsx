import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShoppingBag, 
  Timer, 
  Armchair, 
  Lamp, 
  LampFloor, 
  BedDouble, 
  Archive, 
  Sparkles,
  DoorClosed,
  CheckCircle2
} from 'lucide-react';
import { HOT_DEAL_DATA, CATEGORY_MATRIX } from '../data/storeData';

export default function HotDealAndMatrix({ onAddToCart, onQuickView, onSelectCategory }) {
  // Live Ticking Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 120,
    hours: 9,
    minutes: 4,
    seconds: 50
  });

  const [activeTileId, setActiveTileId] = useState(4); // Default highlighted Tile #4 (Floor Lamp) in solid cyan

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Icon mapping function for the 9 category tiles
  const renderCategoryIcon = (iconName, isActive) => {
    const colorClass = 'text-white';
    const strokeWidth = 1.8;
    switch (iconName) {
      case 'Sofa':
        return <Armchair size={26} className={colorClass} strokeWidth={strokeWidth} />;
      case 'Lamp':
        return <Lamp size={26} className={colorClass} strokeWidth={strokeWidth} />;
      case 'Desk':
        return (
          <svg className={`w-7 h-7 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
        );
      case 'FloorLamp':
        return <LampFloor size={26} className={colorClass} strokeWidth={strokeWidth} />;
      case 'Cabinet':
        return <Archive size={26} className={colorClass} strokeWidth={strokeWidth} />;
      case 'OfficeChair':
        return (
          <svg className={`w-7 h-7 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10m0 0l-4 8m4-8l4 8m-9-15h10a2 2 0 012 2v3a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
          </svg>
        );
      case 'Wardrobe':
        return <DoorClosed size={26} className={colorClass} strokeWidth={strokeWidth} />;
      case 'Bed':
        return <BedDouble size={26} className={colorClass} strokeWidth={strokeWidth} />;
      case 'Chandelier':
        return (
          <svg className={`w-7 h-7 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 0l-5 4m5-4l5 4m-8 6h6m-7 4h8m-9 4h10" />
          </svg>
        );
      default:
        return <Armchair size={26} className={colorClass} strokeWidth={strokeWidth} />;
    }
  };

  return (
    <section id="hot-deal" className="w-full py-10 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 50/50 Split Grid (Stacks under 1024px per Override #5) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* ================= LEFT COLUMN: WHITE DEAL CARD (50%) ================= */}
          <div className="relative bg-white border border-[#E5E5E5] rounded-[2px] p-6 sm:p-8 flex flex-col justify-between shadow-sm overflow-hidden">
            
            {/* Top-Left Diagonal Red Corner Ribbon ('Hot Deal') */}
            <div className="ribbon-wrapper">
              <div className="ribbon-deal">
                Hot Deal
              </div>
            </div>

            {/* Top Bar inside Card: Small 'SALE' Badge + Top-Right Navigation Arrows */}
            <div className="flex items-center justify-between pl-16 mb-4">
              <span className="badge-speech-coral">
                SALE -{HOT_DEAL_DATA.savingsPercent}%
              </span>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="w-7 h-7 rounded-[2px] border border-[#E0E0E0] hover:bg-brand-cyan hover:text-white hover:border-brand-cyan text-[#666666] flex items-center justify-center transition-colors text-xs"
                  aria-label="Previous Deal"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  type="button"
                  className="w-7 h-7 rounded-[2px] border border-[#E0E0E0] hover:bg-brand-cyan hover:text-white hover:border-brand-cyan text-[#666666] flex items-center justify-center transition-colors text-xs"
                  aria-label="Next Deal"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* 2-Column Internal Split: Large Cutout Left + Details & Countdown Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center flex-1 my-2">
              
              {/* Product Cutout Image */}
              <div 
                onClick={() => onQuickView(HOT_DEAL_DATA)}
                className="relative aspect-square p-4 flex items-center justify-center cursor-pointer group"
              >
                <img
                  src={HOT_DEAL_DATA.image}
                  alt={HOT_DEAL_DATA.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-[#1A1A1A]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-[2px]">
                  Only {HOT_DEAL_DATA.stockLeft} Left in Delhi
                </div>
              </div>

              {/* Product Details & Countdown Column */}
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan mb-1">
                  {HOT_DEAL_DATA.subtitle}
                </span>

                <h3 
                  onClick={() => onQuickView(HOT_DEAL_DATA)}
                  className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#1A1A1A] leading-snug cursor-pointer hover:text-brand-cyan transition-colors"
                >
                  {HOT_DEAL_DATA.title}
                </h3>

                {/* Price Row: Red current price + strikethrough price */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-black text-[#F05A28]">
                    ₹{HOT_DEAL_DATA.currentPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-[#999999] line-through">
                    ₹{HOT_DEAL_DATA.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className="fill-[#F7941D] text-[#F7941D]"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#777777] font-semibold ml-1">
                    ({HOT_DEAL_DATA.reviewCount} Reviews)
                  </span>
                </div>

                {/* 3-Line Product Description */}
                <p className="text-[12px] text-[#555555] mt-3 leading-relaxed line-clamp-3">
                  {HOT_DEAL_DATA.description}
                </p>

                {/* 4-Box Bordered Countdown Timer with Cyan Numbers (#00A8E8) */}
                <div className="grid grid-cols-4 gap-2 mt-5 text-center">
                  <div className="border border-[#E0E0E0] bg-[#FAFAFA] py-2 px-1 rounded-[2px]">
                    <span className="block text-base sm:text-lg font-black text-brand-cyan leading-none font-sans">
                      {timeLeft.days}
                    </span>
                    <span className="block text-[9px] font-bold text-[#777777] uppercase tracking-wider mt-1">
                      DAYS
                    </span>
                  </div>

                  <div className="border border-[#E0E0E0] bg-[#FAFAFA] py-2 px-1 rounded-[2px]">
                    <span className="block text-base sm:text-lg font-black text-brand-cyan leading-none font-sans">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="block text-[9px] font-bold text-[#777777] uppercase tracking-wider mt-1">
                      HOURS
                    </span>
                  </div>

                  <div className="border border-[#E0E0E0] bg-[#FAFAFA] py-2 px-1 rounded-[2px]">
                    <span className="block text-base sm:text-lg font-black text-brand-cyan leading-none font-sans">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="block text-[9px] font-bold text-[#777777] uppercase tracking-wider mt-1">
                      MINS
                    </span>
                  </div>

                  <div className="border border-[#E0E0E0] bg-[#FAFAFA] py-2 px-1 rounded-[2px]">
                    <span className="block text-base sm:text-lg font-black text-brand-cyan leading-none font-sans">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="block text-[9px] font-bold text-[#777777] uppercase tracking-wider mt-1">
                      SECS
                    </span>
                  </div>
                </div>

                {/* Claim Deal Button */}
                <button
                  type="button"
                  onClick={() => onAddToCart(HOT_DEAL_DATA)}
                  className="mt-5 w-full bg-brand-cyan hover:bg-[#008fca] active:scale-98 text-white font-extrabold uppercase text-xs tracking-wider py-3 rounded-[2px] shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag size={14} />
                  <span>CLAIM SPOTLIGHT DEAL</span>
                </button>
              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: 3x3 CATEGORY MATRIX (50%) ================= */}
          <div className="relative rounded-[2px] overflow-hidden min-h-[420px] flex flex-col shadow-sm border border-[#333333]">
            
            {/* Dark Charcoal Room Photo Background with #1F1F1F Overlay */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-[#1F1F1F]/90 backdrop-blur-[2px]" />
            </div>

            {/* 3x3 Grid of 9 Category Tiles separated by subtle hairline borders */}
            <div className="relative z-10 grid grid-cols-3 grid-rows-3 h-full divide-x divide-y divide-white/10">
              {CATEGORY_MATRIX.map((tile) => {
                const isActive = activeTileId === tile.id;
                return (
                  <button
                    key={tile.id}
                    type="button"
                    onClick={() => {
                      setActiveTileId(tile.id);
                      if (onSelectCategory) onSelectCategory(tile.name);
                    }}
                    className={`group relative p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-200 select-none ${
                      isActive 
                        ? 'bg-[#00A8E8] shadow-inner text-white' 
                        : 'hover:bg-white/10 text-white/90'
                    }`}
                  >
                    {/* Clean White Furniture Glyph Icon */}
                    <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
                      {renderCategoryIcon(tile.icon, isActive)}
                    </div>

                    {/* Uppercase Category Label */}
                    <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.08em] text-white block">
                      {tile.name}
                    </span>

                    {/* Small count badge */}
                    <span className={`text-[9px] uppercase tracking-wider mt-0.5 ${isActive ? 'text-white/90' : 'text-white/50'}`}>
                      {tile.count}
                    </span>

                    {/* Active Indicator Pin */}
                    {isActive && (
                      <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Status strip */}
            <div className="relative z-10 bg-black/60 px-4 py-2 flex items-center justify-between text-[11px] text-white/80 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-brand-cyan" />
                <span>Showing Mohan Estate Showroom Categories</span>
              </span>
              <span className="font-bold text-brand-amber">380+ Verified Products</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
