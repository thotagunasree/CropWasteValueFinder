// High quality royalty-free Unsplash agriculture, bio-waste, energy, and compost images
export const cropImages = {
  paddyStraw: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
  sugarcaneBagasse: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
  coconutHusk: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=1200&q=80",
  bananaStem: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=80",
  cottonStalks: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1200&q=80",
  mustardHusk: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1200&q=80",
  groundnutShells: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=1200&q=80",
  
  // Value Added Products
  biochar: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
  compost: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80",
  mushroom: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
  briquettes: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80",
  paperPulp: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80",
  circularFarm: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
  heroFarm: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1400&q=80",
  farmerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
};

// NOTE: No global demo farmer profile or demo listings.
// All farmer data is stored per-user in localStorage via authService.js.


export const nearbyBuyers = [
  {
    id: "byr-1",
    name: "GreenBio Fueltech Pvt Ltd",
    category: "Bio-CNG & Briquettes",
    location: "Rajpura Industrial Area",
    district: "Patiala, Punjab",
    distanceKm: 4.2,
    acceptedWastes: ["Paddy Straw", "Mustard Husk", "Wheat Straw"],
    priceRange: "₹3.60 - ₹4.10 / kg",
    pricePerKg: 3.85,
    minQuantity: "500 kg",
    rating: 4.9,
    reviewsCount: 38,
    verified: true,
    badge: "Government Certified Bio-CNG Partner",
    phone: "+91 94170 11223",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    lat: 30.485,
    lng: 76.595,
    turnaroundHours: "24-48 hrs"
  },
  {
    id: "byr-2",
    name: "Shivalik Paper & Board Mills",
    category: "Eco Paper & Packaging",
    location: "Dera Bassi",
    district: "Mohali, Punjab",
    distanceKm: 8.5,
    acceptedWastes: ["Paddy Straw", "Sugarcane Bagasse", "Wheat Straw"],
    priceRange: "₹3.40 - ₹3.90 / kg",
    pricePerKg: 3.70,
    minQuantity: "1,000 kg",
    rating: 4.8,
    reviewsCount: 52,
    verified: true,
    badge: "Instant Direct UPI Payout",
    phone: "+91 98150 44556",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
    lat: 30.598,
    lng: 76.845,
    turnaroundHours: "Same Day Pickup"
  },
  {
    id: "byr-3",
    name: "Amrit Organics & Vermicompost Hub",
    category: "Bio-Fertilizers & Compost",
    location: "Sirhind Road",
    district: "Patiala, Punjab",
    distanceKm: 6.1,
    acceptedWastes: ["Paddy Straw", "Sugarcane Bagasse", "Groundnut Shells"],
    priceRange: "₹3.20 - ₹3.60 / kg",
    pricePerKg: 3.50,
    minQuantity: "300 kg",
    rating: 4.9,
    reviewsCount: 29,
    verified: true,
    badge: "Free Farm Doorstep Collection",
    phone: "+91 98722 88990",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    lat: 30.345,
    lng: 76.395,
    turnaroundHours: "Within 24 hrs"
  },
  {
    id: "byr-4",
    name: "Punjab Bio-Char Carbon Works",
    category: "High-grade Biochar",
    location: "Samana Highway",
    district: "Patiala, Punjab",
    distanceKm: 11.4,
    acceptedWastes: ["Cotton Stalks", "Mustard Husk", "Paddy Straw"],
    priceRange: "₹4.00 - ₹4.50 / kg",
    pricePerKg: 4.25,
    minQuantity: "1,500 kg",
    rating: 4.7,
    reviewsCount: 21,
    verified: true,
    badge: "High-Temperature Pyrolysis Unit",
    phone: "+91 99144 33221",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    lat: 30.155,
    lng: 76.195,
    turnaroundHours: "48 hrs"
  },
  {
    id: "byr-5",
    name: "Himalayan Mushroom Spawn & Agri-Farms",
    category: "Mushroom Cultivation",
    location: "Zirakpur Bypass",
    district: "SAS Nagar, Punjab",
    distanceKm: 14.8,
    acceptedWastes: ["Paddy Straw", "Wheat Straw", "Corn Stover"],
    priceRange: "₹4.50 - ₹5.20 / kg",
    pricePerKg: 4.90,
    minQuantity: "800 kg",
    rating: 5.0,
    reviewsCount: 44,
    verified: true,
    badge: "Premium Spawn Quality Partner",
    phone: "+91 98888 77665",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    lat: 30.645,
    lng: 76.825,
    turnaroundHours: "Next Day Delivery"
  },
  {
    id: "byr-6",
    name: "Thermal Green Power Cogeneration",
    category: "Renewable Power Plant",
    location: "Lehra Mohabbat",
    district: "Bathinda, Punjab",
    distanceKm: 28.0,
    acceptedWastes: ["Paddy Straw", "Cotton Stalks", "Mustard Husk", "Bagasse"],
    priceRange: "₹3.80 - ₹4.30 / kg",
    pricePerKg: 4.10,
    minQuantity: "3,000 kg",
    rating: 4.8,
    reviewsCount: 88,
    verified: true,
    badge: "Bulk Industrial Off-Taker",
    phone: "+91 97799 11002",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
    lat: 30.275,
    lng: 75.195,
    turnaroundHours: "Scheduled Fleets"
  }
];

