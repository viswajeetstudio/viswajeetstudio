/**
 * FORGE FITNESS - Interactive Equipment Matrix & Muscle Targeter
 * Specialized Station Schematics - Zero Image Duplication Across The Site
 */

const FORGE_EQUIPMENT_DATA = [
  // CARDIO ZONE
  {
    id: "treadmills",
    name: "Commercial Motorized & Sled Treadmills",
    zone: "Cardio",
    category: "cardio",
    targetMuscles: ["cardio", "legs"],
    iconType: "treadmill",
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
    iconType: "cycle",
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
    iconType: "crosstrainer",
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
    iconType: "dumbbell",
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
    iconType: "bench",
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
    iconType: "barbell",
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
    iconType: "chestpress",
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
    iconType: "latpulldown",
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
    iconType: "legpress",
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
    iconType: "kettlebell",
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
    iconType: "battleropes",
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
    iconType: "turfmats",
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
    iconType: "lockers",
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
    iconType: "showers",
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
    iconType: "washrooms",
    rating: "Executive Grade",
    specs: "Granite vanity counters • Dyson Supersonic hair styling stations • Anti-fog LED mirrors",
    proTip: "Fully stocked with salon-grade hair styling clay, body sprays, and organic hydration mists.",
    features: ["Dyson Hair Stations", "Touchless Sanitization", "Private Changing Bays"]
  },

  // RECEPTION ZONE
  {
    id: "desk",
    name: "VIP Membership Concierge Desk",
    zone: "Reception",
    category: "reception",
    targetMuscles: ["amenities"],
    iconType: "desk",
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
    iconType: "brandingwall",
    rating: "Iconic Showcase",
    specs: "CNC laser-cut brushed gold brass • Concealed red LED halo backlighting • Matte acoustic backdrop",
    proTip: "The premier photo spot for your post-workout PR celebration and milestone physique check.",
    features: ["Photogenic Lighting", "Signature Brand Icon", "Gold Geometric Inlays"]
  }
];

