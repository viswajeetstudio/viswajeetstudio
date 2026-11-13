import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { FeaturedCollection } from './components/FeaturedCollection';
import { BrandStory } from './components/BrandStory';
import { BestsellersSection } from './components/BestsellersSection';
import { PromoBanner } from './components/PromoBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ToastNotification } from './components/ToastNotification';
import { ShopView } from './components/ShopView';
import { AboutView } from './components/AboutView';

const MainContent = () => {
  const { activeTab } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <Navbar />

      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero />
            <CategorySection />
            <FeaturedCollection />
            <BrandStory />
            <BestsellersSection />
            <PromoBanner />
            <WhyChooseUs />
            <CustomerReviews />
            <NewsletterSection />
          </>
        )}

        {(activeTab === 'shop' || activeTab === 'collections') && (
          <ShopView />
        )}

        {activeTab === 'about' && (
          <AboutView />
        )}
      </main>

      <Footer />

      {/* Global Slide-Over Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <ProductDetailModal />
      <SearchModal />
      <CheckoutModal />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
