import Link from "next/link"
import { Badge } from "@/components/ui/badge"

type GuideCardProps = {
  guide: {
    title: string
    slug: string
    summary: string
    isPremium: boolean
    city: {
      name: string
      slug: string
    }
  }
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="rounded-xl border p-4 transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold">{guide.title}</h3>
        {guide.isPremium && <Badge>Premium</Badge>}
      </div>

      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
        {guide.summary}
      </p>

      <p className="mt-4 text-xs text-muted-foreground">
        City: {guide.city.name}
      </p>
    </Link>
  )
}
