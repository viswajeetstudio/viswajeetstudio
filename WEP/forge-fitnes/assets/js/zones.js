/**
 * FORGE FITNESS - Interactive Zone Explorer & Hotspot Engine
 * 6 Architectural Zones with 100% Authentic Gym Photography
 */

const FORGE_ZONES = [
  {
    id: "cardio",
    number: "01",
    name: "Cardio Zone",
    tagline: "High-Performance Kinetic Endurance",
    equipmentSummary: "Treadmills, cycles, cross trainers",
    image: "assets/images/cardio.jpg",
    accentColor: "#ff2a2a",
    stats: {
      capacity: "42% Occupied",
      status: "Optimal Flow",
      temp: "19°C / 66°F",
      machines: "18 High-End Stations",
      bestFor: "VO2 Max, Sprint Intervals & Kinetic Conditioning"
    },
    equipmentList: [
      { name: "Sled & Sprint Treadmills", count: "8 Stations", type: "Motorized & Free-Spin Sled", icon: "gauge" },
      { name: "Precision Flywheel Cycles", count: "6 Stations", type: "Magnetic Wattage Telemetry", icon: "activity" },
      { name: "Low-Impact Cross Trainers", count: "4 Stations", type: "Zero-Stress Synchro Stride", icon: "zap" }
    ],
    hotspots: [
      {
        x: 24,
        y: 56,
        title: "Commercial Sprint Treadmills",
        equipment: "Technogym Skillrun Series",
        specs: "Speed up to 25 km/h • 15% Incline • Integrated Cadence & Watt Sensor",
        zone: "Cardio"
      },
      {
        x: 74,
        y: 69,
        title: "Stationary Magnetic Cycles",
        equipment: "Keiser M3i Power Bikes",
        specs: "Eddy-current magnetic resistance • Real-time Bluetooth gear telemetry",
        zone: "Cardio"
      },
      {
        x: 52,
        y: 52,
        title: "Synchro Cross Trainers",
        equipment: "Biomechanic Ellipticals",
        specs: "Adjustable ramp stride • Dual handles for total body conditioning",
        zone: "Cardio"
      },
      {
        x: 56,
        y: 30,
        title: "Architectural Gold Forge Wall",
        equipment: "Acoustic Damped Branding",
        specs: "Brushed metallic gold finish with red neon halo glow",
        zone: "Cardio"
      }
    ]
  },
  {
    id: "strength",
    number: "02",
    name: "Strength Zone",
    tagline: "Raw Iron & Calibrated Power",
    equipmentSummary: "Dumbbells, benches, barbells",
    image: "assets/images/strength.jpg",
    secondaryImage: "assets/images/strength_barbells.jpg",
    accentColor: "#e5a93c",
    stats: {
      capacity: "78% Occupied",
      status: "High Energy Peak",
      temp: "20°C / 68°F",
      machines: "2,500+ kg Calibrated Iron",
      bestFor: "Hypertrophy, Powerlifting & Absolute Strength"
    },
    equipmentList: [
      { name: "Urethane Dumbbell Rack", count: "2.5kg - 60kg", type: "Laser-Engraved Precision", icon: "shield" },
      { name: "Heavy Olympic Benches", count: "6 Multi-Angle", type: "1,200 lb Rated Commercial", icon: "layers" },
      { name: "Olympic Barbells & Plates", count: "8 Barbells", type: "IWF Spec Needle Bearings", icon: "maximize" }
    ],
    hotspots: [
      {
        x: 22,
        y: 58,
        title: "Calibrated Urethane Dumbbells",
        equipment: "Custom Forge 2.5kg - 60kg Set",
        specs: "Zero-loosen welded steel shafts • Knurled grip handles • Polyurethane heads",
        zone: "Strength"
      },
      {
        x: 39,
        y: 62,
        title: "Heavy-Duty Incline/Flat Benches",
        equipment: "Commercial Steel Workhorses",
        specs: "7 angle adjustments from -15° decline to 85° military press • Dense foam padding",
        zone: "Strength"
      },
      {
        x: 68,
        y: 54,
        title: "Cable Crossover & Pulley Tower",
        equipment: "Dual 100kg Precision Stacks",
        specs: "Aircraft grade steel cables • 2:1 ratio for ultra-smooth flyes and presses",
        zone: "Strength"
      },
      {
        x: 52,
        y: 45,
        title: "Illuminated Forge Mirrors",
        equipment: "Full Wall Reflection System",
        specs: "Form verification under shadow-free warm spotlights and red neon perimeter",
        zone: "Strength"
      }
    ]
  },
  {
    id: "machines",
    number: "03",
    name: "Machines Zone",
    tagline: "Biomechanical Isolation Architecture",
    equipmentSummary: "Chest press, lat pulldown, leg press",
    image: "assets/images/machines.jpg",
    accentColor: "#ff2a2a",
    stats: {
      capacity: "65% Occupied",
      status: "Steady Flow",
      temp: "20°C / 68°F",
      machines: "22 Selectorized Units",
      bestFor: "Targeted Muscle Isolation & Safe Maximal Loading"
    },
    equipmentList: [
      { name: "Converging Chest Press", count: "Plate & Pin Loaded", type: "Iso-Lateral Movement Arc", icon: "target" },
      { name: "Dual-Pulley Lat Pulldown", count: "Selectorized", type: "Independent Divergent Path", icon: "anchor" },
      { name: "45° Incline Leg Press", count: "800kg Max Load", type: "Titan Heavy Duty Sled", icon: "trending-up" }
    ],
    hotspots: [
      {
        x: 23,
        y: 62,
        title: "Iso-Lateral Chest Press",
        equipment: "Pure Strength Machine",
        specs: "Biomechanical divergent motion protects rotator cuffs while targeting sternal pectorals",
        zone: "Machines"
      },
      {
        x: 42,
        y: 54,
        title: "Diverging Lat Pulldown & Low Row",
        equipment: "Dual-Axis Back Station",
        specs: "Independent arm movement avoids dominant side compensation • Ergonomic swivel grips",
        zone: "Machines"
      },
      {
        x: 74,
        y: 66,
        title: "Plate-Loaded Heavy Leg Press",
        equipment: "45-Degree Titan Platform",
        specs: "Double safety lockouts • Adjustable back angle for quad or glute emphasis",
        zone: "Machines"
      },
      {
        x: 50,
        y: 22,
        title: "Atmospheric Red Grid Ceiling",
        equipment: "Industrial Matte Black & LED",
        specs: "Laser-aligned crimson lighting system giving intense focus during heavy sets",
        zone: "Machines"
      }
    ]
  },
  {
    id: "functional",
    number: "04",
    name: "Functional Zone",
    tagline: "Dynamic Agility & Combat Conditioning",
    equipmentSummary: "Kettlebells, battle ropes, mats",
    image: "assets/images/functional.jpg",
    accentColor: "#e5a93c",
    stats: {
      capacity: "35% Occupied",
      status: "Wide Open Turf",
      temp: "19°C / 66°F",
      machines: "Full Combat Rig & Turf",
      bestFor: "HIIT, Core Power, Grip Strength & Rotational Torque"
    },
    equipmentList: [
      { name: "Competition Kettlebell Rack", count: "8kg to 48kg", type: "Single-Piece Cast Steel", icon: "feather" },
      { name: "Heavy Braided Battle Ropes", count: "50-Foot Commercial", type: "2-Inch Poly-Dacron Core", icon: "activity" },
      { name: "Shock-Absorbing Mats & Rig", count: "Multi-Station Bay", type: "High-Density Drop Turf", icon: "grid" }
    ],
    hotspots: [
      {
        x: 24,
        y: 60,
        title: "Competition Kettlebells",
        equipment: "Color Coded Steel Kettlebells",
        specs: "Uniform size across all weights from 8kg to 48kg for clean technique transfer",
        zone: "Functional"
      },
      {
        x: 44,
        y: 74,
        title: "Heavy Poly-Dacron Battle Ropes",
        equipment: "50-Foot Anchor Ropes",
        specs: "Shed-proof braided weave with thermo-shrink handles for maximum undulating power",
        zone: "Functional"
      },
      {
        x: 72,
        y: 58,
        title: "Modular Power Rig & Plyo Stations",
        equipment: "Commercial Monkey & Pull-up Bay",
        specs: "Laser cut steel uprights, adjustable dip attachments, and impact-cushioned plyo boxes",
        zone: "Functional"
      },
      {
        x: 35,
        y: 26,
        title: "Functional Training Wall Decal",
        equipment: "Golden Art-Deco Geometry",
        specs: "Geometric gold wall murals reflecting precision athletic philosophy",
        zone: "Functional"
      }
    ]
  },
  {
    id: "changing",
    number: "05",
    name: "Changing Zone",
    tagline: "Luxury RFID Locker Suites & Hydro Recovery",
    equipmentSummary: "Lockers, showers, washrooms",
    image: "assets/images/changing.jpg", // Verified authentic Forge Fitness locker room photo!
    accentColor: "#ff2a2a",
    stats: {
      capacity: "25% Occupied",
      status: "Private & Pristine",
      temp: "22°C / 72°F",
      machines: "Private Suites",
      bestFor: "Keyless Security, Contrast Showers & Executive Grooming"
    },
    equipmentList: [
      { name: "Numbered RFID Smart Lockers", count: "Matte Black Array", type: "Gold Numbered Keyless", icon: "lock" },
      { name: "Rainfall Hydro-Therapy Showers", count: "Private Suites", type: "Thermostatic Rainfall", icon: "droplet" },
      { name: "Designer Washrooms & Vanity", count: "Black Vessel Sinks", type: "Granite & Gold Fixtures", icon: "sparkles" }
    ],
    hotspots: [
      {
        x: 18,
        y: 52,
        title: "Gold-Numbered RFID Lockers",
        equipment: "Keyless Contactless Security Array",
        specs: "Full-height matte black lockers numbered in gold. Tap RFID wristband or mobile pass to lock/unlock.",
        zone: "Changing"
      },
      {
        x: 84,
        y: 56,
        title: "Matte Black Vessel Sinks & Gold Faucets",
        equipment: "Italian Granite Vanity Suite",
        specs: "Wall-mounted brushed gold fixtures, backlit anti-fog mirrors, and organic apothecary hand elixirs.",
        zone: "Changing"
      },
      {
        x: 50,
        y: 16,
        title: "Crimson Ceiling LED Grid",
        equipment: "Architectural Linear Lighting",
        specs: "Continuous neon grid overhead seamlessly continuing the gym's dark industrial signature.",
        zone: "Changing"
      },
      {
        x: 22,
        y: 76,
        title: "Red Floor Cove Ambience",
        equipment: "Under-Locker LED Channel",
        specs: "Low-voltage red floor cove wash for gentle pathway illumination and cyber-luxe atmosphere.",
        zone: "Changing"
      },
      {
        x: 44,
        y: 68,
        title: "Cushioned Changing Benches",
        equipment: "Solid Wood & Padded Leather",
        specs: "Central bench line with shoe cubbies and open locker transition space.",
        zone: "Changing"
      }
    ]
  },
  {
    id: "reception",
    number: "06",
    name: "Reception Zone",
    tagline: "VIP Concierge & The Gateway to Greatness",
    equipmentSummary: "Membership desk, branding wall",
    image: "assets/images/reception.jpg",
    accentColor: "#e5a93c",
    stats: {
      capacity: "Welcome Ready",
      status: "Concierge Active",
      temp: "21°C / 70°F",
      machines: "Full Service Desk",
      bestFor: "VIP Check-in, Nutrition Consults & Member Concierge"
    },
    equipmentList: [
      { name: "VIP Membership Concierge Desk", count: "Full-Time Staff", type: "Matte Gold Trim Station", icon: "user-check" },
      { name: "3D Illuminated Branding Wall", count: "Architectural Halo", type: "Precision Cut Gold Steel", icon: "award" },
      { name: "Member Chesterfield Lounge", count: "Italian Leather", type: "Hydration & Recovery Bar", icon: "coffee" }
    ],
    hotspots: [
      {
        x: 58,
        y: 58,
        title: "VIP Membership Concierge",
        equipment: "Consultation & Onboarding Desk",
        specs: "Member RFID issuance, private training scheduling, and biometric body scans",
        zone: "Reception"
      },
      {
        x: 48,
        y: 42,
        title: "Backlit Forge Branding Wall",
        equipment: "Architectural Halo Wall",
        specs: "Dimensional gold lettering with crimson LED perimeter backlighting",
        zone: "Reception"
      },
      {
        x: 18,
        y: 68,
        title: "VIP Chesterfield Lounge",
        equipment: "Tufted Black Leather Suite",
        specs: "Luxury pre-workout waiting lounge with gold glass table and complimentary espresso/BCAAs",
        zone: "Reception"
      }
    ]
  }
];

