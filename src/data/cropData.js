export const cropData = {
  "Paddy Straw": {
    id: "paddy-straw",
    name: {
      en: "Paddy Straw",
      hi: "धान की पराली"
    },
    scientificName: "Oryza sativa residue",
    description: {
      en: "Abundant agricultural byproduct rich in silica, cellulose, and lignin left behind after paddy harvesting.",
      hi: "धान की कटाई के बाद खेत में बचने वाला सिलिका, सेल्यूलोज और लिग्निन से भरपूर प्रचुर फसल अवशेष।"
    },
    carbonNitrogen: "80:1",
    moistureContent: "10 - 14%",
    keyFeatures: {
      en: ["High silica content", "High carbon biomass", "Ideal fibrous texture for decomposition & culture"],
      hi: ["उच्च सिलिका मात्रा", "भरपूर कार्बन बायोमास", "खाद व मशरूम संवर्धन हेतु अनुकूल बनावट"]
    },
    alternatives: [
      {
        id: "compost",
        title: {
          en: "Compost & Vermicomposting",
          hi: "जैविक खाद एवं वर्मीकम्पोस्ट"
        },
        badge: {
          en: "Soil Nutrient Builder",
          hi: "मिट्टी का पोषक तत्व सुधारक"
        },
        summary: {
          en: "Convert high-carbon straw into nutrient-dense organic manure using cow dung slurry and bio-decomposers.",
          hi: "गोबर के घोल और वेस्ट डीकम्पोज़र की मदद से पराली को पोषक तत्वों से भरपूर जैविक खाद में बदलें।"
        },
        economicBenefit: {
          en: "Saves ₹2,500 - ₹4,500 per acre on chemical fertilizers (NPK) for subsequent crop cycles.",
          hi: "आगामी फसल चक्र के लिए रासायनिक उर्वरकों (NPK) पर प्रति एकड़ ₹2,500 - ₹4,500 की बचत।"
        },
        environmentalBenefit: {
          en: "Restores organic carbon in depleted topsoil and eliminates open field stubble burning.",
          hi: "खेत की ऊपरी मिट्टी में जैविक कार्बन बढ़ाता है और पराली जलाने से होने वाले वायु प्रदूषण को रोकता है।"
        },
        steps: {
          en: [
            "Chop paddy straw into 2-3 inch pieces using a cutter or mulcher.",
            "Form layers of straw (15 cm) alternating with cow dung slurry and bio-decomposer solution.",
            "Maintain 55-60% moisture by sprinkling water every 4-5 days.",
            "Turn the compost pile every 15 days for aeration. Enriched compost is ready in 45-60 days."
          ],
          hi: [
            "पराली को कटर या मल्चर की मदद से 2-3 इंच के छोटे टुकड़ों में काट लें।",
            "15 सेमी पराली की परत पर गोबर का घोल और बायो-डीकम्पोज़र का छिड़काव करके परतें बनाएं।",
            "हर 4-5 दिन में हल्का पानी छिड़ककर 55-60% नमी बनाए रखें।",
            "हवा के संचार के लिए हर 15 दिन में ढेर को उलट-पुलट करें। 45-60 दिनों में उत्तम खाद तैयार हो जाएगी।"
          ]
        },
        icon: "Sprout"
      },
      {
        id: "mushroom",
        title: {
          en: "Mushroom Substrate",
          hi: "मशरूम उत्पादन माध्यम"
        },
        badge: {
          en: "High Profit Agri-Business",
          hi: "उच्च लाभ वाला कृषि व्यवसाय"
        },
        summary: {
          en: "Use sterilized paddy straw as a high-yield growing substrate for Oyster and Paddy Straw mushrooms.",
          hi: "उपचारित धान की पराली का उपयोग ढींगरी (ऑयस्टर) और पुआल मशरूम उगाने के लिए सर्वोत्तम माध्यम के रूप में करें।"
        },
        economicBenefit: {
          en: "Produces 600-800 kg mushrooms per ton of straw, generating ₹60,000 - ₹90,000 gross revenue.",
          hi: "प्रति टन पराली से 600-800 किग्रा मशरूम उत्पादन, जिससे ₹60,000 - ₹90,000 तक की कमाई संभव।"
        },
        environmentalBenefit: {
          en: "Zero-waste circular economy: Spent mushroom substrate becomes world-class vermicompost.",
          hi: "शून्य अपशिष्ट: मशरूम उत्पादन के बाद बचा हुआ माध्यम स्वतः उच्च गुणवत्ता वाली वर्मीकम्पोस्ट बन जाता है।"
        },
        steps: {
          en: [
            "Cut dry straw into 3-5 cm lengths and soak in water containing carbendazim/formalin or hot water steam.",
            "Drain excess water until moisture reaches 65% (straw feels damp without dripping).",
            "Layer straw with mushroom spawn in perforated poly-bags at 24-28°C.",
            "Harvest first flush of fresh mushrooms in 18-22 days."
          ],
          hi: [
            "सूखी पराली को 3-5 सेमी टुकड़ों में काटकर गर्म पानी या अनुशंसित जैव उपचार से रोगाणुरहित करें।",
            "अतिरिक्त पानी निकाल दें जब तक कि नमी 65% रह जाए (हाथ में दबाने पर पानी न टपके)।",
            "पॉलीबैग में पराली और मशरूम स्पॉन (बीज) की परतें लगाएं और 24-28°C तापमान में रखें।",
            "18-22 दिनों में ताजी मशरूम की पहली फसल तैयार हो जाती है।"
          ]
        },
        icon: "Layers"
      },
      {
        id: "biochar",
        title: {
          en: "Biochar Production",
          hi: "बायोचार (मिट्टी सुधारक कोयला)"
        },
        badge: {
          en: "Long-term Carbon Sinker",
          hi: "दीर्घकालिक भूमि उर्वरक"
        },
        summary: {
          en: "Thermochemically convert straw via oxygen-limited pyrolysis into porous, carbon-rich soil conditioner.",
          hi: "सीमित ऑक्सीजन में पराली को धीमी आंच (पायरोलिसिस) पर पकाकर छिद्रयुक्त कार्बन से भरपूर बायोचार बनाएं।"
        },
        economicBenefit: {
          en: "Improves water retention by 25-30%, reducing irrigation costs and increasing crop yields.",
          hi: "मिट्टी की जलधारण क्षमता 25-30% बढ़ाती है, जिससे सिंचाई का खर्च घटता है और पैदावार बढ़ती है।"
        },
        environmentalBenefit: {
          en: "Permanently locks atmospheric carbon into soil for hundreds of years, mitigating climate change.",
          hi: "वायुमंडलीय कार्बन को सैकड़ों वर्षों तक जमीन में बांधकर रखती है और जलवायु संरक्षण करती है।"
        },
        steps: {
          en: [
            "Dry the paddy straw to below 15% moisture.",
            "Pack straw tightly into a low-cost kiln (like a Kon-Tiki cone or double-barrel pyrolyzer).",
            "Ignite from top to create a flame curtain that burns off smoke while converting straw to charcoal below.",
            "Quench with water once carbonization finishes, grind gently, and mix with compost or jeevamrut before field application."
          ],
          hi: [
            "धान की पराली को 15% से कम नमी तक अच्छी तरह सुखा लें।",
            "पराली को बायोचार भट्टी (कोन-टिकी या डबल-बैरल ड्रम) में कसकर भरें।",
            "ऊपर से आग लगाएं ताकि धुआं जल जाए और नीचे की पराली बिना राख बने बायोचार में बदल जाए।",
            "पूरी तरह कोयला बनने पर पानी छिड़ककर बुझाएं, बारीक पीसें और जीवामृत/खाद के साथ मिलाकर खेत में डालें।"
          ]
        },
        icon: "Flame"
      }
    ]
  },

  "Banana Stem": {
    id: "banana-stem",
    name: {
      en: "Banana Stem",
      hi: "केले का तना (स्यूडोस्टेम)"
    },
    scientificName: "Musa pseudostem residue",
    description: {
      en: "Heavy, water-dense pseudostem containing high tensile fibers, potassium-rich sap, and organic cellulose.",
      hi: "केले की कटाई के बाद छूटने वाला तना, जो मजबूत प्राकृतिक रेशों, पोटाश-युक्त रस और सेल्यूलोज से भरपूर होता है।"
    },
    carbonNitrogen: "45:1",
    moistureContent: "85 - 90%",
    keyFeatures: {
      en: ["High tensile natural fiber", "Rich in soluble Potassium (K)", "High water-holding capacity"],
      hi: ["मजबूत प्राकृतिक रेशा", "घुलनशील पोटाश (पोटेशियम) से भरपूर", "उच्च नमी धारण क्षमता"]
    },
    alternatives: [
      {
        id: "fibre",
        title: {
          en: "Fibre Products & Handicrafts",
          hi: "केले का रेशा एवं हस्तशिल्प उत्पाद"
        },
        badge: {
          en: "Eco-Textile & Paper Industry",
          hi: "इको-टेक्सटाइल और हस्तकला उद्योग"
        },
        summary: {
          en: "Extract high-strength natural fiber for manufacturing eco-friendly ropes, bags, paper, and textile yarns.",
          hi: "केले के तने से मशीन द्वारा मजबूत रेशा निकालकर पर्यावरण के अनुकूल रस्सियां, बैग, पेपर और कपड़े बनाएं।"
        },
        economicBenefit: {
          en: "Dry fiber sells at ₹120 - ₹200/kg; creates rural women self-help group cottage industry employment.",
          hi: "सूखा रेशा ₹120 - ₹200 प्रति किलो बिकता है; महिला स्वयं सहायता समूहों के लिए स्वरोजगार का बेहतरीन जरिया।"
        },
        environmentalBenefit: {
          en: "100% biodegradable replacement for single-use synthetic plastics, nylon ropes, and wood pulp paper.",
          hi: "प्लास्टिक, नायलॉन और पेड़ों की लकड़ी से बनने वाले कागज का 100% प्राकृतिक और बायोडिग्रेडेबल विकल्प।"
        },
        steps: {
          en: [
            "Peel the outer sheaths of harvested pseudostem into longitudinal strips.",
            "Feed strips through a motorized banana fiber extractor raspador machine.",
            "Wash extracted fibers in clean water and dry under shade.",
            "Grade fibers for spinning into yarn, weaving into baskets, handicrafts, or blending with cotton."
          ],
          hi: [
            "केले के तने की बाहरी परतों को छीलकर लंबी पट्टियां अलग कर लें।",
            "इन पट्टियों को रेशा निकालने वाली रास्पाडोर मशीन (Banana Fiber Extractor) में डालें।",
            "निकाले गए रेशों को साफ पानी में धोकर छाया में सुखाएं।",
            "रेशों को छांटकर धागा, रस्सी, दस्तकारी उत्पाद, बैग या सूती कपड़ों में मिश्रित करने हेतु उपयोग करें।"
          ]
        },
        icon: "Scissors"
      },
      {
        id: "compost",
        title: {
          en: "Compost & Liquid Sap Fertilizer",
          hi: "पोटाश युक्त कम्पोस्ट और तरल खाद"
        },
        badge: {
          en: "Potassium Powerhouse",
          hi: "पोटाश का प्राकृतिक खजाना"
        },
        summary: {
          en: "Convert the scutching waste and central core into potassium-rich organic manure and liquid foliar spray.",
          hi: "रेशा निकालने के बाद बचे गूदे और तने के रस से पोटाश-युक्त जैविक खाद और पौधों के लिए स्प्रे टॉनिक तैयार करें।"
        },
        economicBenefit: {
          en: "Reduces synthetic muriate of potash (MOP) requirement by up to 35%, cutting input expenses.",
          hi: "रासायनिक पोटाश (MOP) खाद की आवश्यकता में 35% तक की कमी, जिससे खेती की लागत घटती है।"
        },
        environmentalBenefit: {
          en: "Recycles heavy moisture and micronutrients back into orchard soil without methane emission.",
          hi: "तना सड़ने से होने वाले दुर्गंध और मच्छरों से राहत मिलती है और पोषक तत्व खेत में लौट आते हैं।"
        },
        steps: {
          en: [
            "Chop leftover stem biomass into small chunks using a shredder.",
            "Extract remaining liquid sap (useful as a foliar spray nutrient booster diluted 1:10).",
            "Mix solid biomass chunks with cow dung, dry leaves, and rock phosphate in a composting pit.",
            "Mature compost is ready in 6-8 weeks, enriched with natural Potassium and microelements."
          ],
          hi: [
            "बचे हुए तने को श्रेडर मशीन से छोटे-छोटे टुकड़ों में काट लें।",
            "तने से निकले तरल रस को छानकर 1:10 अनुपात में पानी मिलाकर पत्तियों पर टॉनिक के रूप में स्प्रे करें।",
            "ठोस गूदे को गोबर, सूखी पत्तियों और वेस्ट डीकम्पोज़र के साथ गड्ढे में भरें।",
            "6-8 हफ्तों में पोटाश और सूक्ष्म पोषक तत्वों से भरपूर शानदार जैविक खाद तैयार हो जाती है।"
          ]
        },
        icon: "Droplets"
      },
      {
        id: "mulch",
        title: {
          en: "Mulch for Soil Moisture",
          hi: "मल्चिंग (नमी संरक्षण आवरण)"
        },
        badge: {
          en: "Drought & Weed Defense",
          hi: "सूखा और खरपतवार नियंत्रण"
        },
        summary: {
          en: "Spread shredded pseudostem rings around tree basins to lock in soil moisture and block weed growth.",
          hi: "कटे हुए तने के टुकड़ों को फलदार पेड़ों और कतारों के बीच बिछाकर मिट्टी में नमी रोकें और खरपतवार रोकें।"
        },
        economicBenefit: {
          en: "Cuts irrigation water demand by 40% and saves ₹1,500/acre in manual weeding labor.",
          hi: "सिंचाई के पानी में 40% तक की बचत और खरपतवार निराई-गुड़ाई की मजदूरी में प्रति एकड़ ₹1,500 की बचत।"
        },
        environmentalBenefit: {
          en: "Maintains optimal soil temperature during harsh summer heatwaves and prevents topsoil erosion.",
          hi: "भीषण गर्मी में मिट्टी का तापमान ठंडा रखता है और जमीन से वाष्पीकरण व कटाव को रोकता है।"
        },
        steps: {
          en: [
            "Slice banana pseudostem into 1-2 inch thick circular rings or coarsely shredded pieces.",
            "Spread a 3 to 4 inch thick layer around the root zone of fruit trees, vegetables, or field crops.",
            "Leave a 2-inch gap directly around the tree trunk to maintain aeration.",
            "As the mulch slowly decomposes over 3 months, it releases continuous moisture and organic matter."
          ],
          hi: [
            "केले के तने को 1-2 इंच मोटे गोल टुकड़ों या छोटे कतरों में काट लें।",
            "फलों के पेड़ों, सब्जियों या पौधों की जड़ों के चारों ओर 3-4 इंच मोटी परत बिछाएं।",
            "पेड़ के मुख्य तने से 2 इंच की दूरी रखें ताकि फफूंद न लगे।",
            "जैसे-जैसे यह धीरे-धीरे सड़ता है, यह 3 महीने तक लगातार नमी और पोषक तत्व छोड़ता रहता है।"
          ]
        },
        icon: "ShieldCheck"
      }
    ]
  },

  "Corn Stalk": {
    id: "corn-stalk",
    name: {
      en: "Corn Stalk (Maize Residue)",
      hi: "मक्के के डंठल (मकई अवशेष)"
    },
    scientificName: "Zea mays stover residue",
    description: {
      en: "Rigid, lignocellulosic stover consisting of dried stalks, leaves, and husks remaining after maize ear harvest.",
      hi: "मक्के के भुट्टे तोड़ने के बाद खेत में बचा हुआ सूखा डंठल, पत्तियां और खोई का सख्त बायोमास।"
    },
    carbonNitrogen: "60:1",
    moistureContent: "12 - 18%",
    keyFeatures: {
      en: ["High calorific value (~3800 kcal/kg)", "High dry matter fiber", "Excellent structural rigidity"],
      hi: ["उच्च कैलोरी मान (~3800 kcal/kg)", "सूखा पौष्टिक रेशा", "मजबूत संरचनात्मक बनावट"]
    },
    alternatives: [
      {
        id: "compost",
        title: {
          en: "Enriched Compost & Soil Conditioner",
          hi: "पोषक कम्पोस्ट एवं भूमि सुधारक"
        },
        badge: {
          en: "Humus Restorer",
          hi: "ह्यूमस और मिट्टी की जान"
        },
        summary: {
          en: "Chop rigid stalks into fine mulched chips to accelerate microbial breakdown into humus-rich field manure.",
          hi: "सख्त डंठलों को बारीक कतर कर गोबर और जैविक बैक्टीरिया के साथ तेजी से सड़ाकर भुरभुरी जैविक खाद बनाएं।"
        },
        economicBenefit: {
          en: "Improves soil structure and aeration, cutting chemical fertilizer needs by ₹2,000 - ₹3,500/acre.",
          hi: "मिट्टी की भुरभुरी बनावट सुधारता है, जिससे रासायनिक खाद की जरूरत में ₹2,000 - ₹3,500/एकड़ की कमी आती है।"
        },
        environmentalBenefit: {
          en: "Recycles 100% of organic matter directly back into soil ecology without smog and carbon emission.",
          hi: "बिना किसी धुएं या प्रदूषण के पूरे बायोमास को सीधे मिट्टी की उर्वरता में बदल देता है।"
        },
        steps: {
          en: [
            "Shred dried corn stalks into 1-inch chips using a tractor-operated flail mower or forage chopper.",
            "Create alternating layers: 20 cm shredded stalk + 5 cm cattle manure / poultry litter.",
            "Inoculate with Trichoderma or waste decomposer culture to break down tough lignin.",
            "Keep aerated and moist; yields black, sweet-smelling humus within 50-70 days."
          ],
          hi: [
            "सूखे मक्के के डंठलों को थ्रेशर या फॉरेज चॉपर से 1 इंच के छोटे टुकड़ों में कतर लें।",
            "20 सेमी कतरे हुए डंठल और 5 सेमी गोबर/मुर्गी की खाद की क्रमिक परतें बनाएं।",
            "सख्त लिग्निन को जल्दी गलाने के लिए ट्राइकोडर्मा या वेस्ट डीकम्पोज़र का छिड़काव करें।",
            "नमी बनाए रखें और उलटते रहें; 50-70 दिनों में गहरे काले रंग की उपजाऊ खाद तैयार हो जाएगी।"
          ]
        },
        icon: "Sprout"
      },
      {
        id: "bedding",
        title: {
          en: "Animal Bedding & Fodder Supplement",
          hi: "पशुओं का बिछावन एवं साइलेज/सूखा चारा"
        },
        badge: {
          en: "Livestock Care & Comfort",
          hi: "पशुधन स्वास्थ्य एवं आराम"
        },
        summary: {
          en: "Use shredded corn stover as absorbent, hygienic bedding in dairy sheds, or mix with molasses as dry roughage.",
          hi: "कटे हुए डंठल को गौशाला में बिछावन के रूप में इस्तेमाल करें या शीरा/यूरिया उपचारित करके पशु आहार में मिलाएं।"
        },
        economicBenefit: {
          en: "Prevents mastitis in cows, improves milk hygiene, and reduces commercial fodder purchase expenses.",
          hi: "दुधारू पशुओं में थनैला रोग से बचाव, गौशाला में स्वच्छता और सूखे चारे की खरीद लागत में भारी बचत।"
        },
        environmentalBenefit: {
          en: "Soiled bedding absorbs urine nitrogen, turning directly into premium-grade farmyard manure (FYM).",
          hi: "बिछावन पशुओं के मूत्र व गोबर को सोखकर नाइट्रोजन से भरपूर सर्वोत्तम कम्पोस्ट खाद में बदल जाता है।"
        },
        steps: {
          en: [
            "Ensure corn stalks are clean, sun-dried, and mold-free before processing.",
            "Chop stalks into soft 1.5 to 2 inch pieces using a chaff cutter (कुट्टी मशीन).",
            "Spread a 4-inch deep bedding layer in cattle stalls to provide warmth and absorb moisture.",
            "Alternatively, treat green/semi-dry stalks with 2% urea-molasses solution for enriched cattle roughage."
          ],
          hi: [
            "सुनिश्चित करें कि डंठल पूरी तरह सूखे और फफूंद रहित हों।",
            "कुट्टी काटने वाली मशीन से डंठल को 1.5 से 2 इंच के छोटे मुलायम टुकड़ों में काटें।",
            "गौशाला के फर्श पर 4 इंच मोटी परत बिछाएं जो नमी सोखेगी और पशुओं को सर्दी से बचाएगी।",
            "या फिर 2% यूरिया और शीरे के घोल से उपचारित करके पशुओं के लिए पौष्टिक सूखा चारा तैयार करें।"
          ]
        },
        icon: "Home"
      },
      {
        id: "briquettes",
        title: {
          en: "Biomass Briquettes & Pellets",
          hi: "बायोमास ब्रिकेट्स एवं ईंधन छर्रे"
        },
        badge: {
          en: "Clean Renewable Energy",
          hi: "स्वच्छ हरित ऊर्जा स्रोत"
        },
        summary: {
          en: "Compress pulverized corn stover into high-density white coal / fuel briquettes for industrial boilers and brick kilns.",
          hi: "मक्के के डंठल के बुरादे को उच्च दबाव में दबाकर पर्यावरण अनुकूल बायोमास कोयला (ब्रिकेट) बनाएं।"
        },
        economicBenefit: {
          en: "Briquettes sell at ₹4,000 - ₹6,500 per ton to thermal plants, boilers, and local food processors.",
          hi: "बायोमास ब्रिकेट्स फैक्ट्रियों, ईंट भट्ठों और बॉयलर यूनिटों को ₹4,000 - ₹6,500 प्रति टन में बिकती हैं।"
        },
        environmentalBenefit: {
          en: "Replaces dirty fossil coal, delivering 100% carbon-neutral heat with less than 5% ash content.",
          hi: "प्रदूषणकारी कोयले का हरित विकल्प, जिसमें सल्फर नहीं होता और राख की मात्रा 5% से भी कम होती है।"
        },
        steps: {
          en: [
            "Grind dried corn stover through a hammer mill into 3-5 mm granular biomass.",
            "Check moisture content and ensure it is regulated between 10-12%.",
            "Feed dry granules into a mechanical or screw-press briquetting machine without chemical binders.",
            "Natural lignin bonds under high pressure and heat to form solid cylindrical fuel logs ready for sale."
          ],
          hi: [
            "सूखे डंठलों को हैमर मिल से 3-5 मिमी के दानेदार बुरादे में पीस लें।",
            "बुरादे में नमी की मात्रा 10-12% के बीच नियंत्रित रखें।",
            "बुरादे को बिना किसी रसायन के बायोमास ब्रिकेटिंग मशीन में उच्च दबाव से दबाएं।",
            "दबाव और प्राकृतिक गर्मी से लिग्निन चिपककर मजबूत ठोस ईंधन गट्टे (सफेद कोयला) बन जाता है।"
          ]
        },
        icon: "Zap"
      }
    ]
  }
};
