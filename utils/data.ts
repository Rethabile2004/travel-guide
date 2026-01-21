import { Destination } from "./types";

export const aboutData = [
    { title: 'User Authentication', description: 'Secure user registration, login, and protected routes powered by Clerk.' },
    { title: 'Dynamic Destination Pages', description: 'Browse, search, and filter destinations with detailed information and user reviews.' },
    { title: 'Trip Planning', description: 'Authenticated users can create and manage trips with specific dates and notes.' },
    { title: 'Favorites Management', description: 'Save destinations to favorites for easy access later.' },
    { title: 'Commerce & Payments', description: 'Handling Stripe checkout sessions for premium travel guides.' },
    { title: 'Responsive Design', description: 'A fully responsive and accessible UI using Radix UI primitives and Tailwind CSS.' },
]

export const provinces = [
    "Western_Cape",
    "Eastern_Cape",
    "Northern_Cape",
    "Free_State",
    "Gauteng",
    "KwaZulu_Natal",
    "Mpumalanga",
    "Limpopo",
    "North_West"
];


export const mockTestimonials = [
    { id: 1, quote: "This platform made planning my trip to Japan a breeze! The guides are incredibly detailed and helpful.", name: "Sarah L." },
    { id: 2, quote: "The destination filtering is top-notch. I found my dream location instantly.", name: "Mike R." },
    { id: 3, quote: "Worth every penny for the premium content. Saved us hours of research.", name: "Chris T." },
];


export const mockDestinations: Destination[] = [
  { id: 1, name: "Western Cape", country: "ZA", imageUrl: "/profile/demo2.jpg", rating: 4.8, description: "The city of lights and romance. Explore historical landmarks and amazing cuisine." },
  { id: 2, name: "Gauteng", country: "ZA", imageUrl: "/profile/demo3.jpg", rating: 4.9, description: "Ancient temples, beautiful gardens, and rich cultural experiences await." },
  { id: 3, name: "Free State", country: "ZA", imageUrl: "/profile/demo1.jpg", rating: 4.7, description: "The city that never sleeps. Find your adventure from Broadway to Central Park." },
];