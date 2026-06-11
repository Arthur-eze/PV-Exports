/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GalleryItem, ServiceItem, Testimonial, FabricItem } from './types';

// Let's use our high-quality generated assets and curated Unsplash CDN URLs that perfectly match the luxury linen theme
export const generatedAssets = {
  hero: '/src/assets/images/hero_linens_1781010338929.png',
  bath: '/src/assets/images/bath_linens_1781010353409.png',
  weave: '/src/assets/images/luxury_weave_1781010371279.png',
  stack: '/src/assets/images/linen_stack_1781010387371.png',
  bedsheet: '/src/assets/images/luxurious_bedsheet_1781012707670.png',
  bathrobe: '/src/assets/images/g4_velour_bathrobe_1781012959397.png',
  monogramBathrobe: '/src/assets/images/g9_monogram_bathrobe_1781155989299.png',
  luxuryTowels: '/src/assets/images/luxury_towels_stack_1781013678802.png',
  bathmat: '/src/assets/images/g6_ribbed_bathmat_1781012977779.png',
  tableLinens: '/src/assets/images/g7_table_linens_1781012993713.png',
  testingLab: '/src/assets/images/s8_testing_lab_1781013010800.png',
  sourcingTable: '/src/assets/images/s12_sourcing_table_1781013026704.png',
  curtainGoldenFloral: '/src/assets/images/curtain_golden_floral_1781154077545.png',
  curtainCreamRose: '/src/assets/images/curtain_cream_rose_1781154093699.png',
  curtainNavyDamask: '/src/assets/images/curtain_navy_damask_1781154111657.png',
  bedDustyRose: '/src/assets/images/bed_dusty_rose_1781154133146.png',
  bedWhiteSatin: '/src/assets/images/bed_white_satin_1781154148390.png',
  fabricFlaxLinen: '/src/assets/images/fabric_flax_linen_1781156416691.png',
  fabricCombedCotton: '/src/assets/images/fabric_combed_cotton_1781156432525.png',
  fabricJacquardWeave: '/src/assets/images/fabric_jacquard_weave_1781156447858.png',
  fabricRoyalVelvet: '/src/assets/images/fabric_royal_velvet_1781156461784.png',
  luxuriousSuiteInterior: '/src/assets/images/luxurious_suite_interior_1781163200646.png',
  g1SatinStripeDuvet: '/src/assets/images/g1_satin_stripe_duvet_1781163402013.png',
  g4LuxuryTowels: '/src/assets/images/g4_luxury_towels_1781163417909.png',
  g2PastelTowels: '/src/assets/images/g2_pastel_towels_stack_1781163628718.png',
  s3EmbossedBedspread: '/src/assets/images/s3_embossed_bedspread_1781163911058.png',
  fabricCottonSlate: '/src/assets/images/fabric_cotton_slate_1781165888776.png',
  fabricPolyesterBlue: '/src/assets/images/fabric_poly_navy_1781166039318.png',
  fabricSilkPurple: '/src/assets/images/fabric_silk_purple_1781165198833.png',
  fabricWoolGrey: '/src/assets/images/fabric_wool_vortex_1781166225243.png',
  fabricLaceWhite: '/src/assets/images/fabric_lace_vortex_1781166372845.png',
  fabricJuteBrown: '/src/assets/images/fabric_jute_brown_1781165239328.png',
  fabricBambooSlate: '/src/assets/images/fabric_bamboo_slate_1781165250992.png',
  fabricBambooGreen: '/src/assets/images/fabric_bamboo_green_1781167453033.png',
  fabricVelvetNavy: '/src/assets/images/fabric_velvet_navy_1781165513259.png',
  lookbookCushionsPeachCream: '/src/assets/images/lookbook_cushions_peach_cream_1781170802503.png',
  lookbookPillowsBlushPaisley: '/src/assets/images/lookbook_pillows_blush_paisley_1781170854271.png',
  lookbookPillowsIndianPaisley: '/src/assets/images/lookbook_pillows_indian_paisley_1781170874403.png',
  lookbookCushionsPastelStripes: '/src/assets/images/lookbook_cushions_pastel_stripes_1781170901423.png',
  lookbookPillowEmbossedIvory: '/src/assets/images/lookbook_pillow_embossed_ivory_1781170920831.png',
  lookbookPillowsBohoTassels: '/src/assets/images/lookbook_pillows_boho_tassels_1781170938552.png',
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Satin Stripe Duvet Cover',
    category: 'bed',
    description: 'Bespoke luxury sateen stripe duvet covers with envelope-style closures, engineered for high-frequency industrial laundering. We accept custom orders for any thread count or unique mattress dimensions.',
    image: generatedAssets.g1SatinStripeDuvet,
    specification: '300 TC / 400 TC - Custom Dimensions Available'
  },
  {
    id: 'g2',
    title: 'Imperial Bath Sheets',
    category: 'bath',
    description: 'Thick, exceptionally thirsty luxury bath sheets. Double-needle stitched side hems. Fully customizable with hotel monograms, custom borders, and custom dimension weaves.',
    image: generatedAssets.g2PastelTowels,
    specification: '650 GSM - Custom Embroidery Available'
  },
  {
    id: 'g3',
    title: 'Dusty Rose Matelassé Quilt Set',
    category: 'bed',
    description: 'Sophisticated dusty rose textured quilted coverlet paired with matching pillow shams and a plush coordinate waffle blanket throw. We accept custom size orders to fit boutique layouts.',
    image: generatedAssets.bedDustyRose,
    specification: 'Custom Dyed - Tailored Sizes Accepted'
  },
  {
    id: 'g4',
    title: 'Exquisite Plush Towels',
    category: 'bath',
    description: 'Engineered with premium long-staple ring-spun combed cotton. High absorption towel sets with custom ribbed borders. Custom orders welcome for special pantone color dye matches.',
    image: generatedAssets.g4LuxuryTowels,
    specification: '600 GSM - Custom Colorways Enabled'
  },
  {
    id: 'g5',
    title: 'Gold Flora Embroidered Sheers',
    category: 'curtains',
    description: 'Elegant sheer golden curtains with beautiful hand-embroidered flowers and vertical trailing vines. Softly filters sunlight to create a warm luxurious hospitality look. Custom drapery heights and drops made to order.',
    image: generatedAssets.curtainGoldenFloral,
    specification: 'Sheer Organza - Bespoke Hanging Drops'
  },
  {
    id: 'g6',
    title: 'Premium Ribbed Bathmats',
    category: 'bath',
    description: 'Ultra-plush and dense bathmats with a classic frame borders design, delivering soft post-bath stability. We weave custom dimensions to fit your exact bathroom blueprint layouts.',
    image: generatedAssets.bathmat,
    specification: '1000 GSM - Tailored Dimensions'
  },
  {
    id: 'g7',
    title: 'Bespoke Jacquard Table Linens',
    category: 'dining',
    description: 'Premium heavy damask weave restaurant and banquet tablecloths with soil-release finishes. We weave custom floral patterns or corporate logos directly into the jacquard pattern.',
    image: generatedAssets.tableLinens,
    specification: '220 GSM - Bespoke Logo Weaving'
  },
  {
    id: 'g8',
    title: 'Rose Embroidered Cream Sheers',
    category: 'curtains',
    description: 'Delicate light-filtering sheer panels woven from premium flax linen, detailed with warm red and orange rose embroidery. Tailored custom drops and pleating headers (grommet, pleated, or tab).',
    image: generatedAssets.curtainCreamRose,
    specification: 'Flax Linen Blend - Custom Pleat Headers'
  },
  {
    id: 'g9',
    title: 'Plush Monogrammed Velour Bathrobes',
    category: 'bath',
    description: 'Thick, ultra-soft white plush velour robes featuring personalized bespoke monogram embroidery. Designed for boutique hotel suites, with tailored custom sizing, belt lengths, and branding options.',
    image: generatedAssets.monogramBathrobe,
    specification: '450 GSM - Bespoke Monogramming'
  },
  {
    id: 'g10',
    title: 'Navy Imperial Floral Damask Drapes',
    category: 'curtains',
    description: 'Substantial heavyweight blackout velvet drapes featuring classic floral tapestry wave pattern in rich navy blue, gold, and peach rose tones. Tailored custom hanging drops, backing weights, and rod pocket styles.',
    image: generatedAssets.curtainNavyDamask,
    specification: 'Premium Velvet - Custom Length Drops'
  },
  {
    id: 'g11',
    title: 'Peach & Cream Lattice Cushion Set',
    category: 'cushions',
    description: 'An elegant matching set of geometric throw pillows. Features a plush dusty peach pink velvet cushion with an inlaid white diamond grid pattern, paired with a solid textured off-white Belgian linen pillow.',
    image: generatedAssets.lookbookCushionsPeachCream,
    specification: 'Velvet & Pure Linen - 45x45 cm'
  },
  {
    id: 'g12',
    title: 'Blush & Classic Paisley Pillow Pair',
    category: 'cushions',
    description: 'Bespoke hand-piped sofa cushions designed for elegant interiors. A solid soft rose blush cotton cushion is layered with a highly detailed traditional paisley pattern pillow in soft coral, peach, and sky blue accents.',
    image: generatedAssets.lookbookPillowsBlushPaisley,
    specification: 'Brushed Cotton Satin - 50x50 cm'
  },
  {
    id: 'g13',
    title: 'Imperial Indian Paisley Tapestry Pillows',
    category: 'cushions',
    description: 'Double-sided, heavyweight woven accent pillows featuring vibrant traditional paisley motifs in shades of rich teal, crimson red, marigold orange, and gold. Finished with subtle cord-piped borders.',
    image: generatedAssets.lookbookPillowsIndianPaisley,
    specification: 'Jacquard Gobelin Weave - 40x60 cm'
  },
  {
    id: 'g14',
    title: 'Pastel Handwoven Stripe Cushions',
    category: 'cushions',
    description: 'Warm ivory cotton sofa cushions detailed with delicate flat-woven horizontal stripes in light yellow, pastel teal, and peach. Styled together with a plain heavy-weight dark teal tweed cushion.',
    image: generatedAssets.lookbookCushionsPastelStripes,
    specification: 'Hand-loomed Cotton Blend - 45x45 cm'
  },
  {
    id: 'g15',
    title: 'Embossed Ivory Royal Damask Pillow',
    category: 'cushions',
    description: 'A single, high-density decorative toss pillow featuring a thick, highly-detailed embossed raised jacquard floral damask design over luxury eggshell-white premium chenille fabric.',
    image: generatedAssets.lookbookPillowEmbossedIvory,
    specification: 'Premium Chenille Jacquard - 50x50 cm'
  },
  {
    id: 'g16',
    title: 'Boho Linen & Tassel Artisan Pillow Array',
    category: 'cushions',
    description: 'A beautifully styled eclectic array of bohemian accent pillows. Includes a rectangular natural-flax cream pillow with cute rustic corner tassels, a warm floral printed cushion, and a chunky hand-knotted sandy-beige macrame wool cushion.',
    image: generatedAssets.lookbookPillowsBohoTassels,
    specification: 'Artisanal Flax-Linen & Handwoven Wool'
  }
];

