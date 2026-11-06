/**
 * ORACURE DENTAL SOLUTIONS — Interactive Engine
 * Location: Sarita Vihar, New Delhi
 * Phone / WhatsApp: +91 99909 19344
 */

// Complete Dental Services Database (All 18 Services across 5 Categories)
const DENTAL_SERVICES = {
  // A. Preventive & General Dentistry
  'checkups': {
    id: 'checkups',
    category: 'Preventive & General',
    catSlug: 'preventive',
    title: 'Dental Check-ups',
    shortDesc: 'Regular dental check-ups every six months to detect potential issues early and maintain optimal oral health.',
    fullDesc: 'Regular dental check-ups are recommended every six months to help identify dental problems early before they become complex or painful. At Oracure Dental Solutions, our comprehensive dental examination includes visual tooth-by-tooth inspection, gum tissue evaluation, bite alignment assessment, and screening for oral health conditions at an affordable consultation fee.',
    duration: '30 - 45 mins',
    frequency: 'Every 6 months',
    benefits: ['Early cavity detection', 'Gum disease prevention', 'Cost-effective preventive care', 'Personalized oral hygiene guidance'],
    process: ['Visual intraoral examination', 'Plaque and tartar level assessment', 'Diagnostic imaging if indicated', 'Custom treatment planning & consultation'],
    badge: 'Core Preventive',
    icon: 'stethoscope'
  },
  'cleaning': {
    id: 'cleaning',
    category: 'Preventive & General',
    catSlug: 'preventive',
    title: 'Teeth Cleaning (Scaling & Polishing)',
    shortDesc: 'Modern ultrasonic scaling to remove plaque, calculus, and stains, followed by gentle polishing for healthier gums.',
    fullDesc: 'Professional dental cleaning goes beyond what daily brushing and flossing can achieve. Using modern gentle ultrasonic scaling technology, we carefully remove hardened plaque (tartar) and stubborn surface stains caused by tea, coffee, or food. This is followed by a prophylactic polishing treatment to leave your enamel smooth, refreshed, and resistant to bacterial buildup.',
    duration: '40 - 60 mins',
    frequency: 'Every 6 months',
    benefits: ['Reverses early gingivitis', 'Eliminates persistent bad breath', 'Removes external coffee & tea stains', 'Leaves teeth smooth and refreshed'],
    process: ['Ultrasonic scaler plaque dislodgement', 'Precision subgingival cleaning where needed', 'Prophylaxis polishing paste application', 'Enamel remineralization advice'],
    badge: 'Popular Routine Care',
    icon: 'sparkles'
  },
  'fillings': {
    id: 'fillings',
    category: 'Preventive & General',
    catSlug: 'preventive',
    title: 'Fillings & Sealants',
    shortDesc: 'Cosmetic tooth-colored composite restorations and children’s GIC fillings, plus preventive dental sealants.',
    fullDesc: 'When tooth decay is identified early, composite restorations allow us to rebuild the lost tooth structure seamlessly. We utilize shade-matched nano-hybrid composite resins that bond directly to your enamel, preserving maximum natural tooth structure. For children and high-wear areas, biocompatible Glass Ionomer Cement (GIC) fillings release fluoride to strengthen the tooth. We also provide protective dental fissure sealants to seal deep molar grooves against future decay.',
    duration: '30 - 50 mins per tooth',
    frequency: 'As clinically required',
    benefits: ['Natural tooth-colored appearance', 'Fluoride-releasing pediatric options', 'Prevents decay progression', 'Durable and biocompatible'],
    process: ['Gentle removal of decayed tissue', 'Surface conditioning and bonding agent application', 'Layered composite resin placement & light curing', 'Anatomical shaping and bite adjustment'],
    badge: 'Restorative Care',
    icon: 'shield-check'
  },
  'xrays': {
    id: 'xrays',
    category: 'Preventive & General',
    catSlug: 'preventive',
    title: 'Digital Dental X-rays',
    shortDesc: 'High-definition digital radiography providing crystal-clear diagnostics with significantly reduced radiation exposure.',
    fullDesc: 'Digital dental X-rays provide our clinicians with essential views of areas invisible to the naked eye—such as interdental cavities, bone levels beneath the gumline, root configurations, and impacted teeth. Modern digital radiography delivers instant high-resolution imaging with up to 80% reduced radiation compared to conventional film X-rays.',
    duration: '5 - 10 mins',
    frequency: 'Diagnostic necessity',
    benefits: ['Instant high-resolution digital imaging', 'Significantly reduced radiation', 'Identifies hidden interdental decay', 'Aids accurate treatment precision'],
    process: ['Comfortable sensor positioning', 'Instant low-dose exposure', 'Chairside screen review with dentist', 'Digital record archiving'],
    badge: 'Modern Diagnostic',
    icon: 'scan'
  },
  'mouthguards': {
    id: 'mouthguards',
    category: 'Preventive & General',
    catSlug: 'preventive',
    title: 'Dental Mouth Guards',
    shortDesc: 'Custom-fitted protective mouthguards for sports activities and night guards for nocturnal teeth grinding (bruxism).',
    fullDesc: 'Custom dental mouthguards provide superior fit, comfort, and protection compared to generic over-the-counter options. At Oracure Dental Solutions, we design customized night guards for patients suffering from nocturnal bruxism (clenching and grinding), helping alleviate jaw pain and prevent enamel chipping. We also fabricate impact-absorbing sports mouthguards for athletes.',
    duration: '2 brief appointments',
    frequency: 'Custom fabricated',
    benefits: ['Relieves morning jaw tension and headaches', 'Shields enamel from wear and fracture', 'Comfortable snug custom fit', 'High-grade durable medical polymers'],
    process: ['Digital or precision dental impression', 'Custom laboratory vacuum-forming', 'Fitting and occlusion check', 'Care and cleaning instructions'],
    badge: 'Preventive Protection',
    icon: 'shield'
  },

  // B. Cosmetic Dentistry & Smile Makeovers
  'whitening': {
    id: 'whitening',
    category: 'Cosmetic Dentistry',
    catSlug: 'cosmetic',
    title: 'Professional Teeth Whitening',
    shortDesc: 'Safe, clinical in-office whitening and Zoom bleaching systems to lift deep stains and brighten your natural smile.',
    fullDesc: 'Over time, enamel naturally absorbs pigments from dietary habits such as turmeric, tea, coffee, and tobacco, as well as natural aging. Our professional teeth whitening treatments utilize clinically proven bleaching formulations—including advanced Zoom bleaching systems—under controlled dental supervision. We protect your gums with an insulating barrier while activating the whitening gel to break down internal discolorations safely.',
    duration: '45 - 60 mins',
    frequency: 'Annual or as desired',
    benefits: ['Visible brightening in a single session', 'Under clinical supervision for gum safety', 'Custom sensitivity-reduction protocols', 'Long-lasting natural luster'],
    process: ['Gum barrier application to prevent sensitivity', 'Application of professional bleaching formula', 'Light-activation in monitored cycles', 'Desensitizing fluoride varnish finish'],
    badge: 'Signature Cosmetic',
    icon: 'smile'
  },
  'bonding': {
    id: 'bonding',
    category: 'Cosmetic Dentistry',
    catSlug: 'cosmetic',
    title: 'Cosmetic Dental Bonding',
    shortDesc: 'Direct composite bonding to repair minor chips, close small gaps, and refine uneven tooth edges in a single visit.',
    fullDesc: 'Dental bonding is one of the most conservative and cost-effective cosmetic dental procedures. By applying a tooth-colored composite resin directly to the tooth surface, our dental clinicians can repair chipped enamel, close modest diastemas (spaces between teeth), or cover localized discolorations. The procedure requires minimal to no enamel reduction and is typically completed in just one comfortable appointment.',
    duration: '30 - 60 mins',
    frequency: 'Single appointment',
    benefits: ['No extensive tooth preparation needed', 'Completed in a single visit', 'Custom color-matched to natural teeth', 'Budget-friendly smile enhancement'],
    process: ['Shade selection under natural light', 'Mild conditioning of the tooth surface', 'Artistic sculpting of composite resin', 'High-gloss polishing and bite refinement'],
    badge: 'Same-Day Makeover',
    icon: 'wand'
  },
  'cosmetic-procedures': {
    id: 'cosmetic-procedures',
    category: 'Cosmetic Dentistry',
    catSlug: 'cosmetic',
    title: 'Cosmetic Dental Procedures',
    shortDesc: 'Hollywood smile designs, gingival depigmentation, teeth bleaching, and dental jewellery crystal placements.',
    fullDesc: 'Oracure Dental Solutions offers an expansive repertoire of aesthetic dental procedures tailored to your unique facial features. From comprehensive Hollywood smile redesigns to laser gingival depigmentation (lightening dark or hyper-pigmented gums for a harmonized pink aesthetic), we blend clinical artistry with digital diagnostics. We also offer certified safe tooth jewellery application with non-invasive bonding that does not harm underlying enamel.',
    duration: 'Varies by treatment',
    frequency: 'Personalized treatment plan',
    benefits: ['Comprehensive facial-dental harmony', 'Gingival aesthetic depigmentation', 'Non-invasive tooth jewellery options', 'Tailored smile consultation'],
    process: ['Facial and smile symmetry analysis', 'Digital preview of proposed modifications', 'Clinical procedure execution', 'Post-procedure aesthetic review'],
    badge: 'Smile Architecture',
    icon: 'gem'
  },
  'reshaping': {
    id: 'reshaping',
    category: 'Cosmetic Dentistry',
    catSlug: 'cosmetic',
    title: 'Teeth Reshaping (Odontoplasty)',
    shortDesc: 'Gentle enamel contouring to soften sharp edges, level irregular lengths, and improve overall dental harmony.',
    fullDesc: 'Teeth reshaping, also known as enameloplasty or odontoplasty, is a delicate cosmetic technique where minute amounts of surface enamel are gently removed to improve the contour, balance, or length of a tooth. It is an ideal, painless solution for patients with slightly pointed canine tips, irregular incisal edges, or slight overlaps, instantly creating a more harmonious smile outline without anesthesia.',
    duration: '20 - 40 mins',
    frequency: 'Single session',
    benefits: ['Immediate aesthetic refinement', 'Painless with no anesthesia required', 'Smooths rough or chipped enamel borders', 'Improves smile line alignment'],
    process: ['Careful marking of contour boundaries', 'Micro-contouring using precision diamond points', 'Smoothing of incisal margins', 'Diamond paste final polishing'],
    badge: 'Subtle Perfection',
    icon: 'scissors'
  },
  'veneers-crowns': {
    id: 'veneers-crowns',
    category: 'Cosmetic Dentistry',
    catSlug: 'cosmetic',
    title: 'Veneers & Aesthetic Crowns',
    shortDesc: 'Ultra-thin porcelain veneers and metal-free ceramic crowns for stunning aesthetic improvements and tooth reinforcement.',
    fullDesc: 'Porcelain veneers and all-ceramic crowns represent the gold standard in cosmetic smile restoration. Veneers are ultra-thin shells crafted from high-translucency dental ceramic that bond to the facial surface of front teeth, masking deep discolorations, severe wear, or structural flaws. For teeth requiring greater structural reinforcement, metal-free zirconia and E-max ceramic crowns provide lifelike aesthetics along with remarkable chewing strength.',
    duration: '2 - 3 visits',
    frequency: 'Durable long-term solution',
    benefits: ['Lifelike enamel translucency & color depth', 'Stain-resistant porcelain surface', 'Strengthens weakened or fractured teeth', 'Custom crafted to facial symmetry'],
    process: ['Conservative aesthetic preparation', 'High-accuracy dental impressions', 'Temporary aesthetic restoration', 'Permanent bonding with resin cements'],
    badge: 'Premium Aesthetics',
    icon: 'award'
  },

  // C. Restorative & Advanced Dentistry
  'implants': {
    id: 'implants',
    category: 'Restorative & Advanced',
    catSlug: 'restorative',
    title: 'Dental Implants',
    shortDesc: 'Biocompatible titanium dental implants to replace missing single or multiple teeth with permanent structural support.',
    fullDesc: 'Dental implants are the most advanced, natural-feeling solution for replacing one or more missing teeth. An implant consists of a medical-grade biocompatible titanium post surgically positioned into the jawbone, where it integrates naturally with the surrounding bone (osseointegration) over several months. Once integrated, a custom abutment and lifelike ceramic crown are attached, restoring complete chewing efficiency and preventing jawbone loss. Note: Treatment success depends on individual bone density and oral hygiene habits; we provide honest clinical evaluations without unrealistic lifetime claims.',
    duration: 'Multi-phase planning',
    frequency: 'Long-term replacement',
    benefits: ['Prevents jawbone resorption after tooth loss', 'Does not require grinding adjacent healthy teeth', 'Restores natural chewing power and stability', 'Permanent, natural look and feel'],
    process: ['Digital X-ray & bone density assessment', 'Gentle surgical implant post placement', 'Healing and osseointegration period', 'Custom abutment & aesthetic crown fitting'],
    badge: 'Advanced Replacement',
    icon: 'anchor'
  },
  'dentures': {
    id: 'dentures',
    category: 'Restorative & Advanced',
    catSlug: 'restorative',
    title: 'Dentures & Fixed Bridges',
    shortDesc: 'Modern fixed porcelain bridges and lightweight partial or full dentures to restore chewing function and speech.',
    fullDesc: 'For patients missing several or all teeth, modern prosthetic dentistry offers comfortable, stable, and natural-looking solutions. Fixed dental bridges span the gap where teeth are missing, anchored securely to adjacent natural teeth or implants. For extensive tooth loss, we design custom complete dentures and flexible partial dentures that fit securely to your ridge contour, restoring chewing confidence, clear pronunciation, and facial muscle support.',
    duration: '3 - 4 appointments',
    frequency: 'Custom restorative care',
    benefits: ['Restores essential chewing efficiency', 'Supports facial and lip structure', 'Customized gum shade and tooth alignment', 'Options for fixed and removable prosthetics'],
    process: ['Diagnostic ridge and bite assessment', 'Custom impression trays for exact fit', 'Wax try-in for aesthetic verification', 'Final delivery, occlusion balance, and review'],
    badge: 'Functional Restoration',
    icon: 'layers'
  },
  'rct': {
    id: 'rct',
    category: 'Restorative & Advanced',
    catSlug: 'restorative',
    title: 'Root Canal Treatment (Endodontics)',
    shortDesc: 'Gentle endodontic care using motorized endomotors and digital imaging to relieve pain and preserve your natural tooth.',
    fullDesc: 'Root canal treatment is needed when bacterial infection or deep decay reaches the dental pulp—the inner chamber containing nerves and blood vessels—often causing intense sensitivity, throbbing pain, or localized swelling. At Oracure Dental Solutions, root canal procedures are performed using modern rotary endomotors, flexible nickel-titanium file systems, and digital apex locators. The infected pulp is carefully cleaned, disinfected, and hermetically sealed. We prioritize patient comfort with localized anesthesia and reassuring guidance at every step.',
    duration: '1 - 2 visits (depending on infection)',
    frequency: 'Tooth preservation procedure',
    benefits: ['Preserves your natural tooth from extraction', 'Alleviates acute pulpitis and throbbing pain', 'Rotary endodontics for precision cleaning', 'Followed by protective crown reinforcement'],
    process: ['Local anesthesia for patient comfort', 'Access opening to the infected canal system', 'Rotary instrumentation & antibacterial irrigation', 'Biocompatible gutta-percha seal & core restoration'],
    badge: 'Tooth Preserving',
    icon: 'activity'
  },
  'lasers': {
    id: 'lasers',
    category: 'Restorative & Advanced',
    catSlug: 'restorative',
    title: 'Laser Dentistry',
    shortDesc: 'Minimally invasive soft tissue laser therapy for gum recontouring, frenectomy, and clinical sterilization.',
    fullDesc: 'Modern dental lasers bring remarkable precision and comfort to soft tissue dental procedures. Where clinically appropriate, our dental clinicians utilize soft tissue diode lasers for aesthetic gum contouring, treatment of gummy smiles, frenectomies, and periodontal pocket sterilization. Dental lasers cauterize blood vessels and nerve endings as they work, resulting in minimal to no bleeding, reduced post-operative swelling, and accelerated healing.',
    duration: '20 - 45 mins',
    frequency: 'As clinically indicated',
    benefits: ['Minimally invasive with reduced discomfort', 'Minimal bleeding and localized swelling', 'Accelerated tissue healing and recovery', 'High precision for delicate gum contours'],
    process: ['Clinical evaluation of soft tissue condition', 'Targeted laser energy calibration', 'Precise, bloodless tissue modification', 'Simple, comfortable post-care recovery'],
    badge: 'Advanced Tech',
    icon: 'zap'
  },

  // D. Surgical & Emergency Dentistry
  'extractions': {
    id: 'extractions',
    category: 'Surgical & Emergency',
    catSlug: 'surgical',
    title: 'Tooth Extractions & Wisdom Teeth',
    shortDesc: 'Gentle, atraumatic extractions and specialized surgical removal of problematic impacted wisdom teeth.',
    fullDesc: 'While preserving your natural teeth is always our primary clinical goal, certain situations—such as severe non-restorable decay, advanced periodontal bone loss, or painfully impacted third molars (wisdom teeth)—make tooth extraction the safest course of action. At Oracure, extractions are approached with utmost gentleness using atraumatic elevation techniques and effective local anesthesia. For impacted wisdom teeth, surgical extractions are performed with thorough diagnostic planning to safeguard adjacent anatomical structures.',
    duration: '30 - 60 mins',
    frequency: 'As clinically required',
    benefits: ['Relieves pain from severe impactions and pericoronitis', 'Atraumatic techniques to preserve alveolar bone', 'Thorough post-operative guidance and support', 'Effective localized pain management'],
    process: ['Digital X-ray assessment of root curvature', 'Gentle local anesthetic administration', 'Atraumatic elevation and careful extraction', 'Hemostatic dressing and post-care protocol'],
    badge: 'Gentle Surgical',
    icon: 'alert-circle'
  },
  'oral-surgery': {
    id: 'oral-surgery',
    category: 'Surgical & Emergency',
    catSlug: 'surgical',
    title: 'Oral Surgical Procedures',
    shortDesc: 'Focused minor oral surgical procedures including pre-prosthetic alveoloplasty, cyst management, and frenectomy.',
    fullDesc: 'Oracure Dental Solutions provides targeted oral surgical interventions based on thorough clinical examination and diagnostic imaging. Our clinical procedures include pre-prosthetic ridge smoothing (alveoloplasty) to ensure comfortable denture seating, surgical frenectomy to correct tongue-ties or speech impediments, and conservative surgical management of localized cysts. Every procedure is performed under strict sterile protocols.',
    duration: '45 - 90 mins',
    frequency: 'Clinical requirement',
    benefits: ['Strict sterile surgical protocols', 'Pre-prosthetic bone contouring for comfortable dentures', 'Clear pre- and post-operative guidance', 'Personalized healing follow-ups'],
    process: ['Comprehensive clinical and radiological mapping', 'Sterile field preparation & anesthesia', 'Delicate surgical execution', 'Structured post-procedure follow-up visit'],
    badge: 'Clinical Precision',
    icon: 'heart-pulse'
  },
  'emergency': {
    id: 'emergency',
    category: 'Surgical & Emergency',
    catSlug: 'surgical',
    title: 'Emergency Dental Care',
    shortDesc: 'Prompt clinical triage and relief for sudden dental trauma, acute toothaches, fractured teeth, and severe swelling.',
    fullDesc: 'Dental emergencies such as severe toothaches, facial swelling from acute infections, broken crowns, or dental trauma require urgent, compassionate attention. While we operate by consultation rather than 24/7 hospital shifts, we offer priority emergency triage during clinic hours. If you are experiencing sudden dental pain, please call our clinic directly at +91 99909 19344 for immediate telephone guidance and priority slot scheduling.',
    duration: 'Immediate priority triage',
    frequency: 'Urgent care',
    benefits: ['Rapid pain relief and diagnosis', 'Priority appointment coordination', 'Treatment for trauma, fractures, and acute pulpitis', 'Clear telephone guidance before you arrive'],
    process: ['Urgent telephone triage on +91 99909 19344', 'Rapid diagnostic clinical examination & X-ray', 'Immediate pain management and stabilization', 'Follow-up definitive restorative plan'],
    badge: 'Urgent Care',
    icon: 'phone-call'
  },

  // E. Family & Children's Dentistry
  'paediatric': {
    id: 'paediatric',
    category: 'Family & Children’s',
    catSlug: 'paediatric',
    title: 'Paediatric Dentistry (Kids Care)',
    shortDesc: 'Child-friendly dental care, preventive fluoride treatments, cavity fillings, and gentle habit guidance.',
    fullDesc: 'Creating positive, anxiety-free dental memories during childhood builds the foundation for a lifetime of healthy smiles. Our paediatric dental care is warm, patient, and tailored to young minds. We provide preventive fluoride applications, cavity protection with dental sealants, gentle GIC restorations for milk teeth, and guidance on thumb-sucking or tongue-thrusting habits in a relaxed, friendly environment.',
    duration: '30 - 45 mins',
    frequency: 'Every 6 months',
    benefits: ['Warm, child-friendly approach with zero fear', 'Protects primary teeth essential for jaw development', 'Fluoride therapy and preventive cavity sealants', 'Educates children on proper brushing techniques'],
    process: ['Friendly familiarization with the dental chair', 'Gentle, playful visual examination', 'Preventive cleaning or fluoride application', 'Praise, reward stickers, and parent guidance'],
    badge: 'Kids & Family',
    icon: 'smile-plus'
  }
};

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
  initServiceTabs();
  initServiceModal();
  initBeforeAfterSlider();
  initFaqAccordion();
  initAppointmentForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMobileMenuBtn');
  const menuDrawer = document.getElementById('mobileMenuDrawer');
  const menuLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !menuDrawer) return;

  function openMenu() {
    menuDrawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuDrawer.classList.add('hidden');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   2. Sticky Header with Scroll Effect
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-sm', 'bg-opacity-95');
    } else {
      header.classList.remove('shadow-sm', 'bg-opacity-95');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. Service Tabs & Category Filtering
   ========================================================================== */
function initServiceTabs() {
  const filterBtns = document.querySelectorAll('.service-tab-btn');
  const serviceCards = document.querySelectorAll('.service-grid-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Update active tab buttons
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#123F43]', 'text-white');
        b.classList.add('bg-white', 'text-[#183B45]', 'border-border');
      });

      btn.classList.add('bg-[#123F43]', 'text-white');
      btn.classList.remove('bg-white', 'text-[#183B45]', 'border-border');

      // Filter cards
      serviceCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   4. Interactive Service Modal (Deep Clinical View)
   ========================================================================== */
function initServiceModal() {
  const modalOverlay = document.getElementById('serviceModalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalTitle = document.getElementById('modalServiceTitle');
  const modalCategory = document.getElementById('modalServiceCategory');
  const modalDesc = document.getElementById('modalServiceDesc');
  const modalDuration = document.getElementById('modalServiceDuration');
  const modalFrequency = document.getElementById('modalServiceFrequency');
  const modalBenefitsList = document.getElementById('modalServiceBenefits');
  const modalProcessList = document.getElementById('modalServiceProcess');
  const modalBookBtn = document.getElementById('modalBookServiceBtn');

  let currentSelectedServiceId = null;

  // Open modal trigger
  window.openServiceModal = function(serviceId) {
    const service = DENTAL_SERVICES[serviceId];
    if (!service || !modalOverlay) return;

    currentSelectedServiceId = serviceId;

    modalTitle.textContent = service.title;
    modalCategory.textContent = service.category;
    modalDesc.textContent = service.fullDesc;
    modalDuration.textContent = service.duration;
    modalFrequency.textContent = service.frequency;

    // Benefits list
    modalBenefitsList.innerHTML = '';
    service.benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-sm text-[#566B6D]';
      li.innerHTML = `
        <svg class="w-4 h-4 text-[#36A99B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${benefit}</span>
      `;
      modalBenefitsList.appendChild(li);
    });

    // Process list
    modalProcessList.innerHTML = '';
    service.process.forEach((step, idx) => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-sm text-[#566B6D]';
      li.innerHTML = `
        <span class="w-5 h-5 rounded-full bg-[#D9F0E9] text-[#123F43] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">${idx + 1}</span>
        <span>${step}</span>
      `;
      modalProcessList.appendChild(li);
    });

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Modal "Book This Service" Action
  if (modalBookBtn) {
    modalBookBtn.addEventListener('click', () => {
      closeModal();
      if (currentSelectedServiceId) {
        selectServiceInForm(currentSelectedServiceId);
      }
    });
  }
}

// Helper to pre-select a service in the booking form & scroll to it
window.selectServiceInForm = function(serviceKey) {
  const serviceSelect = document.getElementById('appointmentService');
  const appointmentSection = document.getElementById('appointment');

  if (serviceSelect && serviceKey) {
    // Look up matching option by value
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].value === serviceKey) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (appointmentSection) {
    appointmentSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('appointmentName');
    if (nameInput) setTimeout(() => nameInput.focus(), 600);
  }
};

/* ==========================================================================
   5. Before / After Smile Transformation Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('baSliderContainer');
  const overlay = document.getElementById('baSliderOverlay');
  const handle = document.getElementById('baSliderHandle');

  if (!container || !overlay || !handle) return;

  let isDragging = false;

  function updateSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let position = ((x - rect.left) / rect.width) * 100;

    // Clamp between 5% and 95%
    if (position < 5) position = 5;
    if (position > 95) position = 95;

    overlay.style.width = `${position}%`;
    handle.style.left = `${position}%`;
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  // Touch Support for Mobile
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });
}

/* ==========================================================================
   6. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
        }
      });

      // Toggle clicked item
      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   7. Appointment Booking Form — Real WhatsApp Integration & Validation
   ========================================================================== */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const phoneInput = document.getElementById('appointmentPhone');
  const dateInput = document.getElementById('appointmentDate');
  const statusContainer = document.getElementById('formStatusNotification');

  if (!form) return;

  // Set minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('appointmentName').value.trim();
    const phone = phoneInput.value.trim();
    const email = document.getElementById('appointmentEmail').value.trim();
    const serviceSelect = document.getElementById('appointmentService');
    const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
    const date = dateInput.value;
    const timeSlot = document.getElementById('appointmentTime').value;
    const notes = document.getElementById('appointmentNotes').value.trim();

    // Validation
    if (!name) {
      showToast('Please provide your full name.', 'error');
      return;
    }

    // Phone validation for Indian 10-digit number or general 10 digits
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'error');
      phoneInput.focus();
      return;
    }

    if (!date) {
      showToast('Please select your preferred consultation date.', 'error');
      dateInput.focus();
      return;
    }

    // Compose polite, structured WhatsApp message
    const waMessage = 
