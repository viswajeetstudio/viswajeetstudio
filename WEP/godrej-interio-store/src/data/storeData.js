export const STORE_INFO = {
  name: "INTERIO BY GODREJ",
  tagline: "India's Largest Furniture Brand • 125 Years of Trust",
  branch: "MOHAN ESTATE, NEW DELHI",
  fullAddress: "NDRAVG Business Park Pvt Ltd, Block D2, 3rd Floor, Opposite Mohan Estate Metro Station, Sarita Vihar, New Delhi - 110076",
  phonePrimary: "+91 91677 14088",
  phoneSecondary: "+91 73078 97027",
  tollFree: "1800-209-5511",
  whatsapp: "+91 93216 65511",
  email: "rohitmi@godrej.com",
  supportEmail: "interiocare@godrej.com",
  hours: "Monday – Sunday: 11:00 AM – 7:30 PM",
  rating: 4.8,
  reviewCount: 384,
  metroLandmark: "Opposite Mohan Estate Metro Station (Violet Line)",
  freeServices: [
    "Free Delivery across Delhi NCR",
    "Free Professional Installation",
    "Up to 10-Year Warranty",
    "No-Cost EMI on All Major Cards & Paper Finance"
  ]
};

export const NAV_LINKS = [
  { label: "HOME", href: "#home", active: true },
  { label: "CATALOG", href: "#catalog", badge: "HOT", badgeColor: "bg-[#F05A28]" },
  { label: "LIVING ROOM", href: "#living-room" },
  { label: "BEDROOM", href: "#bedroom", badge: "NEW", badgeColor: "bg-[#00A8E8]" },
  { label: "STORAGE & MATTRESS", href: "#storage" },
  { label: "BLOG", href: "#blog" },
  { label: "SALE", href: "#hot-deal", badge: "-50%", badgeColor: "bg-[#F05A28]" }
];

export const HERO_SLIDES = [
  {
    id: 1,
    scriptEyebrow: "Furniture Collection",
    headline: "TRENDING IN 2026",
    subheadline: "INNOVATIVE & PRETTY INTERIORS",
    ctaText: "Shop Trending Collection",
    ctaLink: "#catalog",
    roomBgLeft: "bg-[#4B88A2]", // Cool studio slate blue
    productImg: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80", // White modern armchair
    accentTitle: "Aero Modular & Ergonomic Comfort",
    priceTag: "Starting ₹18,990"
  },
  {
    id: 2,
    scriptEyebrow: "Exclusive Flagship Offer",
    headline: "LUXURY SLEEP & SUITES",
    subheadline: "HYDRAULIC BEDS & ORTHO MATTRESSES",
    ctaText: "Explore Bedroom Suites",
    ctaLink: "#catalog",
    roomBgLeft: "bg-[#2E5B82]",
    productImg: "https://cdn4.singleinterface.com/files/banner_images/275470/8_1694435981_56101515SD00220.jpg",
    accentTitle: "Aero King Storage Suite",
    priceTag: "Special ₹42,500"
  },
  {
    id: 3,
    scriptEyebrow: "Architectural Living",
    headline: "ELEGANT LIVING ROOMS",
    subheadline: "CONTEMPORARY SECTIONALS & TABLES",
    ctaText: "View Living Essentials",
    ctaLink: "#catalog",
    roomBgLeft: "bg-[#3D6980]",
    productImg: "https://cdn4.singleinterface.com/files/banner_images/275470/8281_1694437797_56101502SD01662.jpg",
    accentTitle: "Vertex Modular L-Shape Lounge",
    priceTag: "From ₹34,900"
  }
];

export const PROMO_TRIO = [
  {
    id: 1,
    bgClass: "bg-[#0066B3]", // Royal Blue
    scriptEyebrow: "Great offers",
    title: "NEW ARRIVALS",
    desc: "Premium Solid Wood & Velvet Silhouettes",
    linkText: "DISCOVER NOW",
    badge: "2026 LINEUP",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    bgClass: "bg-[#B4C92A]", // Lime Green
    scriptEyebrow: "Special Discount",
    title: "BIG SALE",
    desc: "Up to 50% Off on Soft Furnishings & Wall Units",
    linkText: "EXPLORE DEALS",
    badge: "SAVE 50%",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    bgClass: "bg-[#F37021]", // Vibrant Warm Orange
    scriptEyebrow: "Living Room Style",
    title: "LIVING ROOM",
    desc: "Ergonomic 3-Seater Sofas & Coffee Tables",
    linkText: "VIEW COLLECTION",
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80"
  }
];

