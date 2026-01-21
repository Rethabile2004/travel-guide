import { AttractionCategory, Province } from '@/app/generated/prisma/client'; 

export const SEED_USER_ID = "seed-admin-user-id";

export const usersData = [
  { id: SEED_USER_ID, clerkUserId: "user_2026_admin", email: "admin@explore.za", name: "Admin Lead" },
  { id: "user-2", clerkUserId: "user_2026_002", email: "sarah.j@travel.com", name: "Sarah Jenkins" },
  { id: "user-3", clerkUserId: "user_2026_003", email: "thabo.m@safari.org", name: "Thabo Mokoena" },
  { id: "user-4", clerkUserId: "user_2026_004", email: "elena.v@explore.net", name: "Elena Volkov" },
  { id: "user-5", clerkUserId: "user_2026_005", email: "marcus.t@adventure.com", name: "Marcus Thorne" }
];

export const citiesData = [
  {
    name: "Cape Town",
    slug: "cape-town",
    province: Province.WESTERN_CAPE, 
    description: "A coastal city known for Table Mountain, beaches, and wine farms.",
    heroImageUrl: "/images/cities/cape-town.jpg",
    guides: [
      { title: "Essential Cape Town Travel Guide", slug: "cape-town-essential-guide", summary: "A complete introduction for first-time visitors.", content: "Full guide content coming soon...", isPremium: false },
      { title: "Cape Town 3-Day Premium Itinerary", slug: "cape-town-3-day-itinerary", summary: "A detailed multi-day itinerary with local tips.", content: "Premium content...", isPremium: true }
    ],
    attractions: [
      { name: "Table Mountain", description: "Iconic flat-topped mountain overlooking the city.", category: AttractionCategory.NATURE },
      { name: "V&A Waterfront", description: "A bustling hub of shopping and dining.", category: AttractionCategory.SHOPPING }
    ]
  },
  {
    name: "Johannesburg",
    slug: "johannesburg",
    province: Province.GAUTENG, 
    description: "South Africa’s largest city and economic hub.",
    heroImageUrl: "/images/cities/johannesburg.jpg",
    guides: [
      { title: "Essential Johannesburg Travel Guide", slug: "johannesburg-essential-guide", summary: "A complete introduction.", content: "Content coming soon...", isPremium: false },
      { title: "Joburg 3-Day Premium Itinerary", slug: "johannesburg-3-day-itinerary", summary: "Detailed multi-day itinerary.", content: "Premium content...", isPremium: true }
    ],
    attractions: [
      { name: "Apartheid Museum", description: "A deep dive into South African history.", category: AttractionCategory.HISTORY },
      { name: "Maboneng Precinct", description: "Vibrant urban art and food scene.", category: AttractionCategory.CULTURE }
    ]
  },
  {
    name: "Durban",
    slug: "durban",
    province: Province.KWAZULU_NATAL, 
    description: "A warm coastal city famous for beaches and culture.",
    heroImageUrl: "/images/cities/durban.jpg",
    guides: [
      { title: "Essential Durban Travel Guide", slug: "durban-essential-guide", summary: "Beaches and spice.", content: "Content...", isPremium: false },
      { title: "Durban Premium Beach Tour", slug: "durban-3-day-itinerary", summary: "Golden Mile highlights.", content: "Premium content...", isPremium: true }
    ],
    attractions: [
      { name: "uShaka Marine World", description: "World-class aquarium and water park.", category: AttractionCategory.ADVENTURE },
      { name: "Victoria Street Market", description: "Authentic Indian spices and crafts.", category: AttractionCategory.FOOD }
    ]
  },
  {
    name: "Pretoria",
    slug: "pretoria",
    province: Province.GAUTENG,
    description: "The administrative capital known for Jacaranda trees and historic sites.",
    heroImageUrl: "/images/cities/pretoria.jpg",
    guides: [
      { title: "Pretoria Heritage Walk", slug: "pretoria-heritage-guide", summary: "Historic landmarks tour.", content: "Content...", isPremium: false }
    ],
    attractions: [
      { name: "Union Buildings", description: "The official seat of government.", category: AttractionCategory.HISTORY },
      { name: "National Zoological Gardens", description: "The largest zoo in the country.", category: AttractionCategory.NATURE }
    ]
  },
  {
    name: "Gqeberha",
    slug: "gqeberha",
    province: Province.EASTERN_CAPE,
    description: "Known as the Friendly City, featuring stunning beaches and eco-reserves.",
    heroImageUrl: "/images/cities/gqeberha.jpg",
    guides: [
      { title: "The Sunshine Coast Guide", slug: "gqeberha-sunshine-guide", summary: "Coastal gems and wildlife.", content: "Content...", isPremium: false }
    ],
    attractions: [
      { name: "Addo Elephant Park", description: "Third largest national park in SA.", category: AttractionCategory.NATURE },
      { name: "Donkin Reserve", description: "A site of historical significance and art.", category: AttractionCategory.CULTURE }
    ]
  },
  {
    name: "Mbombela",
    slug: "mbombela",
    province: Province.MPUMALANGA,
    description: "The gateway to Kruger National Park and the Panorama Route.",
    heroImageUrl: "/images/cities/mbombela.jpg",
    guides: [
      { title: "Kruger Safari Guide", slug: "kruger-safari-guide", summary: "Preparation for your big five adventure.", content: "Content...", isPremium: false }
    ],
    attractions: [
      { name: "Sudwala Caves", description: "The oldest known caves in the world.", category: AttractionCategory.ADVENTURE },
      { name: "Lowveld Botanical Garden", description: "Rare flora and waterfalls.", category: AttractionCategory.NATURE }
    ]
  },
  {
    name: "Bloemfontein",
    slug: "bloemfontein",
    province: Province.FREE_STATE,
    description: "The City of Roses and the judicial capital of South Africa.",
    heroImageUrl: "/images/cities/bloemfontein.jpg",
    guides: [
      { title: "Bloemfontein Cultural Tour", slug: "bloemfontein-culture-guide", summary: "Exploring the heart of the Free State.", content: "Content...", isPremium: false }
    ],
    attractions: [
      { name: "Naval Hill", description: "Home to the massive Mandela Statue.", category: AttractionCategory.NATURE },
      { name: "Oliewenhuis Art Museum", description: "Stunning gallery in a historic mansion.", category: AttractionCategory.CULTURE }
    ]
  },
  {
    name: "Kimberley",
    slug: "kimberley",
    province: Province.NORTHERN_CAPE,
    description: "Historical diamond mining town and home to the Big Hole.",
    heroImageUrl: "/images/cities/kimberley.jpg",
    guides: [
      { title: "The Diamond Trail Guide", slug: "kimberley-diamond-guide", summary: "History of the diamond rush.", content: "Content...", isPremium: false }
    ],
    attractions: [
      { name: "The Big Hole", description: "A massive hand-dug diamond mine.", category: AttractionCategory.HISTORY },
      { name: "McGregor Museum", description: "Natural and cultural history.", category: AttractionCategory.CULTURE }
    ]
  }
];

export const tripsData = [
  { userId: SEED_USER_ID, title: "Summer Holiday 2026", startDate: new Date('2026-12-01'), endDate: new Date('2026-12-15'), notes: "Family trip to Cape Town." },
  { userId: "user-2", title: "Business & Leisure Joburg", startDate: new Date('2026-03-10'), endDate: new Date('2026-03-14'), notes: "Meetings in Sandton." },
  { userId: "user-3", title: "Kruger Safari Adventure", startDate: new Date('2026-05-20'), endDate: new Date('2026-05-27'), notes: "Big Five spotting." },
  { userId: "user-4", title: "Garden Route Explorer", startDate: new Date('2026-09-15'), endDate: new Date('2026-09-25'), notes: "Driving from Gqeberha." },
  { userId: "user-5", title: "Durban Surf Week", startDate: new Date('2026-07-04'), endDate: new Date('2026-07-11'), notes: "Surfing at North Beach." }
];
