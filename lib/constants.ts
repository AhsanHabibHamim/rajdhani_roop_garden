import { Room, DiningOption, Experience, BlogPost, Offer, Testimonial, FAQ } from './types'

// Placeholder images - in production these would be real resort images
const PLACEHOLDER_ROOM = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
export const DINING_HERO_IMAGE = 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1600&q=80'
const DINING_IMAGE_GARDEN_TABLE = 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=80'
const DINING_IMAGE_ROOP_LOUNGE = 'https://images.unsplash.com/photo-1504674904763-9b02de7b8b22?w=1600&q=80'
const DINING_IMAGE_BREAKFAST_GARDEN = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80'
const DINING_IMAGE_PRIVATE_DINING = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80'
const DINING_IMAGE_SPA_CAFE = 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1600&q=80'
const DINING_IMAGE_SUNSET_BAR = 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600&q=80'
const PLACEHOLDER_EXPERIENCE = 'https://images.unsplash.com/photo-1537141519227-7a88fb54ce38?w=800&q=80'
const PLACEHOLDER_GARDEN = 'https://images.unsplash.com/photo-1469022563149-aa64fda8fada?w=800&q=80'

const ROOM_IMAGE_ROYAL_SUITE = 'https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?w=1200&q=80'
const ROOM_IMAGE_GARDEN_COTTAGE = 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80'
const ROOM_IMAGE_POOL_VILLA = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80'
const ROOM_IMAGE_JUNGLE_SUITE = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80'
const ROOM_IMAGE_DELUXE_ROOM = 'https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?w=1200&q=80'
const ROOM_IMAGE_HONEYMOON_VILLA = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80'

const EXPERIENCE_IMAGE_SPA_WELLNESS = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80'
const EXPERIENCE_IMAGE_GARDEN_TOUR = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80'
const EXPERIENCE_IMAGE_POOL_WELLNESS = 'https://images.unsplash.com/photo-1486915309851-6c6aee6fcad9?w=1200&q=80'
const EXPERIENCE_IMAGE_BONFIRE = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80'
const EXPERIENCE_IMAGE_BIRD_WATCHING = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?w=1200&q=80'
const EXPERIENCE_IMAGE_CULTURAL_EVENING = 'https://images.unsplash.com/photo-1518133910546-b6c2fb56e3ff?w=1200&q=80'

const OFFER_IMAGE_HONEYMOON_BLISS = 'https://images.unsplash.com/photo-1550573822-0a3d1b8f9d98?w=1200&q=80'
const OFFER_IMAGE_WEEKEND_ESCAPE = 'https://images.unsplash.com/photo-1460935995132-7ae3b6d55d32?w=1200&q=80'
const OFFER_IMAGE_SPA_SANCTUARY = 'https://images.unsplash.com/photo-1519821172141-b6b4be7e44f7?w=1200&q=80'
const OFFER_IMAGE_FAMILY_GETAWAY = 'https://images.unsplash.com/photo-1460543393997-4020630f70b5?w=1200&q=80'
const OFFER_IMAGE_EARLY_BIRD = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80'
const OFFER_IMAGE_CORPORATE_RETREAT = 'https://images.unsplash.com/photo-1481037958495-841bb8cde1e4?w=1200&q=80'

const TESTIMONIAL_IMAGE_SARAH_MICHAEL = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80'
const TESTIMONIAL_IMAGE_PRIYA_MEHTA = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80'
const TESTIMONIAL_IMAGE_JAMES_WILSON = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80'
const TESTIMONIAL_IMAGE_RAJESH_KAPOOR = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80'
const TESTIMONIAL_IMAGE_EMMA_JOHNSON = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
const TESTIMONIAL_IMAGE_AMAR_SINGH = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'