`*NEW APPOINTMENT ENQUIRY — ORACURE DENTAL SOLUTIONS*
---------------------------------------
👤 *Patient Name:* ${name}
📞 *Contact Phone:* ${phone}
📧 *Email:* ${email || 'Not provided'}
🦷 *Treatment / Service:* ${serviceText}
📅 *Preferred Date:* ${date}
⏰ *Preferred Time:* ${timeSlot}
📝 *Notes / Symptoms:* ${notes || 'General consultation enquiry'}
---------------------------------------
_Sent via Oracure Dental Solutions Official Website (Sarita Vihar, New Delhi)_`;

    // Construct WhatsApp Click-to-Chat URL
    const waUrl = `https://wa.me/919990919344?text=${encodeURIComponent(waMessage)}`;

    // Show honest, transparent notification container
    if (statusContainer) {
      statusContainer.innerHTML = `
        <div class="p-6 bg-[#D9F0E9] border border-[#36A99B] rounded-2xl text-[#123F43] mt-6 transition-all animate-fadeIn">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-[#123F43] text-white flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-lg text-[#183B45] mb-1">Enquiry Prepared & Ready!</h4>
              <p class="text-sm text-[#566B6D] mb-3 leading-relaxed">
                Thank you, <strong>${name}</strong>! Your appointment enquiry has been prepared. We are redirecting you to WhatsApp so our clinic desk at Sarita Vihar can confirm your consultation slot immediately.
              </p>
              <div class="flex flex-wrap items-center gap-3">
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp text-sm py-2 px-4 shadow-sm">
                  <span>Open WhatsApp Enquiry</span>
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <a href="tel:+919990919344" class="btn-secondary text-sm py-2 px-4">
                  <span>Or Call Directly: +91 99909 19344</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Launch WhatsApp in new tab
    window.open(waUrl, '_blank');
    showToast('Redirecting to WhatsApp to send your enquiry details...', 'success');
  });
}

/* ==========================================================================
   8. Smooth Scrolling Anchor Links
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ==========================================================================
   9. Lightweight Toast Notification Helper
   ========================================================================== */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'fixed top-5 right-5 z-[9999] flex flex-col gap-2 max-w-sm pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgColor = type === 'error' ? 'bg-red-800 text-white' : type === 'success' ? 'bg-[#123F43] text-white' : 'bg-[#183B45] text-white';
  
  toast.className = `${bgColor} px-4 py-3 rounded-xl shadow-xl text-sm font-medium flex items-center justify-between gap-3 pointer-events-auto transform translate-y-[-10px] opacity-0 transition-all duration-300`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="opacity-70 hover:opacity-100 ml-2" onclick="this.parentElement.remove()">&times;</button>
  `;

  toastContainer.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-[-10px]', 'opacity-0');
  }, 10);

  // Auto remove after 4.5 seconds
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-[-10px]');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

