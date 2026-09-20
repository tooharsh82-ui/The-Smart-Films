import { ProjectItem, ProcessStep, ServiceItem, ReviewItem } from '../types';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../utils/whatsapp';

export const SMART_FILMS_PROFILE = {
  name: BUSINESS_CONFIG.brandName,
  studioName: BUSINESS_CONFIG.studioName,
  subName: BUSINESS_CONFIG.subName,
  title: 'Photography & Cinematic Videography Studio',
  tagline: "Hello , We're The Smart Films",
  bio: 'The Smart Films is a professional photography and cinematic videography studio based in Arrah, Bihar. We specialize in capturing important moments, authentic emotions, weddings, and creating cinematic visual memories.',
  aboutHeading: 'Professional Photography & Cinematic Videography Studio',
  aboutBio: 'Smart Gift & Studio, Bandh, Majhauwa, Arrah, Bihar 802301. The Smart Films (Smart Studio) delivers exceptional professionalism, creativity, and a true passion for the craft. Specializing in cinematic videography and candid photography unmatched in Ara Bhojpur.',
  portraitImg: 'https://i.ibb.co/Y4SdZspr/j1.jpg',
  aboutImg: 'https://i.ibb.co/5hjNpJ3Y/j4.jpg',
  phone: BUSINESS_CONFIG.phoneDisplay,
  phoneTel: BUSINESS_CONFIG.phoneTel,
  location: BUSINESS_CONFIG.address.full,
  rating: `${BUSINESS_CONFIG.rating} / ${BUSINESS_CONFIG.ratingMax}`,
  ratingScore: BUSINESS_CONFIG.rating,
  reviewCount: `${BUSINESS_CONFIG.reviewCount} Verified Reviews`,
  reviewsNumber: BUSINESS_CONFIG.reviewCount,
  googleMapsUrl: BUSINESS_CONFIG.googleMapsUrl,
  whatsappUrl: getWhatsAppUrl(),
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '1.Consultation',
    title: 'Consultation & Vision',
    description: 'We listen to your wedding or event plans, understand your preferred moments, date schedules, and customized photography preferences.',
    icon: 'Search',
  },
  {
    step: '2.Planning',
    title: 'Creative Planning',
    description: 'Timeline coordination, lighting planning, candid guidance, and cinematic scene choreography tailored to your family traditions.',
    icon: 'BarChart3',
  },
  {
    step: '3.Shooting',
    title: 'Cinematic & Candid Shoot',
    description: 'Multi-angle 4K cinematic filming and unobtrusive candid photography capturing genuine laughter, tears, and celebration.',
    icon: 'Palette',
  },
  {
    step: '4.Delivery',
    title: 'Mastering & Delivery',
    description: 'Artistic color grading, audio synchronization, cinematic film editing, and prompt high-resolution photo gallery handover.',
    icon: 'Rocket',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-reception-gown',
    title: 'Modern Bridal & Reception Gown',
    subtitle: 'Contemporary Studio Bridal Portrait',
    category: 'Bridal Gown',
    categoryKey: 'BRIDAL_GOWN',
    tags: ['Bridal Gown', 'Reception', 'Studio Portrait', 'Contemporary Look'],
    description: 'Graceful studio capture featuring an elegant teal pleat gown, natural poise, and bespoke editorial lighting tailored for receptions.',
    imageUrl: 'https://i.ibb.co/GQrWCBxd/j2.jpg',
    inquiryMessage: 'Hi The Smart Films, I want to know more about your Reception and Bridal Gown portrait photography packages and pricing.',
    featured: true,
  },
  {
    id: 'project-royal-red-bride',
    title: 'Royal Red Bridal Lehenga',
    subtitle: 'Traditional Gold Jewellery & Royal Pose',
    category: 'Bride',
    categoryKey: 'BRIDE',
    tags: ['Bride', 'Red Lehenga', 'Gold Jewellery', 'Royal Portrait'],
    description: 'Capturing the majestic grace of a traditional Indian bride adorned in royal red embroidered lehenga, delicate maang tikka, and regal gold jewelry.',
    imageUrl: 'https://i.ibb.co/XZKXdvNp/j3.jpg',
    inquiryMessage: 'Hi The Smart Films, I want to know more about your Traditional Bridal Lehenga photography packages and pricing.',
    featured: true,
  },
  {
    id: 'project-maroon-bridal-elegance',
    title: 'Maroon Bridal Elegance',
    subtitle: 'Ornate Heritage Jewellery & Fine Embroidery',
    category: 'Bridal Jewellery',
    categoryKey: 'BRIDAL_JEWELLERY',
    tags: ['Maroon Lehenga', 'Bridal Jewellery', 'Heritage Look', 'Portrait'],
    description: 'A portrait of poise and timeless beauty, highlighting exquisite maroon bridal couture, intricate Kundan neckpieces, and classic Indian bridal allure.',
    imageUrl: 'https://i.ibb.co/fVWwcqdL/j6.jpg',
    inquiryMessage: 'Hi The Smart Films, I want to know more about your Bridal Jewellery and Bridal Portraiture photography packages and pricing.',
    featured: true,
  },
  {
    id: 'project-candid-bridal-grace',
    title: 'Candid Red Lehenga Bridal Portrait',
    subtitle: 'Delicate Silver Adornments & Shy Radiance',
    category: 'Candid Bride',
    categoryKey: 'CANDID_BRIDE',
    tags: ['Candid Bride', 'Silver Jewellery', 'Red Lehenga', 'Emotional Nuance'],
    description: 'An authentic, heartfelt candid moment capturing shy smiles, gleaming silver necklaces, and the serene emotional grace of an Indian bride.',
    imageUrl: 'https://i.ibb.co/v61yX7Fn/j7.jpg',
    inquiryMessage: 'Hi The Smart Films, I want to know more about your Candid Bridal photography packages and pricing.',
    featured: true,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography & Videography',
    description: 'Complete wedding coverage capturing rituals, emotional moments, family portraits, and 4K cinematic films across Arrah and Bhojpur.',
    features: [
      'Candid & Traditional Wedding Photography',
      '4K Cinematic Wedding Films & Teasers',
      'Drone Aerial Perspectives & Videography',
      'High-Resolution Master Photo Delivery',
    ],
    icon: 'Camera',
  },
  {
    id: 'bridal-groom',
    title: 'Bride & Groom Portrait Sessions',
    description: 'Artistic portraits celebrating the elegance of brides and grooms with specialized lighting, jewellery details, and attire focus.',
    features: [
      'Dedicated Bridal & Groom Portraits',
      'Intricate Jewellery & Mehndi Details',
      'Authentic Expressions & Royal Posing',
      'Master Color Grading & Retouching',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'pre-wedding-couple',
    title: 'Pre-Wedding & Couple Photography',
    description: 'Romantic, narrative-driven couple sessions set against picturesque outdoor locations or curated studio settings.',
    features: [
      'Concept & Storyboard Guidance',
      'Scenic Outdoor & Studio Backdrops',
      'Cinematic Couple Music Teaser',
      'Candid & Natural Expressions',
    ],
    icon: 'Heart',
  },
  {
    id: 'maternity-events',
    title: 'Maternity & Event Photography',
    description: 'Heartfelt coverage of maternity milestones, ring ceremonies, sangeet nights, anniversaries, and family celebrations.',
    features: [
      'Gentle & Comfortable Maternity Shoots',
      'Engagement & Ring Ceremony Coverage',
      'High-Energy Festive & Sangeet Captures',
      'Reliable & Prompt Delivery',
    ],
    icon: 'Calendar',
  },
];

