export type Category =
  | 'Branding'
  | 'Advertising'
  | 'Product'
  | 'Social Media'
  | 'Sports'
  | 'Food'
  | 'Beauty'
  | 'Technology'
  | 'Experimental';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  tags: string[];
  images: string[];
  coverImage: string;
  /** portrait = tall, landscape = wide, square = 1:1 */
  aspectRatio: 'portrait' | 'landscape' | 'square';
  description: string;
  featured?: boolean;
  year: number;
}

const NEXITA_YELLOW = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%281%29.png-SB1e3Fdh6FQHbziydAFtkzHi5Nz7Ih.jpeg';
const NEXITA_BLUE   = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29.png-fy0ZvZE1GoGcSUq1FMDewJQki62J8a.jpeg';
const PORSCHE       = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%283%29.png-SZ7tp7D6fZu1y4q62oX0vGEUyP3Cpy.jpeg';
const DOG_COLLAR    = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%287%29.png-luYp0P6by8sFHGV81tYgELOSIrmuhp.jpeg';
const GULSHAN       = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%288%29.png-vhpjMtBksyr9TlKYywlKldSWX4Kivd.jpeg';
const CAMERA        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%289%29.png-PQvHsS2XwghIw3U6rU8nKSd96Z8QgC.jpeg';
const IPHONE_CASE   = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%2810%29.png-OKENtDKivQJxj7TiawKdLzCHEaNcpo.jpeg';
const AIR_JORDAN    = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%2813%29.png-EyN664mMIAOdjHL6qCHJRsgW1bHDT7.jpeg';
const AMNESIA       = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%2814%29.png-dRXxf6ff1byyxU5rOBqRJMiwaxzu9X.jpeg';
const ASTUTE        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%2815%29.png-fsoj7QhoUnQSa3UIXFp9j3BVEAOzBg.jpeg';
const STEAM_DECK    = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%281%29-wMH5nqaQ0QLt2vNDKnamiwCd4ubAkm.jpg';
const DIESEL        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscale_image_03%20%281%29.png-n8npDAXq6ZPjOqW6VCREkZHCCv5r21.jpeg';
const GULSHAN_NEW   = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_6303184302014925989_y-JZl0iqF7EIbHlGQq1PVUbD3OMu1ENm.jpg';
const EVIO_1        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%208%2C%202026%2C%2001_36_44%20AM-hodoT0ci7h9o0R8tHnkgvGauDMBIBy.png';
const EVIO_2        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%208%2C%202026%2C%2001_34_53%20AM-rip0CU9gYVMDQrRFrCQm8ZvTRsRkuW.png';
const REALME        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscale_image_04%20%281%29.png-DK4tSvt8kBJxGGuDzBIncIsIJnIbRL.jpeg';
const MILK_CAKE     = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscale_image_06.png-pbdXt975GNn9v8VpqlmY4YebBE1iOF.jpeg';
const GETFEE        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%208%2C%202026%2C%2001_31_12%20AM-T9Ur9AjHFDFQikkMiBPBEAWju36HY2.png';
const L_THEANINE    = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscale_image_05%20%281%29.png-YEtQyb0k9ShAPjCm5mS7akfbrKpdwo.jpeg';
const TSHIRT        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscale_image_01%20%281%29.png-wbktfRFPEHaWtCu8c8gTjbebg8LPRT.jpeg';
const EYE_MASSAGER  = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscale_image_01.png-09ih0svLKoiV6BxoHqmbL07OFEZ0pt.jpeg';
const GFX_DESIGN    = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_6091435684104619798_y-nBA4iVyVWLG9exiUd8vNRO4A4tTyIs.jpg';
const BILLIE        = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscale_image_02.png-P15JGYonW60sNbSQpEXbrPq9cC3K0U.jpeg';
const VODAFONE      = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscale_image_05.png-spWqfs7pJhl4rDjHYiA6HZA3e4ON0R.jpeg';