export const ROOMS: Room[] = [
  {
    id: '1',
    title: 'Royal Suite',
    slug: 'royal-suite',
    image: ROOM_IMAGE_ROYAL_SUITE,
    gallery: [ROOM_IMAGE_ROYAL_SUITE, PLACEHOLDER_GARDEN, ROOM_IMAGE_HONEYMOON_VILLA],
    description: 'Opulent suite with panoramic garden views and luxurious amenities',
    fullDescription: 'Experience ultimate luxury in our Royal Suite, featuring a grand bedroom, separate living area, marble bathroom with spa tub, and a private balcony overlooking our botanical gardens.',
    price: 450,
    maxGuests: 2,
    bedType: 'King Size',
    amenities: ['WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Premium Toiletries', 'Bathrobe'],
    features: ['Private Balcony', 'Marble Bathroom', 'Living Area', 'Spa Bath'],
    size: 65,
  },
  {
    id: '2',
    title: 'Garden Cottage',
    slug: 'garden-cottage',
    image: ROOM_IMAGE_GARDEN_COTTAGE,
    gallery: [ROOM_IMAGE_GARDEN_COTTAGE, PLACEHOLDER_GARDEN, ROOM_IMAGE_ROYAL_SUITE],
    description: 'Intimate cottage nestled in our lush gardens with modern comfort',
    fullDescription: 'Perfect for couples seeking privacy, this charming cottage offers direct garden access, cozy interiors with fireplace, outdoor garden bath, and unparalleled tranquility.',
    price: 320,
    maxGuests: 2,
    bedType: 'Queen Size',
    amenities: ['WiFi', 'Fireplace', 'Outdoor Bath', 'Garden Access'],
    features: ['Outdoor Shower', 'Private Garden', 'Fireplace', 'Outdoor Seating'],
    size: 45,
  },
  {
    id: '3',
    title: 'Pool Villa',
    slug: 'pool-villa',
    image: ROOM_IMAGE_POOL_VILLA,
    gallery: [ROOM_IMAGE_POOL_VILLA, PLACEHOLDER_GARDEN, ROOM_IMAGE_DELUXE_ROOM],
    description: 'Exclusive villa with private pool and extensive leisure space',
    fullDescription: 'Indulge in uncompromising luxury with your own private infinity pool, expansive deck, full-service bathroom, separate powder room, and direct access to the resort\'s 5-acre gardens.',
    price: 550,
    maxGuests: 4,
    bedType: 'King + Twin',
    amenities: ['Private Pool', 'WiFi', 'Concierge', 'Premium Sound System', 'Dining Area'],
    features: ['Private Pool', 'Deck', 'Dining Area', 'Master & Guest Bedroom'],
    size: 85,
  },
  {
    id: '4',
    title: 'Jungle Suite',
    slug: 'jungle-suite',
    image: ROOM_IMAGE_JUNGLE_SUITE,
    gallery: [ROOM_IMAGE_JUNGLE_SUITE, PLACEHOLDER_GARDEN, ROOM_IMAGE_GARDEN_COTTAGE],
    description: 'Nature-immersive suite surrounded by native flora and wildlife',
    fullDescription: 'Wake to bird songs in this uniquely designed suite that blends seamlessly with nature. Features large windows overlooking the jungle canopy, open-air shower, and nature-inspired décor.',
    price: 380,
    maxGuests: 2,
    bedType: 'Queen Size',
    amenities: ['Nature Access', 'Open-Air Shower', 'Telescope', 'Nature Library'],
    features: ['Jungle Views', 'Open Shower', 'Window Seat', 'Nature Trail Access'],
    size: 52,
  },
  {
    id: '5',
    title: 'Deluxe Room',
    slug: 'deluxe-room',
    image: ROOM_IMAGE_DELUXE_ROOM,
    gallery: [ROOM_IMAGE_DELUXE_ROOM, PLACEHOLDER_GARDEN, ROOM_IMAGE_POOL_VILLA],
    description: 'Contemporary comfort with garden or city views',
    fullDescription: 'Perfectly appointed with modern furnishings, premium bedding, rainfall shower, and choice of garden or city views. An excellent choice for business travelers and leisure guests alike.',
    price: 220,
    maxGuests: 2,
    bedType: 'Queen or Twin',
    amenities: ['WiFi', 'Work Desk', 'Air Conditioning', 'Premium Linens'],
    features: ['Garden Views', 'Modern Amenities', 'Spacious Bathroom'],
    size: 38,
  },
  {
    id: '6',
    title: 'Honeymoon Villa',
    slug: 'honeymoon-villa',
    image: ROOM_IMAGE_HONEYMOON_VILLA,
    gallery: [ROOM_IMAGE_HONEYMOON_VILLA, PLACEHOLDER_GARDEN, ROOM_IMAGE_ROYAL_SUITE],
    description: 'Romantic villa designed for the most special occasions',
    fullDescription: 'Celebrate love in this romantic villa featuring a heart-shaped marble jacuzzi, rose petal treatments, private dining setup, champagne welcome, and enchanting garden ambiance.',
    price: 480,
    maxGuests: 2,
    bedType: 'Super King Size',
    amenities: ['Jacuzzi', 'Private Dining', 'Champagne Welcome', 'Romantic Decor'],
    features: ['Heart Jacuzzi', 'Private Terrace', 'Romantic Decor', 'Spa Access'],
    size: 70,
  },
]