export const NEW_ARRIVALS_PRODUCTS = [
  {
    id: "prod-na-1",
    title: "MODERN SHELL ARMCHAIR",
    category: "Chairs",
    currentPrice: 4200,
    originalPrice: 6500,
    rating: 5,
    badge: "SALE",
    badgeType: "coral",
    image: "https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=80",
    description: "Iconic molded shell dining and accent chair with Eiffel wire chrome legs, engineered for exceptional lumbar ergonomics.",
    sku: "GI-DEL-CHR01",
    inStock: true
  },
  {
    id: "prod-na-2",
    title: "TIA TANGERINE ACCENT CHAIR",
    category: "Chairs",
    currentPrice: 5800,
    originalPrice: 7900,
    rating: 5,
    badge: null,
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/6993_1694437701_DINCHR036.jpg",
    description: "Vibrant high-resilience upholstered dining armchair with solid tapered beechwood legs in warm natural lacquer.",
    sku: "GI-DEL-CHR02",
    inStock: true
  },
  {
    id: "prod-na-3",
    title: "OLIVE NORDIC SIDE CHAIR",
    category: "Chairs",
    currentPrice: 3800,
    originalPrice: 4900,
    rating: 4,
    badge: "NEW",
    badgeType: "cyan",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=600&q=80",
    description: "Minimalist Scandinavian ribbed contour chair with matte powder-coated steel legs, perfect for dining or home offices.",
    sku: "GI-DEL-CHR03",
    inStock: true
  },
  {
    id: "prod-na-4",
    title: "CENTURIAN MULTI-TIER STORAGE RACK",
    category: "Storage",
    currentPrice: 14500,
    originalPrice: 18900,
    rating: 5,
    badge: "-20%",
    badgeType: "cyan",
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/3605_1694437739_30161803SD00024.jpg",
    description: "Commercial-grade CRCA steel display shelving rack with three modular slanted display tiers and anti-rust treatment.",
    sku: "GI-DEL-STR04",
    inStock: true
  },
  {
    id: "prod-na-5",
    title: "ELENA BENTWOOD MAGAZINE TABLE",
    category: "Tables",
    currentPrice: 7900,
    originalPrice: 10500,
    rating: 4,
    badge: "SALE",
    badgeType: "coral",
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/1181_1694436667_56121403SD00248.jpg",
    description: "Curved bentwood architectural side table featuring an integrated side magazine rack in warm walnut veneer.",
    sku: "GI-DEL-TBL05",
    inStock: true
  },
  {
    id: "prod-na-6",
    title: "MERIDIAN ROUND GLASS COFFEE TABLE",
    category: "Tables",
    currentPrice: 12400,
    originalPrice: 15900,
    rating: 5,
    badge: null,
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/8273_1694436666_56121403SD00204.jpg",
    description: "10mm toughened safety glass tabletop paired with interlocking geometric solid hardwood tripod base.",
    sku: "GI-DEL-TBL06",
    inStock: true
  },
  {
    id: "prod-na-7",
    title: "SLIDE N STORE COMPACT SIDE CABINET",
    category: "Storage",
    currentPrice: 8900,
    originalPrice: 11200,
    rating: 4,
    badge: "SALE",
    badgeType: "coral",
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/6962_1694437741_30161803SD00840.jpg",
    description: "Dual-tier bedside storage console featuring smooth castor wheels, cable port, and open bookshelf niche.",
    sku: "GI-DEL-STR07",
    inStock: true
  },
  {
    id: "prod-na-8",
    title: "ARCBAY PLUSH VELVET ARMCHAIR",
    category: "Living",
    currentPrice: 19800,
    originalPrice: 24500,
    rating: 5,
    badge: "NEW",
    badgeType: "cyan",
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/2119_1694437800_56101502SD01927.jpg",
    description: "Mid-century teal velvet lounge chair with high-density polyurethane cushions and tapered blackened steel legs.",
    sku: "GI-DEL-LIV08",
    inStock: true
  }
];

