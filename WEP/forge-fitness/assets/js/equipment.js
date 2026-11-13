/**
 * FORGE FITNESS - Interactive Equipment Matrix & Muscle Targeter
 * Full list of equipment from all 6 zones with 3D tilt, muscle tags, and pro tips
 */

const FORGE_EQUIPMENT_DATA = [
  // CARDIO ZONE
  {
    id: "treadmills",
    name: "Commercial Motorized & Sled Treadmills",
    zone: "Cardio",
    category: "cardio",
    targetMuscles: ["cardio", "legs"],
    image: "assets/images/cardio.jpg",
    rating: "Olympic Standard",
    specs: "0 - 25 km/h • Sled Push Mode (up to 400kg resistance) • Biomechanical running deck",
    proTip: "Activate the unmotorized 'Sled Drive Mode' for 30-second sprint intervals to burn 30% more calories than flat running.",
    features: ["Heart Rate Telemetry", "Shock Cushioning", "High Speed Sprints"]
  },
  {
    id: "cycles",
    name: "Magnetic Flywheel Precision Cycles",
    zone: "Cardio",
    category: "cardio",
    targetMuscles: ["cardio", "legs"],
    image: "assets/images/cardio.jpg",
    rating: "Elite Tour Spec",
    specs: "Eddy current magnetic resistance • Rear-flywheel design • Bluetooth power watt readout",
    proTip: "Keep cadence between 85-95 RPM for aerobic endurance, or crank the magnetic gear to level 18+ for quad-burning hill climbs.",
    features: ["Zero Wear Magnetic Resistance", "Wattage Meter", "SPD & Cage Pedals"]
  },
  {
    id: "crosstrainers",
    name: "Low-Impact Synchro Cross Trainers",
    zone: "Cardio",
    category: "cardio",
    targetMuscles: ["cardio", "legs", "arms", "full-body"],
    image: "assets/images/cardio.jpg",
    rating: "Zero-Impact Cardio",
    specs: "Synchronized dual-action arms • Adjustable stride trajectory (18-26 inches)",
    proTip: "Reverse your stride direction for 5 minutes during workouts to isolate the glutes and hamstrings.",
    features: ["Zero Joint Stress", "Full Body Calorie Burn", "Variable Stride"]
  },

  // STRENGTH ZONE
  {
    id: "dumbbells",
    name: "Calibrated Urethane Dumbbell Suite",
    zone: "Strength",
    category: "strength",
    targetMuscles: ["chest", "shoulders", "arms", "back"],
    image: "assets/images/strength.jpg",
    rating: "Heavy Metal",
    specs: "2.5kg up to 60kg in 2.5kg increments • Solid steel core • Knurled diamond grips",
    proTip: "Squeeze the knurled handles at maximal contraction to activate motor unit recruitment and grip stabilizers.",
    features: ["Drop-Proof Urethane", "Diamond Knurl", "Precision Balanced"]
  },
  {
    id: "benches",
    name: "Multi-Angle Heavy Olympic Benches",
    zone: "Strength",
    category: "strength",
    targetMuscles: ["chest", "shoulders", "arms"],
    image: "assets/images/strength.jpg",
    rating: "Commercial 11-Gauge",
    specs: "1,200 lb static weight rating • 7 backrest settings (-15° to 85°) • High-density grip vinyl",
    proTip: "Set bench to 30° incline rather than 45° to maximize upper clavicular pectoral recruitment without overworking the front delts.",
    features: ["Zero Wobble Base", "Tear-Resistant Vinyl", "Integrated Transport Wheels"]
  },
  {
    id: "barbells",
    name: "Competition Olympic Barbells & Plates",
    zone: "Strength",
    category: "strength",
    targetMuscles: ["chest", "back", "legs", "shoulders", "full-body"],
    image: "assets/images/strength_barbells.jpg",
    rating: "IWF Certified",
    specs: "20kg hardened chrome bars • 215,000 PSI tensile strength • 8 needle bearings per sleeve",
    proTip: "Use the center knurl for secure high-bar back squats to eliminate barbell slip during heavy triples.",
    features: ["Smooth Sleeve Spin", "Color-Coded Bumper Plates", "Dual Knurl Marks"]
  },

  // MACHINES ZONE
  {
    id: "chestpress",
    name: "Iso-Lateral Converging Chest Press",
    zone: "Machines",
    category: "machines",
    targetMuscles: ["chest", "shoulders", "arms"],
    image: "assets/images/machines.jpg",
    rating: "Biomechanical Grade",
    specs: "Independent converging arm motion • Variable cam resistance • Pneumatic seat adjust",
    proTip: "Don't lock out the elbows at peak extension; maintain constant tension on the pectorals for 3-second eccentric tempo.",
    features: ["Dual Weight Stacks", "Natural Arc Path", "Rotator Cuff Safe"]
  },
  {
    id: "latpulldown",
    name: "Dual-Pulley Diverging Lat Pulldown",
    zone: "Machines",
    category: "machines",
    targetMuscles: ["back", "arms"],
    image: "assets/images/machines.jpg",
    rating: "Lat Specialist",
    specs: "360° rotating ergonomic handles • Diverging pull path • Integrated foot brace",
    proTip: "Initiate the movement by depressing the scapulae first before pulling with the arms to forge wide V-taper lats.",
    features: ["Independent Cables", "Multi-Grip Attachments", "Magnetic Pin Selector"]
  },
  {
    id: "legpress",
    name: "45° Heavy Plate-Loaded Leg Press",
    zone: "Machines",
    category: "machines",
    targetMuscles: ["legs"],
    image: "assets/images/machines.jpg",
    rating: "Heavy Duty Titan",
    specs: "800kg load capacity • Oversized diamond-tread footplate • Dual safety lock stops",
    proTip: "Place feet high and shoulder-width apart to emphasize glutes and hamstrings; place feet lower for direct quad isolation.",
    features: ["Ultra-Glide Linear Bearings", "Dual Safety Catches", "Weight Storage Horns"]
  },

  // FUNCTIONAL ZONE
  {
    id: "kettlebells",
    name: "Cast-Iron Competition Kettlebells",
    zone: "Functional",
    category: "functional",
    targetMuscles: ["full-body", "core", "legs", "back"],
    image: "assets/images/functional.jpg",
    rating: "Cross-Training Gold",
    specs: "8kg to 48kg • Uniform competition bell dimensions • Smooth 35mm bare metal handle",
    proTip: "Drive hip hinge power with explosive glute engagement during swings; avoid squatting down into the movement.",
    features: ["Single-Cast Mold", "Color Coded Rings", "Flat Bottom Base"]
  },
  {
    id: "battleropes",
    name: "50-Foot Heavy Braided Battle Ropes",
    zone: "Functional",
    category: "functional",
    targetMuscles: ["arms", "shoulders", "core", "cardio"],
    image: "assets/images/functional.jpg",
    rating: "Combat Conditioning",
    specs: "2-inch thick 100% Poly-Dacron weave • Thermo-shrink grips • Heavy industrial anchor",
    proTip: "Maintain an athletic half-squat with braced core and alternate arms rapidly for maximum cardiac output and shoulder shred.",
    features: ["No-Fray Outer Shield", "High Kinetic Inertia", "Anchor Kit Included"]
  },
  {
    id: "mats",
    name: "High-Density Shock Turf & Agility Mats",
    zone: "Functional",
    category: "functional",
    targetMuscles: ["core", "full-body"],
    image: "assets/images/functional.jpg",
    rating: "Impact Shield",
    specs: "30mm thick recycled crumb rubber • Interlocking modular tiles • Slip-resistant textured surface",
    proTip: "Ideal for plyometric box jumps, burpees, heavy deadlift drops, and core stability abdominal drills.",
    features: ["Maximum Acoustic Damping", "Anti-Microbial Coating", "High Traction"]
  },

  // CHANGING ZONE
  {
    id: "lockers",
    name: "Keyless RFID Smart Lockers",
    zone: "Changing",
    category: "changing",
    targetMuscles: ["amenities"],
    image: "assets/images/changing.jpg",
    rating: "VIP Security",
    specs: "Full height ventilated lockers • Contactless RFID lock system • Internal USB-C fast charging",
    proTip: "Tap your FORGE wristband or digital app pass to instantly lock and unlock your private suite locker.",
    features: ["RFID Contactless", "Internal Device Charger", "Luxury Soft-Close"]
  },
  {
    id: "showers",
    name: "Rainfall Hydro-Therapy Showers",
    zone: "Changing",
    category: "changing",
    targetMuscles: ["amenities"],
    image: "assets/images/changing_showers.jpg",
    rating: "Luxury Spa",
    specs: "Thermostatic Grohe valves • Dual overhead rainfall & body jets • Organic apothecary wash",
    proTip: "Take a 3-minute cold contrast rinse after heavy training sessions to reduce systemic inflammation and speed recovery.",
    features: ["Thermostatic Temperature Control", "Rainfall & Jet Modes", "Plush Towels Provided"]
  },
  {
    id: "washrooms",
    name: "Italian Marble Washrooms & Grooming",
    zone: "Changing",
    category: "changing",
    targetMuscles: ["amenities"],
    image: "assets/images/changing.jpg",
    rating: "Executive Grade",
    specs: "Granite vanity counters • Dyson Supersonic hair styling stations • Anti-fog LED mirrors",
    proTip: "Fully stocked with salon-grade hair styling clay, body sprays, and organic hydration mists.",
    features: ["Dyson Hair Stations", "Touchless Sanitzation", "Private Changing Bays"]
  },

  // RECEPTION ZONE
  {
    id: "desk",
    name: "VIP Membership Concierge Desk",
    zone: "Reception",
    category: "reception",
    targetMuscles: ["amenities"],
    image: "assets/images/reception.jpg",
    rating: "Five-Star Concierge",
    specs: "Custom architectural matte black & gold counter • InBody 770 composition scanner • Fast pass check-in",
    proTip: "Ask the desk for your complimentary quarterly 3D InBody scan to track visceral fat and skeletal muscle gains.",
    features: ["Digital Member Check-In", "Body Composition Scan", "Supplement & Shake Bar"]
  },
  {
    id: "brandingwall",
    name: "Architectural Halo FORGE Branding Wall",
    zone: "Reception",
    category: "reception",
    targetMuscles: ["amenities"],
    image: "assets/images/reception.jpg",
    rating: "Iconic Showcase",
    specs: "CNC laser-cut brushed gold brass • Concealed red LED halo backlighting • Matte acoustic backdrop",
    proTip: "The premier photo spot for your post-workout PR celebration and milestone physique check.",
    features: ["Photogenic Lighting", "Signature Brand Icon", "Gold Geometric Inlays"]
  }
];

