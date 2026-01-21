import TestimonialsSection from "@/components/home/TestimonialsSection";
import PopularGuidesSection from "@/components/home/PopularGuidesSection";
import FeaturedDestinationsSection from "@/components/home/FeaturedDestinationsSection";
import HeroSection from "@/components/home/HereSection";

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