export const projects: Project[] = [
  {
    id: 'nexita-technology',
    year: 2025,
    title: 'NEXITA',
    subtitle: 'Technology Brand System',
    category: 'Branding',
    tags: ['Brand Identity', 'Technology', 'Logo Design'],
    images: [NEXITA_YELLOW],
    coverImage: NEXITA_YELLOW,
    aspectRatio: 'square',
    description:
      'Complete technology brand identity system — logo design, product packaging, website UI, mobile UI, wireless earbuds, smartwatch, retail storefront, employee ID and office branding.',
    featured: true,
  },
  {
    id: 'nexita-software',
    year: 2025,
    title: 'NEXITA',
    subtitle: 'Software Company Identity',
    category: 'Branding',
    tags: ['Corporate Identity', 'Technology', 'Branding'],
    images: [NEXITA_BLUE],
    coverImage: NEXITA_BLUE,
    aspectRatio: 'square',
    description:
      'Corporate identity for Nexita Software Company Limited. Office signage, website design, business cards, employee IDs, glass office branding, notebook and full corporate system.',
    featured: true,
  },
  {
    id: 'air-jordan',
    year: 2024,
    title: 'AIR JORDAN 1 RETRO',
    subtitle: 'Sneaker Advertising / Product Poster',
    category: 'Advertising',
    tags: ['Product Advertising', 'Sneaker', 'Commercial'],
    images: [AIR_JORDAN],
    coverImage: AIR_JORDAN,
    aspectRatio: 'portrait',
    description:
      'Commercial advertising poster for the Air Jordan 1 Retro. Bold typographic composition, product presentation, color hierarchy, shadows and premium advertising layout.',
    featured: true,
  },
  {
    id: 'steam-deck',
    year: 2024,
    title: 'STEAM DECK',
    subtitle: 'Technology / Product Advertising',
    category: 'Technology',
    tags: ['Product Advertising', 'Technology', 'Specification Layout'],
    images: [STEAM_DECK],
    coverImage: STEAM_DECK,
    aspectRatio: 'portrait',
    description:
      'Product advertisement for the Steam Deck portable gaming console. Specification layout, information hierarchy, editorial typography and technical UI-style design.',
    featured: true,
  },
  {
    id: 'porsche',
    year: 2024,
    title: 'PORSCHE MOTORSPORT',
    subtitle: 'Automotive / Sports Poster',
    category: 'Sports',
    tags: ['Sports Graphic', 'Automotive', 'Poster'],
    images: [PORSCHE],
    coverImage: PORSCHE,
    aspectRatio: 'portrait',
    description:
      'Racing poster for Porsche Motorsport #91 — WEC / Manthey / EMA. Bold editorial typography, dynamic composition and strong visual identity.',
    featured: true,
  },
  {
    id: 'dog-collar',
    year: 2023,
    title: 'DOG COLLAR CAMPAIGN',
    subtitle: 'Product Advertising / Pet Product',
    category: 'Product',
    tags: ['Product Advertising', 'Pet Product'],
    images: [DOG_COLLAR],
    coverImage: DOG_COLLAR,
    aspectRatio: 'portrait',
    description:
      'Premium product advertising for PetaZoo genuine leather dog collar. Dark product photography with UI-style annotation callouts.',
  },
  {
    id: 'camera',
    year: 2023,
    title: 'CAMERA PRODUCT CAMPAIGN',
    subtitle: 'Technology / Product Advertising',
    category: 'Technology',
    tags: ['Technology', 'Product Advertising'],
    images: [CAMERA],
    coverImage: CAMERA,
    aspectRatio: 'portrait',
    description:
      'Product advertising for a Nikon camera system. Technical specification layout, feature callouts, photography-focused editorial typography.',
  },
  {
    id: 'iphone-case',
    year: 2023,
    title: 'IPHONE CASE CAMPAIGN',
    subtitle: 'Technology / Product Advertising',
    category: 'Product',
    tags: ['Technology', 'Product Advertising'],
    images: [IPHONE_CASE],
    coverImage: IPHONE_CASE,
    aspectRatio: 'portrait',
    description:
      'Product advertising for a transparent silicone iPhone case. Feature icon callouts, specification layout and product composition.',
  },
  {
    id: 'gulshan',
    year: 2024,
    title: 'GULSHAN COSMETIC',
    subtitle: 'Beauty / Cosmetic Advertising',
    category: 'Beauty',
    tags: ['Beauty', 'Cosmetic Advertising'],
    images: [GULSHAN_NEW, GULSHAN],
    coverImage: GULSHAN_NEW,
    aspectRatio: 'portrait',
    description:
      'Cosmetics promotional design for Gulshan Cosmetic featuring makeup, bangles, eye makeup, nail art and a full beauty product range.',
  },
  {
    id: 'astute',
    year: 2023,
    title: 'ASTUTE ACADEMY',
    subtitle: 'Education Advertising / Social Media Creative',
    category: 'Social Media',
    tags: ['Education Advertising', 'Social Media Creative'],
    images: [ASTUTE],
    coverImage: ASTUTE,
    aspectRatio: 'portrait',
    description:
      'Promotional social media creative for Astute Academy beginner courses. Bold magenta design with instructor portrait.',
  },
  {
    id: 'amnesia',
    year: 2023,
    title: 'AMNESIA',
    subtitle: 'Experimental Poster / Conceptual Design',
    category: 'Experimental',
    tags: ['Experimental Poster', 'Conceptual Design'],
    images: [AMNESIA],
    coverImage: AMNESIA,
    aspectRatio: 'portrait',
    description:
      'Experimental conceptual poster. A portrait with repeated "error" typography overlaid across the face — exploring identity, recognition and memory.',
  },
  {
    id: 'diesel-fashion-show',
    year: 2025,
    title: 'DIESEL FASHION SHOW',
    subtitle: 'Fashion Event / Poster Design',
    category: 'Advertising',
    tags: ['Fashion Advertising', 'Event Poster', 'Typography'],
    images: [DIESEL],
    coverImage: DIESEL,
    aspectRatio: 'portrait',
    description:
      'Event poster for a Diesel fashion show. Oversized red display typography layered over a halftone runway portrait, with denim-attitude tagline, show time and a scannable buy-tickets QR code.',
    featured: true,
  },
  {
    id: 'evio-brand-system',
    year: 2025,
    title: 'EVIO',
    subtitle: 'Technology Brand Identity System',
    category: 'Branding',
    tags: ['Brand Identity', 'Logo Design', 'Technology'],
    images: [EVIO_1, EVIO_2],
    coverImage: EVIO_1,
    aspectRatio: 'landscape',
    description:
      'Complete brand identity system for EVIO — "Technology for a better tomorrow". Logo mark, signage, vehicle wrap, packaging, mobile app UI, stationery, apparel, lanyard and full mockup rollout in a green and black palette.',
    featured: true,
  },
  {
    id: 'evio-brand-collateral',
    year: 2024,
    title: 'EVIO',
    subtitle: 'Brand Collateral & Mockups',
    category: 'Branding',
    tags: ['Brand Identity', 'Mockups', 'Technology'],
    images: [EVIO_2, EVIO_1],
    coverImage: EVIO_2,
    aspectRatio: 'landscape',
    description:
      'Brand collateral rollout for EVIO — office signage, illuminated storefront, product packaging, stationery, polo, website UI, ID lanyard, branded mug and USB in a consistent green-on-black identity.',
  },
  {
    id: 'getfee-brand-system',
    year: 2025,
    title: 'GETFEE',
    subtitle: 'Brand Identity System',
    category: 'Branding',
    tags: ['Brand Identity', 'Logo Design', 'Mockups'],
    images: [GETFEE],
    coverImage: GETFEE,
    aspectRatio: 'landscape',
    description:
      'Brand identity system for GETFEE — "Empowering the Future". Bolt-mark logo applied across business cards, signage, coffee packaging, apparel, app icon, shopping bag, social profile and full merchandise set.',
    featured: true,
  },
  {
    id: 'realme-buds',
    year: 2024,
    title: 'REALME BUDS T100',
    subtitle: 'Product Advertising / Tech Poster',
    category: 'Product',
    tags: ['Product Advertising', 'Technology', 'Specification Layout'],
    images: [REALME],
    coverImage: REALME,
    aspectRatio: 'portrait',
    description:
      'Product advertising poster for realme Buds T100 wireless headphones. Product-focused composition with feature callouts — AI noise cancellation, 28 hours battery life and 10 mm driver.',
    featured: true,
  },
  {
    id: 'eye-massager',
    year: 2023,
    title: 'WIRELESS EYE MASSAGER',
    subtitle: 'Product Advertising / Wellness',
    category: 'Product',
    tags: ['Product Advertising', 'Wellness', 'E-commerce Creative'],
    images: [EYE_MASSAGER],
    coverImage: EYE_MASSAGER,
    aspectRatio: 'portrait',
    description:
      'E-commerce product advertising for a wireless eye massager. Purple gradient composition with benefit callouts — removes dark circles, smooths wrinkles, relieves fatigue and helps you fall asleep.',
  },
  {
    id: 'l-theanine',
    year: 2023,
    title: 'L-THEANINE + VITAMIN B6',
    subtitle: 'Product Advertising / Supplement',
    category: 'Product',
    tags: ['Product Advertising', 'Supplement', 'E-commerce Creative'],
    images: [L_THEANINE],
    coverImage: L_THEANINE,
    aspectRatio: 'portrait',
    description:
      'Supplement product advertising for NaturalSupp L-Theanine + Vitamin B6. Soft pink layout with hand-held bottle and benefit callouts — 60 capsules, 2 months supply, clean formula.',
  },
  {
    id: 'oversize-tshirt',
    year: 2023,
    title: 'OVERSIZE T-SHIRT',
    subtitle: 'Apparel Advertising / Product Poster',
    category: 'Advertising',
    tags: ['Fashion Advertising', 'Apparel', 'E-commerce Creative'],
    images: [TSHIRT],
    coverImage: TSHIRT,
    aspectRatio: 'portrait',
    description:
      'Apparel advertising creative for an oversize t-shirt. Clean blue-and-grey layout with model photography, feature callouts (relaxed fit, thick fabric, dropped shoulder seam) and size selector.',
  },
  {
    id: 'milk-cake',
    year: 2023,
    title: 'DELICIOUS MILK CAKE',
    subtitle: 'Food Advertising / Social Media',
    category: 'Food',
    tags: ['Food Advertising', 'Social Media Creative'],
    images: [MILK_CAKE],
    coverImage: MILK_CAKE,
    aspectRatio: 'square',
    description:
      'Playful food social media creative for a milk cake. Green-and-yellow composition with character faces on the sweets and hand-drawn callout captions.',
  },
  {
    id: 'graphics-design-services',
    year: 2023,
    title: 'GRAPHICS DESIGN SERVICES',
    subtitle: 'Service Advertising / Social Media',
    category: 'Social Media',
    tags: ['Service Advertising', 'Social Media Creative'],
    images: [GFX_DESIGN],
    coverImage: GFX_DESIGN,
    aspectRatio: 'square',
    description:
      'Service advertising creative for graphic design services — logo design, business cards, brochures, flyers, social media posts and posters — with a laptop mockup and clean navy layout.',
  },
  {
    id: 'vodafone-unlimited',
    year: 2023,
    title: 'VODAFONE UNLIMITED DATA',
    subtitle: 'Telecom Advertising / Social Media',
    category: 'Advertising',
    tags: ['Telecom Advertising', 'Social Media Creative'],
    images: [VODAFONE],
    coverImage: VODAFONE,
    aspectRatio: 'square',
    description:
      'Telecom promotional creative for a Vodafone unlimited data plan. Bold red-to-orange gradient with SIM card visual and annotated feature callouts.',
  },
  {
    id: 'billie-eilish-poster',
    year: 2023,
    title: 'HIT ME HARD AND SOFT',
    subtitle: 'Music / Album Poster',
    category: 'Experimental',
    tags: ['Music Poster', 'Editorial Typography', 'Album Art'],
    images: [BILLIE],
    coverImage: BILLIE,
    aspectRatio: 'portrait',
    description:
      'Album promotional poster for Billie Eilish "Hit Me Hard and Soft". Oversized bleached display typography over a portrait with a distressed, print-textured finish.',
  },
];

