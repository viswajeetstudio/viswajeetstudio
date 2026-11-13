/**
 * FORGE FITNESS - Live Gym Floor Heatmap & Class Schedule Engine
 */

const HEATMAP_HOURLY_DATA = {
  6:  { cardio: 30, strength: 40, machines: 35, functional: 20, changing: 25, label: "Quiet Dawn Rush" },
  7:  { cardio: 55, strength: 65, machines: 50, functional: 45, changing: 50, label: "Morning Prime" },
  8:  { cardio: 70, strength: 80, machines: 65, functional: 60, changing: 65, label: "Morning Peak Surge" },
  9:  { cardio: 50, strength: 60, machines: 45, functional: 40, changing: 45, label: "Post-Work Transition" },
  10: { cardio: 35, strength: 45, machines: 30, functional: 25, changing: 20, label: "Mid-Day Calm" },
  11: { cardio: 30, strength: 35, machines: 25, functional: 20, changing: 15, label: "Optimal Open Floor" },
  12: { cardio: 45, strength: 55, machines: 45, functional: 35, changing: 40, label: "Lunch Hour Lifts" },
  13: { cardio: 50, strength: 60, machines: 50, functional: 40, changing: 45, label: "Lunch Surge" },
  14: { cardio: 30, strength: 40, machines: 30, functional: 20, changing: 20, label: "Quiet Focus Hours" },
  15: { cardio: 35, strength: 45, machines: 35, functional: 25, changing: 25, label: "Afternoon Momentum" },
  16: { cardio: 55, strength: 65, machines: 60, functional: 50, changing: 40, label: "Early Evening Warmup" },
  17: { cardio: 75, strength: 85, machines: 80, functional: 70, changing: 60, label: "Evening Rush Kickoff" },
  18: { cardio: 90, strength: 95, machines: 90, functional: 85, changing: 80, label: "🔥 REDLINE MAXIMUM PEAK" },
  19: { cardio: 88, strength: 92, machines: 88, functional: 80, changing: 75, label: "High Voltage Prime" },
  20: { cardio: 65, strength: 75, machines: 70, functional: 60, changing: 55, label: "Night Iron Session" },
  21: { cardio: 40, strength: 50, machines: 45, functional: 30, changing: 35, label: "Late Night Sanctuary" },
  22: { cardio: 20, strength: 25, machines: 20, functional: 15, changing: 15, label: "Midnight Iron Silence" }
};

