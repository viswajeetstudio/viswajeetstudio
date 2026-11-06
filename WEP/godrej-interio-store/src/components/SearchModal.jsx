import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight, Star } from 'lucide-react';
import { NEW_ARRIVALS_PRODUCTS, TABBED_CATALOG, BEST_SELLERS_LIST } from '../data/storeData';

export default function SearchModal({
  isOpen,
  onClose,
  onQuickView,
  onAddToCart
}) {
  const [query, setQuery] = useState('');

  // Collect all searchable products
  const allProducts = useMemo(() => {
    const list = [
      ...NEW_ARRIVALS_PRODUCTS,
      ...TABBED_CATALOG.RATING,
      ...TABBED_CATALOG.ADDED
    ];
    // deduplicate by id
    const map = new Map();
    list.forEach(item => map.set(item.title, item));
    return Array.from(map.values());
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return allProducts.slice(0, 6);
    const q = query.toLowerCase();
    return allProducts.filter(
      p => p.title.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q))
    );
  }, [query, allProducts]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-[2px] shadow-2xl border border-[#E5E5E5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 bg-[#1A1A1A] flex items-center gap-3 border-b border-[#333333]">
          <Search size={20} className="text-brand-cyan" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Godrej Interio Mohan Estate (e.g. Bed, Chair, Sofa, Almirah, Lamp)..."
            className="flex-1 bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-white text-xs px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-5 py-2.5 bg-[#F9F9F9] border-b border-[#EEEEEE] flex flex-wrap gap-2 text-xs">
          <span className="text-[#888888] font-bold text-[11px] uppercase mr-1">Trending:</span>
          {['King Bed', 'Dining Chair', 'Coffee Table', 'Steel Almirah', 'Sofa'].map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-0.5 bg-white border border-[#DDDDDD] hover:border-brand-cyan hover:text-brand-cyan rounded-[2px] text-[11px] font-semibold text-[#444444] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-[#EEEEEE]">
          {results.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-xs">
              No matching products found for "{query}". Try checking "Bed", "Sofa", or "Table".
            </div>
          ) : (
            results.map(prod => (
              <div 
                key={prod.id || prod.title}
                className="py-3 flex items-center justify-between gap-4 hover:bg-gray-50 px-2 rounded-[2px] transition-colors"
              >
                <div 
                  onClick={() => {
                    onQuickView(prod);
                    onClose();
                  }}
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                >
                  <div className="w-12 h-12 border border-[#E5E5E5] bg-white rounded-[2px] p-1 flex items-center justify-center shrink-0">
                    <img src={prod.image} alt={prod.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold uppercase text-[#1A1A1A] truncate hover:text-brand-cyan transition-colors">
                      {prod.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">
                      {prod.category}
                    </span>
                    <span className="text-xs font-bold text-[#F05A28]">
                      ₹{prod.currentPrice?.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(prod);
                    onClose();
                  }}
                  className="px-3 py-1.5 bg-brand-cyan hover:bg-[#008fca] text-white text-[11px] font-bold uppercase tracking-wider rounded-[2px] shrink-0"
                >
                  Add
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
