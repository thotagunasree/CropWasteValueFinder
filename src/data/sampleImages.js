// High-detail SVG data URIs representing the three primary crop waste types
export const sampleImages = [
  {
    id: "paddy-straw",
    name: "Paddy Straw",
    nameHi: "धान की पराली",
    tag: "Paddy Straw",
    badge: "Golden Cereal Straw",
    description: "Harvested rice stalks and threshing straw bundles",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <linearGradient id="strawBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="%23d4a373"/>
          <stop offset="50%" stop-color="%23c58f55"/>
          <stop offset="100%" stop-color="%23a47148"/>
        </linearGradient>
        <linearGradient id="ground" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="%238d5b4c"/>
          <stop offset="100%" stop-color="%2367412e"/>
        </linearGradient>
        <linearGradient id="stalkGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%23fef08a"/>
          <stop offset="50%" stop-color="%23eab308"/>
          <stop offset="100%" stop-color="%23ca8a04"/>
        </linearGradient>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="%23e0f2fe"/>
          <stop offset="100%" stop-color="%23fefae0"/>
        </linearGradient>
      </defs>
      <!-- Background Sky / Field -->
      <rect width="400" height="300" fill="url(%23skyGrad)"/>
      <path d="M0 160 Q 150 140 400 170 L400 300 L0 300 Z" fill="url(%23ground)"/>
      <ellipse cx="200" cy="220" rx="170" ry="60" fill="%23553729" opacity="0.4"/>
      
      <!-- Paddy Straw Stack / Bundles -->
      <path d="M70 230 C120 110, 280 110, 330 230 C300 260, 100 260, 70 230 Z" fill="url(%23strawBg)"/>
      
      <!-- Individual Straw Strands -->
      <g stroke="url(%23stalkGold)" stroke-width="3" stroke-linecap="round">
        <path d="M90 225 Q130 140 180 120 Q200 100 210 80"/>
        <path d="M120 235 Q160 130 200 110 Q215 90 230 75"/>
        <path d="M150 240 Q180 135 220 105 Q240 85 250 70"/>
        <path d="M180 245 Q210 130 250 115 Q270 95 280 85"/>
        <path d="M210 240 Q230 145 270 125 Q290 105 310 95"/>
        <path d="M100 210 Q140 160 190 140"/>
        <path d="M130 220 Q170 150 220 130"/>
        <path d="M160 215 Q200 155 250 140"/>
        <path d="M190 225 Q230 165 280 150"/>
        <path d="M220 220 Q250 170 300 160"/>
        <!-- Straw Cross-hatch Details -->
        <path d="M85 220 L315 225" stroke="%23ca8a04" stroke-width="2" opacity="0.8"/>
        <path d="M100 190 L300 195" stroke="%23ca8a04" stroke-width="2.5" opacity="0.8"/>
        <path d="M120 160 L280 165" stroke="%23b45309" stroke-width="2.5" opacity="0.8"/>
        <path d="M150 130 L250 135" stroke="%23b45309" stroke-width="2" opacity="0.8"/>
      </g>
      <!-- Paddy Earhead details -->
      <g fill="%23ca8a04">
        <circle cx="210" cy="80" r="3"/>
        <circle cx="230" cy="75" r="3.5"/>
        <circle cx="250" cy="70" r="3"/>
        <circle cx="280" cy="85" r="3"/>
      </g>
      <!-- Overlay Label Tag -->
      <rect x="20" y="20" width="130" height="32" rx="16" fill="%231b4332" opacity="0.9"/>
      <text x="85" y="41" fill="%23ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">🌾 Paddy Straw</text>
    </svg>`
  },
  {
    id: "banana-stem",
    name: "Banana Stem",
    nameHi: "केले का तना",
    tag: "Banana Stem",
    badge: "Fibre Pseudostem",
    description: "Harvested fibrous pseudostem and green leaf sheath layers",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <linearGradient id="bananaBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="%23f7f4ea"/>
          <stop offset="100%" stop-color="%23dcfce7"/>
        </linearGradient>
        <linearGradient id="stemOuter" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="%232d6a4f"/>
          <stop offset="25%" stop-color="%2340916c"/>
          <stop offset="70%" stop-color="%2352b788"/>
          <stop offset="100%" stop-color="%231b4332"/>
        </linearGradient>
        <linearGradient id="stemCut" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%23fefae0"/>
          <stop offset="50%" stop-color="%23ecfccb"/>
          <stop offset="100%" stop-color="%23d9f99d"/>
        </linearGradient>
      </defs>
      <!-- Background -->
      <rect width="400" height="300" fill="url(%23bananaBg)"/>
      <path d="M0 200 Q 200 180 400 200 L400 300 L0 300 Z" fill="%236f4e37" opacity="0.6"/>
      
      <!-- Banana Leaves Backdrop -->
      <path d="M30 180 Q 80 40 220 50 Q 140 120 30 180 Z" fill="%2340916c" opacity="0.5"/>
      <path d="M370 190 Q 320 30 180 40 Q 260 110 370 190 Z" fill="%2352b788" opacity="0.4"/>
      
      <!-- Banana Main Pseudostem (Horizontal / Slanted Trunk) -->
      <path d="M50 240 L350 210 L340 150 L40 180 Z" fill="url(%23stemOuter)"/>
      
      <!-- Cut Cross-section Ellipse showing concentric fibrous rings -->
      <ellipse cx="60" cy="205" rx="35" ry="50" transform="rotate(-15 60 205)" fill="url(%23stemCut)" stroke="%232d6a4f" stroke-width="4"/>
      <ellipse cx="60" cy="205" rx="25" ry="38" transform="rotate(-15 60 205)" fill="none" stroke="%2352b788" stroke-width="3" stroke-dasharray="4,2"/>
      <ellipse cx="60" cy="205" rx="15" ry="25" transform="rotate(-15 60 205)" fill="none" stroke="%2316a34a" stroke-width="2.5"/>
      <circle cx="58" cy="204" r="6" fill="%2365a30d"/>
      
      <!-- Fibrous Striations along stem -->
      <path d="M75 175 C 160 170, 260 160, 340 152" stroke="%2386efac" stroke-width="2" fill="none" opacity="0.7"/>
      <path d="M80 195 C 170 188, 270 180, 345 170" stroke="%23bbf7d0" stroke-width="2.5" fill="none" opacity="0.6"/>
      <path d="M85 215 C 180 205, 275 195, 348 190" stroke="%2322c55e" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M70 235 C 170 225, 270 212, 350 208" stroke="%2315803d" stroke-width="3" fill="none" opacity="0.9"/>
      
      <!-- Peeling fiber strand detail -->
      <path d="M220 180 Q 280 140 320 110" stroke="%23fef08a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M240 190 Q 300 155 350 130" stroke="%23fef9c3" stroke-width="2.5" fill="none" stroke-linecap="round"/>

      <!-- Overlay Label Tag -->
      <rect x="20" y="20" width="135" height="32" rx="16" fill="%231b4332" opacity="0.9"/>
      <text x="87" y="41" fill="%23ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">🍌 Banana Stem</text>
    </svg>`
  },
  {
    id: "corn-stalk",
    name: "Corn Stalk",
    nameHi: "मक्के के डंठल",
    tag: "Corn Stalk",
    badge: "Maize Stover & Husks",
    description: "Dried maize stover, segmented cane nodes and papery husks",
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <linearGradient id="cornBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="%23e0f2fe"/>
          <stop offset="100%" stop-color="%23fefae0"/>
        </linearGradient>
        <linearGradient id="cornStalkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="%23a47148"/>
          <stop offset="30%" stop-color="%23ca8a04"/>
          <stop offset="70%" stop-color="%23eab308"/>
          <stop offset="100%" stop-color="%23854d0e"/>
        </linearGradient>
      </defs>
      <!-- Background -->
      <rect width="400" height="300" fill="url(%23cornBg)"/>
      <path d="M0 210 Q 200 190 400 220 L400 300 L0 300 Z" fill="%2367412e"/>
      
      <!-- Corn Stalk 1 (Vertical Centered) -->
      <rect x="180" y="40" width="30" height="240" rx="6" fill="url(%23cornStalkGrad)"/>
      <!-- Stalk Nodes (Joints) -->
      <rect x="175" y="80" width="40" height="8" rx="4" fill="%23713f12"/>
      <rect x="175" y="140" width="40" height="8" rx="4" fill="%23713f12"/>
      <rect x="175" y="200" width="40" height="8" rx="4" fill="%23713f12"/>
      
      <!-- Corn Stalk 2 (Diagonal Left) -->
      <g transform="rotate(-18 130 250)">
        <rect x="120" y="50" width="26" height="230" rx="5" fill="url(%23cornStalkGrad)"/>
        <rect x="116" y="95" width="34" height="7" rx="3.5" fill="%23713f12"/>
        <rect x="116" y="160" width="34" height="7" rx="3.5" fill="%23713f12"/>
        <!-- Dry drooping corn leaf -->
        <path d="M120 160 Q 60 170 30 220 Q 70 190 120 180 Z" fill="%23d4a373"/>
      </g>
      
      <!-- Corn Stalk 3 (Diagonal Right) -->
      <g transform="rotate(16 260 250)">
        <rect x="250" y="60" width="28" height="220" rx="5" fill="url(%23cornStalkGrad)"/>
        <rect x="246" y="110" width="36" height="7" rx="3.5" fill="%23713f12"/>
        <rect x="246" y="175" width="36" height="7" rx="3.5" fill="%23713f12"/>
        <!-- Dry Corn Husk / Leaves -->
        <path d="M276 110 Q 340 100 370 140 Q 320 140 276 130 Z" fill="%23eab308" opacity="0.85"/>
        <path d="M276 175 Q 330 190 360 240 Q 310 210 276 195 Z" fill="%23d4a373"/>
      </g>
      
      <!-- Center Corn Dry Leaves and Fibers -->
      <path d="M180 80 Q 110 70 80 120 Q 130 105 180 95 Z" fill="%23fef08a" opacity="0.9"/>
      <path d="M210 140 Q 280 130 310 170 Q 260 160 210 155 Z" fill="%23fde047" opacity="0.9"/>
      
      <!-- Overlay Label Tag -->
      <rect x="20" y="20" width="130" height="32" rx="16" fill="%231b4332" opacity="0.9"/>
      <text x="85" y="41" fill="%23ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">🌽 Corn Stalk</text>
    </svg>`
  }
];
