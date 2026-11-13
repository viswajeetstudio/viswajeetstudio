import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Star, 
  Check, 
  Truck, 
  ShieldCheck, 
  Ruler, 
  Sparkles, 
  Plus, 
  Minus,
  Share2
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ProductDetailModal = () => {
  const { 
    activeProduct, 
    setActiveProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    showToast 
  } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'dimensions' | 'materials'

  useEffect(() => {
    setQuantity(1);
    setActiveImageIndex(0);
    setActiveTab('overview');
  }, [activeProduct?.id]);

  if (!activeProduct) return null;

  const wishlisted = isInWishlist(activeProduct.id);
  const gallery = [...new Set([activeProduct.image, ...(activeProduct.altImages || [])])];
  const currentImage = gallery[activeImageIndex] || activeProduct.image;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard.', 'success');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/75 backdrop-blur-sm p-4 sm:p-6 lg:p-10 flex items-center justify-center animate-in fade-in duration-300">
      <div 
        className="relative bg-ivory text-charcoal max-w-5xl w-full border border-stone-border shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveProduct(null)}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-ivory/90 backdrop-blur-sm border border-stone-border text-charcoal hover:text-gold hover:border-gold transition-colors flex items-center justify-center shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-cream/60 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-border">
            {/* Main Stage Image */}
            <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-cream border border-stone-border/60 shadow-sm mb-4">
              <img
                src={currentImage}
                alt={activeProduct.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              {activeProduct.discountBadge && (
                <div className="absolute top-4 left-4 bg-charcoal text-ivory text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1">
                  {activeProduct.discountBadge}
                </div>
              )}
            </div>

            {/* Thumbnail Row */}
            {gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 flex-shrink-0 border-2 overflow-hidden transition-all ${
                      activeImageIndex === idx
                        ? 'border-gold shadow-md'
                        : 'border-stone-border/70 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Narrative & Purchase Options (Spans 5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Category, Room & SKU */}
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-stone-muted mb-2">
                <span>{activeProduct.room} • {activeProduct.category}</span>
                <span className="font-mono text-[10px]">{activeProduct.sku}</span>
              </div>

              {/* Title */}
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-charcoal mb-2 leading-tight">
                {activeProduct.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-charcoal">{activeProduct.rating}</span>
                <span className="text-xs text-stone-muted">
                  ({activeProduct.reviewsCount} verified reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-stone-border">
                <span className="font-sans text-2xl sm:text-3xl font-semibold text-charcoal">
                  ₹{activeProduct.price.toLocaleString('en-IN')}
                </span>
                {activeProduct.originalPrice && (
                  <span className="text-sm text-stone-muted line-through">
                    ₹{activeProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 font-medium">
                  In Stock & Ready to Dispatch
                </span>
              </div>

              {/* Description Tabs */}
              <div className="flex border-b border-stone-border mb-4 text-xs uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-2.5 mr-6 font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-gold text-charcoal font-semibold'
                      : 'text-stone-muted hover:text-charcoal'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('dimensions')}
                  className={`pb-2.5 mr-6 font-medium transition-colors ${
                    activeTab === 'dimensions'
                      ? 'border-b-2 border-gold text-charcoal font-semibold'
                      : 'text-stone-muted hover:text-charcoal'
                  }`}
                >
                  Dimensions
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`pb-2.5 font-medium transition-colors ${
                    activeTab === 'materials'
                      ? 'border-b-2 border-gold text-charcoal font-semibold'
                      : 'text-stone-muted hover:text-charcoal'
                  }`}
                >
                  Materials
                </button>
              </div>

              {/* Tab Content */}
              <div className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light mb-6">
                {activeTab === 'overview' && (
                  <div className="space-y-3">
                    <p>{activeProduct.description}</p>
                    <ul className="space-y-1.5 pt-2">
                      {activeProduct.features?.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-stone-muted">
                          <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'dimensions' && (
                  <div className="space-y-2 bg-cream/40 p-3 border border-stone-border/60">
                    <div className="flex items-center gap-2 text-charcoal font-medium text-xs">
                      <Ruler className="w-4 h-4 text-gold" />
                      <span>Specifications</span>
                    </div>
                    <p className="text-xs text-charcoal-700">{activeProduct.dimensions}</p>
                    <p className="text-[11px] text-stone-muted">
                      Custom dimension adjustments available through our bespoke atelier program.
                    </p>
                  </div>
                )}

                {activeTab === 'materials' && (
                  <div className="space-y-2 bg-cream/40 p-3 border border-stone-border/60">
                    <div className="flex items-center gap-2 text-charcoal font-medium text-xs">
                      <Sparkles className="w-4 h-4 text-gold" />
                      <span>Material & Finish</span>
                    </div>
                    <p className="text-xs text-charcoal-700 font-medium">{activeProduct.material}</p>
                    <p className="text-xs text-stone-muted">{activeProduct.finish}</p>
                    <p className="text-[11px] text-stone-muted">
                      Treated with non-toxic, food-safe organic plant wax finishes.
                    </p>
                  </div>
                )}
              </div>

              {/* Quantity Picker & Add to Bag Button */}
              <div className="pt-4 border-t border-stone-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-stone-border bg-ivory">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-3 hover:text-gold transition-colors"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-sm font-semibold text-charcoal">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-3 hover:text-gold transition-colors"
                      aria-label="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(activeProduct, quantity);
                    }}
                    className="flex-1 py-4 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-all duration-300 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-luxury"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag • ₹{(activeProduct.price * quantity).toLocaleString('en-IN')}</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(activeProduct.id)}
                    className={`p-4 border border-stone-border transition-colors ${
                      wishlisted ? 'bg-gold text-ivory border-gold' : 'hover:border-gold hover:text-gold'
                    }`}
                    title="Wishlist"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Delivery reassurance */}
                <div className="p-3 bg-cream/50 border border-stone-border/60 text-[11px] text-stone-muted space-y-1">
                  <div className="flex items-center gap-2 text-charcoal font-medium">
                    <Truck className="w-3.5 h-3.5 text-gold" />
                    <span>{activeProduct.leadTime}</span>
                  </div>
                  <p>Includes white-glove inside placement, packaging removal, and assembly.</p>
                </div>
              </div>

            </div>

            {/* Modal Bottom Bar */}
            <div className="pt-4 border-t border-stone-border/60 flex items-center justify-between text-xs text-stone-muted mt-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                10-Year Structural Guarantee
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 text-charcoal hover:text-gold transition-colors font-medium"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Piece</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