const FORGE_CLASSES = [
  {
    id: "cls-1",
    day: "mon",
    time: "07:00 AM - 07:50 AM",
    title: "Crimson Shred HIIT",
    zone: "Cardio & Functional",
    coach: "Alex Mercer (Master Coach)",
    intensity: "high",
    spotsLeft: 4,
    totalSpots: 16,
    desc: "High-cadence sprint blocks on curved treadmills paired with kettlebell complexes."
  },
  {
    id: "cls-2",
    day: "mon",
    time: "06:00 PM - 07:00 PM",
    title: "Heavy Barbell Forge",
    zone: "Strength Zone",
    coach: "Marcus Vance (Powerlifting Record Holder)",
    intensity: "heavy",
    spotsLeft: 2,
    totalSpots: 12,
    desc: "Barbell squat, bench press and deadlift technique with 1RM load optimization."
  },
  {
    id: "cls-3",
    day: "tue",
    time: "07:30 AM - 08:15 AM",
    title: "Battle Ropes & Core Combat",
    zone: "Functional Zone",
    coach: "Elena Rostova",
    intensity: "high",
    spotsLeft: 6,
    totalSpots: 14,
    desc: "Wave dynamics, rotational slams, plyometric turf jumps, and anti-rotational core holds."
  },
  {
    id: "cls-4",
    day: "tue",
    time: "06:30 PM - 07:30 PM",
    title: "Hypertrophy Machine Circuit",
    zone: "Machines Zone",
    coach: "Derrick Cole",
    intensity: "heavy",
    spotsLeft: 5,
    totalSpots: 15,
    desc: "Drop sets, isometric holds, and forced eccentrics on chest press and lat pulldown towers."
  },
  {
    day: "wed",
    id: "cls-5",
    time: "08:00 AM - 08:45 AM",
    title: "Keiser Magnetic Sprint & Climb",
    zone: "Cardio Zone",
    coach: "Chloe Saint",
    intensity: "high",
    spotsLeft: 3,
    totalSpots: 12,
    desc: "Wattage-targeted cycling intervals with dynamic rhythm pacing and heart-rate telemetry."
  },
  {
    id: "cls-6",
    day: "wed",
    time: "07:00 PM - 07:45 PM",
    title: "Contrast Hydro & Mobility Flow",
    zone: "Changing & Recovery",
    coach: "Dr. Liam Scott",
    intensity: "recovery",
    spotsLeft: 8,
    totalSpots: 10,
    desc: "Guided thoracic mobility, joint decompression, followed by contrast shower protocols."
  },
  {
    id: "cls-7",
    day: "thu",
    time: "06:00 PM - 07:00 PM",
    title: "Deadlift & Grip Clinic",
    zone: "Strength Zone",
    coach: "Marcus Vance",
    intensity: "heavy",
    spotsLeft: 1,
    totalSpots: 10,
    desc: "Olympic bar knurl setup, hip hinge levers, and lock-out kinetic efficiency."
  },
  {
    id: "cls-8",
    day: "fri",
    time: "05:30 PM - 06:30 PM",
    title: "Friday Night Forge Blast",
    zone: "All Zones (Gym-Wide)",
    coach: "All Master Coaches",
    intensity: "high",
    spotsLeft: 3,
    totalSpots: 24,
    desc: "Full gym obstacle team relay spanning cardio, functional turf, and strength stations."
  },
  {
    id: "cls-9",
    day: "sat",
    time: "10:00 AM - 11:15 AM",
    title: "Titan Kettlebell Masterclass",
    zone: "Functional Zone",
    coach: "Elena Rostova",
    intensity: "heavy",
    spotsLeft: 4,
    totalSpots: 14,
    desc: "Turkish get-ups, double kettlebell clean & press, and snatch endurance ladder."
  },
  {
    id: "cls-10",
    day: "sun",
    time: "11:00 AM - 12:00 PM",
    title: "Active Recovery & Mobility",
    zone: "Functional & Changing",
    coach: "Chloe Saint",
    intensity: "recovery",
    spotsLeft: 7,
    totalSpots: 15,
    desc: "Deep foam rolling, myofascial band releases, and nervous system reset."
  }
];

class ForgeScheduleEngine {
  constructor() {
    this.currentDay = 'mon';
    this.currentIntensity = 'all';
    this.bookedClasses = new Set();
    this.init();
  }

  init() {
    this.setupHeatmapSlider();
    this.setupClassFilters();
    this.renderClasses();
  }

  /* ------------------- HEATMAP SLIDER ------------------- */
  setupHeatmapSlider() {
    const slider = document.getElementById('heatmap-hour-slider');
    const timeDisplay = document.getElementById('heatmap-hour-display');
    const vibeLabel = document.getElementById('heatmap-vibe-label');

    const updateHeatmap = (hour) => {
      const data = HEATMAP_HOURLY_DATA[hour] || HEATMAP_HOURLY_DATA[18];

      const formatHour = (h) => {
        const ampm = h >= 12 ? 'PM' : 'AM';
        const displayHour = h > 12 ? h - 12 : h;
        return `${displayHour}:00 ${ampm}`;
      };

      if (timeDisplay) timeDisplay.innerText = formatHour(hour);
      if (vibeLabel) vibeLabel.innerText = data.label;

      // Update zone meters
      const updateBar = (id, percent) => {
        const bar = document.getElementById(`heat-bar-${id}`);
        const text = document.getElementById(`heat-val-${id}`);
        if (bar) {
          bar.style.width = `${percent}%`;
          if (percent > 80) {
            bar.className = 'h-2.5 rounded-full transition-all duration-300 bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a]';
          } else if (percent > 55) {
            bar.className = 'h-2.5 rounded-full transition-all duration-300 bg-[#e5a93c] shadow-[0_0_8px_#e5a93c]';
          } else {
            bar.className = 'h-2.5 rounded-full transition-all duration-300 bg-emerald-500';
          }
        }
        if (text) text.innerText = `${percent}%`;
      };

      updateBar('cardio', data.cardio);
      updateBar('strength', data.strength);
      updateBar('machines', data.machines);
      updateBar('functional', data.functional);
      updateBar('changing', data.changing);
    };

    if (slider) {
      slider.addEventListener('input', (e) => {
        const hour = parseInt(e.target.value);
        updateHeatmap(hour);
      });
      // Initial state (6 PM peak)
      updateHeatmap(18);
    }
  }

