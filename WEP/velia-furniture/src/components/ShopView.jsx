import React, { useState, useMemo, useEffect } from 'react';
import { 
  Filter, 
  ArrowUpDown, 
  SlidersHorizontal, 
  Heart, 
  ShoppingBag, 
  Star, 
  ArrowUpRight,
  Eye,
  Check,
  X
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const ShopView = () => {
  const { 
    activeCategoryFilter, 
    setActiveCategoryFilter, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setActiveProduct 
  } = useShop();

  const [selectedRoom, setSelectedRoom] = useState(activeCategoryFilter || 'All');

  useEffect(() => {
    setSelectedRoom(activeCategoryFilter || 'All');
  }, [activeCategoryFilter]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc' | 'rating'
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const roomOptions = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Office & Storage', 'Sofas & Seating'];
  const materialOptions = ['All', 'Solid Wood', 'Cane Rattan', 'Marble', 'Upholstered & Leather', 'Iron & Metal'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Room / Category Filter
      if (selectedRoom !== 'All') {
        const matchesRoom = product.room.toLowerCase() === selectedRoom.toLowerCase();
        const matchesCategory = product.category.toLowerCase() === selectedRoom.toLowerCase();
        if (!matchesRoom && !matchesCategory) return false;
      }

      // Material filter
      if (selectedMaterial !== 'All') {
        const mat = product.material.toLowerCase();
        if (selectedMaterial === 'Solid Wood' && !mat.includes('wood') && !mat.includes('sheesham') && !mat.includes('teak') && !mat.includes('mahogany') && !mat.includes('oak')) return false;
        if (selectedMaterial === 'Cane Rattan' && !mat.includes('rattan') && !mat.includes('cane')) return false;
        if (selectedMaterial === 'Marble' && !mat.includes('marble')) return false;
        if (selectedMaterial === 'Upholstered & Leather' && !mat.includes('linen') && !mat.includes('leather') && !mat.includes('fabric') && !mat.includes('foam')) return false;
        if (selectedMaterial === 'Iron & Metal' && !mat.includes('iron') && !mat.includes('steel')) return false;
      }

      // Price Filter
      if (product.price > maxPrice) return false;

      // In stock
      if (inStockOnly && !product.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedRoom, selectedMaterial, maxPrice, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSelectedRoom('All');
    setSelectedMaterial('All');
    setMaxPrice(3000);
    setInStockOnly(false);
    setSortBy('featured');
    setActiveCategoryFilter('All');
  };

  return (
    <div className="pt-28 pb-24 bg-ivory text-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-12 pb-8 border-b border-stone-border">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-muted mb-3">
            <span>Home</span>
            <span>/</span>
            <span className="text-charcoal font-semibold">Atelier Catalog</span>
            {selectedRoom !== 'All' && (
              <>
                <span>/</span>
                <span className="text-gold font-semibold">{selectedRoom}</span>
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal">
                The Complete <span className="italic">Collection</span>
              </h1>
              <p className="text-sm text-stone-muted mt-2 font-light">
                Showing {filteredProducts.length} handcrafted furniture pieces
              </p>
            </div>

            {/* Sort & Mobile Filter Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="lg:hidden px-4 py-2.5 border border-stone-border bg-cream flex items-center gap-2 text-xs uppercase tracking-wider font-semibold"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>

              <div className="flex items-center border border-stone-border bg-ivory px-3 py-2">
                <span className="text-[11px] uppercase tracking-wider text-stone-muted mr-2">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs uppercase tracking-wider font-medium focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Desktop Left Sidebar Filters (Spans 3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8 pr-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-stone-border">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gold" /> Filter Collection
              </span>
              {(selectedRoom !== 'All' || selectedMaterial !== 'All' || maxPrice < 3000 || inStockOnly) && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] uppercase tracking-wider text-gold hover:text-gold-dark font-medium underline"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Room / Category Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal mb-3">
                Space & Category
              </h3>
              <div className="space-y-1.5">
                {roomOptions.map((room) => {
                  const isSelected = selectedRoom === room;
                  return (
                    <button
                      key={room}
                      onClick={() => {
                        setSelectedRoom(room);
                        setActiveCategoryFilter(room);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs uppercase tracking-wider transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-charcoal text-ivory font-semibold'
                          : 'hover:bg-cream text-charcoal/80'
                      }`}
                    >
                      <span>{room}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-gold" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal mb-3">
                Material Honesty
              </h3>
              <div className="space-y-1.5">
                {materialOptions.map((mat) => {
                  const isSelected = selectedMaterial === mat;
                  return (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`w-full text-left px-3 py-2 text-xs uppercase tracking-wider transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-charcoal text-ivory font-semibold'
                          : 'hover:bg-cream text-charcoal/80'
                      }`}
                    >
                      <span>{mat}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-gold" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 text-xs uppercase tracking-wider font-semibold">
                <span>Maximum Price</span>
                <span className="font-mono text-gold-dark font-bold">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="500"
                max="3000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-charcoal cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-muted mt-1">
                <span>₹500</span>
                <span>₹3,000</span>
              </div>
            </div>

            {/* In-Stock Toggle */}
            <div className="pt-4 border-t border-stone-border">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 accent-charcoal rounded-none"
                />
                <span className="text-xs uppercase tracking-wider font-medium text-charcoal">
                  In-Stock & Ready to Ship
                </span>
              </label>
            </div>

          </aside>

          {/* Products Grid (Spans 9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 bg-cream/30 border border-stone-border p-8">
                <h3 className="font-editorial text-3xl font-normal text-charcoal mb-2">
                  No matching creations found
                </h3>
                <p className="text-xs text-stone-muted max-w-sm mx-auto mb-6">
                  Try adjusting your price range or clearing selected material filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const wishlisted = isInWishlist(product.id);

                  return (
                    <div
                      key={product.id}
                      className="group flex flex-col bg-ivory border border-stone-border hover:border-gold transition-all duration-500 hover:shadow-luxury"
                    >
                      {/* Image container */}
                      <div
                        className="relative aspect-square overflow-hidden bg-cream cursor-pointer"
                        onClick={() => setActiveProduct(product)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Badge */}
                        {product.discountBadge && (
                          <div className="absolute top-3 left-3 z-10 bg-ivory/95 backdrop-blur-sm border border-stone-border px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold">
                            {product.discountBadge}
                          </div>
                        )}

                        {/* Wishlist Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(product.id);
                          }}
                          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                            wishlisted
                              ? 'bg-gold text-ivory shadow-md'
                              : 'bg-ivory/90 text-charcoal hover:text-gold'
                          }`}
                          aria-label="Wishlist"
                        >
                          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                        </button>

                        {/* Hover Quick Actions */}
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
                            title="Quick View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-stone-muted mb-1.5">
                            <span>{product.room}</span>
                            <div className="flex items-center gap-1 text-gold">
                              <Star className="w-3 h-3 fill-gold" />
                              <span className="font-semibold">{product.rating}</span>
                              <span className="text-stone-muted">({product.reviewsCount})</span>
                            </div>
                          </div>

                          <h3
                            onClick={() => setActiveProduct(product)}
                            className="font-editorial text-lg font-medium text-charcoal hover:text-gold transition-colors cursor-pointer line-clamp-1 mb-1"
                          >
                            {product.name}
                          </h3>

                          <p className="text-xs text-stone-muted line-clamp-1 font-light mb-4">
                            {product.tagline}
                          </p>
                        </div>

                        {/* Pricing */}
                        <div className="pt-3 border-t border-stone-border/60 flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="font-sans text-base font-semibold text-charcoal">
                              ₹{product.price.toLocaleString('en-IN')}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-stone-muted line-through">
                                ₹{product.originalPrice.toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => addToCart(product, 1)}
                            className="text-xs uppercase tracking-[0.16em] font-semibold text-charcoal hover:text-gold transition-colors flex items-center gap-1 group/btn"
                          >
                            <span>Add</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-full max-w-xs bg-ivory p-6 h-full overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-border">
                <span className="font-editorial text-xl font-normal">Filters</span>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold mb-2">Category</h4>
                <div className="space-y-1">
                  {roomOptions.map((room) => (
                    <button
                      key={room}
                      onClick={() => { setSelectedRoom(room); setIsMobileFilterOpen(false); }}
                      className={`block w-full text-left py-1 text-xs uppercase tracking-wider ${
                        selectedRoom === room ? 'font-bold text-gold' : 'text-charcoal'
                      }`}
                    >
                      {room}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold mb-2">Material</h4>
                <div className="space-y-1">
                  {materialOptions.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => { setSelectedMaterial(mat); setIsMobileFilterOpen(false); }}
                      className={`block w-full text-left py-1 text-xs uppercase tracking-wider ${
                        selectedMaterial === mat ? 'font-bold text-gold' : 'text-charcoal'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold mt-6"
            >
              Apply Filters ({filteredProducts.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