class ForgeZoneManager {
  constructor() {
    this.currentZoneIndex = 0;
    this.init();
  }

  init() {
    this.renderTabs();
    this.loadZone(0);
    this.setupListeners();
  }

  renderTabs() {
    const container = document.getElementById('zone-tabs-container');
    if (!container) return;

    container.innerHTML = FORGE_ZONES.map((zone, idx) => `
      <button 
        class="zone-tab flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl border border-white/10 bg-black/40 text-gray-400 hover:text-white hover:border-[#e5a93c]/50 transition-all text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer touch-manipulation ${idx === 0 ? 'active' : ''}"
        data-index="${idx}"
        onclick="forgeZones.switchZone(${idx})"
      >
        <span class="font-mono text-[11px] opacity-75">${zone.number}</span>
        <span>${zone.name}</span>
      </button>
    `).join('');
  }

  switchZone(index) {
    if (this.currentZoneIndex === index) return;
    this.currentZoneIndex = index;

    if (window.forgeAudio) {
      window.forgeAudio.playZoneSwitch();
    }

    // Update tabs
    const tabs = document.querySelectorAll('.zone-tab');
    tabs.forEach((tab, i) => {
      if (i === index) tab.classList.add('active');
      else tab.classList.remove('active');
    });

    this.loadZone(index);
  }

