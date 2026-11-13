import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ShoppingBag, Heart, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const BestsellersSection = () => {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart, toggleWishlist, isInWishlist, setActiveProduct, navigateTo } = useShop();

  const itemsPerPage = 3; // On desktop
  const maxIndex = Math.max(0, bestsellers.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="py-24 sm:py-32 bg-cream text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-border">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-3">
              Acclaimed By Connoisseurs
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-charcoal">
              Timeless <span className="italic">Bestsellers</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <span className="text-xs uppercase tracking-widest text-stone-muted mr-2 hidden sm:inline">
              {currentIndex + 1} – {Math.min(currentIndex + itemsPerPage, bestsellers.length)} of {bestsellers.length}
            </span>
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-none border border-charcoal/20 bg-ivory text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300 flex items-center justify-center shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-none border border-charcoal/20 bg-ivory text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300 flex items-center justify-center shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Items Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.slice(currentIndex, currentIndex + itemsPerPage).map((product) => {
              const wishlisted = isInWishlist(product.id);

              return (
                <div
                  key={product.id}
                  className="group bg-ivory border border-stone-border/80 hover:border-gold transition-all duration-500 shadow-subtle hover:shadow-luxury flex flex-col justify-between"
                >
                  {/* Image container */}
                  <div 
                    className="relative aspect-[4/3] overflow-hidden bg-cream cursor-pointer"
                    onClick={() => setActiveProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-charcoal text-ivory text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1">
                      {product.discountBadge || 'Top Rated'}
                    </div>

                    {/* Wishlist button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        wishlisted
                          ? 'bg-gold text-ivory shadow-md'
                          : 'bg-ivory/90 text-charcoal hover:text-gold'
                      }`}
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Rating and Reviews */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center text-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-charcoal">{product.rating}</span>
                        <span className="text-xs text-stone-muted font-light">
                          ({product.reviewsCount} verified reviews)
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => setActiveProduct(product)}
                        className="font-editorial text-2xl font-normal text-charcoal hover:text-gold transition-colors cursor-pointer mb-2 line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Subtitle / Material */}
                      <p className="text-xs text-stone-muted font-light line-clamp-2 mb-6">
                        {product.description}
                      </p>
                    </div>

                    {/* Pricing & Add to Cart Action */}
                    <div className="pt-4 border-t border-stone-border/60 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-stone-muted block">Price</span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-sans text-xl font-semibold text-charcoal">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-stone-muted line-through">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(product, 1)}
                        className="px-5 py-3 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2 shadow-sm"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-gold' : 'w-2 bg-stone-border hover:bg-charcoal/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
