import { notFound } from "next/navigation"
import Link from "next/link"
import { getGuideBySlug, getCityGuides } from "@/utils/actions/guide"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import FavoriteToggleButton from "@/components/global/FavoriteToggleButton"
import ReactMarkdown from 'react-markdown'
type PageProps = {
  params: { slug: string }
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params

  const guide = await getGuideBySlug(slug)
  if (!guide) notFound()
  const outputGuide = guide.content.split('. ').join('.\n\n')

  const isLocked = guide.isPremium
  const relatedGuides = await getCityGuides(guide.cityId, guide.id)

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-12">
      {/* HERO */}
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href={`/destinations/${guide.city.slug}`}
            className="hover:underline"
          >
            {guide.city.name}
          </Link>
          <span>•</span>
          <span>Travel Guide</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">
            {guide.title}
          </h1>

          {guide.isPremium && (
            <Badge variant="default">Premium</Badge>
          )}
        </div>

        <p className="max-w-2xl text-muted-foreground text-lg">
          {guide.summary}
        </p>
      </header>

      {/* CONTENT */}
      <section>
        {isLocked ? (
          <Card className="border-dashed">
            <CardHeader className="text-center space-y-2">
              <h3 className="text-xl font-semibold">
                Unlock this premium guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Get in-depth local insights, tips, and recommendations.
              </p>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-4">
              <Button size="lg">Unlock Guide</Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="prose prose-neutral max-w-none py-8">
              <section className="prose prose-neutral dark:prose-invert max-w-none">
                <article>
                  {outputGuide
                    .split("\n\n")
                    .map((block, i) => (
                      <p key={i} className="mt-2">{block}</p>
                    ))}
                </article>
              </section>
            </CardContent>

            <div className="border-t px-6 py-4 flex justify-between items-center">
              <FavoriteToggleButton cityId={guide.cityId} />
              <span className="text-xs text-muted-foreground">
                Last updated {new Date(guide.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </Card>
        )}
      </section>

      {/* RELATED GUIDES */}
      {relatedGuides.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            More guides for {guide.city.name}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {relatedGuides.map((g) => (
              <Link
                key={g.id}
                href={`/guides/${g.slug}`}
                className="group"
              >
                <Card className="h-full transition hover:border-primary">
                  <CardContent className="space-y-2 py-6">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium group-hover:underline">
                        {g.title}
                      </h3>
                      {g.isPremium && (
                        <Badge variant="secondary">Premium</Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {g.summary}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
