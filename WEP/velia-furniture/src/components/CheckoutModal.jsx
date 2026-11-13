import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Info
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import confetti from 'canvas-confetti';

export const CheckoutModal = () => {
  const { 
    cart, 
    cartSubtotal, 
    freeShippingThreshold, 
    clearCart, 
    isCheckoutOpen, 
    setIsCheckoutOpen 
  } = useShop();

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    fullName: 'Lady Evelyn Sinclair',
    email: 'evelyn.sinclair@residence.com',
    phone: '+1 (555) 392-8172',
    address: '840 Fifth Avenue, Penthouse B',
    city: 'New York',
    state: 'NY',
    zip: '10065',
    country: 'United States',
    deliveryNotes: 'Please phone 30 minutes prior to delivery for service elevator booking.',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '•••'
  });

  const [orderReference, setOrderReference] = useState('');
  const [savedOrderTotal, setSavedOrderTotal] = useState(0);

  useEffect(() => {
    if (isCheckoutOpen) {
      setStep(1);
    }
  }, [isCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  const shippingCost = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 150;
  const estimatedTax = Math.round(cartSubtotal * 0.08);
  const grandTotal = cartSubtotal + shippingCost + estimatedTax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const ref = `VEL-ATELIER-${Math.floor(100000 + Math.random() * 900000)}`;
    setSavedOrderTotal(grandTotal);
    setOrderReference(ref);
    setStep(3);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C3A576', '#191816', '#FAF8F5']
      });
    } catch (err) {}

    // Clear cart
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md p-4 sm:p-6 lg:p-12 flex items-center justify-center animate-in fade-in duration-300">
      <div 
        className="relative bg-ivory text-charcoal max-w-4xl w-full border border-stone-border shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner: Clearly Marked Checkout Demonstration */}
        <div className="bg-charcoal text-ivory px-6 py-2.5 flex items-center justify-between text-xs tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="uppercase font-semibold tracking-[0.2em] text-gold">
              Demonstration Checkout
            </span>
            <span className="hidden sm:inline text-ivory/70">
              — Interactive Prototype (No real financial transaction processed)
            </span>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="text-ivory/80 hover:text-gold transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        {step === 3 ? (
          /* Step 3: Confirmation */
          <div className="p-8 sm:p-12 lg:p-16 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mx-auto mb-6 text-gold">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              Order Simulated Successfully
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-charcoal mb-4">
              Thank You for Your Patronage
            </h2>
            <p className="text-sm sm:text-base text-stone-muted font-light leading-relaxed mb-8">
              Your mock order reference is <strong className="text-charcoal font-mono">{orderReference}</strong>. In production, our client concierge would contact you directly at <span className="text-charcoal font-medium">{formData.email}</span> to schedule your white-glove installation.
            </p>

            <div className="bg-cream/60 p-6 border border-stone-border text-left mb-8 space-y-2 text-xs text-charcoal">
              <div className="flex justify-between border-b border-stone-border/60 pb-2">
                <span className="text-stone-muted">Delivery Address:</span>
                <span className="font-medium text-right">{formData.address}, {formData.city}, {formData.state} {formData.zip}</span>
              </div>
              <div className="flex justify-between border-b border-stone-border/60 pb-2">
                <span className="text-stone-muted">Selected Method:</span>
                <span className="font-medium">Complimentary White-Glove Service</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-stone-muted">Simulated Total:</span>
                <span className="font-semibold text-sm">₹{savedOrderTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="px-10 py-4 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.2em] font-semibold shadow-luxury"
            >
              Return to Vélia Atelier
            </button>
          </div>
        ) : (
          /* Step 1 & 2: Form & Order Summary */
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            
            {/* Form Steps (Spans 7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-stone-border">
              {/* Progress Steps Header */}
              <div className="flex items-center gap-4 mb-8 text-xs uppercase tracking-widest font-semibold border-b border-stone-border pb-4">
                <button
                  onClick={() => setStep(1)}
                  className={`flex items-center gap-2 ${step === 1 ? 'text-charcoal' : 'text-stone-muted'}`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                    step === 1 ? 'bg-charcoal text-ivory' : 'bg-cream text-charcoal'
                  }`}>1</span>
                  <span>Shipping Address</span>
                </button>
                <span className="text-stone-border">/</span>
                <button
                  onClick={() => setStep(2)}
                  className={`flex items-center gap-2 ${step === 2 ? 'text-charcoal' : 'text-stone-muted'}`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                    step === 2 ? 'bg-charcoal text-ivory' : 'bg-cream text-charcoal'
                  }`}>2</span>
                  <span>Payment Demo</span>
                </button>
              </div>

              {step === 1 ? (
                /* Step 1: Shipping Information */
                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
                  <h3 className="font-editorial text-2xl font-normal text-charcoal mb-4">
                    Client & Delivery Details
                  </h3>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-stone-muted block mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cream/30 border border-stone-border focus:border-charcoal text-xs tracking-wide focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-stone-muted block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-border focus:border-charcoal text-xs tracking-wide focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-stone-muted block mb-1">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-border focus:border-charcoal text-xs tracking-wide focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-stone-muted block mb-1">
                      Street Address & Residence Number
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cream/30 border border-stone-border focus:border-charcoal text-xs tracking-wide focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-stone-muted block mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-border focus:border-charcoal text-xs tracking-wide focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-stone-muted block mb-1">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-border focus:border-charcoal text-xs tracking-wide focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-stone-muted block mb-1">
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="zip"
                        required
                        value={formData.zip}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-border focus:border-charcoal text-xs tracking-wide focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-stone-muted block mb-1">
                      White-Glove Delivery Instructions
                    </label>
                    <textarea
                      name="deliveryNotes"
                      rows={2}
                      value={formData.deliveryNotes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-cream/30 border border-stone-border focus:border-charcoal text-xs tracking-wide focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-6 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-luxury"
                  >
                    <span>Continue to Payment Method</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Step 2: Payment Simulation */
                <form onSubmit={handlePlaceOrder} className="space-y-6">
                  <div>
                    <h3 className="font-editorial text-2xl font-normal text-charcoal mb-1">
                      Select Payment Simulation
                    </h3>
                    <p className="text-xs text-stone-muted">
                      This is an interactive simulation demonstrating real checkout UI without processing funds.
                    </p>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-3">
                    <label className={`p-4 border flex items-center justify-between cursor-pointer transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'border-gold bg-cream/60'
                        : 'border-stone-border bg-ivory'
                    }`}>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="accent-charcoal"
                        />
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-gold" />
                          <span className="text-xs font-semibold uppercase tracking-wider">
                            Simulated Credit / Debit Card
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase text-stone-muted">Instant Mock Approval</span>
                    </label>

                    <label className={`p-4 border flex items-center justify-between cursor-pointer transition-colors ${
                      formData.paymentMethod === 'apple'
                        ? 'border-gold bg-cream/60'
                        : 'border-stone-border bg-ivory'
                    }`}>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="apple"
                          checked={formData.paymentMethod === 'apple'}
                          onChange={handleInputChange}
                          className="accent-charcoal"
                        />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          Apple Pay / Google Pay Simulation
                        </span>
                      </div>
                      <span className="text-[10px] uppercase text-stone-muted">Biometric Mock</span>
                    </label>

                    <label className={`p-4 border flex items-center justify-between cursor-pointer transition-colors ${
                      formData.paymentMethod === 'wire'
                        ? 'border-gold bg-cream/60'
                        : 'border-stone-border bg-ivory'
                    }`}>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="wire"
                          checked={formData.paymentMethod === 'wire'}
                          onChange={handleInputChange}
                          className="accent-charcoal"
                        />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          Private Banking Wire Invoice
                        </span>
                      </div>
                      <span className="text-[10px] uppercase text-stone-muted">For Orders Over ₹10k</span>
                    </label>
                  </div>

                  {/* Mock Card Input Preview */}
                  {formData.paymentMethod === 'card' && (
                    <div className="p-4 bg-cream/40 border border-stone-border space-y-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-stone-muted block mb-1">
                          Card Number (Simulated)
                        </label>
                        <input
                          type="text"
                          readOnly
                          value={formData.cardNumber}
                          className="w-full px-3 py-2 bg-ivory border border-stone-border text-xs font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-stone-muted block mb-1">
                            Expires
                          </label>
                          <input
                            type="text"
                            readOnly
                            value={formData.cardExpiry}
                            className="w-full px-3 py-2 bg-ivory border border-stone-border text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-stone-muted block mb-1">
                            Security CVC
                          </label>
                          <input
                            type="text"
                            readOnly
                            value={formData.cardCvc}
                            className="w-full px-3 py-2 bg-ivory border border-stone-border text-xs font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-4 border border-stone-border text-charcoal hover:border-charcoal transition-colors text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-4 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-colors text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-luxury"
                    >
                      <Lock className="w-3.5 h-3.5 text-gold" />
                      <span>Complete Demonstration Checkout (₹{grandTotal.toLocaleString('en-IN')})</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Order Summary Sidebar (Spans 5 cols) */}
            <div className="lg:col-span-5 bg-cream/50 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">
                  Order Summary
                </h4>

                <div className="space-y-4 max-h-56 overflow-y-auto mb-6 pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-3 text-xs">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-14 object-cover border border-stone-border/60 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h5 className="font-editorial text-sm font-medium text-charcoal line-clamp-1">
                          {item.product.name}
                        </h5>
                        <p className="text-[11px] text-stone-muted">Qty: {item.quantity}</p>
                        <p className="font-semibold text-charcoal">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-stone-border space-y-2 text-xs">
                  <div className="flex justify-between text-stone-muted">
                    <span>Subtotal</span>
                    <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-stone-muted">
                    <span>White-Glove Shipping</span>
                    <span>{shippingCost === 0 ? 'COMPLIMENTARY' : `₹${shippingCost}`}</span>
                  </div>
                  <div className="flex justify-between text-stone-muted">
                    <span>Estimated Tax (8%)</span>
                    <span>₹{estimatedTax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-base font-semibold text-charcoal pt-3 border-t border-stone-border">
                    <span>Total Due</span>
                    <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-border/70 text-[11px] text-stone-muted space-y-2">
                <div className="flex items-center gap-1.5 text-charcoal">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span className="font-medium">100% Risk-Free 30-Day In-Home Trial</span>
                </div>
                <p>
                  Every piece undergoes a 12-point quality inspection before leaving our European ateliers.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
