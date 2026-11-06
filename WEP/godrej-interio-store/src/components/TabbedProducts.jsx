import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { TABBED_CATALOG } from '../data/storeData';

export default function TabbedProducts({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds = []
}) {
  const [activeTab, setActiveTab] = useState('RATING'); // 'RATING' | 'PRICE' | 'ADDED'
  const [page, setPage] = useState(0);

  const tabs = [
    { key: 'RATING', label: 'RATING' },
    { key: 'PRICE', label: 'PRICE' },
    { key: 'ADDED', label: 'ADDED' }
  ];

  const currentList = TABBED_CATALOG[activeTab] || [];
  const displayedProducts = page === 0 
    ? currentList 
    : [...currentList.slice(4), ...currentList.slice(0, 4)];

  return (
    <section className="w-full py-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header: Interactive Tab Switcher on Left & Carousel Buttons on Right */}
        <div className="flex items-center justify-between border-b border-[#E0E0E0] pb-2 mb-6">
          
          {/* Tabs Menu */}
          <div className="flex items-center gap-6 sm:gap-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.key);
                    setPage(0);
                  }}
                  className={`relative pb-2 text-[13px] sm:text-[14px] font-extrabold uppercase tracking-[0.06em] transition-colors ${
                    isActive ? 'text-[#1A1A1A]' : 'text-[#888888] hover:text-[#333333]'
                  }`}
                >
                  {tab.label}
                  {/* Cyan Underline on Active Tab */}
                  {isActive && (
                    <div className="absolute -bottom-[9px] left-0 right-0 h-[3px] bg-brand-cyan" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Square Previous/Next Carousel Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPage((prev) => (prev > 0 ? 0 : 1))}
              className="w-8 h-8 rounded-[2px] bg-white border border-[#D5D5D5] hover:bg-brand-cyan hover:text-white hover:border-brand-cyan text-[#555555] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage((prev) => (prev < 1 ? 1 : 0))}
              className="w-8 h-8 rounded-[2px] bg-white border border-[#D5D5D5] hover:bg-brand-cyan hover:text-white hover:border-brand-cyan text-[#555555] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

        {/* 4x2 Grid of 8 Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((prod) => (
            <ProductCard
              key={`${activeTab}-${page}-${prod.id}`}
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
