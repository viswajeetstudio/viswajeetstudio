import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { LATEST_NEWS_DATA } from '../data/storeData';

export default function LatestNews({ onReadArticle }) {
  const { featured, items } = LATEST_NEWS_DATA;

  return (
    <section id="blog" className="w-full py-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header with Short Cyan Underline */}
        <div className="relative mb-6 pb-2 border-b border-[#E0E0E0]">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-[0.06em] text-[#1A1A1A]">
            LATEST NEWS
          </h2>
          {/* Short Cyan Underline */}
          <div className="w-14 h-[3px] bg-brand-cyan absolute -bottom-[2px] left-0" />
        </div>

        {/* 2-Column Asymmetric Editorial Split (Left 6 cols, Right 6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ================= LEFT HALF: 6 COLS ================= */}
          {/* Large Bedroom photo (70% height) + Solid Cyan Panel (30% height) */}
          <div className="lg:col-span-6 flex flex-col rounded-[2px] overflow-hidden shadow-sm border border-[#E5E5E5] bg-white group cursor-pointer">
            
            {/* Top 70% Bedroom/Interior Photography */}
            <div className="relative h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden bg-gray-100">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-brand-charcoal/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-[2px] uppercase tracking-wider backdrop-blur-sm">
                {featured.tag}
              </div>
            </div>

            {/* Bottom 30% Solid Cyan Text Panel (#00A8E8) */}
            <div className="bg-[#00A8E8] text-white p-6 sm:p-7 flex flex-col justify-between flex-1 transition-colors group-hover:bg-[#009bd6]">
              <div>
                <div className="flex items-center gap-3 text-[11px] font-semibold text-white/80 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{featured.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{featured.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-[0.04em] text-white leading-tight">
                  {featured.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-white/90 mt-2.5 leading-relaxed font-medium">
                  {featured.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span>Read Story</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

          </div>

          {/* ================= RIGHT HALF: 6 COLS ================= */}
          {/* 2-Column x 3-Row Checkerboard Grid alternating between photos and white cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-4">
            
            {/* Item 1 (Row 1 Col 1): White Text Card */}
            <div className="bg-white p-5 rounded-[2px] border border-[#E5E5E5] flex flex-col justify-between shadow-xs hover:border-brand-cyan/60 transition-colors group">
              <div>
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider block mb-1">
                  OFFICE & ERGONOMICS
                </span>
                <h4 className="text-[13px] font-extrabold uppercase text-[#1A1A1A] leading-snug group-hover:text-brand-cyan transition-colors">
                  Ergonomic Workspaces for Delhi Homes
                </h4>
                <p className="text-[12px] text-[#555555] mt-2 line-clamp-3 leading-relaxed">
                  How our Mohan Estate design consultants help professionals select mesh chairs and desks that prevent cervical strain.
                </p>
              </div>
              <span className="text-[10px] text-[#888888] font-semibold mt-3">By Rohit Mishra • Nov 2026</span>
            </div>

            {/* Item 2 (Row 1 Col 2): Interior Photo */}
            <div className="relative rounded-[2px] overflow-hidden border border-[#E5E5E5] bg-gray-100 min-h-[140px] group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80"
                alt="Dining Room Design"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
            </div>

            {/* Item 3 (Row 2 Col 1): Interior Photo */}
            <div className="relative rounded-[2px] overflow-hidden border border-[#E5E5E5] bg-gray-100 min-h-[140px] group order-last sm:order-none">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef1?auto=format&fit=crop&w=500&q=80"
                alt="Lighting Ambience"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
            </div>

            {/* Item 4 (Row 2 Col 2): White Text Card */}
            <div className="bg-white p-5 rounded-[2px] border border-[#E5E5E5] flex flex-col justify-between shadow-xs hover:border-brand-cyan/60 transition-colors group">
              <div>
                <span className="text-[10px] font-bold text-brand-amber uppercase tracking-wider block mb-1">
                  CARE & LONGEVITY
                </span>
                <h4 className="text-[13px] font-extrabold uppercase text-[#1A1A1A] leading-snug group-hover:text-brand-cyan transition-colors">
                  Caring For Your Wooden & Steel Furniture
                </h4>
                <p className="text-[12px] text-[#555555] mt-2 line-clamp-3 leading-relaxed">
                  Download our curated care booklets for Godrej Almirahs, dining suites, and fabric sofas to guarantee decades of luster.
                </p>
              </div>
              <span className="text-[10px] text-[#888888] font-semibold mt-3">Godrej Care Team • Oct 2026</span>
            </div>

            {/* Item 5 (Row 3 Col 1): White Text Card */}
            <div className="bg-white p-5 rounded-[2px] border border-[#E5E5E5] flex flex-col justify-between shadow-xs hover:border-brand-cyan/60 transition-colors group">
              <div>
                <span className="text-[10px] font-bold text-[#F05A28] uppercase tracking-wider block mb-1">
                  BUDGET MAKEOVER
                </span>
                <h4 className="text-[13px] font-extrabold uppercase text-[#1A1A1A] leading-snug group-hover:text-brand-cyan transition-colors">
                  Festive Living Room Transformation
                </h4>
                <p className="text-[12px] text-[#555555] mt-2 line-clamp-3 leading-relaxed">
                  Explore 5 smart styling ideas using modular coffee tables, accent cushions, and targeted floor lighting for under ₹25,000.
                </p>
              </div>
              <span className="text-[10px] text-[#888888] font-semibold mt-3">Interio Style Studio • Oct 2026</span>
            </div>

            {/* Item 6 (Row 3 Col 2): Interior Photo */}
            <div className="relative rounded-[2px] overflow-hidden border border-[#E5E5E5] bg-gray-100 min-h-[140px] group">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80"
                alt="Bedroom Collections"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
