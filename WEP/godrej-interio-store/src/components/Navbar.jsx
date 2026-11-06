import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  MapPin, 
  PhoneCall, 
  Menu, 
  X, 
  Armchair, 
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';
import { STORE_INFO, NAV_LINKS } from '../data/storeData';

export default function Navbar({
  cartItems = [],
  onOpenCart,
  onOpenSearch,
  onOpenAppointment,
  activeLink = 'HOME',
  onSelectLink
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.currentPrice * item.quantity), 0);

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top micro-bar for Store Locator info & Quick Phone */}
      <div className="bg-[#111111] text-[#999999] text-[11px] border-b border-[#2A2A2A] hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin size={12} className="text-brand-cyan" />
              <span>Mohan Estate Showroom, Sarita Vihar (Opp. Metro Station)</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#AAAAAA] hidden md:flex">
              <Clock size={12} className="text-brand-amber" />
              <span>Mon-Sun: 11:00 AM - 7:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${STORE_INFO.phonePrimary.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-white hover:text-brand-cyan transition-colors"
            >
              <PhoneCall size={12} className="text-brand-cyan" />
              <span className="font-semibold">{STORE_INFO.phonePrimary}</span>
            </a>
            <span className="text-[#444444]">|</span>
            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-1 text-[#F7941D] hover:text-[#ffaa45] font-semibold transition-colors"
            >
              <Calendar size={12} />
              <span>Book Store Visit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-stretch justify-between h-[68px]">
          
          {/* Left: Brand Icon Mark & Wordmark */}
          <div className="flex items-center gap-3 py-2 pr-4">
            {/* Cyan Brand Icon Mark */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-[2px] bg-brand-cyan flex items-center justify-center text-white shadow-md group-hover:bg-[#0096d1] transition-colors">
                <Armchair size={22} className="stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-extrabold tracking-[0.08em] text-white uppercase leading-tight font-sans">
                  GODREJ INTERIO
                </span>
                <span className="text-[9px] font-semibold tracking-[0.14em] text-[#00A8E8] uppercase">
                  MOHAN ESTATE • NEW DELHI
                </span>
              </div>
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-stretch">
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <div key={link.label} className="relative flex items-stretch">
                  {/* Floating Pill Badge */}
                  {link.badge && (
                    <span 
                      className={`absolute top-1.5 left-1/2 -translate-x-1/2 text-[9px] font-bold px-1.5 py-0.2 rounded-full text-white pointer-events-none shadow-sm ${link.badgeColor}`}
                    >
                      {link.badge}
                    </span>
                  )}
                  <a
                    href={link.href}
                    onClick={() => onSelectLink && onSelectLink(link.label)}
                    className={`flex items-center px-4 xl:px-5 text-[12px] font-bold tracking-[0.06em] uppercase transition-colors relative ${
                      isActive
                        ? 'bg-brand-cyan text-white shadow-inner'
                        : 'text-[#E0E0E0] hover:text-white hover:bg-[#252525]'
                    }`}
                  >
                    {link.label}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right: Search Trigger & Orange Utility Cart Block */}
          <div className="flex items-stretch">
            {/* Search Trigger Button (Enhancement Override #1) */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 sm:px-4 text-[#CCCCCC] hover:text-white hover:bg-[#252525] transition-colors text-[12px] font-medium"
              aria-label="Search Catalog"
              title="Search Catalog"
            >
              <Search size={18} className="text-brand-cyan" />
              <span className="hidden xl:inline text-[11px] text-[#888888] uppercase tracking-wider">
                Search
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center px-3 text-white hover:text-brand-cyan"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Full-Height Flush Orange Utility Cart Block (#F7941D) */}
            <button
              type="button"
              onClick={onOpenCart}
              className="bg-[#F7941D] hover:bg-[#e6840f] text-white flex items-center gap-3 px-4 sm:px-6 transition-all duration-200 select-none cursor-pointer border-l border-amber-600/30"
              aria-label="View Shopping Cart"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingBag size={22} className="stroke-[2.2]" />
                <span className="absolute -top-2 -right-2 bg-brand-charcoal text-white text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center border border-[#F7941D]">
                  {cartCount}
                </span>
              </div>
              <div className="flex flex-col text-left leading-tight hidden xs:flex">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-100">
                  {cartCount} {cartCount === 1 ? 'ITEM' : 'ITEMS'}
                </span>
                <span className="text-[13px] font-extrabold tracking-wide text-white">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#222222] border-t border-[#333333] px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onSelectLink) onSelectLink(link.label);
                }}
                className="flex items-center justify-between py-2.5 px-3 text-[13px] font-bold uppercase tracking-wider text-white hover:bg-brand-cyan/20 rounded transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${link.badgeColor}`}>
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-3 border-t border-[#333333] flex flex-col gap-2 text-xs text-[#AAAAAA]">
              <div className="flex items-center gap-2 text-white">
                <PhoneCall size={14} className="text-brand-cyan" />
                <span>Call Store: {STORE_INFO.phonePrimary}</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full mt-2 py-2 bg-brand-cyan text-white font-bold rounded-[2px] uppercase text-xs tracking-wider"
              >
                Book Mohan Estate Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