// Stylized Vector Schematics for each station (clean, premium cyber-athletic)
function getStationSchematicSVG(type) {
  const gold = "#e5a93c";
  const red = "#ff2a2a";

  switch (type) {
    case "dumbbell":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <rect x="8" y="16" width="10" height="32" rx="2" fill="rgba(229,169,60,0.15)"/>
          <rect x="4" y="20" width="4" height="24" rx="1"/>
          <line x1="18" y1="32" x2="46" y2="32" stroke-width="4" stroke-linecap="round"/>
          <rect x="46" y="16" width="10" height="32" rx="2" fill="rgba(229,169,60,0.15)"/>
          <rect x="56" y="20" width="4" height="24" rx="1"/>
          <circle cx="32" cy="32" r="3" fill="${red}"/>
        </svg>
      `;
    case "barbell":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <line x1="2" y1="32" x2="62" y2="32" stroke-width="3" stroke-linecap="round"/>
          <rect x="10" y="12" width="6" height="40" rx="1" fill="rgba(255,42,42,0.2)" stroke="${red}"/>
          <rect x="16" y="16" width="5" height="32" rx="1" fill="rgba(229,169,60,0.2)"/>
          <rect x="48" y="12" width="6" height="40" rx="1" fill="rgba(255,42,42,0.2)" stroke="${red}"/>
          <rect x="43" y="16" width="5" height="32" rx="1" fill="rgba(229,169,60,0.2)"/>
        </svg>
      `;
    case "bench":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <path d="M8 26 L42 16" stroke-width="4" stroke-linecap="round"/>
          <path d="M42 22 L58 32" stroke-width="4" stroke-linecap="round"/>
          <path d="M14 26 L14 48" stroke-linecap="round"/>
          <path d="M44 20 L44 48" stroke-linecap="round"/>
          <path d="M8 48 L56 48" stroke-width="2"/>
          <circle cx="42" cy="20" r="3" fill="${red}"/>
        </svg>
      `;
    case "chestpress":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <rect x="12" y="12" width="14" height="40" rx="2" fill="rgba(229,169,60,0.1)"/>
          <line x1="12" y1="20" x2="26" y2="20"/>
          <line x1="12" y1="28" x2="26" y2="28"/>
          <line x1="12" y1="36" x2="26" y2="36"/>
          <path d="M26 32 C38 28 46 22 52 18" stroke-linecap="round"/>
          <circle cx="52" cy="18" r="4" fill="${red}"/>
          <path d="M38 38 L48 52" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `;
    case "latpulldown":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <path d="M8 16 C20 12 44 12 56 16" stroke-width="3" stroke-linecap="round"/>
          <line x1="32" y1="12" x2="32" y2="52"/>
          <circle cx="32" cy="12" r="3" fill="${red}"/>
          <rect x="22" y="32" width="20" height="20" rx="2" fill="rgba(229,169,60,0.1)"/>
        </svg>
      `;
    case "legpress":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <line x1="10" y1="52" x2="54" y2="14" stroke-width="3"/>
          <rect x="30" y="20" width="16" height="12" rx="2" transform="rotate(-40 38 26)" fill="rgba(255,42,42,0.2)" stroke="${red}"/>
          <circle cx="44" cy="20" r="4" fill="${gold}"/>
          <line x1="14" y1="52" x2="52" y2="52" stroke-width="2"/>
        </svg>
      `;
    case "treadmill":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <line x1="8" y1="46" x2="54" y2="38" stroke-width="4" stroke-linecap="round"/>
          <path d="M46 38 L52 18 L42 16" stroke-width="2" stroke-linecap="round"/>
          <circle cx="48" cy="16" r="3" fill="${red}"/>
          <line x1="14" y1="46" x2="14" y2="52"/>
          <line x1="50" y1="39" x2="50" y2="52"/>
        </svg>
      `;
    case "cycle":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <circle cx="20" cy="42" r="10" stroke-width="2"/>
          <circle cx="44" cy="42" r="10" stroke-width="2" fill="rgba(255,42,42,0.15)"/>
          <path d="M20 42 L32 42 L40 26 L48 26" stroke-width="2" stroke-linecap="round"/>
          <path d="M32 42 L28 26 L22 26" stroke-width="2"/>
          <circle cx="32" cy="42" r="3" fill="${gold}"/>
        </svg>
      `;
    case "crosstrainer":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <ellipse cx="32" cy="46" rx="22" ry="6" stroke-width="2"/>
          <path d="M24 46 L38 20 L44 14" stroke-width="2" stroke-linecap="round"/>
          <path d="M40 46 L26 20 L20 14" stroke-width="2" stroke-linecap="round"/>
          <circle cx="44" cy="14" r="2.5" fill="${red}"/>
          <circle cx="20" cy="14" r="2.5" fill="${red}"/>
        </svg>
      `;
    case "kettlebell":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <path d="M24 24 C24 16 40 16 40 24" stroke-width="3" stroke-linecap="round"/>
          <circle cx="32" cy="38" r="16" fill="rgba(229,169,60,0.15)"/>
          <rect x="22" y="36" width="20" height="4" rx="2" fill="${red}" stroke="none"/>
        </svg>
      `;
    case "battleropes":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <path d="M6 30 Q16 16 26 30 T46 30 T60 30" stroke-width="3" stroke-linecap="round" fill="none"/>
          <path d="M6 38 Q16 24 26 38 T46 38 T60 38" stroke-width="3" stroke-linecap="round" stroke="${red}" fill="none"/>
        </svg>
      `;
    case "turfmats":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <rect x="10" y="16" width="44" height="32" rx="4" fill="rgba(229,169,60,0.1)"/>
          <line x1="10" y1="32" x2="54" y2="32" stroke-dasharray="3 3"/>
          <line x1="32" y1="16" x2="32" y2="48" stroke-dasharray="3 3"/>
          <circle cx="32" cy="32" r="5" fill="${red}"/>
        </svg>
      `;
    case "lockers":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <rect x="12" y="10" width="18" height="44" rx="2" fill="rgba(229,169,60,0.1)"/>
          <rect x="34" y="10" width="18" height="44" rx="2" fill="rgba(229,169,60,0.1)"/>
          <circle cx="18" cy="30" r="2" fill="${red}"/>
          <circle cx="40" cy="30" r="2" fill="${red}"/>
          <line x1="16" y1="18" x2="26" y2="18"/>
          <line x1="38" y1="18" x2="48" y2="18"/>
        </svg>
      `;
    case "showers":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <path d="M16 12 L38 12 L44 22" stroke-width="3" stroke-linecap="round"/>
          <rect x="40" y="22" width="14" height="6" rx="2" fill="${gold}"/>
          <line x1="43" y1="32" x2="43" y2="46" stroke="${red}" stroke-linecap="round" stroke-dasharray="2 4"/>
          <line x1="47" y1="32" x2="47" y2="50" stroke="${red}" stroke-linecap="round" stroke-dasharray="2 4"/>
          <line x1="51" y1="32" x2="51" y2="44" stroke="${red}" stroke-linecap="round" stroke-dasharray="2 4"/>
        </svg>
      `;
    case "washrooms":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <rect x="14" y="10" width="36" height="24" rx="3" fill="rgba(229,169,60,0.1)"/>
          <rect x="10" y="38" width="44" height="6" rx="2" fill="${gold}"/>
          <ellipse cx="32" cy="42" rx="8" ry="3" fill="${red}"/>
        </svg>
      `;
    case "desk":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <rect x="8" y="28" width="48" height="22" rx="3" fill="rgba(229,169,60,0.15)"/>
          <rect x="14" y="34" width="36" height="12" rx="1" stroke="${red}"/>
          <circle cx="32" cy="18" r="6" stroke-width="2"/>
        </svg>
      `;
    case "brandingwall":
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <rect x="8" y="12" width="48" height="40" rx="3" stroke="${red}"/>
          <path d="M22 24 L42 24 M22 32 L36 32 M22 40 L42 40" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `;
    default:
      return `
        <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="${gold}" stroke-width="2">
          <circle cx="32" cy="32" r="20" stroke-width="2"/>
          <circle cx="32" cy="32" r="5" fill="${red}"/>
        </svg>
      `;
  }
}

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
      <div class="tilt-card forge-card p-5 sm:p-6 flex flex-col justify-between group" data-id="${item.id}">
        <div>
          <!-- Top Badges -->
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-1 rounded bg-[#e5a93c]/15 text-[#f5d488] font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border border-[#e5a93c]/30">
              ${item.zone} Zone
            </span>
            <span class="text-[11px] text-gray-400 font-mono flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]"></span>
              ${item.rating}
            </span>
          </div>

          <!-- Dedicated Biomechanical Station Graphic (Clean & Non-duplicated) -->
          <div class="equip-schematic-box h-36 mb-4 flex flex-col items-center justify-center p-3 relative">
            ${getStationSchematicSVG(item.iconType)}
            <div class="absolute bottom-2 left-3 right-3 flex flex-wrap gap-1">
              ${item.targetMuscles.map(m => `
                <span class="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-mono text-gray-300 border border-white/10 uppercase">
                  ${m}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Title & Specs -->
          <h3 class="text-white font-heading font-bold text-base sm:text-lg mb-2 group-hover:text-[#f5d488] transition-colors leading-snug">
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
            class="text-xs font-heading font-bold text-[#e5a93c] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>PRO TIP</span>
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
    // Only apply tilt on pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }
}

window.forgeEquipment = new ForgeEquipmentEngine();
