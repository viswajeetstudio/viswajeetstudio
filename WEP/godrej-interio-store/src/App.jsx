import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import PromoTrio from './components/PromoTrio';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import TabbedProducts from './components/TabbedProducts';
import MidBanner from './components/MidBanner';
import HotDealAndMatrix from './components/HotDealAndMatrix';
import LatestNews from './components/LatestNews';
import SupportAndFooter from './components/SupportAndFooter';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import AppointmentModal from './components/AppointmentModal';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';
import { NEW_ARRIVALS_PRODUCTS, TABBED_CATALOG, STORE_INFO } from './data/storeData';

export default function App() {
  // Cart state initialized with 1 popular item for realism
  const [cartItems, setCartItems] = useState([
    {
      id: "prod-na-1",
      title: "MODERN SHELL ARMCHAIR",
      currentPrice: 4200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=80"
    }
  ]);

  const [wishlistIds, setWishlistIds] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeNav, setActiveNav] = useState('HOME');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  // Add to Cart handler
  const handleAddToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            currentPrice: product.currentPrice || product.price,
            image: product.image,
            quantity: qty
          }
        ];
      }
    });
    showToast(`Added "${product.title}" to Cart!`);
    setIsCartOpen(true);
  };

  // Update quantity
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  // Remove item
  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from cart.');
  };

  // Wishlist toggle
  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed "${product.title}" from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved "${product.title}" to Wishlist!`);
        return [...prev, product.id];
      }
    });
  };

  // Checkout handler
  const handleCheckout = () => {
    showToast('Redirecting to Godrej Interio Secure Checkout...');
    setTimeout(() => {
      alert('Order initiated! A Mohan Estate sales representative will confirm your delivery date and installation slot.');
      setCartItems([]);
      setIsCartOpen(false);
    }, 800);
  };

  const handleSelectCategory = (catName) => {
    showToast(`Viewing collection: ${catName}`);
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col text-[#1A1A1A] font-sans">
      
      {/* SECTION 1: Top Navigation Bar (Full-Width Dark Header) */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        activeLink={activeNav}
        onSelectLink={(label) => setActiveNav(label)}
      />

      <main className="flex-1 w-full">
        {/* SECTION 2: Hero Split-Backdrop Banner */}
        <HeroBanner 
          onCtaClick={() => {
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* SECTION 3: 3-Column Promotional Trio Strip */}
        <PromoTrio onSelectCategory={handleSelectCategory} />

        {/* SECTION 4: 'NEW ARRIVALS' Product Grid (4x2 Matrix) */}
        <NewArrivals
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* SECTION 5: 'BEST SELLERS' Lifestyle Overlay Section */}
        <BestSellers
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* SECTION 6: Tabbed Filter Product Grid (RATING / PRICE / ADDED) */}
        <TabbedProducts
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* SECTION 7: Mid-Page Geometric Collection Banner */}
        <MidBanner 
          onExplore={() => {
            const el = document.getElementById('hot-deal');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* SECTION 8: 'Hot Deal' Spotlight & 3x3 Category Matrix (50/50 Split) */}
        <HotDealAndMatrix
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          onSelectCategory={handleSelectCategory}
        />

        {/* SECTION 9: 'LATEST NEWS' Asymmetric Editorial Mosaic */}
        <LatestNews 
          onReadArticle={(item) => {
            showToast(`Opening article: ${item.title}`);
          }} 
        />

        {/* SECTION 10: Support/Newsletter Bar & Multi-Column Dark Footer */}
        <SupportAndFooter onShowToast={showToast} />
      </main>

      {/* Interactive Modals & Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        onShowToast={showToast}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(p) => setQuickViewProduct(p)}
        onAddToCart={handleAddToCart}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}
