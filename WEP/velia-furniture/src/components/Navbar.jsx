import React, { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  ArrowRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    activeTab,
    activeCategoryFilter,
    navigateTo
  } = useShop();

  const useSolidNav = isScrolled || activeTab !== 'home';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Shop', id: 'shop' },
    { name: 'Collections', id: 'collections' },
    { name: 'Living Room', id: 'living-room', filter: 'Living Room' },
    { name: 'Bedroom', id: 'bedroom', filter: 'Bedroom' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', href: 'https://viswajeetstudio.github.io/viswajeet/', external: true },
  ];

  const handleNavClick = (link) => {
    if (link.filter) {
      navigateTo('shop', link.filter);
    } else if (link.id === 'shop' || link.id === 'collections') {
      navigateTo(link.id, 'All');
    } else {
      navigateTo(link.id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          useSolidNav
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-stone-border/60 text-charcoal'
            : 'bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-transparent text-ivory'
        }`}
      >
        {/* Top Header Contact Bar */}
        <div className={`transition-colors duration-300 border-b text-[11px] py-1.5 px-6 hidden sm:block ${
          useSolidNav
            ? 'bg-cream/80 text-charcoal/80 border-stone-border/60'
            : 'bg-charcoal/40 backdrop-blur-sm text-ivory/80 border-ivory/10'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="tracking-wider uppercase font-light">
                Bespoke Architectural Furniture & Interior Atelier
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-stone-muted hidden md:inline">Portfolio & Contact:</span>
              <a
                href="https://viswajeetstudio.github.io/viswajeet/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold hover:text-charcoal transition-colors font-medium uppercase tracking-[0.15em] underline underline-offset-2"
              >
                <span>Contact Viswajeet Studio</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between ${
          useSolidNav ? 'py-3.5' : 'py-5'
        }`}>
          
          {/* Left: Brand Logo & Name */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={useSolidNav ? "./images/logo-dark.png" : "./images/logo-light.png"}
                alt="Vélia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-editorial text-xl sm:text-2xl font-semibold tracking-[0.2em] uppercase block leading-none">
                VÉLIA
              </span>
              <span className={`text-[9px] tracking-[0.3em] uppercase block transition-colors duration-300 ${
                useSolidNav ? 'text-stone-muted' : 'text-ivory/80'
              }`}>
                Atelier Home
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 py-1 flex items-center gap-1 group/contact ${
                      useSolidNav
                        ? 'text-gold hover:text-charcoal font-semibold'
                        : 'text-gold hover:text-ivory font-semibold'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5 transition-transform" />
                  </a>
                );
              }
              const isActive = link.filter
                ? activeTab === 'shop' && activeCategoryFilter === link.filter
                : link.id === 'shop'
                  ? activeTab === 'shop' && (!activeCategoryFilter || activeCategoryFilter === 'All')
                  : activeTab === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 py-1 ${
                    useSolidNav
                      ? isActive
                        ? 'text-charcoal font-semibold'
                        : 'text-charcoal/70 hover:text-charcoal'
                      : isActive
                      ? 'text-ivory font-semibold'
                      : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right: Action Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 transition-transform duration-300 hover:scale-110 ${
                useSolidNav ? 'text-charcoal hover:text-gold' : 'text-ivory hover:text-gold'
              }`}
              title="Search collection"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Account */}
            <div className="relative">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className={`p-2 transition-transform duration-300 hover:scale-110 ${
                  useSolidNav ? 'text-charcoal hover:text-gold' : 'text-ivory hover:text-gold'
                }`}
                title="Client Account"
                aria-label="Account"
              >
                <User className="w-5 h-5 stroke-[1.75]" />
              </button>

              {/* Account Dropdown */}
              {isAccountOpen && (
                <div 
                  className="absolute right-0 mt-3 w-72 bg-ivory border border-stone-border shadow-2xl p-5 text-charcoal z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setIsAccountOpen(false)}
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-stone-border">
                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center font-editorial text-lg text-walnut font-semibold">
                      VA
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold">Guest Concierge</p>
                      <p className="text-xs text-stone-muted">vip@velia-atelier.com</p>
                    </div>
                  </div>
                  <div className="py-3 space-y-2 text-xs uppercase tracking-widest font-medium">
                    <button 
                      onClick={() => { setIsAccountOpen(false); navigateTo('shop', 'All'); }}
                      className="w-full text-left py-1 hover:text-gold transition-colors flex items-center justify-between"
                    >
                      Order Tracking <ArrowRight className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => { setIsAccountOpen(false); navigateTo('collections', 'All'); }}
                      className="w-full text-left py-1 hover:text-gold transition-colors flex items-center justify-between"
                    >
                      Bespoke Inquiries <ArrowRight className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => { setIsAccountOpen(false); navigateTo('about'); }}
                      className="w-full text-left py-1 hover:text-gold transition-colors flex items-center justify-between"
                    >
                      Trade & Designers <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="pt-3 border-t border-stone-border">
                    <span className="text-[10px] tracking-widest uppercase text-stone-muted flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold" /> Member of Vélia Privé
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className={`p-2 transition-transform duration-300 hover:scale-110 relative ${
                useSolidNav ? 'text-charcoal hover:text-gold' : 'text-ivory hover:text-gold'
              }`}
              title="Curated Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-gold text-ivory text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag with Live Cart Count */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`p-2 transition-transform duration-300 hover:scale-110 relative flex items-center gap-1.5 ${
                useSolidNav ? 'text-charcoal hover:text-gold' : 'text-ivory hover:text-gold'
              }`}
              title="Shopping Bag"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                useSolidNav ? 'bg-charcoal text-ivory' : 'bg-ivory text-charcoal'
              }`}>
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                useSolidNav ? 'text-charcoal' : 'text-ivory'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-ivory text-charcoal shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-border">
                <div className="flex items-center gap-3">
                  <img src="./images/logo-dark.png" alt="Vélia Logo" className="w-8 h-8 object-contain" />
                  <div>
                    <span className="font-editorial text-2xl font-bold tracking-[0.2em]">VÉLIA</span>
                    <span className="text-[9px] tracking-[0.3em] uppercase block text-stone-muted">Atelier</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:text-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => {
                  if (link.external) {
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-left text-sm uppercase tracking-[0.2em] py-2 border-b border-stone-border/40 text-gold hover:text-charcoal transition-all flex items-center justify-between font-semibold"
                      >
                        <span>{link.name} (Viswajeet Studio)</span>
                        <ArrowUpRight className="w-4 h-4 text-gold" />
                      </a>
                    );
                  }
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link)}
                      className="text-left text-sm uppercase tracking-[0.2em] py-2 border-b border-stone-border/40 hover:text-gold hover:pl-2 transition-all flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-stone-muted" />
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-stone-border space-y-4">
              <div className="flex items-center justify-between text-xs tracking-wider uppercase text-stone-muted">
                <span>Studio Contact</span>
                <a
                  href="https://viswajeetstudio.github.io/viswajeet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-medium flex items-center gap-1 underline"
                >
                  <span>Viswajeet Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="text-[11px] text-stone-muted">
                Free white-glove delivery on orders over ₹50,000.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
