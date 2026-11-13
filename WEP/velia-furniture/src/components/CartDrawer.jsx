import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, Tag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer = () => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    freeShippingThreshold,
    freeShippingProgress,
    amountToFreeShipping,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    navigateTo
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'VELIA10' || code === 'LUXURY10') {
      setDiscountPercent(10);
      setPromoApplied(code);
      setPromoError('');
    } else if (code === 'ATELIER15') {
      setDiscountPercent(15);
      setPromoApplied(code);
      setPromoError('');
    } else {
      setPromoError('Invalid promotion code. Try "VELIA10" for 10% off.');
    }
  };

  const discountAmount = Math.round((cartSubtotal * discountPercent) / 100);
  const finalSubtotal = cartSubtotal - discountAmount;
  const shippingCost = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 150;
  const estimatedTax = Math.round(finalSubtotal * 0.08);
  const grandTotal = finalSubtotal + shippingCost + estimatedTax;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="absolute inset-y-0 right-0 max-w-lg w-full bg-ivory text-charcoal shadow-2xl flex flex-col justify-between">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-stone-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-editorial text-2xl font-normal text-charcoal">
              Shopping Bag
            </span>
            <span className="text-xs uppercase tracking-widest text-stone-muted">
              ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-6 py-4 bg-cream/70 border-b border-stone-border/80">
          <div className="flex items-center justify-between text-xs tracking-wide text-charcoal mb-2 font-medium">
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-gold" />
              {amountToFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-charcoal font-semibold">₹{amountToFreeShipping.toLocaleString('en-IN')}</strong> more for complimentary white-glove delivery
                </span>
              ) : (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  You qualify for complimentary white-glove delivery!
                </span>
              )}
            </div>
          </div>
          <div className="w-full h-1.5 bg-stone-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-cream border border-stone-border flex items-center justify-center mx-auto mb-4 text-stone-muted">
                <Truck className="w-7 h-7 stroke-[1.2]" />
              </div>
              <h3 className="font-editorial text-2xl font-normal text-charcoal mb-2">
                Your Bag is Empty
              </h3>
              <p className="text-xs text-stone-muted max-w-xs mx-auto mb-6">
                Discover pieces crafted from solid hardwoods and tailored fabrics for timeless living.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigateTo('shop');
                }}
                className="px-8 py-3.5 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 pb-6 border-b border-stone-border/70 last:border-0"
              >
                {/* Product Thumbnail */}
                <div className="w-24 h-24 bg-cream flex-shrink-0 overflow-hidden border border-stone-border/60">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Info & Quantity */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-muted block">
                        {item.product.room}
                      </span>
                      <h4 className="font-editorial text-base font-medium text-charcoal line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-stone-muted line-clamp-1">
                        {item.product.material}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-stone-muted hover:text-rose-600 transition-colors p-1"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-stone-border bg-ivory">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="p-1.5 hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-semibold text-charcoal">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="p-1.5 hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-sans text-sm font-semibold text-charcoal">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Breakdown */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-stone-border bg-cream/30 space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-muted" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code (e.g. VELIA10)"
                  className="w-full pl-9 pr-3 py-2 bg-ivory border border-stone-border text-xs uppercase tracking-wider focus:outline-none focus:border-charcoal"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-wider font-semibold"
              >
                Apply
              </button>
            </form>

            {promoError && (
              <p className="text-[11px] text-rose-600 font-medium">{promoError}</p>
            )}

            {promoApplied && (
              <p className="text-[11px] text-emerald-700 font-medium flex items-center justify-between">
                <span>Code "{promoApplied}" applied ({discountPercent}% off)</span>
                <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-charcoal/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Atelier Privilege Discount</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated White-Glove Shipping</span>
                <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated State Tax (8%)</span>
                <span>₹{estimatedTax.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-charcoal pt-2 border-t border-stone-border">
                <span>Grand Total</span>
                <span>₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Proceed to Checkout Demo Button */}
            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full py-4 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-all duration-300 text-xs uppercase tracking-[0.22em] font-semibold flex items-center justify-center gap-2 shadow-luxury"
            >
              <span>Proceed to Demonstration Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-stone-muted pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>100% Encrypted • 10-Year Guarantee • 30-Day Home Trial</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