  loadZone(index) {
    const zone = FORGE_ZONES[index];
    if (!zone) return;

    // Update Header & Badge
    const titleEl = document.getElementById('zone-title');
    const taglineEl = document.getElementById('zone-tagline');
    const numberEl = document.getElementById('zone-number');
    const equipmentSummaryEl = document.getElementById('zone-equip-summary');
    const capacityEl = document.getElementById('zone-capacity-pill');
    const tempEl = document.getElementById('zone-temp-pill');
    const bestForEl = document.getElementById('zone-best-for');
    const zoneImage = document.getElementById('zone-main-image');
    const hotspotsContainer = document.getElementById('zone-hotspots-container');
    const equipmentItemsContainer = document.getElementById('zone-equipment-items');

    if (titleEl) titleEl.innerText = zone.name;
    if (taglineEl) taglineEl.innerText = zone.tagline;
    if (numberEl) numberEl.innerText = `ZONE ${zone.number} / 06`;
    if (equipmentSummaryEl) equipmentSummaryEl.innerText = `Equipped with: ${zone.equipmentSummary}`;
    if (capacityEl) capacityEl.innerHTML = `<span class="w-2 h-2 rounded-full ${zone.stats.capacity.includes('Peak') ? 'bg-red-500 animate-ping' : 'bg-emerald-400'} inline-block mr-2"></span>${zone.stats.capacity} • ${zone.stats.status}`;
    if (tempEl) tempEl.innerText = zone.stats.temp;
    if (bestForEl) bestForEl.innerText = zone.stats.bestFor;

    // Transition Image smoothly
    if (zoneImage) {
      zoneImage.style.opacity = '0.3';
      zoneImage.style.transform = 'scale(1.02)';
      setTimeout(() => {
        zoneImage.src = zone.image;
        zoneImage.alt = `${zone.name} - FORGE FITNESS`;
        zoneImage.onload = () => {
          zoneImage.style.opacity = '1';
          zoneImage.style.transform = 'scale(1)';
        };
      }, 150);
    }

    // Render Hotspots on Photo
    if (hotspotsContainer) {
      hotspotsContainer.innerHTML = zone.hotspots.map((hs, i) => `
        <div class="hotspot-pin" style="left: ${hs.x}%; top: ${hs.y}%;" onclick="forgeZones.inspectHotspot(${index}, ${i})">
          <div class="pin-wave"></div>
          <div class="pin-core"></div>
          <div class="hotspot-tooltip">
            <div class="text-[10px] font-mono text-[#e5a93c] uppercase font-bold tracking-wider">${hs.zone} EQUIPMENT</div>
            <div class="font-bold text-white text-xs mt-0.5">${hs.title}</div>
            <div class="text-[11px] text-gray-300 mt-1 max-w-[200px] whitespace-normal leading-relaxed">${hs.equipment}</div>
            <div class="text-[9px] text-gray-400 mt-1 border-t border-white/10 pt-1">Tap / Click to inspect dossier</div>
          </div>
        </div>
      `).join('');
    }

    // Render Zone Equipment cards
    if (equipmentItemsContainer) {
      equipmentItemsContainer.innerHTML = zone.equipmentList.map(eq => `
        <div class="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between hover:border-[#e5a93c]/50 transition-colors">
          <div>
            <div class="font-bold text-white text-xs sm:text-sm">${eq.name}</div>
            <div class="text-[11px] text-gray-400 mt-0.5">${eq.type}</div>
          </div>
          <span class="px-2.5 py-1 rounded bg-[#e5a93c]/15 text-[#f5d488] font-mono text-[11px] font-semibold">${eq.count}</span>
        </div>
      `).join('');
    }
  }