export const ALL_CATEGORIES: (Category | 'All')[] = [
  'All',
  'Branding',
  'Advertising',
  'Product',
  'Social Media',
  'Sports',
  'Food',
  'Beauty',
  'Technology',
  'Experimental',
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  { title: 'Brand Identity', description: 'Logos, guidelines and visual systems that give a brand a consistent voice.' },
  { title: 'Logo Design', description: 'Distinctive marks built to work at any size, on any surface.' },
  { title: 'Social Media Creatives', description: 'On-brand posts and stories designed to stop the scroll.' },
  { title: 'Advertising Design', description: 'Campaign-ready creative for print, digital and out-of-home.' },
  { title: 'Poster Design', description: 'Bold, editorial layouts for events, releases and campaigns.' },
  { title: 'Product Advertising', description: 'Feature-led product creative that sells at a glance.' },
  { title: 'Business Card Design', description: 'Compact, memorable identity pieces for real-world moments.' },
  { title: 'Brochure Design', description: 'Structured, story-driven layouts for print and digital.' },
  { title: 'Flyer Design', description: 'Punchy, high-impact single-page promotional design.' },
  { title: 'Banner Design', description: 'Web and social banners built for clarity and conversion.' },
  { title: 'Photo Manipulation', description: 'Composite retouching and effects for standout visuals.' },
  { title: 'Marketing Creatives', description: 'Cohesive creative assets across every campaign touchpoint.' },
];

export const skills = [
  'Brand Identity',
  'Logo Design',
  'Advertising Design',
  'Social Media Design',
  'Poster Design',
  'Product Advertising',
  'Typography',
  'Photo Manipulation',
  'Layout Design',
  'Marketing Creatives',
];

export const tools = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'CorelDRAW',
];
