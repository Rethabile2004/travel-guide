import Link from "next/link"
import Image from "next/image"
import { cityRating } from "@/utils/actions/review"

type CityCardProps = {
    city: {
        name: string
        slug: string
        province: string
        description: string
        heroImageUrl: string
        id: string
    },
    children: React.ReactNode
}

export async function CityCard({ city, children }: CityCardProps) {
    const { reviewCount,cityRating:rating } = await cityRating(city.id)
    // console.log(reviews)
    return (
        <div className="relative rounded-xl border overflow-hidden transition hover:shadow-md group">
            <Link
                href={`/destinations/${city.slug}`}
                className=""
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
                        {city.province.replace("_", " ")} | {reviewCount} reviews | {rating} rating
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {city.description}
                    </p>
                </div>
            </Link>
            <div className='absolute top-7 right-7 z-5'>
                {children}
            </div>
        </div>
    )
}
