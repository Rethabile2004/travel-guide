'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { redirect } from "next/navigation"

export default function NotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-muted">
      <Card className="w-105 text-center">
        <CardContent className="flex flex-col items-center gap-6 py-12">
          <AlertCircle className="h-14 w-14 text-destructive" />
          <h1 className="text-3xl font-bold">404 – Page Not Found</h1>
          <p className="text-muted-foreground">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>
          <Button
            variant="default"
            onClick={() => redirect('/')}
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}