export const monthlyEarnings = [
  { month: "Jul", earnings: 3200, wasteSoldKg: 850, burningLossAvoided: 1800 },
  { month: "Aug", earnings: 4900, wasteSoldKg: 1300, burningLossAvoided: 2400 },
  { month: "Sep", earnings: 6200, wasteSoldKg: 1700, burningLossAvoided: 3100 },
  { month: "Oct", earnings: 9800, wasteSoldKg: 2600, burningLossAvoided: 5200 },
  { month: "Nov", earnings: 15400, wasteSoldKg: 4100, burningLossAvoided: 8900 },
  { month: "Dec", earnings: 9100, wasteSoldKg: 2450, burningLossAvoided: 5100 }
];

export const recommendedHighlights = [
  {
    id: "rec-biochar",
    title: "Biochar Production",
    category: "High Yield Pyrolysis",
    image: cropImages.biochar,
    expectedRevenue: "₹12,000 - ₹18,000 / ton",
    effortLevel: "Medium",
    effortColor: "text-amber-700 bg-amber-100",
    timeRequired: "4-6 Hours",
    description: "Convert dry stubble into high-porosity carbon that enriches soil organic matter and permanently sequesters carbon.",
    bestFor: "Paddy Straw, Cotton Stalks, Coconut Shells",
    co2Offset: "2.8 kg CO₂ per kg produced"
  },
  {
    id: "rec-compost",
    title: "Enriched Vermicompost",
    category: "Organic Soil Builder",
    image: cropImages.compost,
    expectedRevenue: "₹6,000 - ₹9,500 / ton",
    effortLevel: "Low",
    effortColor: "text-emerald-700 bg-emerald-100",
    timeRequired: "45-60 Days",
    description: "Combine chopped crop residue with cow dung slurry and earthworms to produce high-value natural fertilizer.",
    bestFor: "Paddy Straw, Sugarcane Bagasse, Weed Biomass",
    co2Offset: "1.4 kg CO₂ saved per kg"
  },
  {
    id: "rec-mushroom",
    title: "Mushroom Cultivation",
    category: "High-Margin Agri-Business",
    image: cropImages.mushroom,
    expectedRevenue: "₹60,000 - ₹90,000 / ton",
    effortLevel: "Medium-High",
    effortColor: "text-blue-700 bg-blue-100",
    timeRequired: "18-24 Days",
    description: "Sterilized straw beds yield high-value Oyster and Paddy Straw mushrooms with rapid commercial harvest cycles.",
    bestFor: "Clean Paddy Straw, Wheat Straw",
    co2Offset: "Zero open burning emission"
  },
  {
    id: "rec-briquettes",
    title: "Biomass Briquettes",
    category: "Clean Industrial Fuel",
    image: cropImages.briquettes,
    expectedRevenue: "₹4,800 - ₹7,200 / ton",
    effortLevel: "Low-Medium",
    effortColor: "text-emerald-700 bg-emerald-100",
    timeRequired: "1-2 Days",
    description: "Densified bio-coal replacement sold to industrial boilers, brick kilns, and state thermal power stations.",
    bestFor: "Mustard Husk, Bagasse, Cotton Stalks",
    co2Offset: "Replaces dirty fossil coal"
  }
];

export const samplePresetPhotos = [
  {
    label: "Paddy Straw (Dry Bales)",
    crop: "Paddy Straw",
    type: "Baled Dry Straw",
    url: cropImages.paddyStraw
  },
  {
    label: "Sugarcane Bagasse (Fresh)",
    crop: "Sugarcane Bagasse",
    type: "Crushed Fibrous Bagasse",
    url: cropImages.sugarcaneBagasse
  },
  {
    label: "Coconut Husk (Fibre)",
    crop: "Coconut Husk",
    type: "Coir & Peat Raw",
    url: cropImages.coconutHusk
  },
  {
    label: "Cotton Stalks (Dry)",
    crop: "Cotton Stalks",
    type: "Woody Biomass Stalks",
    url: cropImages.cottonStalks
  },
  {
    label: "Mustard Husk (Golden)",
    crop: "Mustard Husk",
    type: "Granular Husk",
    url: cropImages.mustardHusk
  },
  {
    label: "Groundnut Shells",
    crop: "Groundnut Shells",
    type: "Dry Outer Pods",
    url: cropImages.groundnutShells
  }
];
