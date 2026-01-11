import { notFound } from "next/navigation"
import Image from "next/image"
import { getCityBySlug } from "@/utils/actions/city"

type PageProps = {
  params: { slug: string }
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const {slug}= await params
  const city = await getCityBySlug(slug)

  if (!city) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-16">
      {/* Hero */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
          <Image
            src={city.heroImageUrl}
            alt={city.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold">{city.name}</h1>
          <p className="mt-2 text-muted-foreground">
            {city.province.replace("_", " ")}
          </p>
          <p className="mt-6 text-lg">{city.description}</p>
        </div>
      </section>

      {/* Attractions */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Top Attractions</h2>

        {city.attractions.length === 0 ? (
          <p className="text-muted-foreground">
            No attractions added yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {city.attractions.map((attraction) => (
              <div
                key={attraction.id}
                className="rounded-xl border p-4"
              >
                <h3 className="font-medium">{attraction.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {attraction.description}
                </p>
                <span className="mt-3 inline-block text-xs text-muted-foreground">
                  {attraction.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Guides */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Travel Guides</h2>

        {city.guides.length === 0 ? (
          <p className="text-muted-foreground">
            No guides available for this destination.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {city.guides.map((guide) => (
              <div
                key={guide.id}
                className="rounded-xl border p-4"
              >
                <h3 className="font-medium">{guide.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {guide.summary}
                </p>

                {guide.isPremium && (
                  <span className="mt-3 inline-block rounded bg-primary px-2 py-1 text-xs text-primary-foreground">
                    Premium
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Reviews (read-only for now) */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Reviews</h2>

        {city.reviews.length === 0 ? (
          <p className="text-muted-foreground">
            No reviews yet.
          </p>
        ) : (
          <div className="space-y-4">
            {city.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border p-4"
              >
                <p className="font-medium">
                  Rating: {review.rating}/5
                </p>
                {review.comment && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {review.comment}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