export const REAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    highlight: 'Best Wedding Photographer in Arrah',
    quote: "If you're searching for the best wedding photographer in Arrah, The Smart Films (Smart Studio) is the top choice. Their cinematic videography and candid photography are unmatched in Ara Bhojpur.",
    sentiment: 'Unmatched Cinematic Videography & Candid Photography',
    location: 'Arrah, Bhojpur',
    verified: true,
  },
  {
    id: 'rev-2',
    highlight: 'Amazing Experience & Exceptional Professionalism',
    quote: 'I recently had the pleasure of visiting Smart Studio, and I must say it was an amazing experience! The team at Smart Studio demonstrated exceptional professionalism, creativity, and a true passion for their craft.',
    sentiment: 'Professionalism, Creativity & True Passion',
    location: 'Smart Gift & Studio, Arrah',
    verified: true,
  },
  {
    id: 'rev-3',
    highlight: 'Great Quality Photos',
    quote: 'Great Quality Photos. Their cinematic videography and candid photography are unmatched in Ara Bhojpur.',
    sentiment: 'Great Quality Photos & Cinematic Capture',
    location: 'Arrah, Bihar',
    verified: true,
  },
];

// Preserving BLOG_POSTS export as review/sentiment insights so any lingering reference works seamlessly
export const BLOG_POSTS = REAL_REVIEWS.map((r, idx) => ({
  id: r.id,
  title: r.highlight,
  date: `${BUSINESS_CONFIG.rating} / 5 Rating`,
  readTime: 'Verified Review',
  summary: r.quote,
  category: idx === 0 ? 'Wedding Photography' : idx === 1 ? 'Studio Experience' : 'Client Sentiment',
}));
