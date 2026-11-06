import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.currentPrice * item.quantity), 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E5E5E5] animate-slideLeft">
          
          {/* Header */}
          <div className="bg-[#1A1A1A] text-white px-6 py-4 flex items-center justify-between border-b border-[#333333]">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-brand-amber" />
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-white">
                YOUR SHOPPING CART ({totalItems})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-[#999999] hover:text-white p-1 rounded transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping / Delivery Notification Bar */}
          <div className="bg-[#FFF4E5] border-b border-[#FFE2BA] px-6 py-2.5 text-xs text-[#995200] flex items-center justify-between">
            <span className="font-semibold">Delhi NCR White-Glove Delivery:</span>
            <span className="font-extrabold uppercase text-[#D96B00]">FREE ON ALL ORDERS</span>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#EEEEEE]">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#888888] py-12">
                <ShoppingBag size={48} className="text-[#DDDDDD] mb-3 stroke-[1.5]" />
                <p className="text-sm font-bold uppercase tracking-wider text-[#333333]">
                  Your cart is empty
                </p>
                <p className="text-xs text-[#777777] mt-1 max-w-[220px]">
                  Explore Godrej Interio Mohan Estate new arrivals and deals!
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 bg-brand-cyan hover:bg-[#008fca] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[2px]"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-center">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 border border-[#E5E5E5] rounded-[2px] p-1 shrink-0 bg-white flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold uppercase tracking-tight text-[#1A1A1A] truncate">
                      {item.title}
                    </h4>
                    <div className="text-xs font-extrabold text-[#F05A28] mt-0.5">
                      ₹{item.currentPrice.toLocaleString('en-IN')}
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#DDDDDD] rounded-[2px] h-6 text-xs">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 text-gray-600 hover:bg-gray-100 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 text-gray-600 hover:bg-gray-100 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Total for this line */}
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-[#1A1A1A]">
                      ₹{(item.currentPrice * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#FAFAFA] border-t border-[#E5E5E5] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#666666]">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#1A1A1A]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[#666666]">
                  <span>Delhi-NCR Delivery & Assembly</span>
                  <span className="font-bold text-green-600 uppercase">FREE</span>
                </div>
                <div className="flex justify-between text-[#666666]">
                  <span>Estimated GST (18%)</span>
                  <span className="font-bold text-[#1A1A1A]">Included</span>
                </div>
                <div className="pt-2 border-t border-[#E0E0E0] flex justify-between text-sm font-black text-[#1A1A1A]">
                  <span className="uppercase">Grand Total</span>
                  <span className="text-[#F05A28]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={onCheckout}
                className="w-full h-11 bg-brand-cyan hover:bg-[#008fca] active:scale-98 text-white font-extrabold uppercase text-xs tracking-wider rounded-[2px] flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight size={15} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#777777]">
                <ShieldCheck size={13} className="text-brand-amber" />
                <span>Authorized Godrej Interio Mohan Estate Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
