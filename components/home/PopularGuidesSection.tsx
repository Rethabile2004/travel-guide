export default function PopularGuidesSection() {
  return (
    <section className="bg-muted/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Guides</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Expert itineraries ready for your next journey
          </p>
        </div>

        {/* <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