export const DINING_OPTIONS: DiningOption[] = [
  {
    id: '1',
    title: 'Garden Table',
    slug: 'garden-table',
    image: DINING_IMAGE_GARDEN_TABLE,
    description: 'Farm-to-table fine dining celebrating seasonal produce and local flavors',
    cuisine: 'Contemporary Global',
    openingHours: '12:00 PM - 11:00 PM',
    specialDishes: ['Pan-Seared Sea Bass', 'Heritage Chicken Tajine', 'Heirloom Vegetable Medley'],
  },
  {
    id: '2',
    title: 'Roop Lounge',
    slug: 'roop-lounge',
    image: DINING_IMAGE_ROOP_LOUNGE,
    description: 'Sophisticated bar and lounge with curated cocktails and light bites',
    cuisine: 'Cocktails & Small Plates',
    openingHours: '5:00 PM - 2:00 AM',
    specialDishes: ['Signature Gold Martini', 'Aromatic Gin & Tonic', 'Forest Berry Mocktail'],
  },
  {
    id: '3',
    title: 'Breakfast Garden',
    slug: 'breakfast-garden',
    image: DINING_IMAGE_BREAKFAST_GARDEN,
    description: 'Morning sanctuary with organic coffee, fresh pastries, and healthy options',
    cuisine: 'Contemporary Breakfast',
    openingHours: '6:30 AM - 10:30 AM',
    specialDishes: ['Granola Bowl with Fresh Berries', 'Avocado Toast', 'Traditional Bengali Dishes'],
  },
  {
    id: '4',
    title: 'Private Dining',
    slug: 'private-dining',
    image: DINING_IMAGE_PRIVATE_DINING,
    description: 'Exclusive dining experiences in intimate settings for special occasions',
    cuisine: 'Multi-Cuisine',
    openingHours: 'By Reservation',
    specialDishes: ['Custom Tasting Menu', 'Personalized Cuisine', 'Chef\'s Selections'],
  },
  {
    id: '5',
    title: 'Spa Café',
    slug: 'spa-cafe',
    image: DINING_IMAGE_SPA_CAFE,
    description: 'Health-conscious café serving organic, nutrient-rich wellness meals',
    cuisine: 'Wellness & Organic',
    openingHours: '10:00 AM - 6:00 PM',
    specialDishes: ['Detox Smoothie Bowls', 'Quinoa Buddha Bowl', 'Cold-Pressed Juices'],
  },
  {
    id: '6',
    title: 'Sunset Bar',
    slug: 'sunset-bar',
    image: DINING_IMAGE_SUNSET_BAR,
    description: 'Elevated terrace with panoramic views and craft beverages',
    cuisine: 'Drinks & Appetizers',
    openingHours: '4:00 PM - Sunset +2hrs',
    specialDishes: ['Sunset Cocktails', 'Artisanal Beers', 'Charcuterie Boards'],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'Spa & Wellness Retreat',
    slug: 'spa-wellness',
    image: EXPERIENCE_IMAGE_SPA_WELLNESS,
    description: 'Full-body rejuvenation with Ayurvedic and modern therapies',
    duration: '2-3 hours',
    maxGuests: 1,
    price: 150,
    highlights: ['Traditional Massage', 'Facial Treatment', 'Meditation', 'Herbal Tea'],
  },
  {
    id: '2',
    title: 'Guided Garden Tour',
    slug: 'garden-tour',
    image: EXPERIENCE_IMAGE_GARDEN_TOUR,
    description: 'Explore 5 acres of curated botanical gardens with expert guide',
    duration: '1.5 hours',
    maxGuests: 8,
    highlights: ['Rare Flora', 'Photography Spots', 'Plant Knowledge', 'Botanical History'],
  },
  {
    id: '3',
    title: 'Outdoor Pool & Wellness',
    slug: 'pool-wellness',
    image: EXPERIENCE_IMAGE_POOL_WELLNESS,
    description: 'Relax in heated pools with poolside yoga and meditation',
    duration: '2 hours',
    maxGuests: 10,
    highlights: ['Yoga Session', 'Heated Pools', 'Zen Space', 'Wellness Drinks'],
  },
  {
    id: '4',
    title: 'Bonfire Nights',
    slug: 'bonfire-nights',
    image: EXPERIENCE_IMAGE_BONFIRE,
    description: 'Intimate gathering with traditional music and roasted delicacies',
    duration: '3 hours',
    maxGuests: 20,
    highlights: ['Live Music', 'Bonfire', 'Local Cuisine', 'Stargazing'],
  },
  {
    id: '5',
    title: 'Bird Watching Adventure',
    slug: 'bird-watching',
    image: EXPERIENCE_IMAGE_BIRD_WATCHING,
    description: 'Early morning bird spotting in our native woodland gardens',
    duration: '2 hours',
    maxGuests: 6,
    highlights: ['Expert Biologist', 'Binoculars', 'Photo Opportunities', 'Species Guide'],
  },
  {
    id: '6',
    title: 'Cultural Evening',
    slug: 'cultural-evening',
    image: EXPERIENCE_IMAGE_CULTURAL_EVENING,
    description: 'Experience traditional Bengali arts, crafts, and cultural performances',
    duration: '2-3 hours',
    maxGuests: 15,
    highlights: ['Live Performance', 'Art Demonstration', 'Cultural Talk', 'Refreshments'],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Garden Hospitality: Creating Serene Spaces',
    slug: 'garden-hospitality',
    image: 'https://images.unsplash.com/photo-1707064148934-0e09c2fb32b2',
    excerpt: 'Discover how our botanical gardens enhance the luxury resort experience and promote wellness.',
    content: 'Our 5-acre botanical gardens represent years of curation and care...',
    author: 'Maya Sharma',
    publishedAt: '2024-01-15',
    category: 'Wellness',
    readTime: 5,
    tags: ['Garden', 'Wellness', 'Design'],
  },
  {
    id: '2',
    title: 'Luxury Dining Experiences: From Farm to Table',
    slug: 'farm-to-table',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Explore our commitment to sustainable, locally-sourced culinary excellence.',
    content: 'Our executive chef sources ingredients from local farmers...',
    author: 'Rajesh Kapoor',
    publishedAt: '2024-01-10',
    category: 'Dining',
    readTime: 6,
    tags: ['Food', 'Sustainability', 'Local'],
  },
  {
    id: '3',
    title: 'Wellness Retreats: Recharge Body, Mind & Spirit',
    slug: 'wellness-retreats',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Learn about our signature wellness programs designed for complete rejuvenation.',
    content: 'In today\'s fast-paced world, taking time for wellness is essential...',
    author: 'Dr. Amita Roy',
    publishedAt: '2024-01-05',
    category: 'Wellness',
    readTime: 7,
    tags: ['Wellness', 'Ayurveda', 'Health'],
  },
  {
    id: '4',
    title: 'Honeymoon Destinations: Why Choose Rajdhani',
    slug: 'honeymoon-guide',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Perfect your honeymoon with romantic experiences in our exclusive villas.',
    content: 'Your honeymoon should be unforgettable. At Rajdhani Roop Garden...',
    author: 'Priya Banerjee',
    publishedAt: '2023-12-28',
    category: 'Travel',
    readTime: 5,
    tags: ['Honeymoon', 'Romance', 'Experiences'],
  },
  {
    id: '5',
    title: 'The History of Botanical Gardens in South Asia',
    slug: 'botanical-history',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Understand the cultural significance and heritage of our gardens.',
    content: 'South Asian gardens have a rich tradition spanning centuries...',
    author: 'Prof. Arjun Singh',
    publishedAt: '2023-12-20',
    category: 'Culture',
    readTime: 8,
    tags: ['History', 'Culture', 'Gardens'],
  },
  {
    id: '6',
    title: 'Seasonal Escape: Making the Most of Each Season',
    slug: 'seasonal-escape',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Discover the unique charm each season brings to our resort.',
    content: 'Spring blooms, summer warmth, autumn colors, and winter clarity...',
    author: 'Vikram Desai',
    publishedAt: '2023-12-10',
    category: 'Lifestyle',
    readTime: 6,
    tags: ['Seasons', 'Nature', 'Travel'],
  },
]