  inspectHotspot(zoneIdx, hotspotIdx) {
    const hs = FORGE_ZONES[zoneIdx]?.hotspots[hotspotIdx];
    if (!hs) return;

    if (window.forgeAudio) {
      window.forgeAudio.playChime();
    }

    const modal = document.getElementById('equipment-modal');
    const modalTitle = document.getElementById('modal-equip-title');
    const modalModel = document.getElementById('modal-equip-model');
    const modalSpecs = document.getElementById('modal-equip-specs');
    const modalZone = document.getElementById('modal-equip-zone');

    if (modalTitle) modalTitle.innerText = hs.title;
    if (modalModel) modalModel.innerText = hs.equipment;
    if (modalSpecs) modalSpecs.innerText = hs.specs;
    if (modalZone) modalZone.innerText = `${FORGE_ZONES[zoneIdx].name} • Zone ${FORGE_ZONES[zoneIdx].number}`;

    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  openFullscreenTour() {
    if (window.forgeAudio) window.forgeAudio.playClick();
    const zone = FORGE_ZONES[this.currentZoneIndex];
    const lightbox = document.getElementById('zone-lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightboxImg) lightboxImg.src = zone.image;
    if (lightboxCaption) lightboxCaption.innerHTML = `
      <div class="text-[#e5a93c] font-mono text-xs sm:text-sm tracking-widest font-bold">ZONE ${zone.number} / 06</div>
      <div class="text-white text-xl sm:text-2xl font-bold font-heading">${zone.name}</div>
      <div class="text-gray-300 text-xs sm:text-sm mt-0.5 max-w-xl">${zone.tagline} • Equipment: ${zone.equipmentSummary}</div>
    `;

    if (lightbox) {
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
    }
  }

  closeLightbox() {
    const lightbox = document.getElementById('zone-lightbox');
    if (lightbox) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    }
  }

  nextZone() {
    const nextIdx = (this.currentZoneIndex + 1) % FORGE_ZONES.length;
    this.switchZone(nextIdx);
  }

  prevZone() {
    const prevIdx = (this.currentZoneIndex - 1 + FORGE_ZONES.length) % FORGE_ZONES.length;
    this.switchZone(prevIdx);
  }

  setupListeners() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeLightbox();
        const equipModal = document.getElementById('equipment-modal');
        if (equipModal) equipModal.classList.add('hidden');
        const passModal = document.getElementById('vip-pass-modal');
        if (passModal) passModal.classList.add('hidden');
      }
    });
  }
}

window.forgeZones = new ForgeZoneManager();
