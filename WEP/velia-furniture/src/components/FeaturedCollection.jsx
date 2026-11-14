import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, formatINR } from '../data/products';
import { useShop } from '../context/ShopContext';

export const FeaturedCollection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { addToCart, toggleWishlist, isInWishlist, setActiveProduct, navigateTo } = useShop();

  const filterTabs = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Office & Storage', 'Sofas & Seating'];

  const filteredProducts = activeFilter === 'All' 
    ? PRODUCTS.filter(p => p.isFeatured || p.isBestseller).slice(0, 8)
    : PRODUCTS.filter(p => p.category === activeFilter || p.room === activeFilter);

  return (
    <section id="featured-collection" className="py-24 sm:py-32 bg-cream/40 text-charcoal border-y border-stone-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-3">
            Handpicked Curations
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-charcoal mb-4">
            Designed for <span className="italic">Better Living</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-500 font-light leading-relaxed">
            Every piece is an investment in durability, ergonomic harmony, and architectural grace.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                  isSelected
                    ? 'bg-charcoal text-ivory shadow-sm'
                    : 'bg-ivory border border-stone-border/70 text-charcoal-500 hover:text-charcoal hover:border-charcoal'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const wishlisted = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-ivory border border-stone-border/70 hover:border-gold/60 transition-all duration-500 hover:shadow-luxury"
              >
                {/* Image & Badges Container */}
                <div className="relative aspect-square overflow-hidden bg-cream/50 cursor-pointer">
                  {/* Primary Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    onClick={() => setActiveProduct(product)}
                  />

                  {/* Badge */}
                  {product.discountBadge && (
                    <div className="absolute top-3 left-3 z-10 bg-ivory/95 backdrop-blur-sm text-charcoal border border-stone-border px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold">
                      {product.discountBadge}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      wishlisted
                        ? 'bg-gold text-ivory shadow-md'
                        : 'bg-ivory/90 backdrop-blur-sm text-charcoal hover:text-gold hover:bg-ivory shadow-sm'
                    }`}
                    title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                  </button>

                  {/* Quick Action Overlay on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      className="flex-1 py-2.5 px-3 bg-ivory text-charcoal hover:bg-gold hover:text-charcoal-900 transition-colors text-[11px] uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Quick Add</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProduct(product);
                      }}
                      className="p-2.5 bg-ivory/90 text-charcoal hover:bg-ivory hover:text-gold transition-colors text-xs"
                      title="Quick View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Category & Room */}
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-stone-muted mb-1.5">
                      <span>{product.room}</span>
                      <div className="flex items-center gap-1 text-gold">
                        <Star className="w-3 h-3 fill-gold" />
                        <span className="font-semibold">{product.rating}</span>
                        <span className="text-stone-muted">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => setActiveProduct(product)}
                      className="font-editorial text-lg sm:text-xl font-medium text-charcoal hover:text-gold transition-colors cursor-pointer line-clamp-1 mb-1.5"
                    >
                      {product.name}
                    </h3>

                    {/* Tagline / Finish */}
                    <p className="text-xs text-stone-muted line-clamp-1 font-light mb-4">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Price & Add to Bag */}
                  <div className="pt-3 border-t border-stone-border/60 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-sans text-base sm:text-lg font-semibold text-charcoal">
                        {formatINR(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-stone-muted line-through">
                          {formatINR(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="text-xs uppercase tracking-[0.16em] font-semibold text-charcoal hover:text-gold transition-colors flex items-center gap-1 group/btn"
                    >
                      <span>Add to Bag</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Collection CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigateTo('shop')}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-all duration-300 text-xs uppercase tracking-[0.22em] font-semibold shadow-luxury"
          >
            <span>View All {PRODUCTS.length} Atelier Creations</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
