import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowUpRight, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, formatINR } from '../data/products';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, setActiveProduct } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const quickFilters = ['Sofa', 'Dining Table', 'Bed', 'Sideboard', 'Teak', 'Marble', 'Cane Rattan'];

  const results = query.trim() === ''
    ? []
    : PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.room.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md p-4 sm:p-6 lg:p-12 flex flex-col items-center animate-in fade-in duration-200">
      <div className="max-w-4xl w-full bg-ivory text-charcoal border border-stone-border shadow-2xl p-6 sm:p-10 my-auto">
        
        {/* Search Input Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-border">
          <div className="flex items-center gap-4 flex-1">
            <Search className="w-6 h-6 text-gold flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by collection, room, material, or style (e.g. Teak, Sofa, Cane)..."
              className="w-full bg-transparent text-lg sm:text-2xl font-editorial tracking-wide focus:outline-none placeholder:text-stone-muted/60"
            />
          </div>

          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 text-stone-muted hover:text-charcoal transition-colors ml-4"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="pt-4 pb-6 flex items-center gap-2 flex-wrap border-b border-stone-border/60">
          <span className="text-[11px] uppercase tracking-widest text-stone-muted mr-1">Trending:</span>
          {quickFilters.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-3 py-1 bg-cream hover:bg-gold hover:text-charcoal transition-colors text-xs font-sans tracking-wider border border-stone-border/60"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="mt-6 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-stone-muted">
              <p className="font-editorial text-xl font-normal text-charcoal mb-1">
                Explore the Atelier Archives
              </p>
              <p className="text-xs">
                Type above or select a trending keyword to discover matching furniture pieces.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-stone-muted">
              <p className="font-editorial text-xl font-normal text-charcoal mb-1">
                No pieces found matching "{query}"
              </p>
              <p className="text-xs">
                Try searching for broader keywords like "Living Room", "Wood", "Dining", or "Bed".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setActiveProduct(product);
                  }}
                  className="group bg-cream/40 border border-stone-border hover:border-gold p-4 cursor-pointer transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-cream mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-muted block">
                    {product.room} • {product.category}
                  </span>
                  <h4 className="font-editorial text-base font-medium text-charcoal group-hover:text-gold transition-colors line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-border/40">
                    <span className="text-sm font-semibold text-charcoal">
                      {formatINR(product.price)}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-gold flex items-center gap-0.5">
                      View <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        {results.length > 0 && (
          <div className="mt-6 pt-4 border-t border-stone-border text-xs text-stone-muted flex justify-between">
            <span>Showing {results.length} matching {results.length === 1 ? 'creation' : 'creations'}</span>
            <span className="font-medium text-charcoal">Click any piece to inspect details</span>
          </div>
        )}

      </div>
    </div>
  );
};
