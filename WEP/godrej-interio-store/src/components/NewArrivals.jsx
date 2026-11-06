import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { NEW_ARRIVALS_PRODUCTS } from '../data/storeData';

export default function NewArrivals({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds = []
}) {
  const [page, setPage] = useState(0);

  // We have 8 items for page 0, and we can simulate pagination by shifting or flipping
  const totalPages = 2;
  const itemsPerPage = 8;

  // Let's create an alternate set for page 1 if clicked
  const displayedProducts = page === 0 
    ? NEW_ARRIVALS_PRODUCTS 
    : [...NEW_ARRIVALS_PRODUCTS.slice(4), ...NEW_ARRIVALS_PRODUCTS.slice(0, 4)];

  return (
    <section id="catalog" className="w-full py-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header with Left Cyan Accent Bar and Right Square Pagination Buttons */}
        <div className="flex items-end justify-between border-b border-[#E0E0E0] pb-3 mb-6">
          <div className="relative">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-[0.06em] text-[#1A1A1A]">
              NEW ARRIVALS
            </h2>
            {/* Short Cyan Bottom Accent Bar (#00A8E8) */}
            <div className="w-16 h-[3px] bg-brand-cyan mt-2 absolute -bottom-[13px] left-0 z-10" />
          </div>

          {/* Right: Square Previous/Next Carousel Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
              className="w-8 h-8 rounded-[2px] bg-white border border-[#D5D5D5] hover:bg-brand-cyan hover:text-white hover:border-brand-cyan text-[#555555] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous Products"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
              className="w-8 h-8 rounded-[2px] bg-white border border-[#D5D5D5] hover:bg-brand-cyan hover:text-white hover:border-brand-cyan text-[#555555] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next Products"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 4x2 Grid (8 Product Cards total) with Responsive Collapse (Override #5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((prod) => (
            <ProductCard
              key={`${page}-${prod.id}`}
              product={prod}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(prod.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
