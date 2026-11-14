import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    return String(val)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setErrorMessage('');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#C3A576', '#191816', '#FAF8F5']
        });
      } catch (err) {}
    }, 800);
  };

  return (
    <section className="py-24 sm:py-32 bg-cream/70 text-charcoal border-b border-stone-border/60">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>The Atelier Gazette</span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-charcoal mb-4">
          Get Inspired. <span className="italic">Stay Connected.</span>
        </h2>

        <p className="text-base sm:text-lg text-charcoal-500 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Join our community for new collections, design inspiration, and exclusive offers. Receive our quarterly print architectural journal.
        </p>

        {status === 'success' ? (
          <div className="bg-ivory border border-gold/40 p-8 max-w-lg mx-auto shadow-luxury animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="w-10 h-10 text-gold mx-auto mb-3" />
            <h3 className="font-editorial text-2xl font-normal text-charcoal mb-1">
              Welcome to Vélia Atelier
            </h3>
            <p className="text-sm text-stone-muted font-light mb-4">
              A confirmation invitation and our Autumn Lookbook have been dispatched to <span className="font-semibold text-charcoal">{email}</span>.
            </p>
            <button
              onClick={() => { setStatus('idle'); setEmail(''); }}
              className="text-xs uppercase tracking-widest text-gold hover:text-gold-dark font-semibold underline underline-offset-4"
            >
              Register another address
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                  placeholder="Enter your email address..."
                  className="w-full pl-11 pr-4 py-4 bg-ivory border border-stone-border focus:border-charcoal focus:outline-none text-charcoal font-sans text-sm tracking-wide transition-colors placeholder:text-stone-muted/70"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal-900 transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-luxury disabled:opacity-70 flex-shrink-0"
              >
                <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-3 text-xs text-rose-600 font-medium text-left">
                {errorMessage}
              </p>
            )}

            <p className="text-[11px] text-stone-muted mt-4">
              We respect your privacy. Unsubscribe at any moment. Zero spam guarantee.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