class ForgeEquipmentEngine {
  constructor() {
    this.currentFilter = "all";
    this.currentMuscle = "all";
    this.searchQuery = "";
    this.init();
  }

  init() {
    this.renderEquipment();
    this.setupFilters();
    this.setupSearch();
    this.setupTiltEffect();
  }

  renderEquipment() {
    const container = document.getElementById('equipment-grid');
    if (!container) return;

    const filtered = FORGE_EQUIPMENT_DATA.filter(item => {
      const matchZone = this.currentFilter === 'all' || item.zone.toLowerCase() === this.currentFilter.toLowerCase();
      const matchMuscle = this.currentMuscle === 'all' || item.targetMuscles.includes(this.currentMuscle.toLowerCase());
      const matchSearch = !this.searchQuery || 
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.zone.toLowerCase().includes(this.searchQuery) ||
        item.specs.toLowerCase().includes(this.searchQuery);
      return matchZone && matchMuscle && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="text-4xl mb-3">⚡</div>
          <div class="text-xl font-heading font-bold text-white">No Equipment Matches Found</div>
          <p class="text-gray-400 text-sm mt-1">Try resetting the zone filter or searching another keyword.</p>
          <button onclick="forgeEquipment.resetFilters()" class="btn-ghost-gold mt-4 text-xs">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((item, idx) => `
      <div class="tilt-card forge-card p-6 flex flex-col justify-between group" data-id="${item.id}">
        <div class="tilt-inner">
          <!-- Top Badges -->
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded bg-[#e5a93c]/15 text-[#f5d488] font-mono text-[11px] font-bold tracking-wider uppercase border border-[#e5a93c]/30">
              ${item.zone} Zone
            </span>
            <span class="text-xs text-gray-400 font-mono flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]"></span>
              ${item.rating}
            </span>
          </div>

          <!-- Thumbnail Image -->
          <div class="equipment-img-wrapper h-44 mb-5 border border-white/10 relative">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover object-center brightness-90 group-hover:brightness-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div class="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
              ${item.targetMuscles.map(m => `
                <span class="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-gray-300 border border-white/10 uppercase">
                  ${m}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Title & Specs -->
          <h3 class="text-white font-heading font-bold text-lg mb-2 group-hover:text-[#f5d488] transition-colors leading-snug">
            ${item.name}
          </h3>
          <p class="text-xs text-gray-300 leading-relaxed mb-4">
            ${item.specs}
          </p>

          <!-- Key Features -->
          <div class="space-y-1.5 mb-5 border-t border-white/5 pt-3">
            ${item.features.map(f => `
              <div class="flex items-center gap-2 text-[11px] text-gray-400">
                <span class="text-[#e5a93c] text-xs">◆</span>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Action / Pro Tip Button -->
        <div class="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
          <button 
            onclick="forgeEquipment.showProTip('${item.id}')"
            class="text-xs font-heading font-bold text-[#e5a93c] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>PRO LIFTING TIP</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
          <button 
            onclick="forgeEquipment.locateInZone('${item.zone}')"
            class="text-[11px] font-mono text-gray-400 hover:text-[#ff2a2a] transition-colors cursor-pointer"
          >
            Locate in Map →
          </button>
        </div>
      </div>
    `).join('');

    this.setupTiltEffect();
  }

  setupFilters() {
    const filterButtons = document.querySelectorAll('.equip-zone-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window.forgeAudio) window.forgeAudio.playClick();
        filterButtons.forEach(b => b.classList.remove('active', 'bg-[#e5a93c]', 'text-black'));
        btn.classList.add('active', 'bg-[#e5a93c]', 'text-black');
        this.currentFilter = btn.dataset.zone || 'all';
        this.renderEquipment();
      });
    });

    const muscleButtons = document.querySelectorAll('.equip-muscle-btn');
    muscleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.forgeAudio) window.forgeAudio.playClick();
        muscleButtons.forEach(b => b.classList.remove('active', 'border-[#ff2a2a]', 'text-[#ff2a2a]'));
        btn.classList.add('active', 'border-[#ff2a2a]', 'text-[#ff2a2a]');
        this.currentMuscle = btn.dataset.muscle || 'all';
        this.renderEquipment();
      });
    });
  }

  setupSearch() {
    const searchInput = document.getElementById('equip-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderEquipment();
      });
    }
  }

  resetFilters() {
    this.currentFilter = 'all';
    this.currentMuscle = 'all';
    this.searchQuery = '';
    const searchInput = document.getElementById('equip-search-input');
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.equip-zone-btn').forEach((b, i) => {
      if (i === 0) b.classList.add('active', 'bg-[#e5a93c]', 'text-black');
      else b.classList.remove('active', 'bg-[#e5a93c]', 'text-black');
    });

    document.querySelectorAll('.equip-muscle-btn').forEach((b, i) => {
      if (i === 0) b.classList.add('active');
      else b.classList.remove('active');
    });

    this.renderEquipment();
  }

  locateInZone(zoneName) {
    if (window.forgeAudio) window.forgeAudio.playClick();
    const zoneIndex = FORGE_ZONES.findIndex(z => z.name.toLowerCase().includes(zoneName.toLowerCase()));
    if (zoneIndex !== -1 && window.forgeZones) {
      window.forgeZones.switchZone(zoneIndex);
      const zoneExplorer = document.getElementById('zones-explorer');
      if (zoneExplorer) {
        zoneExplorer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  showProTip(itemId) {
    const item = FORGE_EQUIPMENT_DATA.find(e => e.id === itemId);
    if (!item) return;

    if (window.forgeAudio) window.forgeAudio.playChime();

    const modal = document.getElementById('protip-modal');
    const title = document.getElementById('protip-title');
    const content = document.getElementById('protip-content');
    const zoneBadge = document.getElementById('protip-zone');

    if (title) title.innerText = item.name;
    if (content) content.innerText = item.proTip;
    if (zoneBadge) zoneBadge.innerText = `${item.zone} Zone • Technique Focus`;

    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  setupTiltEffect() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }
}

window.forgeEquipment = new ForgeEquipmentEngine();