export const BEST_SELLERS_LIST = [
  {
    id: "bs-1",
    title: "AERO KING BED STORAGE",
    category: "Bedroom",
    price: 38900,
    oldPrice: 48000,
    rating: 5,
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/8_1694435981_56101515SD00220.jpg"
  },
  {
    id: "bs-2",
    title: "ARCBAY VELVET LOUNGER",
    category: "Living Room",
    price: 19800,
    oldPrice: 24500,
    rating: 5,
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/2119_1694437800_56101502SD01927.jpg"
  },
  {
    id: "bs-3",
    title: "TIA NORDIC ACCENT CHAIR",
    category: "Dining",
    price: 3800,
    oldPrice: 4900,
    rating: 4,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "bs-4",
    title: "SLIDE N STORE CONSOLE",
    category: "Storage",
    price: 8900,
    oldPrice: 11200,
    rating: 5,
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/6962_1694437741_30161803SD00840.jpg"
  },
  {
    id: "bs-5",
    title: "HONEY NATURAL CHAIR",
    category: "Dining",
    price: 4500,
    oldPrice: 6200,
    rating: 4,
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/1129_1694437701_DINCHR055.jpg"
  },
  {
    id: "bs-6",
    title: "MERIDIAN GLASS TABLE",
    category: "Tables",
    price: 12400,
    oldPrice: 15900,
    rating: 5,
    image: "https://cdn4.singleinterface.com/files/banner_images/275470/8273_1694436666_56121403SD00204.jpg"
  }
];