// Row 1 Services: Core Product & Finishing Solutions (Moving Right)
export const row1Services: ServiceItem[] = [
  {
    id: 's1',
    title: 'Hotel Bedding Solutions',
    description: 'End-to-end setups including fitted sheets, pillowcases, and duvets curated for boutique and master chains.',
    image: generatedAssets.luxuriousSuiteInterior,
    featureList: ['Anti-shrink technology', 'Industrial wash certified', 'Crisp handfeel finish']
  },
  {
    id: 's2',
    title: 'Premium Spa & Bath Collections',
    description: 'Providing ultra-soft heavy-duty zero-twist towels, customized robes, and elegant durable dry bath mats.',
    image: generatedAssets.bath,
    featureList: ['Superior absorption (650+ GSM)', 'Color-fast dyed technology', 'Soft-touch fluffiness']
  },
  {
    id: 's3',
    title: 'Bespoke Monogramming',
    description: 'High-precision automated monogramming systems engineered to weave complex, crisp brand logos and custom typography.',
    image: generatedAssets.s3EmbossedBedspread,
    featureList: ['Perfect vector replication', 'Bleach-fast thread lines', 'Variable placing options']
  },
  {
    id: 's4',
    title: 'Fine Dining & Banquet Linens',
    description: 'Stain-resistant elegant napkins, runners, and round tablecloths customized for premium bistros.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    featureList: ['Soil-release finish', 'Luster retention', 'Heavy crease resistance']
  },
  {
    id: 's5',
    title: 'Eco-Friendly Certified Cotton',
    description: 'Pristine organic collections supporting ethical farming practices with verified supply transparency.',
    image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=600&q=80',
    featureList: ['GOTS certified organic yarn', 'OEKO-TEX Standard 100', 'No harmful heavy metals']
  },
  {
    id: 's6',
    title: 'Premium Down Alternative Inserts',
    description: 'Hypoallergenic duvet shells and pillows designed for seamless neck comfort and easy wash cycle turns.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
    featureList: ['Micro-gel cluster fill', 'Down-proof 233TC cotton shells', 'Long-lasting high loft']
  }
];