  /* ------------------- CLASS SCHEDULE ------------------- */
  setupClassFilters() {
    const dayButtons = document.querySelectorAll('.schedule-day-btn');
    dayButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.forgeAudio) window.forgeAudio.playClick();
        dayButtons.forEach(b => b.classList.remove('active', 'border-[#e5a93c]', 'text-[#f5d488]', 'bg-[#e5a93c]/10'));
        btn.classList.add('active', 'border-[#e5a93c]', 'text-[#f5d488]', 'bg-[#e5a93c]/10');
        this.currentDay = btn.dataset.day;
        this.renderClasses();
      });
    });

    const intensitySelect = document.getElementById('class-intensity-filter');
    if (intensitySelect) {
      intensitySelect.addEventListener('change', (e) => {
        if (window.forgeAudio) window.forgeAudio.playClick();
        this.currentIntensity = e.target.value;
        this.renderClasses();
      });
    }
  }

  renderClasses() {
    const container = document.getElementById('classes-container');
    if (!container) return;

    const filtered = FORGE_CLASSES.filter(c => {
      const matchDay = c.day === this.currentDay;
      const matchIntensity = this.currentIntensity === 'all' || c.intensity === this.currentIntensity;
      return matchDay && matchIntensity;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center bg-black/40 rounded-2xl border border-white/5">
          <div class="text-3xl mb-2">⚡</div>
          <div class="text-lg font-heading font-bold text-white">Open Floor Training Window</div>
          <p class="text-gray-400 text-xs mt-1">No group classes scheduled during this block. All stations available for private lifting.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(c => {
      const isBooked = this.bookedClasses.has(c.id);
      const intensityBadge = c.intensity === 'high' 
        ? '<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#ff2a2a]/20 text-[#ff4d4d] border border-[#ff2a2a]/30">HIGH INTENSITY</span>'
        : c.intensity === 'heavy'
        ? '<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#e5a93c]/20 text-[#f5d488] border border-[#e5a93c]/30">HEAVY STRENGTH</span>'
        : '<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">RECOVERY FLOW</span>';

      return `
        <div class="forge-card p-5 flex flex-col justify-between hover:border-[#e5a93c]/60 transition-all">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-mono text-[#f5d488] font-semibold">${c.time}</span>
              ${intensityBadge}
            </div>
            <h3 class="text-white font-heading font-bold text-xl mb-1">${c.title}</h3>
            <div class="text-xs text-[#e5a93c] font-mono mb-2 flex items-center gap-1.5">
              <span>Zone: ${c.zone}</span>
              <span>•</span>
              <span class="text-gray-400">${c.coach}</span>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed mb-4">${c.desc}</p>
          </div>

          <div class="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
            <div class="text-xs font-mono">
              <span class="text-white font-bold">${isBooked ? c.spotsLeft - 1 : c.spotsLeft}</span>
              <span class="text-gray-400"> / ${c.totalSpots} spots left</span>
            </div>
            <button 
              onclick="forgeSchedule.bookClass('${c.id}')"
              class="${isBooked ? 'bg-emerald-600 text-white' : 'btn-forge-gold'} text-xs py-2 px-4 rounded-lg cursor-pointer flex items-center gap-1.5 transition-all"
            >
              ${isBooked ? '✓ SPOT RESERVED' : 'RESERVE SPOT'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  bookClass(classId) {
    const targetClass = FORGE_CLASSES.find(c => c.id === classId);
    if (!targetClass) return;

    if (this.bookedClasses.has(classId)) {
      this.bookedClasses.delete(classId);
      if (window.forgeAudio) window.forgeAudio.playClick();
      if (window.showForgeToast) {
        window.showForgeToast('Reservation Cancelled', `Your spot in ${targetClass.title} has been released.`);
      }
    } else {
      this.bookedClasses.add(classId);
      if (window.forgeAudio) window.forgeAudio.playChime();
      if (window.showForgeToast) {
        window.showForgeToast('Spot Confirmed! 🔥', `You are registered for ${targetClass.title} (${targetClass.time}).`);
      }
    }
    this.renderClasses();
  }
}

window.forgeSchedule = new ForgeScheduleEngine();
