import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles, PhoneCall } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function AppointmentModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '2026-11-08',
    timeSlot: '11:30 AM - 01:00 PM',
    service: 'Home Furniture & Living Design'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      if (onShowToast) {
        onShowToast(`Appointment booked for ${formData.name} at Mohan Estate Store!`);
      }
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-lg rounded-[2px] shadow-2xl border border-[#E5E5E5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A1A1A] text-white px-6 py-4 flex items-center justify-between border-b border-[#333333]">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-brand-cyan" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              BOOK A SHOWROOM VISIT
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-lg font-bold text-[#1A1A1A]">Showroom Visit Confirmed!</h4>
            <p className="text-xs text-[#666666] mt-2 max-w-sm">
              Our Mohan Estate design team will prepare customized samples for your visit on <strong>{formData.date}</strong> ({formData.timeSlot}).
            </p>
            <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-left w-full text-[#555555]">
              <p><strong>Location:</strong> {STORE_INFO.fullAddress}</p>
              <p className="mt-1"><strong>Showroom Manager:</strong> Rohit Mishra (+91 91677 14088)</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3 bg-blue-50/70 border border-blue-100 rounded text-xs text-blue-900 flex items-start gap-2">
              <MapPin size={16} className="text-brand-cyan shrink-0 mt-0.5" />
              <span>
                <strong>Mohan Estate Store:</strong> NDRAVG Business Park, 3rd Floor (Opp. Metro Station), Sarita Vihar, New Delhi.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Viswajeet Sharma"
                className="w-full px-3 py-2 border border-[#CCCCCC] rounded-[2px] text-xs focus:outline-none focus:border-brand-cyan"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 border border-[#CCCCCC] rounded-[2px] text-xs focus:outline-none focus:border-brand-cyan"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-3 py-2 border border-[#CCCCCC] rounded-[2px] text-xs focus:outline-none focus:border-brand-cyan"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 border border-[#CCCCCC] rounded-[2px] text-xs focus:outline-none focus:border-brand-cyan"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 border border-[#CCCCCC] rounded-[2px] text-xs focus:outline-none focus:border-brand-cyan bg-white"
                >
                  <option>11:30 AM - 01:00 PM</option>
                  <option>02:00 PM - 03:30 PM</option>
                  <option>04:00 PM - 05:30 PM</option>
                  <option>06:00 PM - 07:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                Consultation Topic
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2 border border-[#CCCCCC] rounded-[2px] text-xs focus:outline-none focus:border-brand-cyan bg-white"
              >
                <option>Home Furniture & Living Design</option>
                <option>Hydraulic Beds & Mattress Sleep Lab</option>
                <option>Modular Kitchen 3D Layout Planning</option>
                <option>Steel Almirahs & Wardrobe Solutions</option>
                <option>Ergonomic Work From Home Setup</option>
              </select>
            </div>

            <div className="pt-3 border-t border-[#EEEEEE] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-[#CCCCCC] text-xs font-bold uppercase tracking-wider rounded-[2px] text-[#555555] hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-brand-cyan hover:bg-[#008fca] text-white text-xs font-extrabold uppercase tracking-wider rounded-[2px] shadow-sm transition-colors"
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