// Row 2 Services: Global Export & Logistics Capabilities (Moving Left)
export const row2Services: ServiceItem[] = [
  {
    id: 's7',
    title: 'Seamless International Cargo Logistics',
    description: 'Strategic container logistics routing from our advanced Hyderabad weaving hub directly to Sydney, Melbourne, Brisbane, and global ports.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80',
    featureList: ['Seamless customs clearance handling']
  },
  {
    id: 's8',
    title: 'Strict Quality Testing Labs',
    description: 'Rigorous inspection regimes tracking GSM standards, wash shrinkage parameters, and tensile strength factors.',
    image: generatedAssets.testingLab,
    featureList: ['Spectrophotometer matching', 'Pilling testing (ISO certified)', 'Thread density audit logs']
  },
  {
    id: 's9',
    title: 'Custom Commercial Packaging',
    description: 'Bespoke vacuum sealing, moisture-barrier wrapping, and robust fiber carton packing for pristine arrival.',
    image: generatedAssets.stack,
    featureList: ['Ultra-dense compression pack', 'Stripe barcodes ready', 'Moisture absorbent pouches']
  },
  {
    id: 's10',
    title: 'Volume Escalation & Pricing SLA',
    description: 'Optimized high-speed manufacturing setups to deliver thousands of stock sheets on committed seasonal SLAs.',
    image: generatedAssets.weave,
    featureList: ['Stable contract pricing guarantees', 'Scalable production schedules', 'Repeat batch consistency']
  },
  {
    id: 's11',
    title: 'Eco-Friendly Bio-Degradable Wraps',
    description: 'Pioneered biodegradable pack protectors substituting standard plastics with cornstarch films.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    featureList: ['Compostable packaging bags', 'Soy ink printed paper boards', 'Zero plastic waste commitment']
  },
  {
    id: 's12',
    title: 'Sovereign Sourcing for Luxury Chains',
    description: 'Dedicated client managers engineering bespoke weave specifications matching brand architectural identities.',
    image: generatedAssets.sourcingTable,
    featureList: ['Private pattern registers', 'Sample prototyping under 10 days', 'Strict copyright protection']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'PV Exports revolutionized our linen lifecycle. Their 400TC linen sheets feel like absolute silk and withstand our demanding commercial laundry rotation in inner Sydney.',
    author: 'Alistair Vance',
    role: 'General Director of Hospitality',
    hotel: 'The Harbourview Estate',
    location: 'Sydney, Australia'
  },
  {
    id: 't2',
    quote: 'The 650 GSM cotton towels stay incredibly soft and plush, week after week. Australian luxury travelers request top tier comfort, and PV Exports delivers flawless quality.',
    author: 'Elena Rostova',
    role: 'Operations Consultant',
    hotel: 'Byron Bay Retreat & Spa',
    location: 'New South Wales, Australia'
  },
  {
    id: 't3',
    quote: 'Custom branding and bespoke embroidery are immaculate. Logistics were seamless—containers arrived at Melbourne docks ahead of schedule with premium protective packing.',
    author: 'Marcus Sterling',
    role: 'Chief Procurement Officer',
    hotel: 'Crown & Anchor Regency Group',
    location: 'Melbourne, Australia'
  }
];

