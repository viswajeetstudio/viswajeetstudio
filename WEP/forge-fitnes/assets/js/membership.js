/**
 * FORGE FITNESS - Membership Customizer & Holographic VIP Pass Generator
 */

class ForgeMembershipEngine {
  constructor() {
    this.isAnnual = false;
    this.init();
  }

  init() {
    this.setupBillingToggle();
    this.setupPassGenerator();
  }

  setupBillingToggle() {
    const toggle = document.getElementById('billing-toggle');
    if (!toggle) return;

    toggle.addEventListener('change', (e) => {
      this.isAnnual = e.target.checked;
      if (window.forgeAudio) window.forgeAudio.playClick();
      this.updatePrices();
    });
  }

  updatePrices() {
    const ironPrice = document.getElementById('price-iron');
    const proPrice = document.getElementById('price-pro');
    const titanPrice = document.getElementById('price-titan');
    const periodLabels = document.querySelectorAll('.price-period');

    if (this.isAnnual) {
      if (ironPrice) ironPrice.innerText = '$55';
      if (proPrice) proPrice.innerText = '$95';
      if (titanPrice) titanPrice.innerText = '$159';
      periodLabels.forEach(l => l.innerText = '/ month (billed annually)');
    } else {
      if (ironPrice) ironPrice.innerText = '$69';
      if (proPrice) proPrice.innerText = '$119';
      if (titanPrice) titanPrice.innerText = '$199';
      periodLabels.forEach(l => l.innerText = '/ month');
    }
  }

  openPassModal(tierName = 'VIP Guest') {
    if (window.forgeAudio) window.forgeAudio.playChime();
    const modal = document.getElementById('vip-pass-modal');
    const tierInput = document.getElementById('pass-tier-input');
    if (tierInput) tierInput.value = tierName;
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  closePassModal() {
    const modal = document.getElementById('vip-pass-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  setupPassGenerator() {
    const form = document.getElementById('pass-generator-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (window.forgeAudio) window.forgeAudio.playChime();

      const name = document.getElementById('pass-name')?.value || 'Valued Athlete';
      const email = document.getElementById('pass-email')?.value || 'athlete@forgefitness.com';
      const zone = document.getElementById('pass-zone-select')?.value || 'All Zones';

      this.generateHolographicCard(name, email, zone);
    });
  }

  generateHolographicCard(name, email, zone) {
    const outputContainer = document.getElementById('pass-card-output');
    const formContainer = document.getElementById('pass-form-container');
    const passHolderName = document.getElementById('card-holder-name');
    const passCodeEl = document.getElementById('card-pass-code');
    const passZoneEl = document.getElementById('card-zone-access');
    const passIssueDate = document.getElementById('card-issue-date');

    const uniqueId = `FRG-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    if (passHolderName) passHolderName.innerText = name.toUpperCase();
    if (passCodeEl) passCodeEl.innerText = uniqueId;
    if (passZoneEl) passZoneEl.innerText = zone.toUpperCase();
    if (passIssueDate) passIssueDate.innerText = `ISSUED: ${today} • VALID 7 DAYS`;

    this.renderProceduralQR(uniqueId);

    if (formContainer) formContainer.classList.add('hidden');
    if (outputContainer) outputContainer.classList.remove('hidden');

    if (window.showForgeToast) {
      window.showForgeToast('VIP Day Pass Forged! 🎟️', `Pass ${uniqueId} issued for ${name}.`);
    }
  }

  // Draw authentic futuristic QR code matrix on canvas
  renderProceduralQR(code) {
    const canvas = document.getElementById('pass-qr-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 140;
    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = '#08080a';
    ctx.fillRect(0, 0, size, size);

    const gridSize = 21;
    const cellSize = size / gridSize;

    // Corner squares (standard QR position markers)
    const drawFinderPattern = (startX, startY) => {
      ctx.fillStyle = '#e5a93c';
      ctx.fillRect(startX * cellSize, startY * cellSize, 7 * cellSize, 7 * cellSize);
      ctx.fillStyle = '#08080a';
      ctx.fillRect((startX + 1) * cellSize, (startY + 1) * cellSize, 5 * cellSize, 5 * cellSize);
      ctx.fillStyle = '#ff2a2a';
      ctx.fillRect((startX + 2) * cellSize, (startY + 2) * cellSize, 3 * cellSize, 3 * cellSize);
    };

    drawFinderPattern(1, 1);
    drawFinderPattern(13, 1);
    drawFinderPattern(1, 13);

    // Seeded pseudo-random data bits
    let seed = 0;
    for (let i = 0; i < code.length; i++) seed += code.charCodeAt(i);

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        // Skip finder areas
        if ((r < 8 && c < 8) || (r < 8 && c > 12) || (r > 12 && c < 8)) continue;

        seed = (seed * 9301 + 49297) % 233280;
        const rnd = seed / 233280;
        if (rnd > 0.5) {
          ctx.fillStyle = rnd > 0.85 ? '#ff2a2a' : '#e5a93c';
          ctx.fillRect(c * cellSize + 0.5, r * cellSize + 0.5, cellSize - 1, cellSize - 1);
        }
      }
    }
  }

  resetPassForm() {
    const outputContainer = document.getElementById('pass-card-output');
    const formContainer = document.getElementById('pass-form-container');
    if (formContainer) formContainer.classList.remove('hidden');
    if (outputContainer) outputContainer.classList.add('hidden');
  }

  printPass() {
    window.print();
  }
}

window.forgeMembership = new ForgeMembershipEngine();
