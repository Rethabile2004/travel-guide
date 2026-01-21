import { getGuides } from "@/utils/actions/guide"
import { GuideCard } from "@/components/guide/GuideCard"
import SectionTitle from "@/components/global/SectionTitle"

export default async function GuidesPage() {
  const guides = await getGuides()

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-8">
      <SectionTitle desc="Curated guides to help you explore each destination." title="Travel Guides" />
      {guides.length === 0 ? (
        <p className="text-muted-foreground">No guides available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      )}
    </main>
  )
}