export const TABBED_CATALOG = {
  RATING: [
    {
      id: "tab-r-1",
      title: "LATTICE HYDRAULIC KING BED",
      category: "Bedroom",
      currentPrice: 42900,
      originalPrice: 54900,
      rating: 5,
      badge: "HOT",
      badgeType: "coral",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/4133_1694435986_LATTICE07.jpg",
      description: "German hydraulic lift mechanism bed with dark walnut grain and massive dust-free underbed storage compartment."
    },
    {
      id: "tab-r-2",
      title: "GAYLE SWIVEL ACCENT CHAIR",
      category: "Living",
      currentPrice: 16500,
      originalPrice: 21000,
      rating: 5,
      badge: null,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      description: "360-degree brushed stainless steel swivel base paired with deep ruby red contoured bucket seat cushion."
    },
    {
      id: "tab-r-3",
      title: "CLAMPDON CURVED LOUNGER",
      category: "Living",
      currentPrice: 22800,
      originalPrice: 28500,
      rating: 5,
      badge: "NEW",
      badgeType: "cyan",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80",
      description: "Architectural molded plywood lounge chair with premium black bonded leather cushioning and angled tripod stance."
    },
    {
      id: "tab-r-4",
      title: "NORDIC WIRE SIDE STOOL",
      category: "Living",
      currentPrice: 3200,
      originalPrice: 4200,
      rating: 5,
      badge: null,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
      description: "Sculptural geometric black wire frame table / stool with removable circular natural oak tray."
    },
    {
      id: "tab-r-5",
      title: "GREEN TEXTILE DESK CHAIR",
      category: "Chairs",
      currentPrice: 4600,
      originalPrice: 5900,
      rating: 5,
      badge: "SALE",
      badgeType: "coral",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=600&q=80",
      description: "Breathable textured olive green weave chair with supportive high-flex backrest and solid timber legs."
    },
    {
      id: "tab-r-6",
      title: "CHILL DAYBED SUN RECLINER",
      category: "Outdoor",
      currentPrice: 18500,
      originalPrice: 23000,
      rating: 5,
      badge: null,
      image: "https://images.unsplash.com/photo-1519947486513-ce62b9a383d6?auto=format&fit=crop&w=600&q=80",
      description: "Adjustable 5-position reclining aluminum lounger with weather-resistant all-season UV mesh fabric."
    },
    {
      id: "tab-r-7",
      title: "ELENA CURVED CONSOLE",
      category: "Living",
      currentPrice: 7900,
      originalPrice: 10500,
      rating: 5,
      badge: "NEW",
      badgeType: "cyan",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/1181_1694436667_56121403SD00248.jpg",
      description: "Multipurpose magazine organizer and coffee table crafted from single-piece bent natural timber."
    },
    {
      id: "tab-r-8",
      title: "AMBER WOODEN TABLE LAMP",
      category: "Lighting",
      currentPrice: 2800,
      originalPrice: 3800,
      rating: 5,
      badge: null,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
      description: "Turned solid wood base with warm linen cylindrical diffuser shade, casting a cozy 2700K ambient glow."
    }
  ],
  PRICE: [
    {
      id: "tab-p-1",
      title: "AMBER WOODEN TABLE LAMP",
      category: "Lighting",
      currentPrice: 2800,
      originalPrice: 3800,
      rating: 5,
      badge: null,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
      description: "Affordable luxury ambient accent lighting with hand-turned timber base and textured linen shade."
    },
    {
      id: "tab-p-2",
      title: "NORDIC WIRE SIDE STOOL",
      category: "Living",
      currentPrice: 3200,
      originalPrice: 4200,
      rating: 4,
      badge: null,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
      description: "Compact dual-use occasional side stool or end table with geometric architectural steel grid."
    },
    {
      id: "tab-p-3",
      title: "MODERN SHELL ARMCHAIR",
      category: "Chairs",
      currentPrice: 4200,
      originalPrice: 6500,
      rating: 4,
      badge: "SALE",
      badgeType: "coral",
      image: "https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=80",
      description: "Molded polypropylene shell chair with organic contours and reinforced wire base."
    },
    {
      id: "tab-p-4",
      title: "GREEN TEXTILE DESK CHAIR",
      category: "Chairs",
      currentPrice: 4600,
      originalPrice: 5900,
      rating: 4,
      badge: null,
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=600&q=80",
      description: "Contemporary dining chair featuring stain-resistant fabric weave and reinforced timber dowel legs."
    },
    {
      id: "tab-p-5",
      title: "ELENA CURVED CONSOLE",
      category: "Living",
      currentPrice: 7900,
      originalPrice: 10500,
      rating: 4,
      badge: "NEW",
      badgeType: "cyan",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/1181_1694436667_56121403SD00248.jpg",
      description: "Curved bentwood side console with slotted book and magazine storage."
    },
    {
      id: "tab-p-6",
      title: "SLIDE N STORE COMPACT CABINET",
      category: "Storage",
      currentPrice: 8900,
      originalPrice: 11200,
      rating: 5,
      badge: "SALE",
      badgeType: "coral",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/6962_1694437741_30161803SD00840.jpg",
      description: "Mobile 2-tier storage cabinet with smooth swivel castors and lockable front wheels."
    },
    {
      id: "tab-p-7",
      title: "MERIDIAN ROUND GLASS COFFEE TABLE",
      category: "Tables",
      currentPrice: 12400,
      originalPrice: 15900,
      rating: 5,
      badge: null,
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/8273_1694436666_56121403SD00204.jpg",
      description: "Tempered bevelled glass tabletop resting on interlocking solid walnut base."
    },
    {
      id: "tab-p-8",
      title: "GAYLE SWIVEL ACCENT CHAIR",
      category: "Living",
      currentPrice: 16500,
      originalPrice: 21000,
      rating: 5,
      badge: "NEW",
      badgeType: "cyan",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      description: "Ultra-comfortable curved lounge chair with heavy chrome pedestal."
    }
  ],
  ADDED: [
    {
      id: "tab-a-1",
      title: "VERTEX MODULAR L-SHAPE LOUNGE",
      category: "Living",
      currentPrice: 34900,
      originalPrice: 42000,
      rating: 5,
      badge: "NEW",
      badgeType: "cyan",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/8281_1694437797_56101502SD01662.jpg",
      description: "Left-aligned modular sectional sofa featuring stain-shield micro-chenille upholstery and hardwood frame."
    },
    {
      id: "tab-a-2",
      title: "ORTHO PLUS 78X60 MATTRESS",
      category: "Mattress",
      currentPrice: 21500,
      originalPrice: 28000,
      rating: 5,
      badge: "HOT",
      badgeType: "coral",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/7081_1694437848_56101508SD04331.jpg",
      description: "Doctor-recommended pocket-spring mattress with 3-zone body contouring and antibacterial bamboo knit fabric."
    },
    {
      id: "tab-a-3",
      title: "EDEN PLATFORM BED WITH STORAGE",
      category: "Bedroom",
      currentPrice: 36000,
      originalPrice: 44000,
      rating: 4,
      badge: null,
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/5038_1694435985_56101515SD00513.jpg",
      description: "Floating platform silhouette bed with integrated dual LED night-reading light panels and soft headrest."
    },
    {
      id: "tab-a-4",
      title: "HIGHROLLER 3-SEATER SOFA",
      category: "Living",
      currentPrice: 29800,
      originalPrice: 38500,
      rating: 5,
      badge: "SALE",
      badgeType: "coral",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/8281_1694437797_56101502SD01662.jpg",
      description: "Wide profile track-arm couch with pocket coils and fiber-topped high-resilience foam."
    },
    {
      id: "tab-a-5",
      title: "CENTURIAN SLIMLINE 3-DOOR ALMIRAH",
      category: "Storage",
      currentPrice: 24900,
      originalPrice: 31000,
      rating: 5,
      badge: "NEW",
      badgeType: "cyan",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/6962_1694437741_30161803SD00840.jpg",
      description: "Triple-door wardrobe with full-length mirror, secret locker compartment, and ultra-durable powder finish."
    },
    {
      id: "tab-a-6",
      title: "CLAMPDON CURVED LOUNGER",
      category: "Living",
      currentPrice: 22800,
      originalPrice: 28500,
      rating: 5,
      badge: null,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80",
      description: "Ergonomic lounge chair molded from multi-ply beechwood veneers."
    },
    {
      id: "tab-a-7",
      title: "AIR SENSE MEMORY FOAM MATTRESS",
      category: "Mattress",
      currentPrice: 19500,
      originalPrice: 26000,
      rating: 5,
      badge: "SALE",
      badgeType: "coral",
      image: "https://cdn4.singleinterface.com/files/banner_images/275470/2165_1694437849_56101508SD07611.jpg",
      description: "Cooling gel memory foam layer combined with open-cell transition foam for zero partner disturbance."
    },
    {
      id: "tab-a-8",
      title: "GAYLE SWIVEL ACCENT CHAIR",
      category: "Living",
      currentPrice: 16500,
      originalPrice: 21000,
      rating: 4,
      badge: null,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      description: "Architectural 360-degree swivel chair with plush red upholstery."
    }
  ]
};