/* ==========================================================================
   10. Patient Philosophy Video Sound Controller
   ========================================================================== */
window.togglePhilosophyVideoSound = function() {
  const video = document.getElementById('philosophyVideo');
  const btn = document.getElementById('videoSoundToggleBtn');
  if (!video) return;

  video.muted = !video.muted;
  if (btn) {
    if (video.muted) {
      btn.innerHTML = `
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
        </svg>
      `;
      btn.title = "Unmute Video";
    } else {
      btn.innerHTML = `
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
        </svg>
      `;
      btn.title = "Mute Video";
    }
  }
};


// ==========================================
// REAL PATIENT TRANSFORMATIONS & LIGHTBOX
// ==========================================
const PATIENT_CASES = {
  'case-1': {
    title: 'Comprehensive Braces & Anterior Space Closure',
    category: 'Fixed Orthodontics',
    doctor: 'Dr. Nasir Khan • Consultant Orthodontist',
    image: 'patient-transformation-braces-girl.jpg',
    desc: 'Patient presented with significant anterior gaps, missing lateral incisor space, and irregular dental alignment. Treated using precision fixed orthodontic brackets, continuous archwire torque biomechanics, and fixed lingual retention for permanent stability.',
    quote: '"I used to hide my smile during family gatherings and photographs. Now I can't stop laughing and showing off my straight, gap-free smile! Thank you Dr. Nasir Khan!"',
    highlights: [
      '100% Space Closure with Natural Arch Form',
      'Continuous Low-Friction Torque Control',
      'Fixed Lingual Wire Retention for Lifelong Alignment',
      'Radiant, Uninhibited Patient Smile'
    ],
    whatsappText: 'Hello Dr. Nasir Khan, I saw Case 01 (Orthodontic Braces Transformation) on your website and would like to enquire about teeth straightening.'
  },
  'case-2': {
    title: 'Severe Crossbite & Anterior Crowding Correction',
    category: 'Ceramic Aesthetic Braces',
    doctor: 'Dr. Nasir Khan • Consultant Orthodontist',
    image: 'patient-transformation-orthodontics-boy.jpg',
    desc: 'Teenage patient with severe lower-upper anterior crowding, anterior crossbite, and functional chewing difficulty. Corrected using tooth-colored aesthetic ceramic brackets and gentle force systems, establishing ideal occlusion and facial balance.',
    quote: '"My teeth used to overlap badly and biting was uncomfortable. Today my teeth are completely straight, eating is easy, and my confidence is at an all-time high!"',
    highlights: [
      'Discreet Tooth-Colored Ceramic Aesthetic Brackets',
      'Anterior Crossbite & Overcrowding Fully Resolved',
      'Harmonious Jaw Alignment & Balanced Profile',
      'Greatly Improved Chewing Function'
    ],
    whatsappText: 'Hello Dr. Nasir Khan, I saw Case 02 (Ceramic Braces and Crossbite) on your website and would like to enquire about orthodontic treatment.'
  },
  'case-3': {
    title: 'Midline Diastema (Front Teeth Gap) Aesthetic Closure',
    category: 'Cosmetic Smile Makeover',
    doctor: 'Dr. Nasir Khan • Aesthetic Specialist',
    image: 'patient-transformation-gap-closure.jpg',
    desc: 'Prominent central front tooth spacing closed with minimally invasive aesthetic smile sculpting, matching natural tooth contours and optical translucency.',
    quote: '"Done so quickly and painlessly! The gap is gone and it looks completely natural like I was born with this smile."',
    highlights: [
      'Zero-Prep Minimally Invasive Cosmetic Enhancement',
      'Seamless Shade, Optical Gradient & Texture Match',
      'Immediate Result with Restored Aesthetic Confidence',
      'Natural Incisal Edge Contour'
    ],
    whatsappText: 'Hello Dr. Nasir Khan, I saw Case 03 (Gap Closure) on your website and would like to enquire about closing my teeth gap.'
  },
  'case-4': {
    title: 'Traumatic Front Tooth Fracture Aesthetic Repair',
    category: 'Restorative Dentistry',
    doctor: 'Dr. Nasir Khan • Dental Surgeon',
    image: 'patient-transformation-broken-tooth-restoration.jpg',
    desc: 'Accidental fracture of the maxillary central incisor involving enamel and dentin. Restored using layered biomimetic aesthetic restorative material matching the multi-chromatic hues and natural surface micro-texture of adjacent teeth.',
    quote: '"I was terrified I'd lose my front tooth. Dr. Nasir Khan rebuilt it so flawlessly that no one can tell it was ever broken!"',
    highlights: [
      'Immediate Relief & Conservation of Natural Tooth',
      'Biomimetic Layered Restorative Protocol',
      'Natural Incisal Edge Translucency & Shape',
      'Full Functional Biting Recovery'
    ],
    whatsappText: 'Hello Dr. Nasir Khan, I saw Case 04 (Broken Tooth Restoration) on your website and would like to enquire about tooth repair.'
  },
  'case-5': {
    title: 'Full Anterior Smile Reconstruction & Rehabilitation',
    category: 'Full Smile Reconstruction',
    doctor: 'Dr. Nasir Khan & Dental Team',
    image: 'patient-transformation-full-smile-rehabilitation.jpg',
    desc: 'Patient presented with severely decayed, broken front teeth and loss of vertical dimension. Reconstructed with high-durability aesthetic ceramic crowns, restoring anterior guidance and giving the patient complete confidence.',
    quote: '"I hadn't smiled openly in years because of broken teeth. This treatment gave me my life back. I feel happy looking in the mirror every morning!"',
    highlights: [
      'Complete Anterior Arch Restoration',
      'Total Elimination of Pain & Infection',
      'High-Durability Aesthetic Ceramic Crowns',
      'Complete Transformation in Smile Confidence'
    ],
    whatsappText: 'Hello Dr. Nasir Khan, I saw Case 05 (Full Arch Reconstruction) on your website and would like to enquire about smile makeovers.'
  }
};

