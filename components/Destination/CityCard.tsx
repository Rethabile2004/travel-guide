import Link from "next/link"
import Image from "next/image"

type CityCardProps = {
  city: {
    name: string
    slug: string
    province: string
    description: string
    heroImageUrl: string
  }
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Link
      href={`/destinations/${city.slug}`}
      className="group rounded-xl border overflow-hidden transition hover:shadow-md"
    >
      <div className="relative h-48 w-full">
        <Image
          src={city.heroImageUrl}
          alt={city.name}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{city.name}</h3>
        <p className="text-xs text-muted-foreground">
          {city.province.replace("_", " ")}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {city.description}
        </p>
      </div>
    </Link>
  )
}