export const HOT_DEAL_DATA = {
  title: "CENTURIAN DISPLAY & STORAGE RACK",
  subtitle: "SPECIAL MOHAN ESTATE FLAGSHIP DEAL",
  category: "Home Storage",
  currentPrice: 14999,
  originalPrice: 24999,
  savingsPercent: 40,
  rating: 5,
  reviewCount: 42,
  description: "Crafted from aerospace-grade CRCA steel sheets with multi-tier angled display decks, scratch-resistant powder coat, and high load capacity. Perfect for urban living rooms, study libraries, and showroom displays.",
  sku: "GI-DEL-HD99",
  image: "https://cdn4.singleinterface.com/files/banner_images/275470/3605_1694437739_30161803SD00024.jpg",
  stockLeft: 4,
  initialTime: {
    days: 120,
    hours: 9,
    minutes: 4,
    seconds: 50
  }
};

export const CATEGORY_MATRIX = [
  { id: 1, name: "SOFA", icon: "Sofa", count: "48 Items", desc: "Sectionals, Recliners & 3-Seaters" },
  { id: 2, name: "TABLE LAMP", icon: "Lamp", count: "32 Items", desc: "Ceramic & Brass Desk Lamps" },
  { id: 3, name: "DESK", icon: "Desk", count: "24 Items", desc: "Executive & Study Tables" },
  { id: 4, name: "FLOOR LAMP", icon: "FloorLamp", count: "19 Items", desc: "Tripod & Arc Floor Fixtures", active: true },
  { id: 5, name: "CABINET", icon: "Cabinet", count: "42 Items", desc: "Sideboards, TV Units & Consoles" },
  { id: 6, name: "OFFICE CHAIR", icon: "OfficeChair", count: "36 Items", desc: "Ergonomic Mesh & High-Back" },
  { id: 7, name: "WARDROBE", icon: "Wardrobe", count: "55 Items", desc: "Steel Almirahs & Sliding Robes" },
  { id: 8, name: "BED", icon: "Bed", count: "64 Items", desc: "Hydraulic, King & Queen Suites" },
  { id: 9, name: "CHANDELIER", icon: "Chandelier", count: "15 Items", desc: "Modern Pendant & Crystal Drops" }
];

