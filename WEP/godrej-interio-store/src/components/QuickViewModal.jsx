import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RefreshCw, Check } from 'lucide-react';

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Walnut Teak');

  if (!product) return null;

  const {
    title,
    currentPrice = product.price,
    originalPrice = product.oldPrice,
    rating = 5,
    badge,
    image,
    description = "Engineered with Godrej's signature precision craftsmanship, premium materials, and ergonomic testing. Delivered and assembled for free across Delhi NCR.",
    category = "Furniture",
    sku = "GI-DEL-EXP"
  } = product;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      {/* Modal Surface */}
      <div 
        className="relative bg-white w-full max-w-3xl rounded-[2px] shadow-2xl border border-[#E5E5E5] overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-brand-cyan hover:text-white flex items-center justify-center transition-colors text-gray-600"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Left Side: Product Image Display */}
        <div className="w-full md:w-1/2 p-8 bg-[#F9F9F9] flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#EEEEEE]">
          {badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="badge-speech-coral">{badge}</span>
            </div>
          )}
          <img
            src={image}
            alt={title}
            className="max-h-[320px] max-w-full object-contain filter drop-shadow-md"
          />
          <span className="text-[10px] text-[#888888] uppercase tracking-wider mt-4">
            Showroom Sample • Available at Mohan Estate Store
          </span>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan block mb-1">
              {category} • SKU: {sku}
            </span>

            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-[#1A1A1A] leading-tight">
              {title}
            </h2>

            {/* Price & Rating */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-2xl font-black text-[#F05A28]">
                ₹{currentPrice?.toLocaleString('en-IN')}
              </span>
              {originalPrice && (
                <span className="text-sm text-[#999999] line-through">
                  ₹{originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={13}
                  className={star <= rating ? 'fill-[#F7941D] text-[#F7941D]' : 'text-gray-300'}
                />
              ))}
              <span className="text-xs text-[#777777] font-semibold ml-1.5">
                4.8 / 5.0 (Verified Purchase)
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-[#555555] mt-3.5 leading-relaxed">
              {description}
            </p>

            {/* Color Finish Picker */}
            <div className="mt-4">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#333333] block mb-1.5">
                Finish: <span className="text-brand-cyan font-bold">{selectedColor}</span>
              </label>
              <div className="flex gap-2">
                {[
                  { name: 'Walnut Teak', bg: 'bg-[#5C3A21]' },
                  { name: 'Natural Oak', bg: 'bg-[#C9A675]' },
                  { name: 'Matte Charcoal', bg: 'bg-[#2B2B2B]' }
                ].map((col) => (
                  <button
                    key={col.name}
                    type="button"
                    onClick={() => setSelectedColor(col.name)}
                    className={`w-6 h-6 rounded-full ${col.bg} border-2 ${
                      selectedColor === col.name ? 'border-brand-cyan ring-2 ring-brand-cyan/30' : 'border-white'
                    } shadow-xs transition-all`}
                    title={col.name}
                  />
                ))}
              </div>
            </div>

            {/* Delhi-NCR Assurances */}
            <div className="mt-4 pt-3 border-t border-[#F0F0F0] space-y-1.5 text-[11px] text-[#555555]">
              <div className="flex items-center gap-2">
                <Truck size={14} className="text-brand-cyan" />
                <span>Free delivery & assembly in 2-4 business days</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-brand-amber" />
                <span>10-Year Godrej Structural Warranty</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-[#EEEEEE] flex items-center gap-3">
            {/* Quantity Controller */}
            <div className="flex items-center border border-[#DDDDDD] rounded-[2px] h-[44px]">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 text-[#555555] hover:bg-gray-100 font-bold"
              >
                -
              </button>
              <span className="px-3 text-xs font-bold text-[#1A1A1A]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 text-[#555555] hover:bg-gray-100 font-bold"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={() => {
                onAddToCart({ ...product, currentPrice }, quantity);
                onClose();
              }}
              className="flex-1 h-[44px] bg-brand-cyan hover:bg-[#008fca] active:scale-98 text-white font-extrabold uppercase text-xs tracking-wider rounded-[2px] flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <ShoppingBag size={15} />
              <span>ADD TO CART</span>
            </button>

            {/* Wishlist Button */}
            <button
              type="button"
              onClick={() => onToggleWishlist(product)}
              className={`h-[44px] w-[44px] border border-[#DDDDDD] rounded-[2px] flex items-center justify-center transition-colors ${
                isWishlisted ? 'text-[#F05A28] border-[#F05A28] bg-orange-50' : 'text-[#777777] hover:text-[#F05A28]'
              }`}
              title="Add to Wishlist"
            >
              <Heart size={16} className={isWishlisted ? 'fill-[#F05A28]' : ''} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
