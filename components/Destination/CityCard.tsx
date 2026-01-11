import Link from "next/link"
import Image from "next/image"

type CityCardProps = {
    city: {
        name: string
        slug: string
        province: string
        description: string
        heroImageUrl: string
    },
    children: React.ReactNode
}

export function CityCard({ city, children }: CityCardProps) {
    return (
        <div className="relative">
            <Link
                href={`/destinations/${city.slug}`}
                className="rounded-xl border overflow-hidden transition hover:shadow-md"
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
                    </p>  <div className='absolute top-7 right-7 z-5'>


                    </div>
                </div>
            </Link>
            {children}
        </div>
    )
}
