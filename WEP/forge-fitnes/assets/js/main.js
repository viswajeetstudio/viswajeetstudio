/**
 * FORGE FITNESS - Core Application Orchestrator
 * Custom Laser Cursor, Toast Engine, Navigation, and Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initNavigation();
  initToastEngine();
  initSoundButton();
});

/* ------------------- CUSTOM LASER CURSOR ------------------- */
function initCustomCursor() {
  // Only on non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';
  document.body.appendChild(dot);

  const ring = document.createElement('div');
  ring.className = 'custom-cursor-ring';
  document.body.appendChild(ring);

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Hover states for interactive elements
  const interactives = 'a, button, input, select, textarea, .hotspot-pin, .tilt-card, [role="button"]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) {
      ring.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) {
      ring.classList.remove('cursor-hover');
    }
  });
}

/* ------------------- NAVIGATION & HEADER ------------------- */
function initNavigation() {
  const header = document.getElementById('main-header');
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Shrink header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('bg-black/90', 'border-b', 'border-[#e5a93c]/20', 'py-3');
      header?.classList.remove('py-5', 'bg-transparent');
    } else {
      header?.classList.remove('bg-black/90', 'border-b', 'border-[#e5a93c]/20', 'py-3');
      header?.classList.add('py-5', 'bg-transparent');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      if (window.forgeAudio) window.forgeAudio.playClick();
      mobileDrawer.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // Generic audio click trigger on all buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, .btn-forge-gold, .btn-forge-neon, .btn-ghost-gold');
    if (btn && window.forgeAudio && !btn.id?.includes('sound-toggle')) {
      window.forgeAudio.playClick();
    }
  });
}

/* ------------------- TOAST NOTIFICATION ENGINE ------------------- */
function initToastEngine() {
  const toast = document.createElement('div');
  toast.id = 'forge-global-toast';
  toast.className = 'fixed bottom-6 right-6 z-[9999] toast-notice bg-[#121217]/95 border border-[#e5a93c] p-4 rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-md max-w-sm pointer-events-none flex items-start gap-3';
  toast.innerHTML = `
    <div class="w-8 h-8 rounded-lg bg-[#e5a93c]/20 text-[#f5d488] flex items-center justify-center font-bold text-sm shrink-0 border border-[#e5a93c]/40">⚡</div>
    <div>
      <div id="toast-title" class="font-heading font-bold text-white text-sm">Notification</div>
      <div id="toast-msg" class="text-xs text-gray-300 mt-0.5 leading-relaxed">Action completed.</div>
    </div>
  `;
  document.body.appendChild(toast);

  let toastTimer = null;

  window.showForgeToast = (title, msg) => {
    const titleEl = document.getElementById('toast-title');
    const msgEl = document.getElementById('toast-msg');
    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = msg;

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };
}

/* ------------------- SOUND BUTTON ------------------- */
function initSoundButton() {
  const btn = document.getElementById('sound-toggle-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      if (window.forgeAudio) {
        window.forgeAudio.toggleSound();
      }
    });
  }
}
