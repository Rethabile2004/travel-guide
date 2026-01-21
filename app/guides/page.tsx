import { getGuides } from "@/utils/actions/guide"
import SectionTitle from "@/components/global/SectionTitle"
import GuideGrid from "@/components/global/GuideGrid"

export default async function GuidesPage() {
  const guides = await getGuides()

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-8">
      <SectionTitle desc="Curated guides to help you explore each destination." title="Travel Guides" />
      {guides.length === 0 ? (
        <p className="text-muted-foreground">No guides available.</p>
      ) : (
        <GuideGrid guides={guides} />
      )}
    </main>
  )
}