window.openLightboxModal = function(caseId) {
  const caseData = PATIENT_CASES[caseId];
  if (!caseData) return;
  
  const overlay = document.getElementById('caseLightboxOverlay');
  if (!overlay) return;
  
  const imgEl = document.getElementById('lightboxImg');
  const catEl = document.getElementById('lightboxCategory');
  const docEl = document.getElementById('lightboxDoctor');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');
  const quoteEl = document.getElementById('lightboxQuote');
  const waBtn = document.getElementById('lightboxWhatsAppBtn');
  
  if (imgEl) imgEl.src = caseData.image;
  if (catEl) catEl.textContent = caseData.category;
  if (docEl) docEl.textContent = caseData.doctor;
  if (titleEl) titleEl.textContent = caseData.title;
  if (descEl) descEl.textContent = caseData.desc;
  if (quoteEl) quoteEl.textContent = caseData.quote;
  
  const highlightsContainer = document.getElementById('lightboxHighlights');
  if (highlightsContainer) {
    highlightsContainer.innerHTML = '';
    caseData.highlights.forEach(h => {
      const div = document.createElement('div');
      div.className = 'flex items-center gap-2';
      div.innerHTML = `<svg class="w-3.5 h-3.5 text-[#36A99B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>${h}</span>`;
      highlightsContainer.appendChild(div);
    });
  }
  
  if (waBtn) {
    waBtn.href = `https://wa.me/919990919344?text=${encodeURIComponent(caseData.whatsappText)}`;
  }
  
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
};

window.closeLightboxModal = function() {
  const overlay = document.getElementById('caseLightboxOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightboxModal();
  }
});
