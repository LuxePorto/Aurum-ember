
import { Coffee, Sun, Moon, Wine, Cake, Leaf, Award, Users, GlassWater } from 'lucide-react';
import { MenuItem, Review, Category, TeamMember, FaqItem, TastingMenuItem, Award as AwardType, BlogPost, EventRoom } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Menu', href: '/menu' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const CATEGORIES: Category[] = [
  { name: 'Breakfast', icon: Sun, description: 'Start your day with energy and taste.' },
  { name: 'Lunch', icon: Coffee, description: 'Mid-day breaks made delicious.' },
  { name: 'Dinner', icon: Moon, description: 'Elegant dining for the perfect evening.' },
  { name: 'Drinks', icon: Wine, description: 'Fine wines and crafted cocktails.' },
  { name: 'Desserts', icon: Cake, description: 'Sweet endings to a perfect meal.' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Truffle Filet Mignon',
    description: 'Premium beef tenderloin with black truffle reduction and asparagus.',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
    category: 'Dinner',
    isSpecial: true,
    tags: ['GF', 'Signature'],
  },
  {
    id: 2,
    name: 'Saffron Risotto',
    description: 'Creamy Arborio rice infused with saffron and topped with gold leaf.',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=800&q=80',
    category: 'Dinner',
    tags: ['V', 'GF'],
  },
  {
    id: 3,
    name: 'Pan-Seared Scallops',
    description: 'Fresh Atlantic scallops with cauliflower purée and herb oil.',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b485c?auto=format&fit=crop&w=800&q=80',
    category: 'Lunch',
    isSpecial: true,
    tags: ['GF', 'Seafood'],
  },
  {
    id: 4,
    name: 'Artisan Burrata',
    description: 'Fresh burrata cheese with heirloom tomatoes and balsamic glaze.',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80',
    category: 'Lunch',
    tags: ['V'],
  },
  {
    id: 5,
    name: 'Midnight Chocolate Cake',
    description: 'Decadent dark chocolate layers with raspberry coulis.',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    category: 'Dessert',
    tags: ['V'],
  },
  {
    id: 6,
    name: 'Smoked Old Fashioned',
    description: 'Aged bourbon, angostura bitters, maple syrup, smoked oak.',
    price: '$16',
    image: 'https://images.unsplash.com/photo-1536935338788-843bb5287c46?auto=format&fit=crop&w=800&q=80',
    category: 'Drinks',
    isSpecial: true,
    tags: ['Alcohol'],
  },
  {
    id: 7,
    name: 'Lobster Benedict',
    description: 'Poached eggs, butter-poached lobster, hollandaise on brioche.',
    price: '$34',
    image: 'https://images.unsplash.com/photo-1533089862017-a0bc54c98e4f?auto=format&fit=crop&w=800&q=80',
    category: 'Breakfast',
    tags: ['Seafood'],
  },
  {
    id: 8,
    name: 'Gold Leaf Macarons',
    description: 'Assorted french macarons finished with 24k gold dust.',
    price: '$20',
    image: 'https://images.unsplash.com/photo-1569864358637-a029430ec005?auto=format&fit=crop&w=800&q=80',
    category: 'Dessert',
    tags: ['GF', 'V'],
  },
];

export const TASTING_MENU: TastingMenuItem[] = [
  {
    course: 'I',
    name: 'Oysters & Pearls',
    description: 'Sabayon of pearl tapioca with Island Creek oysters and white sturgeon caviar.',
    pairing: 'Dom Pérignon, 2012'
  },
  {
    course: 'II',
    name: 'Salad of Hawaiian Hearts of Peach Palm',
    description: 'Compressed mango, cilantro, and jalapeño emulsion.',
    pairing: 'Sauvignon Blanc, Cloudy Bay, 2022'
  },
  {
    course: 'III',
    name: 'Herb-Roasted Lamb Saddle',
    description: 'Ratatouille, crispy panisse, and thyme-infused jus.',
    pairing: 'Cabernet Sauvignon, Caymus, 2020'
  },
  {
    course: 'IV',
    name: 'Dark Chocolate Soufflé',
    description: 'Warm Venezuelan chocolate with Tahitian vanilla bean ice cream.',
    pairing: 'Port, Taylor Fladgate 20 Year'
  }
];

