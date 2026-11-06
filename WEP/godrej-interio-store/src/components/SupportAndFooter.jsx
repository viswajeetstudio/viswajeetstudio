import React, { useState } from 'react';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle, 
  Clock,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

// Custom clean brand SVGs for footer social links
const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.326V1.326C24 .597 23.403 0 22.675 0z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const VimeoIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881l-1.922-7.054c-.716-2.56-1.506-3.84-2.37-3.84-.192 0-.853.398-1.986 1.196L0 7.493c1.23-1.077 2.441-2.143 3.633-3.197 1.643-1.428 2.871-2.183 3.684-2.264 1.93-.191 3.123 1.127 3.579 3.957.513 3.178.868 5.161 1.058 5.952.575 2.585 1.206 3.878 1.892 3.878.536 0 1.332-.835 2.388-2.502 1.056-1.67 1.631-2.946 1.724-3.829.172-1.464-.423-2.196-1.786-2.196-.642 0-1.303.147-1.984.441 1.319-4.321 3.84-6.425 7.56-6.313 2.766.082 4.07 1.871 3.914 5.367z" />
  </svg>
);

export default function SupportAndFooter({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      if (onShowToast) onShowToast(`Subscribed ${email} to Mohan Estate VIP Offers!`);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full">
      
      {/* ================= PRE-FOOTER BAR (#E8E8E8) ================= */}
      <div className="w-full bg-[#E8E8E8] py-5 border-t border-[#DCDCDC]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Bold Uppercase Support Prompt */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0 hidden sm:flex">
              <PhoneCall size={18} />
            </div>
            <div>
              <p className="text-[12px] sm:text-[13px] font-black uppercase tracking-[0.06em] text-[#1A1A1A] leading-snug">
                NEED HELP? CALL OUR AWARD-WINNING SUPPORT TEAM 24/7 AT{' '}
                <a href={`tel:${STORE_INFO.phonePrimary.replace(/\s+/g, '')}`} className="text-[#008fca] hover:underline">
                  {STORE_INFO.phonePrimary}
                </a>{' '}
                / {STORE_INFO.tollFree}
              </p>
              <p className="text-[11px] text-[#666666]">
                Mohan Estate Store: Mon–Sun 11:00 AM – 7:30 PM • Instant WhatsApp support available
              </p>
            </div>
          </div>

          {/* Right: Cyan-Bordered Email Input + Dark SUBSCRIBE Button */}
          <form onSubmit={handleSubscribe} className="flex items-stretch w-full md:w-auto max-w-md">
            <div className="relative flex-1 min-w-[200px] sm:min-w-[260px]">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-cyan" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-10 pr-4 py-2.5 bg-white text-[#1A1A1A] text-xs font-medium placeholder-[#888888] border-2 border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 rounded-l-[2px]"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#1A1A1A] hover:bg-[#333333] active:scale-98 text-white px-5 sm:px-6 text-xs font-extrabold uppercase tracking-widest rounded-r-[2px] transition-colors shrink-0"
            >
              {subscribed ? 'JOINED!' : 'SUBSCRIBE'}
            </button>
          </form>

        </div>
      </div>

      {/* ================= MAIN FOOTER: 4 COLUMNS (#1A1A1A) ================= */}
      <div 
        className="w-full bg-[#1A1A1A] text-white pt-12 pb-8 border-t border-[#2A2A2A] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(26,26,26,0.96), rgba(26,26,26,0.96)), url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
            
            {/* Column 1: INFORMATION */}
            <div>
              <div className="relative mb-5 pb-2 border-b border-[#333333]">
                <h4 className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-white">
                  INFORMATION
                </h4>
                <div className="w-10 h-[2px] bg-brand-cyan absolute -bottom-[1px] left-0" />
              </div>

              <ul className="space-y-2.5 text-[12px] text-[#AAAAAA]">
                {[
                  'About Interio by Godrej',
                  'Free Delivery & Installation',
                  '10-Year Extended Warranty',
                  'Privacy & Security Policy',
                  'Terms & Conditions',
                  'Mohan Estate Virtual Tour'
                ].map((item) => (
                  <li key={item}>
                    <a href="#catalog" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                      <span className="text-brand-cyan text-[10px]">&#9656;</span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: EXTRAS */}
            <div>
              <div className="relative mb-5 pb-2 border-b border-[#333333]">
                <h4 className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-white">
                  EXTRAS
                </h4>
                <div className="w-10 h-[2px] bg-brand-cyan absolute -bottom-[1px] left-0" />
              </div>

              <ul className="space-y-2.5 text-[12px] text-[#AAAAAA]">
                {[
                  'Godrej Locking Solutions',
                  'Furniture Care Booklets',
                  'Gift Vouchers & Corporate Gifting',
                  'Architect & Designer Affiliates',
                  'Festive Specials & No-Cost EMI',
                  'Modular Kitchen Consultations'
                ].map((item) => (
                  <li key={item}>
                    <a href="#catalog" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                      <span className="text-brand-cyan text-[10px]">&#9656;</span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: MY ACCOUNT */}
            <div>
              <div className="relative mb-5 pb-2 border-b border-[#333333]">
                <h4 className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-white">
                  MY ACCOUNT
                </h4>
                <div className="w-10 h-[2px] bg-brand-cyan absolute -bottom-[1px] left-0" />
              </div>

              <ul className="space-y-2.5 text-[12px] text-[#AAAAAA]">
                {[
                  'Customer Account Login',
                  'Order History & Invoices',
                  'Wish List & Saved Sets',
                  'Track Delivery Vehicle',
                  'Schedule Installation Date',
                  'Book 3D Room Planner'
                ].map((item) => (
                  <li key={item}>
                    <a href="#catalog" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                      <span className="text-brand-cyan text-[10px]">&#9656;</span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: OUR CONTACT - Solid Full-Height Cyan Card (#00A8E8) */}
            <div className="bg-[#00A8E8] text-white p-6 rounded-[2px] shadow-lg flex flex-col justify-between">
              <div>
                <h4 className="text-[14px] font-black uppercase tracking-[0.08em] text-white border-b border-white/25 pb-2.5 mb-4">
                  OUR CONTACT
                </h4>

                {/* Location */}
                <div className="flex items-start gap-2.5 text-[12px] mb-3">
                  <MapPin size={16} className="shrink-0 mt-0.5 text-white" />
                  <span className="leading-snug">
                    {STORE_INFO.fullAddress}
                  </span>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-2.5 text-[12px] mb-3">
                  <PhoneCall size={16} className="shrink-0 mt-0.5 text-white" />
                  <div className="flex flex-col">
                    <a href={`tel:${STORE_INFO.phonePrimary.replace(/\s+/g, '')}`} className="font-bold hover:underline">
                      {STORE_INFO.phonePrimary}
                    </a>
                    <span className="text-white/80">{STORE_INFO.phoneSecondary} (Sales)</span>
                    <span className="text-white/80">Toll-Free: {STORE_INFO.tollFree}</span>
                  </div>
                </div>

                {/* Email / Web */}
                <div className="flex items-center gap-2.5 text-[12px] mb-4">
                  <Globe size={16} className="shrink-0 text-white" />
                  <a href={`mailto:${STORE_INFO.email}`} className="hover:underline truncate">
                    {STORE_INFO.email}
                  </a>
                </div>
              </div>

              {/* 2 Rows of Payment Method Badges */}
              <div className="pt-3 border-t border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider block mb-2 text-white/90">
                  Accepted Payments:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['PayPal', 'Visa', 'MasterCard', 'Maestro', 'Discover', 'UPI / RuPay', 'EMI 0%'].map((badge) => (
                    <span
                      key={badge}
                      className="bg-white text-[#1A1A1A] text-[9px] font-extrabold px-2 py-0.5 rounded-[2px] shadow-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM SUB-FOOTER ================= */}
      <div className="w-full bg-[#111111] py-6 border-t border-[#222222] text-[#888888] text-[11px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Download the App */}
          <div className="flex items-center gap-3">
            <span className="text-white font-bold uppercase tracking-wider text-[11px]">
              Download The App:
            </span>
            <div className="flex items-center gap-2">
              {/* App Store Badge */}
              <div className="bg-black border border-white/20 px-3 py-1 rounded-[3px] text-white flex items-center gap-1.5 cursor-pointer hover:border-brand-cyan transition-colors">
                <span className="text-[13px] font-black"></span>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[7px] text-[#999999] uppercase">Download on the</span>
                  <span className="text-[10px] font-bold">App Store</span>
                </div>
              </div>

              {/* Google Play Badge */}
              <div className="bg-black border border-white/20 px-3 py-1 rounded-[3px] text-white flex items-center gap-1.5 cursor-pointer hover:border-brand-cyan transition-colors">
                <span className="text-[12px] font-black text-brand-cyan">▶</span>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[7px] text-[#999999] uppercase">GET IT ON</span>
                  <span className="text-[10px] font-bold">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us: 5 Dark Square Social Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-white font-bold uppercase tracking-wider text-[11px]">
              Follow Us:
            </span>
            <div className="flex items-center gap-1.5">
              {[
                { component: FacebookIcon, name: 'Facebook', href: 'https://www.facebook.com/231848490180775' },
                { component: TwitterIcon, name: 'Twitter/X', href: 'https://twitter.com/godrejinterio' },
                { component: InstagramIcon, name: 'Instagram', href: 'https://www.instagram.com/godrejinterio/' },
                { component: YoutubeIcon, name: 'YouTube', href: 'https://www.youtube.com/godrejinterio' },
                { component: VimeoIcon, name: 'Vimeo', href: 'https://vimeo.com' }
              ].map((s, idx) => {
                const IconComponent = s.component;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-7 h-7 bg-[#222222] hover:bg-brand-cyan text-white flex items-center justify-center rounded-[2px] transition-colors"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="max-w-7xl mx-auto px-4 mt-4 pt-3 border-t border-[#1F1F1F] text-center text-[#666666] text-[10px]">
          <p>
            © 2026 Interio by Godrej. All Rights Reserved. Recreated & Redesigned for Mohan Estate Showroom (NDRAVG Business Park, Sarita Vihar, New Delhi - 110076).
          </p>
        </div>
      </div>

    </footer>
  );
}
