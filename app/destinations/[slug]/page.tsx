'use client'
import { notFound, redirect } from "next/navigation"
import Image from "next/image"
import { getCityBySlug } from "@/utils/actions/city"
import CityReviews from "@/components/reviews/CityReviews"
import SubmitReview from "@/components/reviews/SubmitReview"
import FavoriteToggleButton from "@/components/global/FavoriteToggleButton"
import { ShareButton } from "@/components/global/ShareButton"
import { PageProps } from '@/utils/types'
import { userHasAddedAReview } from "@/utils/actions/review"
import CityRating from "@/components/reviews/CityRating"
import { UserSignInButton } from "@/components/global/UserSignInButton"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { auth } from "@clerk/nextjs/server"
import CreateOrEditForm from "@/components/form/NewTripPage"
import { CreateTripPopOver } from "@/components/destination/CreateTripPopOver"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { useState } from "react"

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const [open, setOpen] = useState(false)
  const city = await getCityBySlug(slug)
  if (!city) {
    redirect('/products')
  }
  const { userId } = await auth()
  const canAddReview = await userHasAddedAReview(city.id)
  if (!city) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-12">
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-100 w-full overflow-hidden rounded-xl">
          <Image
            src={city.heroImageUrl}
            alt={city.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-4xl font-bold">{city.name}</h1>
            <div className="flex items-center gap-3">
              <FavoriteToggleButton cityId={city.id} />
              <ShareButton />
            </div>
          </div>
          <p className="-mb-2 text-muted-foreground font-semibold">
            <CityRating cityId={city.id} />
          </p>
          <p className="mt-2 text-muted-foreground">
            {city.province.replace("_", " ")}
          </p>
          <p className="mt-6 text-lg">{city.description}</p>
          {userId ?
            <UserSignInButton />
            :
            <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      Create Trip
                    </Button>
                  </PopoverTrigger>
            
                  <PopoverContent className="w-56 p-0" align="end">
                    Testing
                   {/* <CreateTripForm cities={provinces}/> */}
                  </PopoverContent>
                </Popover>
            // <CreateTripPopOver city={city}/>
          }
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Top Attractions</h2>
        {city.attractions.length === 0 ? (
          <p className="text-muted-foreground">No attractions added yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {city.attractions.map((attraction) => (
              <div key={attraction.id} className="rounded-xl border p-4">
                <h3 className="font-medium">{attraction.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{attraction.description}</p>
                <span className="mt-3 inline-block text-xs text-muted-foreground">{attraction.category}</span>
              </div>
            ))}
          </div>
        )}
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Travel Guides</h2>
        {city.guides.length === 0 ? (
          <p className="text-muted-foreground">No guides available for this destination.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {city.guides.map((guide) => (
              <div key={guide.id} className="rounded-xl border p-4">
                <h3 className="font-medium">{guide.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{guide.summary}</p>
                {guide.isPremium && (
                  <span className="mt-3 inline-block rounded bg-primary px-2 py-1 text-xs text-primary-foreground">Premium</span>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      {/* {city} */}
      <section>
        <h2 className="mb-3 text-2xl font-semibold">Reviews</h2>
        {canAddReview ? <SubmitReview cityId={city.id} /> : <></>}
        {city.reviews.length === 0 ? (
          <>
            <CityReviews cityId={city.id} />
          </>
        ) : (
          <div className="flex gap-x-2">
            <CityReviews cityId={city.id} />
          </div>
        )}
      </section>
    </main>
  )
}
