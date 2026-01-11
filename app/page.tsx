// src/app/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24">
      {/* Hero */}
      <section className="bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Discover. Plan. Travel Smarter.
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Explore destinations, save your favorites, and plan unforgettable trips —
            all in one place.
          </p>

          <div className="flex w-full max-w-md gap-2">
            <Input placeholder="Search destinations..." />
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Destinations</h2>
            <Button variant="ghost">View all</Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border p-4 transition hover:shadow-md"
              >
                <div className="mb-3 h-40 rounded-lg bg-muted" />
                <h3 className="font-medium">Destination Name</h3>
                <p className="text-sm text-muted-foreground">
                  Short destination description.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-20 text-center">
          <h2 className="text-3xl font-bold">
            Start planning your next trip today
          </h2>
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </div>
      </section>
    </main>
  )
}
