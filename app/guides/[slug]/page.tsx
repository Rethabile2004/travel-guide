import { notFound } from "next/navigation"
import Link from "next/link"
import { getGuideBySlug } from "@/utils/actions/guide"
import { Button } from "@/components/ui/button"
import FavoriteToggleButton from "@/components/global/FavoriteToggleButton"

type PageProps = {
  params: { slug: string }
}

export default async function GuideDetailPage({ params }: PageProps) {
  const {slug}=await params
  const guide = await getGuideBySlug(slug)
    
  if (!guide) {
    notFound()
  }

  const isLocked = guide.isPremium

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Guide for{" "}
          <Link
            href={`/destinations/${guide.city.slug}`}
            className="underline"
          >
            {guide.city.name}
          </Link>
        </p>

        <h1 className="text-3xl font-bold">{guide.title}</h1>

        {guide.isPremium && (
          <span className="inline-block rounded bg-primary px-2 py-1 text-xs text-primary-foreground">
            Premium Guide
          </span>
        )}
      </header>

      <section className="prose prose-neutral max-w-none">
        {isLocked ? (
          <>
            <p className="text-muted-foreground">
              {guide.summary}
            </p>

            <div className="mt-8 rounded-xl border bg-muted p-6 text-center">
              <p className="mb-4 font-medium">
                This is a premium guide.
              </p>
              <Button>Unlock Guide</Button>
            </div>
          </>
        ) : (
          <article>
            {guide.content}
            <FavoriteToggleButton cityId="'"/>
          </article>
        )}
      </section>
    </main>
  )
}
