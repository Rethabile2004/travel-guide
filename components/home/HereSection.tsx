import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function HeroSection() {
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
              <FaGithub className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
