import Link from "next/link";
import { MapPin, Star, ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { getForHomePageGuides } from "@/utils/actions/guide";
import { Guide } from "./generated/prisma/client";

interface Destination {
  id: number;
  name: string;
  country: string;
  imageUrl: string;
  rating: number;
  description: string;
}


const mockDestinations: Destination[] = [
  { id: 1, name: "Western Cape", country: "ZA", imageUrl: "/profile/demo2.jpg", rating: 4.8, description: "The city of lights and romance. Explore historical landmarks and amazing cuisine." },
  { id: 2, name: "Gauteng", country: "ZA", imageUrl: "/profile/demo3.jpg", rating: 4.9, description: "Ancient temples, beautiful gardens, and rich cultural experiences await." },
  { id: 3, name: "Free State", country: "ZA", imageUrl: "/profile/demo1.jpg", rating: 4.7, description: "The city that never sleeps. Find your adventure from Broadway to Central Park." },
];

const mockGuides: Guide[] = await getForHomePageGuides()

const mockTestimonials = [
  { id: 1, quote: "This platform made planning my trip to Japan a breeze! The guides are incredibly detailed and helpful.", name: "Sarah L." },
  { id: 2, quote: "The destination filtering is top-notch. I found my dream location instantly.", name: "Mike R." },
  { id: 3, quote: "Worth every penny for the premium content. Saved us hours of research.", name: "Chris T." },
];


function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-background to-muted/40 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Find Your Next Great Adventure
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl max-w-2xl mx-auto">
          Beautifully curated destinations, practical guides and unique experiences — all in one place.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/destinations">
              Explore Destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/Rethabile2004/travel-guide">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div className="relative aspect-4/3">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-sm font-medium backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          {destination.rating}
        </div>
      </div>

      <CardContent className="p-5">
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">{destination.name}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {destination.country}
          </p>
        </div>

        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          {destination.description}
        </p>

        <Button variant="ghost" className="mt-4 w-full justify-between group/btn" asChild>
          <Link href={`/destinations/${destination.name.toLowerCase().replace(/\s/g, '-')}`}>
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function FeaturedDestinationsSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Destinations</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Places our community loves the most right now
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/destinations">
              View All Destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// function GuideCard({ guide }: { guide: Guide }) {
//   return (
//     <Card className="flex h-full flex-col transition-all hover:border-primary/40" >
//       <CardHeader className="flex-1">
//         <CardTitle className="line-clamp-2">{guide.title}</CardTitle>
//         <CardDescription>
//           {guide.title} • {guide.updatedAt.toDateString()}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="pt-0">
//         <div className="flex items-center justify-between">
//           <span
//             className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${guide.isPremium
//               ? "bg-primary/10 text-primary"
//               : "bg-muted text-muted-foreground"
//               }`}
//           >
//             {guide.isPremium ? "Premium" : "Free"}
//           </span>
//           <Button variant="link" className="px-0" asChild>
//             <Link href={`/guides/${guide.slug}`}>
//               Read Guide →
//             </Link>
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

function PopularGuidesSection() {
  return (
    <section className="bg-muted/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Guides</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Expert itineraries ready for your next journey
          </p>
        </div>

        {/* <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Travelers Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from real explorers
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {mockTestimonials.map((t) => (
            <Card key={t.id} className="bg-background">
              <CardContent className="p-6">
                <p className="italic text-muted-foreground">“{t.quote}”</p>
                <p className="mt-4 font-medium">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <main className="relative">
        <HeroSection />
        <FeaturedDestinationsSection />
        <PopularGuidesSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}