import { Plane, Code, Database, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
          About <span className="text-primary">TravelGuide</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
          A modern, full-stack travel guide platform built to inspire discovery and simplify trip planning.
        </p>
      </header>
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            Our goal is to build a platform that allows users to discover destinations, plan trips, save favorites, and interact with curated travel content. This project serves as a demonstration of robust full-stack engineering skills, clean architecture, and UI/UX best practices.
          </p>
          <Button asChild>
            <Link href="/destinations">Explore Destinations</Link>
          </Button>
        </div>
        <div className="rounded-xl bg-primary/10 h-64 flex items-center justify-center">
          <Plane className="h-32 w-32 text-primary opacity-50" />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Built With a Modern Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="flex flex-col items-center text-center p-6">
            <Code className="h-8 w-8 mb-3 text-blue-500" />
            <CardTitle className="text-lg">Next.js 16 & React 19</CardTitle>
          </Card>
          <Card className="flex flex-col items-center text-center p-6">
            <Database className="h-8 w-8 mb-3 text-green-500" />
            <CardTitle className="text-lg">Prisma & Supabase</CardTitle>
          </Card>
          <Card className="flex flex-col items-center text-center p-6">
            <Users className="h-8 w-8 mb-3 text-purple-500" />
            <CardTitle className="text-lg">Clerk Auth</CardTitle>
          </Card>
          <Card className="flex flex-col items-center text-center p-6">
            <Code className="h-8 w-8 mb-3 text-yellow-500" />
            <CardTitle className="text-lg">Tailwind CSS & shadcn/ui</CardTitle>
          </Card>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'User Authentication', description: 'Secure user registration, login, and protected routes powered by Clerk.' },
            { title: 'Dynamic Destination Pages', description: 'Browse, search, and filter destinations with detailed information and user reviews.' },
            { title: 'Trip Planning', description: 'Authenticated users can create and manage trips with specific dates and notes.' },
            { title: 'Favorites Management', description: 'Save destinations to favorites for easy access later.' },
            { title: 'Commerce & Payments', description: 'Handling Stripe checkout sessions for premium travel guides.' },
            { title: 'Responsive Design', description: 'A fully responsive and accessible UI using Radix UI primitives and Tailwind CSS.' },
          ].map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
