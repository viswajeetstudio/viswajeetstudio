import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer = () => {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
    isWishlistOpen,
    setIsWishlistOpen,
    setActiveProduct,
    navigateTo
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="absolute inset-y-0 right-0 max-w-lg w-full bg-ivory text-charcoal shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-gold fill-gold" />
            <span className="font-editorial text-2xl font-normal text-charcoal">
              Curated Wishlist
            </span>
            <span className="text-xs uppercase tracking-widest text-stone-muted">
              ({wishlist.length})
            </span>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-cream border border-stone-border flex items-center justify-center mx-auto mb-4 text-stone-muted">
                <Heart className="w-7 h-7 stroke-[1.2]" />
              </div>
              <h3 className="font-editorial text-2xl font-normal text-charcoal mb-2">
                Your Wishlist is Empty
              </h3>
              <p className="text-xs text-stone-muted max-w-xs mx-auto mb-6">
                Save pieces that inspire you while exploring our curated spaces.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  navigateTo('shop');
                }}
                className="px-8 py-3.5 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
              >
                Discover Collection
              </button>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 pb-6 border-b border-stone-border/70 last:border-0"
              >
                {/* Thumbnail */}
                <div
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setActiveProduct(product);
                  }}
                  className="w-24 h-24 bg-cream flex-shrink-0 overflow-hidden border border-stone-border/60 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-wider text-stone-muted">
                        {product.room}
                      </span>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-stone-muted hover:text-rose-600 transition-colors p-1"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h4
                      onClick={() => {
                        setIsWishlistOpen(false);
                        setActiveProduct(product);
                      }}
                      className="font-editorial text-base font-medium text-charcoal hover:text-gold transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h4>
                    <p className="font-sans text-sm font-semibold text-charcoal mt-1">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  {/* Move to bag button */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        addToCart(product, 1);
                      }}
                      className="px-4 py-2 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="p-6 border-t border-stone-border bg-cream/30 flex items-center justify-between">
            <span className="text-xs text-stone-muted">
              {wishlistedProducts.length} saved {wishlistedProducts.length === 1 ? 'creation' : 'creations'}
            </span>
            <button
              onClick={() => {
                wishlistedProducts.forEach((p) => addToCart(p, 1));
              }}
              className="text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-gold flex items-center gap-1"
            >
              <span>Add All to Bag</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