export const companyValues = [
  {
    title: 'Uncompromised Raw Sourcing',
    description: 'Using only the finest long-staple ring spun combed cotton, crafted into luxurious, robust weave counts.',
    iconName: 'Sparkles'
  },
  {
    title: 'Verified Global Transit',
    description: 'Operating out of Hyderabad, India, we manage seamless global cargo shipping, customs documentation, and logistics directly to Australian and global ports.',
    iconName: 'Globe'
  },
  {
    title: 'Commercial Laundry Certified',
    description: 'Engineered for over 100+ high-temperature commercial laundry rinses without lose of tensile strength, texture, or whiteness.',
    iconName: 'CheckCircle2'
  },
  {
    title: 'Eco-Responsible Standard',
    description: 'OEKO-TEX Certified chemical-free weaves paired with biodegradable packaging to meet stringent global import laws.',
    iconName: 'Leaf'
  }
];

export const premiumFabrics: FabricItem[] = [
  {
    id: 'f_cotton',
    name: 'Cotton Fabric',
    type: '100% Combed Jersey-Knit',
    description: 'Fine long-staple combed cotton woven for exceptional breathability and skin-friendly softness. Perfect for premium lounge drapes, bed linings, and luxury hospitality designs.',
    image: generatedAssets.fabricCottonSlate,
    attributes: ['100% GOTS Organic Yarn', 'Zero-Pilling Durability', 'Slate Blue Dye Finish']
  },
  {
    id: 'f_polyester',
    name: 'Polyester Fabric',
    type: 'High-Performance Microfiber',
    description: 'Heavy-duty industrial-grade woven polyester that offers superior crease resistance and color retention. Designed for active wear, heavy-use hotel interiors, and luxury tablecloth borders.',
    image: generatedAssets.fabricPolyesterBlue,
    attributes: ['Tear & Crease Resistant', 'Industrial Bleach Proof', 'Premium Deep Navy Hue']
  },
  {
    id: 'f_silk',
    name: 'Silk Fabric',
    type: '100% Natural Silk Satin',
    description: 'Hypoallergenic, protein-rich silk with a shimmering mirror sheen. Incredibly smooth to reduce friction, designed for luxury pillowcases, eye masks, and royal suite drapes.',
    image: generatedAssets.fabricSilkPurple,
    attributes: ['19 Momme Pure Silk', 'Ultra-Hydrating Feel', 'Glossy Royal Violet Luster']
  },
  {
    id: 'f_wool',
    name: 'Wool Fabric',
    type: '100% Australian Merino Wool',
    description: 'Exceptional heavy thermal insulation crafted with tightly looped wool fleece loops. Delivers unmatched luxurious cozy texture, perfect for premium sofa throws and winter bedspread blankets.',
    image: generatedAssets.fabricWoolGrey,
    attributes: ['Acoustic Absorption', 'Natural Flame Resistance', 'Cozy Bouclé Accent Texture']
  },
  {
    id: 'f_lace',
    name: 'Lace Fabric',
    type: 'Intricate French Embroidered Lace',
    description: 'Delicately woven pattern lace featuring classic vintage rose motifs over fine-mesh backing. Brings an exquisite romantic texture accent to bespoke decorative drapes, overlays, and tables.',
    image: generatedAssets.fabricLaceWhite,
    attributes: ['Bespoke Scalloped Borders', 'Highly Detailed Relief Embroidery', 'Elegant Classic Styling']
  },
  {
    id: 'f_jute',
    name: 'Jute Fabric',
    type: '100% Organic Golden Jute',
    description: 'Sustainably sourced coarse plain-woven vegetable fiber offering robust tactile character, perfect for high-traffic custom runner backing, rustic drapes, and eco-chic upholstery.',
    image: generatedAssets.fabricJuteBrown,
    attributes: ['Biodegradable Earthy Weave', 'High-Density Warp & Weft', 'Rich Organic Golden Tone']
  },
  {
    id: 'f_bamboo',
    name: 'Bamboo Fabric',
    type: '100% Sustainable Bamboo Viscose',
    description: 'Eco-friendly, naturally temperature-regulating, and moisture-wicking fabric with a soft, silky drape. Ideal for premium cooling sheets, duvets, and sensitive hospitality projects.',
    image: generatedAssets.fabricBambooGreen,
    attributes: ['Naturally Cool Touch', 'Eco-Friendly Bio-Viscose', 'Beautiful Sage Green Drape']
  },
  {
    id: 'f_velvet',
    name: 'Velvet Fabric',
    type: 'High-Density Cotton-Polyester Pile Blend',
    description: 'Deep-pile, super luxurious plush velvet delivering rich light absorption and exquisite soft touch. Tailored for grand blackout drapes, decorative bedrunners, panel backings, and high-end upholstery accents.',
    image: generatedAssets.fabricVelvetNavy,
    attributes: ['450 GSM Heavyweight Blend', 'Delicate Silky Drape', 'Deep Royal Navy Luster']
  }
];
