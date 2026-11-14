/**
 * FORGE FITNESS - Interactive Fit Lab Calculators
 * 1RM Calculator, Macro/Calorie Forger, and Custom Zone Split Builder
 */

class ForgeFitLab {
  constructor() {
    this.init();
  }

  init() {
    this.setupTabs();
    this.setup1RM();
    this.setupMacroCalculator();
    this.setupSplitGenerator();
  }

  setupTabs() {
    const tabBtns = document.querySelectorAll('.lab-tab-btn');
    const tabPanels = document.querySelectorAll('.lab-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.forgeAudio) window.forgeAudio.playClick();
        const target = btn.dataset.target;

        tabBtns.forEach(b => {
          b.classList.remove('active', 'border-[#e5a93c]', 'text-[#f5d488]', 'bg-[#e5a93c]/10');
          b.classList.add('text-gray-400');
        });
        btn.classList.add('active', 'border-[#e5a93c]', 'text-[#f5d488]', 'bg-[#e5a93c]/10');
        btn.classList.remove('text-gray-400');

        tabPanels.forEach(p => {
          if (p.id === target) {
            p.classList.remove('hidden');
          } else {
            p.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ------------------- 1RM CALCULATOR ------------------- */
  setup1RM() {
    const weightInput = document.getElementById('1rm-weight');
    const repsInput = document.getElementById('1rm-reps');
    const liftSelect = document.getElementById('1rm-lift');

    const update1RM = () => {
      const weight = parseFloat(weightInput?.value) || 0;
      const reps = parseInt(repsInput?.value) || 1;

      if (weight <= 0) return;

      // Epley Formula: 1RM = weight * (1 + reps / 30)
      const oneRM = reps === 1 ? weight : Math.round(weight * (1 + reps / 30));

      const displayVal = document.getElementById('1rm-result-val');
      const table95 = document.getElementById('1rm-pct-95');
      const table85 = document.getElementById('1rm-pct-85');
      const table75 = document.getElementById('1rm-pct-75');
      const table65 = document.getElementById('1rm-pct-65');

      if (displayVal) displayVal.innerText = `${oneRM} KG`;
      if (table95) table95.innerText = `${Math.round(oneRM * 0.95)} kg`;
      if (table85) table85.innerText = `${Math.round(oneRM * 0.85)} kg`;
      if (table75) table75.innerText = `${Math.round(oneRM * 0.75)} kg`;
      if (table65) table65.innerText = `${Math.round(oneRM * 0.65)} kg`;
    };

    if (weightInput) weightInput.addEventListener('input', update1RM);
    if (repsInput) repsInput.addEventListener('input', update1RM);
    if (liftSelect) liftSelect.addEventListener('change', () => {
      if (window.forgeAudio) window.forgeAudio.playIronClank();
      update1RM();
    });

    const calcBtn = document.getElementById('1rm-calc-btn');
    if (calcBtn) {
      calcBtn.addEventListener('click', () => {
        if (window.forgeAudio) window.forgeAudio.playIronClank();
        update1RM();
        if (window.showForgeToast) {
          window.showForgeToast('1RM Recalculated', 'Heavy singles and percentage targets updated.');
        }
      });
    }

    // Run initial calculation
    update1RM();
  }

  /* ------------------- MACRO & CALORIE FORGER ------------------- */
  setupMacroCalculator() {
    const weightEl = document.getElementById('macro-weight');
    const goalEl = document.getElementById('macro-goal');
    const activityEl = document.getElementById('macro-activity');
    const btn = document.getElementById('macro-calc-btn');

    const calculateMacros = () => {
      const weight = parseFloat(weightEl?.value) || 75;
      const goal = goalEl?.value || 'hypertrophy';
      const activity = parseFloat(activityEl?.value) || 1.55;

      // Basal Metabolic Rate (Mifflin-St Jeor approx for average athlete)
      let bmr = 10 * weight + 6.25 * 175 - 5 * 26 + 5;
      let tdee = bmr * activity;

      let targetCalories = tdee;
      let proteinGrams = weight * 2.2; // 2.2g per kg bodyweight
      let fatGrams = weight * 0.9;

      if (goal === 'shred') {
        targetCalories = tdee - 500;
        proteinGrams = weight * 2.4; // higher protein when cutting
        fatGrams = weight * 0.8;
      } else if (goal === 'hypertrophy') {
        targetCalories = tdee + 300;
        proteinGrams = weight * 2.2;
        fatGrams = weight * 1.0;
      } else if (goal === 'power') {
        targetCalories = tdee + 550;
        proteinGrams = weight * 2.0;
        fatGrams = weight * 1.1;
      }

      // Remaining calories to carbohydrates (4 cal / g)
      const proteinCals = proteinGrams * 4;
      const fatCals = fatGrams * 9;
      let carbCals = targetCalories - (proteinCals + fatCals);
      if (carbCals < 100) carbCals = 100;
      const carbGrams = carbCals / 4;

      // Update UI
      const calDisplay = document.getElementById('macro-calories-val');
      const proteinDisplay = document.getElementById('macro-protein-val');
      const carbDisplay = document.getElementById('macro-carbs-val');
      const fatDisplay = document.getElementById('macro-fat-val');
      const waterDisplay = document.getElementById('macro-water-val');

      if (calDisplay) calDisplay.innerText = `${Math.round(targetCalories)} kcal`;
      if (proteinDisplay) proteinDisplay.innerText = `${Math.round(proteinGrams)}g`;
      if (carbDisplay) carbDisplay.innerText = `${Math.round(carbGrams)}g`;
      if (fatDisplay) fatDisplay.innerText = `${Math.round(fatGrams)}g`;
      if (waterDisplay) waterDisplay.innerText = `${(weight * 0.045).toFixed(1)} Liters`;
    };

    if (btn) {
      btn.addEventListener('click', () => {
        if (window.forgeAudio) window.forgeAudio.playChime();
        calculateMacros();
        if (window.showForgeToast) {
          window.showForgeToast('Nutrition Matrix Calibrated', 'Optimal macronutrients forged for your physique goal.');
        }
      });
    }

    calculateMacros();
  }

  /* ------------------- WORKOUT SPLIT GENERATOR ------------------- */
  setupSplitGenerator() {
    const daysSelector = document.getElementById('split-days');
    const styleSelector = document.getElementById('split-style');
    const generateBtn = document.getElementById('split-gen-btn');
    const outputContainer = document.getElementById('split-output-container');

    const splitsDatabase = {
      "3-ppl": [
        { day: "Day 1 (Monday)", focus: "Push & Core", zones: "Strength & Machines Zones", exercises: "Barbell Bench Press, Incline Dumbbell Press, Iso-Chest Press, Cable Triceps, Agility Mat Core" },
        { day: "Day 2 (Wednesday)", focus: "Pull & Grip", zones: "Strength & Functional Zones", exercises: "Deadlifts, Lat Pulldowns, Heavy Dumbbell Rows, Kettlebell Swings, Bicep Curls" },
        { day: "Day 3 (Friday)", focus: "Legs & Capacity", zones: "Machines & Cardio Zones", exercises: "Titan 45° Leg Press, Barbell Squats, Romanian Deadlifts, Sled Treadmill Sprints" }
      ],
      "4-upperlower": [
        { day: "Day 1 (Monday)", focus: "Upper Heavy Iron", zones: "Strength Zone", exercises: "Barbell Bench Press, Heavy Dumbbell Rows, Standing Barbell Overhead Press, Incline Dumbbell Bench" },
        { day: "Day 2 (Tuesday)", focus: "Lower Power & Quads", zones: "Machines & Strength Zones", exercises: "Olympic Squats, 45° Leg Press, Dumbbell Walking Lunges, Standing Calf Raises" },
        { day: "Day 3 (Thursday)", focus: "Upper Hypertrophy", zones: "Machines Zone", exercises: "Iso-Lateral Chest Press, Dual-Pulley Lat Pulldown, Cable Crossovers, Lateral Raises" },
        { day: "Day 4 (Friday)", focus: "Lower & Combat HIIT", zones: "Functional & Cardio Zones", exercises: "Romanian Deadlifts, Battle Ropes Slam Intervals, Kettlebell Cleans, Keiser Cycle Sprints" }
      ],
      "5-pro": [
        { day: "Day 1 (Monday)", focus: "Chest & Front Delts", zones: "Strength & Machines Zones", exercises: "Barbell Bench Press, Iso-Lateral Chest Press, Incline Dumbbell Flyes, Cable Pushdowns" },
        { day: "Day 2 (Tuesday)", focus: "Back & Rear Delts", zones: "Machines & Strength Zones", exercises: "Dual-Pulley Lat Pulldown, Heavy Dumbbell Rows, Barbell Deadlifts, Facepulls" },
        { day: "Day 3 (Wednesday)", focus: "Legs Quadriceps Dominant", zones: "Machines Zone", exercises: "45° Titan Leg Press, Barbell Back Squats, Leg Extensions, Lying Leg Curls" },
        { day: "Day 4 (Thursday)", focus: "Shoulders & Arms", zones: "Strength Zone", exercises: "Overhead Barbell Press, Dumbbell Lateral Raises, Hammer Curls, Dips, Skull Crushers" },
        { day: "Day 5 (Friday)", focus: "Functional Combat & Engine", zones: "Functional & Cardio Zones", exercises: "Battle Ropes Waves, Competition Kettlebell Snatches, Curved Treadmill Intervals" }
      ]
    };

    const renderSplit = () => {
      const days = daysSelector?.value || "4";
      const style = styleSelector?.value || "upperlower";
      let key = "4-upperlower";

      if (days === "3") key = "3-ppl";
      else if (days === "5" || days === "6") key = "5-pro";
      else key = "4-upperlower";

      const routine = splitsDatabase[key] || splitsDatabase["4-upperlower"];

      if (outputContainer) {
        outputContainer.innerHTML = routine.map(item => `
          <div class="p-4 rounded-xl bg-black/50 border border-white/10 hover:border-[#e5a93c]/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono text-[#e5a93c] font-bold">${item.day}</span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-[#ff2a2a]/20 text-[#ff4d4d] border border-[#ff2a2a]/30 font-semibold">${item.zones}</span>
            </div>
            <div class="text-white font-heading font-bold text-base mb-1">${item.focus}</div>
            <p class="text-xs text-gray-300 leading-relaxed">${item.exercises}</p>
          </div>
        `).join('');
      }
    };

    if (generateBtn) {
      generateBtn.addEventListener('click', () => {
        if (window.forgeAudio) window.forgeAudio.playChime();
        renderSplit();
        if (window.showForgeToast) {
          window.showForgeToast('Workout Split Generated', 'Your weekly station blueprint is ready.');
        }
      });
    }

    renderSplit();
  }
}

window.forgeFitLab = new ForgeFitLab();
