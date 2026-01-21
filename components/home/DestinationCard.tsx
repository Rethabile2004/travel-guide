import { Destination } from "@/utils/types";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ArrowRight, Link, MapPin, Star } from "lucide-react";
import { Button } from "../ui/button";

export default function DestinationCard({ destination }: { destination: Destination }) {
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