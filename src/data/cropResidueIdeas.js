import { cropImages } from './mockData';

export const cropResidues = [
  {
    id: "rice-straw",
    name: "Rice / Paddy Straw",
    hindiName: "धान की पराली",
    punjabiName: "ਝੋਨੇ ਦੀ ਪਰਾਲੀ",
    teluguName: "వరి గడ్డి",
    tagline: "India's highest volume stubble with immense bio-energy and substrate potential",
    image: cropImages.paddyStraw,
    annualAvailability: "160+ Million Tonnes / year",
    majorStates: ["Punjab", "Haryana", "Uttar Pradesh", "Andhra Pradesh", "Tamil Nadu", "West Bengal"],
    calorificValue: "3,300 kcal/kg",
    carbonNitrogenRatio: "80:1",
    moistureAverage: "10 - 15%",
    solutions: [
      {
        id: "rs-biochar",
        title: "High-Porosity Biochar Production",
        category: "Soil Conditioner & Carbon Credit",
        image: cropImages.biochar,
        revenuePotential: "₹12,000 - ₹18,000 / tonne",
        effort: "Medium",
        techComplexity: "Moderate (Biochar Kiln / Retort)",
        timeToReturns: "Immediate (1-2 days)",
        environmentalImpact: "Sequesters 2.8 tonnes CO₂ equivalent per tonne of biochar",
        investmentRequired: "₹8,000 - ₹25,000 for conical kilns",
        steps: [
          "Sun-dry paddy straw until moisture drops below 12%.",
          "Load straw in batches into an oxygen-limited Flame Curtain or Kon-Tiki kiln.",
          "Ignite from the top to ensure clean smokeless pyrolysis at 500-600°C.",
          "Quench with water or compost tea when pyrolyzed to lock in micro-porosity.",
          "Apply directly to farm soil (saves 25% irrigation) or sell to organic fertilizer plants."
        ],
        targetBuyers: ["Organic Farms", "Soil Amendment Brands", "Carbon Offset Project Developers"]
      },
      {
        id: "rs-mushroom",
        title: "Oyster & Paddy Straw Mushroom Cultivation",
        category: "High Profit Agri-Enterprise",
        image: cropImages.mushroom,
        revenuePotential: "₹60,000 - ₹90,000 / tonne of straw",
        effort: "Medium-High",
        techComplexity: "Low-Moderate (Hygienic Dark Shed)",
        timeToReturns: "18 to 22 Days",
        environmentalImpact: "Zero open burning, 100% biological transformation into gourmet protein",
        investmentRequired: "₹12,000 - ₹30,000 for sheds and spawn bags",
        steps: [
          "Chop dry clean straw into 3-5 cm lengths.",
          "Pasteurize in boiling water (80°C for 45 mins) or lime water solution.",
          "Cool and squeeze excess water until damp (65% moisture).",
          "Layer in perforated polythene bags with high-yield mushroom spawn.",
          "Incubate at 24-28°C; harvest fresh mushroom flushes every 7 days.",
          "Use spent mushroom substrate as ultra-pure vermicompost."
        ],
        targetBuyers: ["Local Mandis", "Hotels & Supermarkets", "Direct-to-Consumer Organic Buyers"]
      },
      {
        id: "rs-compost",
        title: "Rapid Microbial Decomposer Vermicompost",
        category: "Organic Soil Enrichment",
        image: cropImages.compost,
        revenuePotential: "₹6,000 - ₹9,500 / tonne",
        effort: "Low",
        techComplexity: "Very Simple (Bed & Water Spray)",
        timeToReturns: "45 to 60 Days",
        environmentalImpact: "Restores organic carbon in depleted soil, replaces chemical urea & DAP",
        investmentRequired: "₹3,000 for waste decomposer bottles and tarpaulin beds",
        steps: [
          "Spread chopped straw in 1-foot layers.",
          "Spray ICAR-approved bio-decomposer or cow dung slurry (Jeevamrit) between each layer.",
          "Maintain moisture around 55-60% by sprinkling water every 5 days.",
          "Turn the pile on day 15 and day 30 for optimal aeration.",
          "Harvest rich dark vermicompost by day 50 for farm use or bagging."
        ],
        targetBuyers: ["Neighboring Farmers", "Nurseries", "Horticulture Orchards"]
      },
      {
        id: "rs-briquette",
        title: "Industrial Fuel Briquetting & Pellets",
        category: "Renewable Clean Energy",
        image: cropImages.briquettes,
        revenuePotential: "₹4,500 - ₹7,000 / tonne",
        effort: "Low (Direct Sale to Baler / Pelleting Plant)",
        techComplexity: "Low for farmer (Industrial off-taker handles)",
        timeToReturns: "Instant on pickup",
        environmentalImpact: "Replaces coal in thermal boilers, reducing sulfur and particulate smog by 85%",
        investmentRequired: "₹0 (Contract buyer collection)",
        steps: [
          "Gather straw using tractor-mounted rake and baler.",
          "Stack bales on raised tarpaulin platform to prevent moisture absorption.",
          "Coordinate collection with nearby bio-energy / pellet aggregator via CropWasteValueFinder."
        ],
        targetBuyers: ["Thermal Power Plants", "Brick Kilns", "Industrial Boilers", "Bio-CNG Plants"]
      }
    ]
  },
  {
    id: "sugarcane-bagasse",
    name: "Sugarcane Bagasse",
    hindiName: "गन्ने की खोई",
    punjabiName: "ਗੰਨੇ ਦੀ ਖੋਈ",
    teluguName: "చెరకు పిప్పి",
    tagline: "Cellulose-rich fibrous byproduct perfect for tableware, packaging pulp, and clean power",
    image: cropImages.sugarcaneBagasse,
    annualAvailability: "90+ Million Tonnes / year",
    majorStates: ["Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
    calorificValue: "3,800 - 4,200 kcal/kg (dry)",
    carbonNitrogenRatio: "120:1",
    moistureAverage: "45 - 50% (fresh), 12% (dried)",
    solutions: [
      {
        id: "sb-tableware",
        title: "Biodegradable Molded Tableware & Packaging",
        category: "Single-Use Plastic Alternative",
        image: cropImages.paperPulp,
        revenuePotential: "₹18,000 - ₹28,000 / tonne",
        effort: "Medium (Tie-up with pulping units)",
        techComplexity: "High (Molding press & pulper)",
        timeToReturns: "Bi-weekly payments from mills",
        environmentalImpact: "Decomposes in 90 days; 100% toxic-free and food-safe replacement for plastic",
        investmentRequired: "Supply contract / cooperative level",
        steps: [
          "Solar-dry washed bagasse to reduce moisture.",
          "Sell fibrous pulp to thermoforming tableware manufacturers.",
          "Molded plates and meal trays sold at ₹2-₹5/piece to eco-catering suppliers."
        ],
        targetBuyers: ["Eco-Packaging Startups", "Catering & Event Planners", "Export Houses"]
      },
      {
        id: "sb-briquette",
        title: "High-Density Biomass Bio-Coal",
        category: "Industrial Solid Fuel",
        image: cropImages.briquettes,
        revenuePotential: "₹5,200 - ₹7,800 / tonne",
        effort: "Low-Medium",
        techComplexity: "Medium (Screw extruder / Briquetting press)",
        timeToReturns: "1-3 Days",
        environmentalImpact: "Direct substitute for Lignite & Steam coal with zero sulfur emissions",
        investmentRequired: "₹1.5 Lakh for community micro-briquetting press",
        steps: [
          "Shred dried bagasse to 3-5mm grain size.",
          "Feed into mechanical briquetter at 140°C where natural lignin binds the cylinders.",
          "Package dense 70mm - 90mm diameter briquettes for boiler furnaces."
        ],
        targetBuyers: ["Distilleries", "Textile Dyeing Units", "Dairy Processing Plants"]
      }
    ]
  },
  {
    id: "coconut-husk",
    name: "Coconut Husk & Coir Pith",
    hindiName: "नारियल का छिलका ও कोकोपीट",
    punjabiName: "ਨਾਰੀਅਲ ਦਾ ਛਿਲਕਾ",
    teluguName: "కొబ్బరి పీచు & పిత్తు",
    tagline: "High moisture-retention coir fiber and peat commanding massive export and hydroponics demand",
    image: cropImages.coconutHusk,
    annualAvailability: "40+ Million Tonnes / year",
    majorStates: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Goa", "Odisha"],
    calorificValue: "3,600 kcal/kg",
    carbonNitrogenRatio: "110:1",
    moistureAverage: "15 - 20%",
    solutions: [
      {
        id: "ch-cocopeat",
        title: "Washed Low-EC Cocopeat Hydroponic Blocks",
        category: "High-Value Horticulture Media",
        image: cropImages.compost,
        revenuePotential: "₹22,000 - ₹35,000 / tonne",
        effort: "Medium",
        techComplexity: "Low-Moderate (Desalination & Hydraulic Press)",
        timeToReturns: "Weekly batches",
        environmentalImpact: "Replaces destructive peat moss extraction; holds 8x its weight in water",
        investmentRequired: "₹25,000 for washing pit and manual block compressor",
        steps: [
          "Age raw coir pith in washing tanks to flush out excess natural salts (EC < 0.5 mS/cm).",
          "Dry washed coir pith under shade/sun on concrete drying yards.",
          "Compress into 5 kg bricks or grow-bags for domestic nurseries and hydroponic exporters."
        ],
        targetBuyers: ["Hydroponic Urban Farms", "Greenhouse Nurseries", "Export Traders"]
      },
      {
        id: "ch-coirgeo",
        title: "Coir Geotextiles & Erosion Control Nets",
        category: "Civil Engineering & Slope Stabilization",
        image: cropImages.circularFarm,
        revenuePotential: "₹18,000 - ₹26,000 / tonne",
        effort: "Medium",
        techComplexity: "Moderate (Coir Spinning Wheel)",
        timeToReturns: "Monthly contracts",
        environmentalImpact: "100% natural biodegradable mesh that stops highway and riverbank landslides",
        investmentRequired: "₹15,000 for motorized spinning yarn charkha",
        steps: [
          "Extract long coir fibers through mechanical decorticators.",
          "Spin strong continuous 2-ply coir yarn.",
          "Weave into open-mesh geotextile nets (400 - 900 GSM) for slope soil binding."
        ],
        targetBuyers: ["National Highways Authority", "Railway Embankment Contractors", "Forest Departments"]
      }
    ]
  },
  {
    id: "banana-stem",
    name: "Banana Pseudo-Stem",
    hindiName: "केले का तना (स्यूडोस्टेम)",
    punjabiName: "ਕੇਲੇ ਦਾ ਤਣਾ",
    teluguName: "అరటి బోదె",
    tagline: "Water-rich fibrous stem providing premium textile yarn, bio-fertilizer sap, and micro-paper",
    image: cropImages.bananaStem,
    annualAvailability: "60+ Million Tonnes / year",
    majorStates: ["Tamil Nadu", "Maharashtra", "Gujarat", "Andhra Pradesh", "Kerala", "Bihar"],
    calorificValue: "2,800 kcal/kg (dry)",
    carbonNitrogenRatio: "50:1",
    moistureAverage: "85 - 90% (fresh)",
    solutions: [
      {
        id: "bs-fiber",
        title: "Banana Silk Fiber for Sustainable Textiles",
        category: "Premium Eco-Fashion Yarn",
        image: cropImages.paperPulp,
        revenuePotential: "₹45,000 - ₹75,000 / tonne (dry fiber)",
        effort: "Medium",
        techComplexity: "Low-Moderate (Raspador Extraction Machine)",
        timeToReturns: "10-15 Days",
        environmentalImpact: "Water-efficient vegan silk requiring 90% less water than synthetic rayon or cotton",
        investmentRequired: "₹35,000 for single-phase portable raspador machine",
        steps: [
          "Split felled post-harvest banana stems into longitudinal sheaths.",
          "Feed sheaths into raspador blades to scrape away non-fibrous parenchyma tissue.",
          "Wash extracted golden silk fibers in clean water and sun-dry on clotheslines.",
          "Comb and bundle 1 kg hanks for sale to textile craft mills and handloom weavers."
        ],
        targetBuyers: ["Khadi & Village Industries", "Eco-Fashion Apparel Brands", "Handmade Paper Artisans"]
      },
      {
        id: "bs-sap",
        title: "Liquid Bio-Fertilizer & Micronutrient Sap",
        category: "Liquid Organic Growth Promoter",
        image: cropImages.compost,
        revenuePotential: "₹8,000 - ₹14,000 / acre",
        effort: "Very Low",
        techComplexity: "Simple Press & Fermentation",
        timeToReturns: "Immediate (3-5 days)",
        environmentalImpact: "Enriched with potassium, sodium, and gibberellic hormones for higher crop yields",
        investmentRequired: "₹5,000 for collection drums and strainer",
        steps: [
          "Collect the liquid sap squeezed during fiber extraction.",
          "Enrich with beneficial nitrogen-fixing cultures (Azotobacter).",
          "Dilute 1:10 with water for foliar spraying on vegetables and fruits."
        ],
        targetBuyers: ["Organic Horticulture Farmers", "Floriculture Polyhouses"]
      }
    ]
  },
  {
    id: "cotton-stalks",
    name: "Cotton Stalks",
    hindiName: "कपास की लकड़ी / डंठल",
    punjabiName: "ਨਰਮੇ ਦੀਆਂ ਛਟੀਆਂ",
    teluguName: "పత్తి కట్టెలు",
    tagline: "Woody high-lignin biomass ideal for particle boards, biochar, and thermal boiler co-firing",
    image: cropImages.cottonStalks,
    annualAvailability: "35+ Million Tonnes / year",
    majorStates: ["Gujarat", "Maharashtra", "Telangana", "Punjab", "Haryana", "Rajasthan"],
    calorificValue: "4,000 - 4,400 kcal/kg",
    carbonNitrogenRatio: "95:1",
    moistureAverage: "12 - 16%",
    solutions: [
      {
        id: "cs-particleboard",
        title: "Wood-Substitute Particle Boards & MDF",
        category: "Deforestation-Free Furniture Core",
        image: cropImages.paperPulp,
        revenuePotential: "₹8,500 - ₹14,000 / tonne",
        effort: "Low (Chipped on farm and supplied to board plants)",
        techComplexity: "Low for farmer (Industrial processing)",
        timeToReturns: "Immediate on weighbridge delivery",
        environmentalImpact: "Saves mature timber trees from felling for commercial furniture",
        investmentRequired: "₹0 - ₹15,000 (Tractor chipper attachment)",
        steps: [
          "Uproot dry stalks using tractor puller.",
          "Run stalks through a mobile chipper to make 10-20mm woodchips.",
          "Deliver truckloads to particle board manufacturing mills."
        ],
        targetBuyers: ["Greenply & Action TESA Suppliers", "Plywood Factories", "Modular Furniture Manufacturers"]
      },
      {
        id: "cs-biochar",
        title: "High-Hardness Pyrolysis Carbon",
        category: "Activated Carbon Precursor",
        image: cropImages.biochar,
        revenuePotential: "₹14,000 - ₹20,000 / tonne",
        effort: "Medium",
        techComplexity: "Moderate (Steel Retort)",
        timeToReturns: "2 Days",
        environmentalImpact: "High fixed carbon content (>78%) ensuring long-term soil remediation",
        investmentRequired: "₹18,000 for closed retort kiln",
        steps: [
          "Cut woody stalks to 15 cm sticks.",
          "Pyrolyze in low-oxygen steel drum for 3.5 hours at 550°C.",
          "Crush biochar into 2-5mm granules for water purification and soil conditioning."
        ],
        targetBuyers: ["Water Filter Companies", "Organic Fertilizer Blenders", "Soil Remediation Projects"]
      }
    ]
  },
  {
    id: "mustard-husk",
    name: "Mustard Husk & Stalks",
    hindiName: "सरसों की तूड़ी व छिलका",
    punjabiName: "ਸਰ੍ਹੋਂ ਦਾ ਤੂੜਾ",
    teluguName: "ఆవాల పొట్టు",
    tagline: "High calorific value granular husk sought after by power plants and brick kilns",
    image: cropImages.mustardHusk,
    annualAvailability: "18+ Million Tonnes / year",
    majorStates: ["Rajasthan", "Haryana", "Madhya Pradesh", "Uttar Pradesh", "Punjab"],
    calorificValue: "3,900 kcal/kg",
    carbonNitrogenRatio: "70:1",
    moistureAverage: "8 - 11%",
    solutions: [
      {
        id: "mh-pellets",
        title: "Thermal Power Station Co-Firing Pellets",
        category: "National Clean Fuel Mandate",
        image: cropImages.briquettes,
        revenuePotential: "₹5,500 - ₹8,200 / tonne",
        effort: "Low",
        techComplexity: "Low (Direct Aggregation)",
        timeToReturns: "Within 48 hours",
        environmentalImpact: "Helps state power grids meet the 5-7% biomass blending compliance standard",
        investmentRequired: "₹0 (Buyer fleet collects)",
        steps: [
          "Collect threshing floor residue in bulk bags.",
          "Keep dry under sheds (mustard husk naturally retains low moisture).",
          "Sell to NTPC / State Genco authorized pellet aggregators."
        ],
        targetBuyers: ["NTPC Thermal Power Plants", "State GenCos", "Pellet Manufacturers"]
      }
    ]
  },
  {
    id: "groundnut-shells",
    name: "Groundnut Shells",
    hindiName: "मूंगफली के छिलके",
    punjabiName: "ਮੂੰਗਫਲੀ ਦੇ ਛਿਲਕੇ",
    teluguName: "వేరుశెనగ పొట్టు",
    tagline: "Ultra-dry high energy shells with high lignin for briquetting and activated carbon",
    image: cropImages.groundnutShells,
    annualAvailability: "12+ Million Tonnes / year",
    majorStates: ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Rajasthan", "Karnataka"],
    calorificValue: "4,200 - 4,500 kcal/kg",
    carbonNitrogenRatio: "85:1",
    moistureAverage: "7 - 10%",
    solutions: [
      {
        id: "gs-briquettes",
        title: "Premium White-Ash Boiler Briquettes",
        category: "Zero-Clinker Clean Combustion",
        image: cropImages.briquettes,
        revenuePotential: "₹5,800 - ₹8,500 / tonne",
        effort: "Low",
        techComplexity: "Low",
        timeToReturns: "Immediate",
        environmentalImpact: "Low ash (<3%) clean burning fuel saving industries 35% fuel costs vs diesel/coal",
        investmentRequired: "₹0",
        steps: [
          "Direct feed from decorticators into briquetting presses.",
          "Requires zero binder due to natural resin in peanut shells."
        ],
        targetBuyers: ["Edible Oil Refineries", "Solvent Extraction Plants", "Ceramic Kilns"]
      }
    ]
  }
];

export const aiCopilotPresets = [
  {
    query: "I have 4 tonnes of paddy straw in Patiala with ₹10,000 budget. What is the fastest ROI?",
    recommendation: {
      headline: "Oyster Mushroom Cultivation + Biochar Hybrid Model",
      bestCrop: "Rice / Paddy Straw",
      expectedGross: "₹48,000 - ₹62,000",
      netProfit: "₹38,000 (after seed spawn and kiln cost)",
      paybackDays: "21 Days",
      summary: "Dedicate 1.5 tonnes to rapid 21-day Oyster Mushroom bag culture for high retail cashflow (₹120/kg fresh mushrooms). Pyrolyze the remaining 2.5 tonnes into 600 kg high-grade Biochar using an open Kon-Tiki kiln (cost ₹6,500).",
      actionSteps: [
        "Order 25 kg high-yield Florida Oyster spawn from Himalayan Mushroom Lab (Zirakpur - 14 km away).",
        "Set up 100 straw cylinder bags in a shaded ventilated farm room.",
        "Use local fabricator for a 1.2m conical steel biochar kiln.",
        "List finished biochar on CropWasteValueFinder to GreenBio Fueltech at ₹14/kg."
      ],
      carbonSaved: "1,120 kg CO₂ avoided from zero burning"
    }
  },
  {
    query: "How can I monetize 6 tonnes of fresh sugarcane bagasse in Maharashtra?",
    recommendation: {
      headline: "Dual Track: Direct Bio-Briquette Aggregation & Organic Compost",
      bestCrop: "Sugarcane Bagasse",
      expectedGross: "₹28,500 - ₹34,000",
      netProfit: "₹25,000 (Minimal capital outlay)",
      paybackDays: "3 to 7 Days",
      summary: "Bagasse has instant demand from nearby sugar distillery boilers and paper mills. Sell 4.5 tonnes directly at ₹4.20/kg on doorstep collection. Keep 1.5 tonnes to blend with cow dung slurry for rapid soil humus builder.",
      actionSteps: [
        "Solar dry the fresh bagasse on farm field for 48 hours to drop moisture to 18%.",
        "Connect with Shivalik Paper Mills or local jaggery cluster via our Find Buyers tab.",
        "Request doorstep tractor pickup for the bulk 4.5 tonne batch.",
        "Treat remaining 1.5 tonnes with ICAR Waste Decomposer for next sugarcane planting cycle."
      ],
      carbonSaved: "2,400 kg CO₂ equivalent"
    }
  },
  {
    query: "Best value-added use for 2 tonnes of coconut husks in Tamil Nadu / Andhra Pradesh?",
    recommendation: {
      headline: "Washed Low-EC Cocopeat Hydroponic Grow Bags",
      bestCrop: "Coconut Husk & Coir",
      expectedGross: "₹38,000 - ₹52,000",
      netProfit: "₹31,000",
      paybackDays: "14 Days",
      summary: "With booming urban polyhouse and greenhouse hydroponics in South India, washed low-salt cocopeat sells at ₹25-₹35/kg. Raw husks yield 60% pith and 40% high-tensile coir yarn.",
      actionSteps: [
        "Soak husks in farm pond or water trough for desalinization.",
        "Decorticate to separate coir yarn from fine spongy peat.",
        "Compress 5 kg blocks with a simple manual hydraulic jack press.",
        "Supply nearby floriculture nurseries in Coimbatore/Guntur."
      ],
      carbonSaved: "950 kg CO₂ emissions prevented"
    }
  }
];
