import { mockTestimonials } from "@/utils/data";
import { Card, CardContent } from "../ui/card";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Travelers Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from real explorers
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {mockTestimonials.map((t) => (
            <Card key={t.id} className="bg-background">
              <CardContent className="p-6">
                <p className="italic text-muted-foreground">“{t.quote}”</p>
                <p className="mt-4 font-medium">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}