export const AWARDS: AwardType[] = [
  { id: 1, title: 'Three Michelin Stars', organization: 'Michelin Guide', year: '2024' },
  { id: 2, title: 'Best Service Award', organization: 'James Beard Foundation', year: '2023' },
  { id: 3, title: 'Grand Award', organization: 'Wine Spectator', year: '2022-2024' },
  { id: 4, title: 'Top 50 Restaurants', organization: 'World\'s 50 Best', year: '2024' },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Eleanor Sterling',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'An absolute masterpiece of culinary art. The Truffle Filet Mignon was cooked to perfection. The ambiance is unmatched in the city.',
  },
  {
    id: 2,
    name: 'James Calloway',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'The service at Aurum & Ember is impeccable. A truly premium experience from the moment you walk through the doors.',
  },
  {
    id: 3,
    name: 'Sophia Laurent',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    text: 'Beautiful interior and fantastic wine selection. Perfect for our anniversary dinner.',
  },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', // Cozy Interior
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80', // Plated Food
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80', // Luxury Bar
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80', // Chef Detail
  'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=800&q=80', // Plated Detail
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80', // Dark Food
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Marco Rossi',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=400&q=80',
    bio: 'With 20+ years in Michelin-starred kitchens, Marco brings passion and precision to every plate.',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Head Sommelier',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'An expert palate with a knack for finding the perfect vintage to elevate your dining experience.',
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&w=400&q=80',
    bio: 'A master of sweets who blends classical French techniques with modern artistic flair.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What is the dress code?',
    answer: 'We encourage a smart casual dress code. We ask that gentlemen avoid wearing sleeveless shirts and flip-flops. Jackets are optional but appreciated.',
  },
  {
    question: 'Do you offer valet parking?',
    answer: 'Yes, complimentary valet parking is available for all dinner guests directly in front of the restaurant entrance.',
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer: 'Absolutely. Our menu features several gluten-free and vegetarian options. Please inform your server of any allergies upon arrival.',
  },
  {
    question: 'Do you host private events?',
    answer: 'Yes, we have two private dining rooms suitable for groups of 10 to 40 guests. Please contact us for details and availability.',
  },
];

export const FEATURES = [
  {
    title: 'Sustainable Sourcing',
    description: 'We partner with local farms to ensure the freshest, ethically sourced ingredients.',
    icon: Leaf,
  },
  {
    title: 'Award Winning',
    description: 'Recognized for culinary excellence and outstanding service year after year.',
    icon: Award,
  },
  {
    title: 'Private Dining',
    description: 'Exclusive rooms available for intimate gatherings and corporate events.',
    icon: Users,
  },
  {
    title: 'Curated Wines',
    description: 'An extensive cellar featuring rare vintages and perfectly paired selections.',
    icon: GlassWater,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Sourcing Truffles",
    excerpt: "Journey with Chef Marco to the forests of Alba as we hunt for the season's finest white truffles.",
    date: "October 12, 2024",
    category: "Ingredients",
    author: "Marco Rossi",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Summer Cocktail Guide",
    excerpt: "Our head mixologist shares the secrets behind the refreshing notes of our new seasonal menu.",
    date: "July 24, 2024",
    category: "Drinks",
    author: "James West",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Hosting the Perfect Dinner Party",
    excerpt: "Tips from our service team on how to bring the Aurum & Ember hospitality to your own home.",
    date: "June 15, 2024",
    category: "Lifestyle",
    author: "Sarah Jenkins",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
  }
];

export const EVENT_ROOMS: EventRoom[] = [
  {
    id: 1,
    name: "The Wine Cellar",
    capacity: "14 Guests",
    description: "An intimate, subterranean sanctuary surrounded by our rarest vintages. Perfect for executive dinners and special anniversaries.",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=800&q=80",
    features: ["Private Sommelier", "Custom Tasting Menu", "AV Capabilities"]
  },
  {
    id: 2,
    name: "The Skyline Terrace",
    capacity: "40 Guests",
    description: "Open-air elegance with panoramic views of the city. Ideal for cocktail receptions and engagement parties.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    features: ["Private Bar", "Heated Outdoor Area", "Panoramic Views"]
  },
  {
    id: 3,
    name: "The Gilded Lounge",
    capacity: "25 Guests",
    description: "A plush, semi-private area adjacent to the main dining room, offering the energy of the restaurant with exclusive comfort.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=800&q=80",
    features: ["Dedicated Service Staff", "Lounge Seating", "Custom Florals"]
  }
];
