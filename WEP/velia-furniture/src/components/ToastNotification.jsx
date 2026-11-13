import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ToastNotification = () => {
  const { toastMessage, showToast } = useShop();

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col gap-2 max-w-md w-full px-4">
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto bg-charcoal text-ivory px-5 py-4 rounded-none border border-gold/30 shadow-2xl flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              {toastMessage.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
              ) : (
                <Info className="w-5 h-5 text-gold-light flex-shrink-0" />
              )}
              <p className="text-sm tracking-wide font-sans text-ivory-100">
                {toastMessage.message}
              </p>
            </div>
            <button
              onClick={() => showToast(null)}
              className="text-stone-muted hover:text-ivory transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
