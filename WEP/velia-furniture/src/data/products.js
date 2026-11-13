// Comprehensive Luxury Product Catalog for VÉLIA ATELIER
// Featuring all 21 furniture images from user's collection

export const USD_TO_INR_RATE = 93.68;

export const formatINR = (amount) => {
  const num = Number(amount) || 0;
  const hasDecimals = Math.abs(num % 1) > 0.001;
  return `₹${num.toLocaleString('en-IN', {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  })}`;
};

export const PRODUCTS = [
  {
    id: "vel-01",
    name: "Nordic Haven 3-Seater Sofa",
    tagline: "Fluted wood backdrop with tailored woven cushions",
    category: "Sofas & Seating",
    categorySlug: "sofas-seating",
    room: "Living Room",
    price: 173305.65,
    originalPrice: 206093.21,
    discountBadge: "Bestseller",
    rating: 4.9,
    reviewsCount: 84,
    inStock: true,
    isBestseller: true,
    isFeatured: true,
    image: "./images/products/sofa-scandi-3seater.webp",
    altImages: [
      "./images/products/sofa-scandi-3seater.webp",
      "./images/products/table-coffee-slatted.webp"
    ],
    material: "High-Resilience Linen Blend & Solid Walnut Legs",
    dimensions: "W: 210cm × D: 92cm × H: 84cm",
    finish: "Muted Mist Grey & Charcoal Accents",
    sku: "VEL-SOF-NH3S",
    description: "The Nordic Haven sofa unites architectural calmness with cloud-like comfort. Built around an engineered kiln-dried hardwood frame, wrapped in tactile textured linen with tailored horizontal bolster pillows and tapered solid walnut legs.",
    features: [
      "Kiln-dried FSC-certified hardwood inner frame",
      "High-density ergonomic memory-foam cushioning",
      "Stain-resistant performance woven linen upholstery",
      "Tapered solid walnut legs with brass leveler glides"
    ],
    leadTime: "In stock • Express white-glove delivery in 3–5 business days"
  },
  {
    id: "vel-02",
    name: "Heritage Tufted Rocking Lounge Chair & Ottoman",
    tagline: "Ergonomic deep diamond-tufting with sculptured curved rockers",
    category: "Sofas & Seating",
    categorySlug: "sofas-seating",
    room: "Living Room",
    price: 119908.78,
    originalPrice: 139581.31,
    discountBadge: "Artisan Pick",
    rating: 5.0,
    reviewsCount: 112,
    inStock: true,
    isBestseller: true,
    isFeatured: true,
    image: "./images/products/chair-tufted-rocking-ottoman.jpg",
    altImages: [
      "./images/products/chair-tufted-rocking-ottoman.jpg",
      "./images/products/sofa-scandi-3seater.webp"
    ],
    material: "Full-Grain Saddle Vegan Leather & Solid Walnut Rockers",
    dimensions: "Chair: W: 78cm × D: 95cm × H: 96cm | Ottoman: W: 48cm × D: 42cm × H: 40cm",
    finish: "Aged Charcoal & Walnut Hand-Rubbed Oil",
    sku: "VEL-CHR-HTRC",
    description: "A sanctuary of slow living. The Heritage Rocking Chair marries mid-century diamond tufting with flowing, steam-bent solid wood arms and curved rocking runners. Includes the matching cushioned tufted ottoman with internal hidden storage.",
    features: [
      "Steam-bent solid walnut armrests and curved rocking gliders",
      "Deep button-tufted craftsmanship with lumbal-support cushion",
      "Matching storage ottoman included in the set",
      "Whisper-silent velvet-lined rocking base"
    ],
    leadTime: "In stock • Free doorstep delivery"
  },
  {
    id: "vel-03",
    name: "Kanso Slatted Solid Teak Coffee Table",
    tagline: "Natural teak grain with functional lower slatted magazine shelf",
    category: "Living Room",
    categorySlug: "living-room",
    room: "Living Room",
    price: 59954.39,
    originalPrice: 73069.41,
    discountBadge: "Save 18%",
    rating: 4.8,
    reviewsCount: 63,
    inStock: true,
    isBestseller: true,
    isFeatured: true,
    image: "./images/products/table-coffee-slatted.webp",
    altImages: [
      "./images/products/table-coffee-slatted.webp",
      "./images/products/sofa-scandi-3seater.webp"
    ],
    material: "100% Solid Sheesham / Teak Hardwood",
    dimensions: "W: 115cm × D: 60cm × H: 45cm",
    finish: "Warm Honey Teak with Satin Protective Seal",
    sku: "VEL-TBL-KCFT",
    description: "Honoring the Japanese philosophy of simplicity, the Kanso Coffee Table exhibits rich organic grain, gentle beveled edges, and an airy slatted bottom shelf designed for art books and handcrafted trays.",
    features: [
      "Hand-finished from seasoned solid Sheesham timber",
      "Lower slatted tier prevents visual heaviness in smaller rooms",
      "Water-resistant organic beeswax satin sealant",
      "Mortise and tenon joinery built for decades of use"
    ],
    leadTime: "In stock • Ships next business day"
  },
  {
    id: "vel-04",
    name: "Atelier Cane Rattan & Walnut Sideboard",
    tagline: "Hand-woven natural cane doors with three drawer compartments",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Living Room",
    price: 133023.80,
    originalPrice: 157380.27,
    discountBadge: "Editorial Favorite",
    rating: 4.9,
    reviewsCount: 97,
    inStock: true,
    isBestseller: true,
    isFeatured: true,
    image: "./images/products/sideboard-cane-rattan.webp",
    altImages: [
      "./images/products/sideboard-cane-rattan.webp",
      "./images/products/credenza-espresso-woven.webp"
    ],
    material: "Grade-A Natural Rattan Cane & Solid Sheesham Wood",
    dimensions: "W: 145cm × D: 42cm × H: 86cm",
    finish: "Warm Amber Walnut with Brushed Antique Brass Knobs",
    sku: "VEL-STG-ACRW",
    description: "An instant centerpiece that balances texture and warmth. Featuring delicate breathable hexagonal cane mesh panels, three soft-close top cutlery drawers, and spacious double-door shelving below.",
    features: [
      "Indonesian natural cane rattan hand-woven door panels",
      "3 storage drawers with concealed soft-close glides",
      "Adjustable interior shelving for entertainment or dining ware",
      "Brushed brass minimalist coin hardware"
    ],
    leadTime: "In stock • Ships in 2–4 business days"
  },
  {
    id: "vel-05",
    name: "Atelier Architectural Platform Bed with Niche",
    tagline: "Sculptural headboard with integrated recessed book niche",
    category: "Bedroom",
    categorySlug: "bedroom",
    room: "Bedroom",
    price: 201409.27,
    originalPrice: 233260.04,
    discountBadge: "Signature Design",
    rating: 5.0,
    reviewsCount: 48,
    inStock: true,
    isBestseller: false,
    isFeatured: true,
    image: "./images/products/bed-architectural-modern.webp",
    altImages: [
      "./images/products/bed-architectural-modern.webp",
      "./images/products/bed-teak-platform.webp"
    ],
    material: "Engineered Oak Core with Soft-Matte Ceramic Headboard Accents",
    dimensions: "King: W: 195cm × L: 215cm × H: 102cm",
    finish: "Deep Espresso Brown & Soft Ivory Gray",
    sku: "VEL-BED-ARCH",
    description: "Designed for modern sanctuaries. The low-profile platform frame floats effortlessly while the dual-tone headboard features an angled central alcove to rest nighttime literature, ceramics, or gentle ambient backlighting.",
    features: [
      "Low-profile floating Japanese platform base",
      "Headboard with integrated display niche and cable access",
      "Reinforced heavy-duty slat system supports all mattress types",
      "Seamless clean-line edges without protruding corners"
    ],
    leadTime: "Crafted to order • Ships in 1–2 weeks"
  },
  {
    id: "vel-06",
    name: "Onyx Nero Marble 6-Seater Dining Suite",
    tagline: "Polished Nero Marquina finish top with 6 charcoal upholstered dining chairs",
    category: "Dining Room",
    categorySlug: "dining-room",
    room: "Dining Room",
    price: 232323.25,
    originalPrice: 270731.53,
    discountBadge: "Luxury Set",
    rating: 4.9,
    reviewsCount: 76,
    inStock: true,
    isBestseller: true,
    isFeatured: true,
    image: "./images/products/dining-marble-black.webp",
    altImages: [
      "./images/products/dining-marble-black.webp",
      "./images/products/dining-nordic-white-xbase.webp"
    ],
    material: "Engineered Veined Marble Top & Powder-Coated Charcoal Steel Chairs",
    dimensions: "Table: L: 180cm × W: 90cm × H: 76cm | Chair: W: 46cm × H: 86cm",
    finish: "Gloss Nero Vein & Matte Midnight Charcoal",
    sku: "VEL-DIN-ONX6",
    description: "A commanding presence for unforgettable dinner parties. Features a heat and scratch-resistant marble effect table surface supported by slender architectural legs, paired with 6 ergonomic textured dining chairs.",
    features: [
      "Full 7-piece complete dining set (Table + 6 chairs)",
      "High-pressure composite stone top with realistic white marble veining",
      "Scratch, stain, and heat resistant surface for effortless hosting",
      "Floor-protecting nylon glides on all chair legs"
    ],
    leadTime: "In stock • White-glove assembly available"
  },
  {
    id: "vel-07",
    name: "Serenity Teak Low Platform Bed",
    tagline: "Solid teak slatted headboard with natural grain warmth",
    category: "Bedroom",
    categorySlug: "bedroom",
    room: "Bedroom",
    price: 148949.18,
    originalPrice: 173305.65,
    discountBadge: "Save ₹24,356.47",
    rating: 4.8,
    reviewsCount: 92,
    inStock: true,
    isBestseller: true,
    isFeatured: false,
    image: "./images/products/bed-teak-platform.webp",
    altImages: [
      "./images/products/bed-teak-platform.webp",
      "./images/products/bed-architectural-modern.webp"
    ],
    material: "100% Solid Natural Teak Wood & Heavy Duty Slat Core",
    dimensions: "Queen: W: 165cm × L: 210cm × H: 94cm",
    finish: "Natural Teak Satin Lustre",
    sku: "VEL-BED-SRTK",
    description: "Embodying warm minimalism, the Serenity Bed celebrates the untouched beauty of solid timber. Built with wide horizontal headboard planks and sturdy cylindrical wood legs.",
    features: [
      "Responsibly harvested solid grade-A Teak wood",
      "Wide headboard supports relaxed reading positions",
      "Sturdy centre support beam with 12 load-bearing slats",
      "Zero squeak acoustic isolation dampeners included"
    ],
    leadTime: "In stock • Ships in 3–5 business days"
  },
  {
    id: "vel-08",
    name: "Amalfi Handcrafted Ceramic Tile Credenza",
    tagline: "Solid wood cabinet accented with 36 artisan glazed majolica tiles",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Dining Room",
    price: 166748.14,
    originalPrice: 196725.33,
    discountBadge: "Limited Edition",
    rating: 5.0,
    reviewsCount: 39,
    inStock: true,
    isBestseller: false,
    isFeatured: true,
    image: "./images/products/sideboard-ceramic-mosaic.webp",
    altImages: [
      "./images/products/sideboard-ceramic-mosaic.webp",
      "./images/products/sideboard-cane-rattan.webp"
    ],
    material: "Solid Sheesham Wood & Hand-Painted Ceramic Inlay Tiles",
    dimensions: "W: 150cm × D: 45cm × H: 88cm",
    finish: "Golden Honey Sheesham with Polished Brass Drop Pulls",
    sku: "VEL-STG-AML3",
    description: "A conversation-starting masterpiece inspired by Mediterranean coastal architecture. Each cabinet door contains hand-pressed ceramic tiles painted in vibrant botanical and geometric motifs.",
    features: [
      "36 individually fired and hand-painted ceramic tile inserts",
      "3 upper utility drawers with forged iron ring pulls",
      "3 spacious lower cupboards with removable interior shelving",
      "Heirloom-grade solid wood construction"
    ],
    leadTime: "Handcrafted • Only 4 units remaining in stock"
  },
  {
    id: "vel-09",
    name: "Copenhagen Trestle Dining Table with Walnut X-Base",
    tagline: "Matte white silk top with sculptured walnut cross-trestle trestle base",
    category: "Dining Room",
    categorySlug: "dining-room",
    room: "Dining Room",
    price: 154569.91,
    originalPrice: 182673.52,
    discountBadge: "New Arrival",
    rating: 4.9,
    reviewsCount: 52,
    inStock: true,
    isBestseller: true,
    isFeatured: true,
    image: "./images/products/dining-nordic-white-xbase.webp",
    altImages: [
      "./images/products/dining-nordic-white-xbase.webp",
      "./images/products/dining-marble-black.webp"
    ],
    material: "Satin-Lacquered Italian Composite Top & Solid Walnut X-Legs",
    dimensions: "Table: L: 160cm × W: 85cm × H: 75cm | 4 Curved Chairs Included",
    finish: "Chalk Silk White & Oiled Dark Walnut",
    sku: "VEL-DIN-CPN4",
    description: "Crisp architectural contrast defined by a snow-white surface floating over sculptural criss-cross walnut trestle timber legs. Paired with 4 cream upholstered tub dining chairs.",
    features: [
      "Includes 1 Trestle dining table and 4 curved dining chairs",
      "Anti-fingerprint nano-matte silk tabletop",
      "Architectural X-frame base provides maximum guest legroom",
      "Generous seating for 4 to 6 persons comfortably"
    ],
    leadTime: "In stock • Ships in 2–4 days"
  },
  {
    id: "vel-10",
    name: "Provence Sunlit Sheesham 4-Seater Dining Set",
    tagline: "Rich natural grain dining table with 4 cushioned high-back chairs",
    category: "Dining Room",
    categorySlug: "dining-room",
    room: "Dining Room",
    price: 130213.44,
    originalPrice: 148949.18,
    discountBadge: "Best Value",
    rating: 4.8,
    reviewsCount: 118,
    inStock: true,
    isBestseller: true,
    isFeatured: false,
    image: "./images/products/dining-sunlit-teak.webp",
    altImages: [
      "./images/products/dining-sunlit-teak.webp",
      "./images/products/dining-sheesham-6seater.webp"
    ],
    material: "100% Solid Indian Sheesham Timber & Woven Oatmeal Cushions",
    dimensions: "Table: L: 140cm × W: 80cm × H: 76cm | 4 Cushioned Chairs",
    finish: "Natural Honey Teak Finish",
    sku: "VEL-DIN-PRV4",
    description: "The essence of rustic refinement. Hand-carved from seasoned solid Sheesham with expressive grain swirls, accompanied by 4 ladder-back dining chairs with plush oatmeal woven seat pads.",
    features: [
      "Complete set: 1 Dining Table + 4 Ladder-back Dining Chairs",
      "Dense hardwood resistant to daily family use and humidity",
      "Ergonomic horizontal backrest slats for spine comfort",
      "Protected with eco-friendly natural wood wax"
    ],
    leadTime: "In stock • Immediate dispatch"
  },
  {
    id: "vel-11",
    name: "Artisan Sheesham 6-Seater Grand Dining Suite",
    tagline: "Solid wood dining table with dentil carved apron and 6 cushioned slatted chairs",
    category: "Dining Room",
    categorySlug: "dining-room",
    room: "Dining Room",
    price: 177052.80,
    originalPrice: 206093.21,
    discountBadge: "Family Favorite",
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    isBestseller: true,
    isFeatured: false,
    image: "./images/products/dining-sheesham-6seater.webp",
    altImages: [
      "./images/products/dining-sheesham-6seater.webp",
      "./images/products/dining-sunlit-teak.webp"
    ],
    material: "Solid Seasoned Sheesham Wood with High-Density Foam Cushions",
    dimensions: "Table: L: 175cm × W: 90cm × H: 76cm | 6 Slatted Chairs",
    finish: "Warm Golden Honey Sheesham",
    sku: "VEL-DIN-ART6",
    description: "Crafted for joyful family feasts and grand gatherings. Highlighted by decorative slatted apron detailing around the table perimeter and six high-back dining chairs with warm beige seat pads.",
    features: [
      "Table plus six matching high-back dining chairs",
      "Dentil fretwork apron detail beneath tabletop",
      "Reinforced corner block construction ensures lifetime stability",
      "Durable wipe-clean coated upholstery pads"
    ],
    leadTime: "In stock • Ships in 3–5 business days"
  },
  {
    id: "vel-12",
    name: "Verona Glass-Front Sheesham Crockery Buffet",
    tagline: "Solid wood sideboard with dual glass display showcase and side cupboard",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Dining Room",
    price: 111477.69,
    originalPrice: 130213.44,
    discountBadge: "Classic",
    rating: 4.8,
    reviewsCount: 67,
    inStock: true,
    isBestseller: false,
    isFeatured: false,
    image: "./images/products/sideboard-glass-sheesham.webp",
    altImages: [
      "./images/products/sideboard-glass-sheesham.webp",
      "./images/products/credenza-espresso-woven.webp"
    ],
    material: "Solid Sheesham Wood & Tempered Display Glass",
    dimensions: "W: 125cm × D: 42cm × H: 90cm",
    finish: "Rich Honey Brown with Smooth Round Pulls",
    sku: "VEL-STG-VRN2",
    description: "Display your treasured glassware, porcelain dishes, and culinary books behind crystal-clear tempered glass doors. Includes an additional closed wooden cabinet on the right and top cutlery drawer.",
    features: [
      "Tempered safety glass framed doors with magnetic latches",
      "Right-hand side closed storage for concealed organization",
      "Upper utensil drawer with solid wood glides",
      "Generous flat buffet top for serving appetizers and wine"
    ],
    leadTime: "In stock • Ships in 2–4 business days"
  },
  {
    id: "vel-13",
    name: "Modena Charcoal Modular Sleeper Sofa",
    tagline: "Dual-purpose fold-out futon daybed with geometric accent cushions",
    category: "Sofas & Seating",
    categorySlug: "sofas-seating",
    room: "Living Room",
    price: 83374.07,
    originalPrice: 98362.67,
    discountBadge: "Smart Living",
    rating: 4.7,
    reviewsCount: 145,
    inStock: true,
    isBestseller: true,
    isFeatured: false,
    image: "./images/products/sofa-charcoal-sleeper.webp",
    altImages: [
      "./images/products/sofa-charcoal-sleeper.webp",
      "./images/products/sofa-scandi-3seater.webp"
    ],
    material: "Textured Heavy-Weave Heather Charcoal Fabric & High-Density Foam",
    dimensions: "Sofa: W: 180cm × D: 85cm × H: 75cm | Bed: L: 180cm × W: 120cm",
    finish: "Deep Charcoal Gray with Chevron Pillows",
    sku: "VEL-SOF-MDN1",
    description: "Ideal for versatile living rooms and stylish guest rooms. Transforms in seconds from a tailored deep-seated sofa into a comfortable double sleeper bed without cumbersome mechanical hinges.",
    features: [
      "Effortless single-motion flip fold-out sleeper design",
      "Two matching monochrome chevron throw pillows included",
      "Breathable high-resilience upholstery resists piling and sagging",
      "Armless profile maximizes usable sleeping and sitting width"
    ],
    leadTime: "In stock • Express delivery available"
  },
  {
    id: "vel-14",
    name: "Fluted Espresso 3-Door Credenza",
    tagline: "Deep espresso cabinet with woven horizontal slated wooden doors",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Living Room",
    price: 91805.16,
    originalPrice: 107730.54,
    discountBadge: "Minimalist",
    rating: 4.8,
    reviewsCount: 54,
    inStock: true,
    isBestseller: false,
    isFeatured: false,
    image: "./images/products/credenza-espresso-woven.webp",
    altImages: [
      "./images/products/credenza-espresso-woven.webp",
      "./images/products/sideboard-cane-rattan.webp"
    ],
    material: "Engineered Solid Hardwood with Fluted Basket-Weave Facades",
    dimensions: "W: 138cm × D: 40cm × H: 82cm",
    finish: "Deep Roasted Espresso & Matte Black Hardware",
    sku: "VEL-STG-FLT3",
    description: "The Fluted Espresso Credenza brings tactile drama to dining and living spaces. Three woven-pattern doors conceal two generous internal compartments, raised upon slender tapered turned feet.",
    features: [
      "Basket-weave textured face paneling creates dynamic shadows",
      "Three soft-close doors with matte black button hardware",
      "Cable pass-through cutouts on back panel for electronics",
      "Sturdy turned solid wood spindle legs"
    ],
    leadTime: "In stock • Ships in 2–3 business days"
  },
  {
    id: "vel-15",
    name: "Palais Quatrefoil Carved Dining Credenza",
    tagline: "Hand-carved architectural Moroccan quatrefoil panels in rich mahogany",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Dining Room",
    price: 157380.27,
    originalPrice: 185483.89,
    discountBadge: "Artisan Heritage",
    rating: 4.9,
    reviewsCount: 42,
    inStock: true,
    isBestseller: false,
    isFeatured: false,
    image: "./images/products/sideboard-mahogany-quatrefoil.webp",
    altImages: [
      "./images/products/sideboard-mahogany-quatrefoil.webp",
      "./images/products/sideboard-mahogany-carved.webp"
    ],
    material: "Hand-Carved Solid Mahogany & Antique Pewter Pulls",
    dimensions: "W: 160cm × D: 45cm × H: 90cm",
    finish: "Rich Dark Mahogany Stain with Subtle Patina",
    sku: "VEL-STG-PAL4",
    description: "A tribute to classical European molding and Moorish quatrefoil geometry. Features two wide upper silver storage drawers and four lower cabinet doors adorned with raised relief moldings.",
    features: [
      "Four sculpted panel doors with geometric quatrefoil relief",
      "Two full-extension wide silverware and linens drawers",
      "Traditional stepped crown top edge and solid plinth base",
      "Antique pewter round button knobs"
    ],
    leadTime: "In stock • Ships in 3–5 business days"
  },
  {
    id: "vel-16",
    name: "Linear Matte Black Wrought Iron Bed Frame",
    tagline: "Clean vertical spindle headboard and footboard in powder-coated steel",
    category: "Bedroom",
    categorySlug: "bedroom",
    room: "Bedroom",
    price: 74006.20,
    originalPrice: 88994.79,
    discountBadge: "Modern Industrial",
    rating: 4.7,
    reviewsCount: 110,
    inStock: true,
    isBestseller: false,
    isFeatured: false,
    image: "./images/products/bed-iron-spindle.webp",
    altImages: [
      "./images/products/bed-iron-spindle.webp",
      "./images/products/bed-teak-platform.webp"
    ],
    material: "Heavy-Gauge Wrought Iron & Anti-Scratch Powder Coating",
    dimensions: "Queen: W: 158cm × L: 206cm × H: 100cm",
    finish: "Velvet Matte Black",
    sku: "VEL-BED-IRN1",
    description: "Timeless iron bedstead reimagined with crisp modern proportions. Slender vertical spindles accented with subtle sphere collars create an open, airy feeling in compact or grand bedrooms alike.",
    features: [
      "Heavy-duty rust-resistant electrostatic matte powder finish",
      "Integrated center support legs and high-strength metal platform deck",
      "Generous 30cm under-bed clearance for underbed storage boxes",
      "Tool-free precision slot assembly in under 20 minutes"
    ],
    leadTime: "In stock • Ships same day"
  },
  {
    id: "vel-17",
    name: "Stockholm Chevron Relief Storage Bench & Tower",
    tagline: "Entryway bench with upholstered leather seat and tall shoe storage cabinet",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Living Room",
    price: 83374.07,
    originalPrice: 98362.67,
    discountBadge: "Nordic Entry",
    rating: 4.8,
    reviewsCount: 73,
    inStock: true,
    isBestseller: false,
    isFeatured: false,
    image: "./images/products/bench-chevron-entryway.webp",
    altImages: [
      "./images/products/bench-chevron-entryway.webp",
      "./images/products/sideboard-cane-rattan.webp"
    ],
    material: "White Oak Veneer, 3D Textured Relief Fronts & Vegan Leather Cushion",
    dimensions: "W: 135cm × D: 38cm × H: 110cm",
    finish: "Pure White Textured Geometry & Natural Oak Edge",
    sku: "VEL-ENT-STK2",
    description: "Welcome home with Scandinavian serenity. Combining a cushioned entryway bench with two drop-down shoe compartments and an adjoining tall wardrobe locker for coats, scarves, and bags.",
    features: [
      "3D textured chevron relief doors that catch ambient light",
      "Firm comfortable faux-leather padded bench for putting on shoes",
      "Bottom clearance for everyday slippers and quick footwear access",
      "Durable moisture-resistant melamine and solid oak feet"
    ],
    leadTime: "In stock • Ships in 2–4 business days"
  },
  {
    id: "vel-18",
    name: "St. Moritz Espresso Dining Table & Linen Chairs",
    tagline: "Contemporary espresso parson dining table with 6 framed beige linen chairs",
    category: "Dining Room",
    categorySlug: "dining-room",
    room: "Dining Room",
    price: 205156.42,
    originalPrice: 238880.76,
    discountBadge: "Executive",
    rating: 4.9,
    reviewsCount: 65,
    inStock: true,
    isBestseller: false,
    isFeatured: true,
    image: "./images/products/dining-espresso-linen.webp",
    altImages: [
      "./images/products/dining-espresso-linen.webp",
      "./images/products/dining-marble-black.webp"
    ],
    material: "Solid Birch & Ash Core in Deep Roasted Espresso Stain, Belgian Linen",
    dimensions: "Table: L: 180cm × W: 90cm × H: 77cm | 6 Linen Chairs",
    finish: "Deep Smoked Espresso & Oatmeal Woven Linen",
    sku: "VEL-DIN-STM6",
    description: "Architectural purity for the modern dining pavilion. Thick block legs support a substantial table surface, surrounded by six custom-tailored chairs with framed linen backrests and cushioned seats.",
    features: [
      "Includes Grand Espresso dining table and 6 upholstered linen chairs",
      "Substantial 10cm wide square parson column legs",
      "Belgian natural linen blend seat covers with stain-guard treatment",
      "Perfect proportion for family dining and executive boardrooms"
    ],
    leadTime: "In stock • White glove delivery"
  },
  {
    id: "vel-19",
    name: "Nordic Walnut Pantry & Microwave Tower",
    tagline: "Multi-tier kitchen credenza with appliance shelf and locked lower cabinet",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Dining Room",
    price: 54333.66,
    originalPrice: 64638.32,
    discountBadge: "Functional",
    rating: 4.7,
    reviewsCount: 58,
    inStock: true,
    isBestseller: false,
    isFeatured: false,
    image: "./images/products/pantry-tower-walnut.webp",
    altImages: [
      "./images/products/pantry-tower-walnut.webp",
      "./images/products/sideboard-glass-sheesham.webp"
    ],
    material: "Thermo-Sealed Walnut Grain Core with Lock & Key Hardware",
    dimensions: "W: 65cm × D: 42cm × H: 135cm",
    finish: "Deep Walnut Woodgrain",
    sku: "VEL-KTC-PNT1",
    description: "Maximize vertical storage with tailored beauty. Engineered with a dedicated microwave or espresso machine counter, smooth pull-out utility drawer, and lockable double-door cabinet below.",
    features: [
      "Reinforced middle shelf holds standard microwave or coffee bar station",
      "Lock and key hardware on lower double doors for security",
      "Top condiment rim prevents spice jars and ceramics from sliding",
      "Smooth metal ball-bearing drawer slide"
    ],
    leadTime: "In stock • Ships in 24 hours"
  },
  {
    id: "vel-20",
    name: "Aura Charcoal Minimalist Wardrobe Armoire",
    tagline: "Double-door tall cabinet with framed recessed panel facade and locking key",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Bedroom",
    price: 71195.84,
    originalPrice: 83374.07,
    discountBadge: "Smart Storage",
    rating: 4.8,
    reviewsCount: 81,
    inStock: true,
    isBestseller: false,
    isFeatured: false,
    image: "./images/products/wardrobe-charcoal-minimal.webp",
    altImages: [
      "./images/products/wardrobe-charcoal-minimal.webp",
      "./images/products/bed-architectural-modern.webp"
    ],
    material: "High-Density Polymer Core with Weatherproof Matte Textured Finish",
    dimensions: "W: 75cm × D: 48cm × H: 180cm",
    finish: "Midnight Charcoal Matte with Ergonomic Central Pull Handle",
    sku: "VEL-ARM-AUR2",
    description: "A monolithic storage silhouette that complements minimalist bedrooms and guest suites. Weatherproof construction with interior hanging rail and four adjustable storage shelves.",
    features: [
      "Full 180cm tall 2-door wardrobe with key-locking security",
      "Moisture-proof polymer formulation that will never warp or rot",
      "Integrated full-width hanging bar and 4 deep shelves",
      "Clean handle detail designed for seamless silent closure"
    ],
    leadTime: "In stock • Ships in 2–3 business days"
  },
  {
    id: "vel-21",
    name: "Belgravia Hand-Carved Mahogany Credenza",
    tagline: "Heirloom dining buffet with decorative relief molding and polished nickel hardware",
    category: "Office & Storage",
    categorySlug: "office-storage",
    room: "Dining Room",
    price: 161127.42,
    originalPrice: 186420.67,
    discountBadge: "Limited Run",
    rating: 4.9,
    reviewsCount: 31,
    inStock: true,
    isBestseller: false,
    isFeatured: false,
    image: "./images/products/sideboard-mahogany-carved.webp",
    altImages: [
      "./images/products/sideboard-mahogany-carved.webp",
      "./images/products/sideboard-mahogany-quatrefoil.webp"
    ],
    material: "Kiln-Dried Solid Mahogany Hardwood & Brushed Satin Hardware",
    dimensions: "W: 162cm × D: 46cm × H: 91cm",
    finish: "Deep Espresso Mahogany with Satin Polyurethane Seal",
    sku: "VEL-STG-BLG1",
    description: "The Belgravia Credenza brings timeless Georgian craftsmanship to modern homes. Meticulously hand-carved decorative door panels enclose ample storage for fine china, tablecloths, and dining accessories.",
    features: [
      "Solid Mahogany sustainably sourced timber",
      "Four sculpted panel doors with magnetic silent closures",
      "Two felt-lined interior silverware and cutlery drawers",
      "Traditional stepped base and crown molding profile"
    ],
    leadTime: "Handmade to order • 1–2 weeks"
  }
];

