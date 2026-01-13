import { Mail, Phone, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-muted-foreground mt-2">
          Have a question about the project, or just want to connect? Reach out below.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="flex flex-col items-center text-center p-6">
          <Mail className="h-10 w-10 mb-4 text-primary" />
          <CardTitle className="text-lg">Email</CardTitle>
          <CardContent className="mt-2 p-0">
            <a href="mailto:ericksiase375@gmail.com" className="text-sm text-muted-foreground hover:underline">
              ericksiase375@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center text-center p-6">
          <Phone className="h-10 w-10 mb-4 text-primary" />
          <CardTitle className="text-lg">Phone</CardTitle>
          <CardContent className="mt-2 p-0">
            <a href="tel:+27752626847" className="text-sm text-muted-foreground hover:underline">
              0752626847
            </a>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center text-center p-6">
          <Github className="h-10 w-10 mb-4 text-primary" />
          <CardTitle className="text-lg">GitHub</CardTitle>
          <CardContent className="mt-2 p-0">
            <Button asChild variant="link" className="p-0">
              <Link href="https://github.com/Rethabile2004/" target="_blank" rel="noopener noreferrer">
                Visit Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
