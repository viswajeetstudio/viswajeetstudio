import React from 'react';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { BEST_SELLERS_LIST } from '../data/storeData';

export default function BestSellers({ onQuickView, onAddToCart }) {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#ECE6DE]">
      {/* Full-width Lifestyle Interior Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-right md:bg-center opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1800&q=80')`
        }}
      >
        {/* Soft overlay gradient to ensure floating white card stands out sharply */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EFEAE2]/90 via-[#EFEAE2]/60 to-transparent" />
      </div>

      {/* Foreground Container (1200px Grid) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Left-Aligned Floating White Panel (max-w-xl bg-white p-8 shadow-sm) */}
        <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-[2px] shadow-md border border-[#E5E5E5]/80">
          
          {/* Header with Short Cyan Underline */}
          <div className="relative mb-6 pb-2 border-b border-[#EEEEEE]">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-[0.06em] text-[#1A1A1A]">
              BEST SELLERS
            </h2>
            {/* Short Cyan Underline */}
            <div className="w-14 h-[3px] bg-brand-cyan absolute -bottom-[2px] left-0" />
          </div>

          {/* 2-Column x 3-Row Compact Mini-Product List (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            {BEST_SELLERS_LIST.map((item) => (
              <div 
                key={item.id} 
                className="group flex items-center gap-3 p-1.5 rounded-[2px] hover:bg-[#F9F9F9] transition-colors relative"
              >
                {/* 64x64px Bordered Product Thumbnail */}
                <div 
                  onClick={() => onQuickView(item)}
                  className="w-16 h-16 min-w-[64px] border border-[#E5E5E5] bg-white rounded-[2px] p-1 flex items-center justify-center overflow-hidden cursor-pointer group-hover:border-brand-cyan/60 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                {/* Stacked Product Details */}
                <div className="flex flex-col flex-1 min-w-0">
                  <h4 
                    onClick={() => onQuickView(item)}
                    title={item.title}
                    className="text-[12px] font-bold uppercase tracking-tight text-[#1A1A1A] truncate cursor-pointer hover:text-brand-cyan transition-colors"
                  >
                    {item.title}
                  </h4>

                  {/* Price Row: Red current price + strikethrough price */}
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[13px] font-bold text-[#F05A28]">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                    {item.oldPrice && (
                      <span className="text-[11px] text-[#999999] line-through">
                        ₹{item.oldPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  {/* 5-Star Rating Row */}
                  <div className="flex items-center gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={10}
                        className={
                          star <= item.rating
                            ? 'fill-[#F7941D] text-[#F7941D]'
                            : 'fill-transparent text-[#D4D4D4]'
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Quick Add Button on Hover */}
                <button
                  type="button"
                  onClick={() => onAddToCart({ ...item, currentPrice: item.price })}
                  title="Add to Cart"
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-brand-cyan hover:text-white hover:bg-brand-cyan rounded-[2px] border border-brand-cyan"
                  aria-label="Add to Cart"
                >
                  <ShoppingBag size={12} />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Store Prompt */}
          <div className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-[11px] text-[#666666]">
            <span>Verified in Mohan Estate Showroom</span>
            <a 
              href="#catalog"
              className="font-bold text-brand-cyan hover:underline uppercase tracking-wider"
            >
              View All 380+ Items &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