export const CATEGORIES = [
  {
    id: "living-room",
    name: "Living Room",
    subtitle: "Sanctuaries of warmth and gathering",
    count: "12 Designs",
    image: "./images/products/sofa-scandi-3seater.webp",
    accent: "Sofas, Coffee Tables & Lounge Chairs"
  },
  {
    id: "bedroom",
    name: "Bedroom",
    subtitle: "Restful architecture for peaceful slumber",
    count: "8 Designs",
    image: "./images/products/bed-architectural-modern.webp",
    accent: "Platform Beds, Nightstands & Wardrobes"
  },
  {
    id: "dining-room",
    name: "Dining Room",
    subtitle: "Setting the stage for unforgettable gatherings",
    count: "14 Designs",
    image: "./images/products/dining-marble-black.webp",
    accent: "Marble Tables, Dining Suites & Credenzas"
  },
  {
    id: "office-storage",
    name: "Office & Storage",
    subtitle: "Sculptural credenzas and organized serenity",
    count: "9 Designs",
    image: "./images/products/sideboard-cane-rattan.webp",
    accent: "Cane Sideboards, Tile Credenzas & Armoires"
  },
  {
    id: "sofas-seating",
    name: "Sofas & Seating",
    subtitle: "Artisanal comfort and tailored silhouettes",
    count: "11 Designs",
    image: "./images/products/chair-tufted-rocking-ottoman.jpg",
    accent: "Rocking Loungers, Futons & Sectionals"
  },
  {
    id: "lighting-decor",
    name: "Lighting & Decor",
    subtitle: "Subtle ceramics, lamps and sculptural vessels",
    count: "16 Designs",
    image: "./images/products/credenza-espresso-woven.webp",
    accent: "Artisan Ceramics, Table Lamps & Brass Vases"
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Elena Rostova",
    role: "Architectural Digest Featured Homeowner",
    city: "Stockholm",
    rating: 5,
    title: "Unmatched craftsmanship that commands every room",
    quote: "We furnished our waterfront villa with VÉLIA's Nordic Haven sofa and the cane sideboard. The tactile richness of the materials and precise joinery rivals custom Italian ateliers at double the price.",
    product: "Nordic Haven Sofa & Cane Sideboard",
    image: "./images/products/sofa-scandi-3seater.webp"
  },
  {
    id: "rev-2",
    author: "Julian Vance",
    role: "Interior Design Director, Studio Vance",
    city: "London",
    rating: 5,
    title: "The marble dining table is a true showstopper",
    quote: "Our clients are mesmerized by the Nero Marble dining suite. The proportions are impeccable, delivery was flawless with white-glove assembly, and the finish is genuinely resilient to daily life.",
    product: "Onyx Nero Marble Dining Suite",
    image: "./images/products/dining-marble-black.webp"
  },
  {
    id: "rev-3",
    author: "Sophia Chen-Miller",
    role: "Creative Director",
    city: "San Francisco",
    rating: 5,
    title: "Pure architectural bliss in our master bedroom",
    quote: "The Architectural Platform Bed transformed our bedroom into a tranquil luxury retreat. The integrated headboard niche is both ingenious and breathtakingly sleek.",
    product: "Architectural Platform Bed",
    image: "./images/products/bed-architectural-modern.webp"
  },
  {
    id: "rev-4",
    author: "Marcello Moretti",
    role: "Private Collector",
    city: "Milan",
    rating: 5,
    title: "The Amalfi Tile Credenza is wearable art for the home",
    quote: "Every single guest asks where we acquired this credenza. The glazed majolica tile work embedded in solid Sheesham timber is truly heirloom quality.",
    product: "Amalfi Ceramic Tile Credenza",
    image: "./images/products/sideboard-ceramic-mosaic.webp"
  }
];

export const BRAND_VALUES = [
  {
    number: "01",
    title: "Premium Materials",
    description: "Sustainably harvested FSC-certified solid hardwoods, authentic natural cane rattan, Italian composite marble, and Belgian performance linens.",
    icon: "Gem"
  },
  {
    number: "02",
    title: "Timeless Design",
    description: "Rooted in Scandinavian calm and mid-century poise. Our pieces transcend fleeting seasonal trends to remain perpetually modern.",
    icon: "Compass"
  },
  {
    number: "03",
    title: "Master Craftsmanship",
    description: "Traditional mortise and tenon joinery, hand-rubbed organic wax seals, and millimeter-precise tolerances built to last generations.",
    icon: "ShieldCheck"
  },
  {
    number: "04",
    title: "White-Glove Delivery",
    description: "Specialized furniture carriers, room-of-choice placement, professional assembly, and complete packaging removal directly to your doorstep.",
    icon: "Truck"
  }
];