export const LATEST_NEWS_DATA = {
  featured: {
    id: "news-feat",
    title: "Bed Sale Collection – Mohan Estate Flagship",
    summary: "Discover Godrej Interio's award-winning hydraulic storage beds and posture-aligning orthopedic mattresses, crafted to transform urban bedrooms into sanctuaries of calm.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    date: "November 2026",
    tag: "STORE HIGHLIGHT",
    readTime: "4 min read"
  },
  items: [
    {
      id: "news-1",
      type: "card",
      title: "Ergonomic Workspaces for Delhi Homes",
      excerpt: "How our Mohan Estate design consultants help professionals select mesh chairs and height-adjustable desks that prevent cervical strain.",
      author: "Rohit Mishra, Design Head",
      date: "Nov 02, 2026"
    },
    {
      id: "news-2",
      type: "image",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      caption: "Minimalist dining settings with our Tia collection"
    },
    {
      id: "news-3",
      type: "image",
      image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef1?auto=format&fit=crop&w=600&q=80",
      caption: "Warm ambiance created with geometric lighting"
    },
    {
      id: "news-4",
      type: "card",
      title: "Caring For Your Wooden & Steel Furniture",
      excerpt: "Download our curated care booklets for Godrej Almirahs, dining suites, and stain-resistant fabric sofas to guarantee decades of luster.",
      author: "Godrej Care Team",
      date: "Oct 28, 2026"
    },
    {
      id: "news-5",
      type: "card",
      title: "Festive Living Room Transformation on a Budget",
      excerpt: "Explore 5 smart styling ideas using modular coffee tables, accent cushions, and targeted floor lighting to elevate your living room for ₹25,000.",
      author: "Interio Style Studio",
      date: "Oct 22, 2026"
    },
    {
      id: "news-6",
      type: "image",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
      caption: "Contemporary bedroom suites at NDRAVG Business Park"
    }
  ]
};

export const FAQ_DATA = [
  {
    q: "What payment options are available at the Mohan Estate store?",
    a: "We accept all major payment modes including UPI, Cash, Cheque, Credit/Debit cards (Visa, MasterCard, Maestro, RuPay, Amex), and Net Banking. We also offer 0% No-Cost EMI facilities on leading bank cards and paper finance (Bajaj Finserv, HDB)."
  },
  {
    q: "Are delivery and assembly services free of charge?",
    a: "Yes! Both delivery and professional assembly are 100% free across Delhi NCR. Our dedicated service technician team contacts you prior to delivery to schedule an exact convenient installation window."
  },
  {
    q: "Can I book a personalized interior consultation at the store?",
    a: "Absolutely. Our store at NDRAVG Business Park, Mohan Estate features dedicated 3D room planners and modular kitchen experts. You can book an appointment online or walk in between 11:00 AM and 7:30 PM."
  },
  {
    q: "What warranty comes with Interio by Godrej furniture?",
    a: "All our products come with official Godrej warranties ranging from 1 to 10 years depending on the category (steel almirahs, hydraulic beds, mattresses, and sofas)."
  }
];
