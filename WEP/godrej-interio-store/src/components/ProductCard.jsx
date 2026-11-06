import React from 'react';
import { Search, Heart, Star } from 'lucide-react';

export default function ProductCard({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false
}) {
  const {
    id,
    title,
    currentPrice,
    originalPrice,
    rating = 5,
    badge,
    badgeType = 'coral',
    image,
    category
  } = product;

  return (
    <div className="group bg-white border border-[#E5E5E5] rounded-[2px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-brand-cyan/40 relative">
      {/* Top Badges */}
      {badge && badgeType === 'coral' && (
        <div className="absolute top-3 left-3 z-10">
          <span className="badge-speech-coral font-sans">
            {badge}
          </span>
        </div>
      )}
      {badge && badgeType === 'cyan' && (
        <div className="absolute top-3 right-3 z-10">
          <span className="badge-speech-cyan font-sans">
            {badge}
          </span>
        </div>
      )}

      {/* Product Image Area */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative w-full aspect-square p-6 flex items-center justify-center cursor-pointer overflow-hidden bg-white"
      >
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Quick View Hover Pill overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-brand-charcoal/90 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-[2px] shadow">
            Quick Preview
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 pb-3 text-center flex flex-col items-center">
        {category && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#888888] mb-1">
            {category}
          </span>
        )}
        <h3
          onClick={() => onQuickView(product)}
          title={title}
          className="text-[13px] font-bold text-[#1A1A1A] uppercase tracking-[0.04em] line-clamp-1 w-full cursor-pointer hover:text-brand-cyan transition-colors"
        >
          {title}
        </h3>

        {/* Price Row */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-[15px] font-bold text-[#F05A28]">
            ₹{currentPrice.toLocaleString('en-IN')}
          </span>
          {originalPrice && originalPrice > currentPrice && (
            <span className="text-[12px] text-[#999999] line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Star Rating */}
        <div className="flex items-center justify-center gap-0.5 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={12}
              className={
                star <= rating
                  ? 'fill-[#F7941D] text-[#F7941D]'
                  : 'fill-transparent text-[#D4D4D4]'
              }
            />
          ))}
        </div>
      </div>

      {/* Bottom Action Strip - 44px min height for touch ergonomics */}
      <div className="border-t border-[#EEEEEE] h-[44px] min-h-[44px] grid grid-cols-[44px_1fr_44px] items-stretch text-[#777777] bg-white">
        {/* Left: Quick View / Search Button */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          title="Quick View"
          className="flex items-center justify-center hover:bg-gray-50 hover:text-brand-cyan border-r border-[#EEEEEE] transition-colors"
          aria-label="Quick View"
        >
          <Search size={15} />
        </button>

        {/* Center: ADD TO CART Button */}
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="text-[11px] font-bold uppercase tracking-[0.06em] text-brand-cyan hover:text-white hover:bg-brand-cyan flex items-center justify-center transition-all px-2"
        >
          ADD TO CART
        </button>

        {/* Right: Wishlist Heart Button */}
        <button
          type="button"
          onClick={() => onToggleWishlist(product)}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          className={`flex items-center justify-center hover:bg-gray-50 border-l border-[#EEEEEE] transition-colors ${
            isWishlisted ? 'text-[#F05A28] bg-orange-50/50' : 'hover:text-[#F05A28]'
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart size={15} className={isWishlisted ? 'fill-[#F05A28]' : ''} />
        </button>
      </div>
    </div>
  );
}
