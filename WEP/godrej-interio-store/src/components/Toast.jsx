import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1A1A1A] text-white px-5 py-3.5 rounded-[2px] shadow-2xl border-l-4 border-brand-cyan animate-slideUp">
      <CheckCircle2 size={18} className="text-brand-cyan shrink-0" />
      <span className="text-xs font-semibold tracking-wide">{message}</span>
      <button
        onClick={onClose}
        className="ml-3 text-gray-400 hover:text-white"
        aria-label="Dismiss toast"
      >
        <X size={15} />
      </button>
    </div>
  );
}