export const OFFERS: Offer[] = [
  {
    id: '1',
    title: 'Honeymoon Bliss Package',
    slug: 'honeymoon-bliss',
    image: OFFER_IMAGE_HONEYMOON_BLISS,
    description: '3 nights in Honeymoon Villa with spa, dinner, and champagne',
    originalPrice: 1800,
    discountedPrice: 1350,
    discount: 25,
    highlights: ['Honeymoon Villa', 'Couples Spa', 'Private Dining', 'Champagne Welcome'],
    validUntil: '2024-06-30',
  },
  {
    id: '2',
    title: 'Weekend Escape',
    slug: 'weekend-escape',
    image: OFFER_IMAGE_WEEKEND_ESCAPE,
    description: '2 nights in Deluxe Room with breakfast and activities',
    originalPrice: 600,
    discountedPrice: 420,
    discount: 30,
    highlights: ['Deluxe Room', 'Daily Breakfast', 'Garden Tour', 'Pool Access'],
    validUntil: '2024-05-31',
  },
  {
    id: '3',
    title: 'Spa Sanctuary Package',
    slug: 'spa-sanctuary',
    image: OFFER_IMAGE_SPA_SANCTUARY,
    description: '4 nights with unlimited spa treatments and wellness meals',
    originalPrice: 1200,
    discountedPrice: 900,
    discount: 25,
    highlights: ['Garden Cottage', 'Unlimited Spa', 'Wellness Meals', 'Meditation'],
    validUntil: '2024-07-31',
  },
  {
    id: '4',
    title: 'Family Getaway',
    slug: 'family-getaway',
    image: OFFER_IMAGE_FAMILY_GETAWAY,
    description: '5 nights for family with kids stay free and activities',
    originalPrice: 1600,
    discountedPrice: 1120,
    discount: 30,
    highlights: ['Family Rooms', 'Kids Stay Free', 'Activities', 'Kids Dining'],
    validUntil: '2024-08-31',
  },
  {
    id: '5',
    title: 'Early Bird Special',
    slug: 'early-bird',
    image: OFFER_IMAGE_EARLY_BIRD,
    description: 'Book 60 days in advance and save 20% on any room',
    originalPrice: 450,
    discountedPrice: 360,
    discount: 20,
    highlights: ['Any Room', '60-day Advance', 'Free Upgrade', 'Amenities Credit'],
    validUntil: '2024-06-30',
  },
  {
    id: '6',
    title: 'Corporate Retreat',
    slug: 'corporate-retreat',
    image: OFFER_IMAGE_CORPORATE_RETREAT,
    description: 'Team building packages with conference facilities and activities',
    originalPrice: 5000,
    discountedPrice: 4000,
    discount: 20,
    highlights: ['Group Rates', 'Conference Room', 'Team Activities', 'Catering'],
    validUntil: '2024-12-31',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & Michael',
    title: 'Honeymoon Guests',
    image: TESTIMONIAL_IMAGE_SARAH_MICHAEL,
    content:
      'The most romantic experience of our lives. Every detail was perfect, from the welcome champagne to the private pool dinners.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Mehta',
    title: 'Wellness Retreat Guest',
    image: TESTIMONIAL_IMAGE_PRIYA_MEHTA,
    content:
      'I came here stressed and left completely rejuvenated. The spa treatments and garden walks were transformative.',
    rating: 5,
  },
  {
    id: '3',
    name: 'James Wilson',
    title: 'Business Guest',
    image: TESTIMONIAL_IMAGE_JAMES_WILSON,
    content:
      'Outstanding hospitality and facilities. The staff anticipated every need, and the property is simply magnificent.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Rajesh Kapoor',
    title: 'Food Enthusiast',
    image: TESTIMONIAL_IMAGE_RAJESH_KAPOOR,
    content:
      'The dining experience was extraordinary. Farm-to-table done right, with flavors that stayed with me long after.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Emma Johnson',
    title: 'Family Vacation',
    image: TESTIMONIAL_IMAGE_EMMA_JOHNSON,
    content:
      'Our kids had the time of their lives. Safe, beautiful gardens to explore, and staff who made everyone feel special.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Amar Singh',
    title: 'Cultural Enthusiast',
    image: TESTIMONIAL_IMAGE_AMAR_SINGH,
    content:
      'A beautiful celebration of Bengali culture and luxury. The cultural evenings were the highlight of our stay.',
    rating: 5,
  },
]

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'What is the best time to visit Rajdhani Roop Garden?',
    answer:
      'The resort is beautiful year-round, but October to March offers the most pleasant weather with cooler temperatures ideal for garden exploration.',
    category: 'General',
  },
  {
    id: '2',
    question: 'Do you offer airport transportation?',
    answer: 'Yes, we provide complimentary airport transfers for all guests. Please arrange pickup details during booking.',
    category: 'Services',
  },
  {
    id: '3',
    question: 'Are children welcome?',
    answer:
      'Absolutely! We have family rooms, kids activities, and child-friendly dining options. Our staff is experienced with families.',
    category: 'Family',
  },
  {
    id: '4',
    question: 'What is your cancellation policy?',
    answer:
      'Standard cancellations within 7 days of arrival incur 50% charge. Earlier cancellations are fully refundable minus transaction fees.',
    category: 'Booking',
  },
  {
    id: '5',
    question: 'Do you have vegetarian and dietary options?',
    answer:
      'Yes, our chefs accommodate all dietary requirements. Please inform us during booking or upon arrival.',
    category: 'Dining',
  },
  {
    id: '6',
    question: 'Is WiFi available throughout the resort?',
    answer: 'High-speed WiFi is complimentary in all rooms, common areas, and dining venues.',
    category: 'Facilities',
  },
]

export const CONTACT_INFO = {
  address: 'Banani, Dhaka 1213, Bangladesh',
  phone: '+880 2 9885 0000',
  email: 'info@rajdhanigarden.com',
  hours: {
    reception: '24/7',
    restaurant: '12:00 PM - 11:00 PM',
    spa: '9:00 AM - 9:00 PM',
  },
  socialMedia: {
    facebook: 'https://facebook.com/rajdhanigardenresort',
    instagram: 'https://instagram.com/rajdhanigardenresort',
    twitter: 'https://twitter.com/rajdhaniresort',
  },
}

export const STATS = {
  rooms: 50,
  acres: 5,
  years: 15,
  rating: 4.9,
}
