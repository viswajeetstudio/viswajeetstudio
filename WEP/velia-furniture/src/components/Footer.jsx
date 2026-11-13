import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer = () => {
  const { navigateTo } = useShop();

  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-12 border-t border-charcoal-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-charcoal-700">
          
          {/* Column 1: Brand Identity & Manifesto (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-gold bg-gold/10 flex items-center justify-center text-gold">
                <span className="font-editorial text-lg font-bold">V</span>
              </div>
              <div>
                <span className="font-editorial text-2xl font-bold tracking-[0.2em] uppercase block leading-none">
                  VÉLIA
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase block text-gold-light">
                  Atelier Home
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory/70 font-light leading-relaxed max-w-sm mb-8">
              An international design house dedicated to sculptural furniture, honest material purity, and spaces that nourish the human spirit.
            </p>

            {/* Social Icons (Custom clean minimalist SVGs) */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M4 4l16 16m0-16L4 20"></path>
                </svg>
              </a>

              {/* Pinterest / Architecture */}
              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 20l4-9a3 3 0 1 1 4 4l-5 5"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Shop Categories (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">
              Shop Collections
            </h4>
            <ul className="space-y-3 text-sm font-light text-ivory/75">
              <li>
                <button 
                  onClick={() => navigateTo('shop', 'Living Room')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Living Room
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('shop', 'Bedroom')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Bedroom Sanctuaries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('shop', 'Dining Room')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Dining Suites
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('shop', 'Sofas & Seating')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Sofas & Seating
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('shop', 'Office & Storage')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Storage & Sideboards
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('shop')}
                  className="hover:text-gold transition-colors text-left text-gold-light"
                >
                  New Arrivals 2026
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Atelier / About (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">
              Client Concierge
            </h4>
            <ul className="space-y-3 text-sm font-light text-ivory/75">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-gold transition-colors">
                  Our Architectural Story
                </button>
              </li>
              <li>
                <a href="#brand-story" className="hover:text-gold transition-colors">
                  Master Woodworking Heritage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  White-Glove Delivery Protocol
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Trade & Interior Designer Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  10-Year Structural Guarantee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Care & Material Maintenance Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Flagship Studios (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">
              Flagship Studios
            </h4>
            <div className="space-y-4 text-xs font-light text-ivory/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  742 Grand Boulevard, Design Quarter, <br />
                  Stockholm & Milan Flagships
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+1 (800) 843-5421 (Mon-Sat, 9am–7pm)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>concierge@velia-atelier.com</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-charcoal-800 border border-charcoal-700">
              <span className="text-[11px] uppercase tracking-wider text-gold block font-medium mb-1">
                Bespoke Interior Studio
              </span>
              <p className="text-[11px] text-ivory/60 leading-relaxed">
                Book a one-on-one session with our senior interior architects for floor-plan spatial rendering.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Payment Methods, Legal & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ivory/50">
          
          <div>
            <p>© {new Date().getFullYear()} VÉLIA ATELIER HOME INC. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-ivory transition-colors">Cookie Preferences</a>
              <span>•</span>
              <a href="#" className="hover:text-ivory transition-colors">Accessibility</a>
            </div>
          </div>

          {/* Payment Badges Demonstration */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] uppercase tracking-wider text-ivory/40 mr-1">Protected By</span>
            <span className="px-2.5 py-1 bg-charcoal-800 border border-charcoal-700 text-[10px] tracking-wider text-ivory/80 uppercase">
              Apple Pay
            </span>
            <span className="px-2.5 py-1 bg-charcoal-800 border border-charcoal-700 text-[10px] tracking-wider text-ivory/80 uppercase">
              Visa Infinite
            </span>
            <span className="px-2.5 py-1 bg-charcoal-800 border border-charcoal-700 text-[10px] tracking-wider text-ivory/80 uppercase">
              Mastercard World
            </span>
            <span className="px-2.5 py-1 bg-charcoal-800 border border-charcoal-700 text-[10px] tracking-wider text-ivory/80 uppercase">
              Amex
            </span>
            <span className="px-2.5 py-1 bg-charcoal-800 border border-charcoal-700 text-[10px] tracking-wider text-ivory/80 uppercase">
              Klarna 0%
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};
