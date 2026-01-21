import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function Loading() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-9 w-72" />         
          <Skeleton className="h-5 w-96" />         
        </div>
        <Skeleton className="h-7 w-36 rounded-full" /> 
      </div>

      <Separator />

      <Card className="shadow-sm">
        <CardHeader className="space-y-3">
          <Skeleton className="h-7 w-64" />         
          <Skeleton className="h-5 w-96" />          
        </CardHeader>

        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-6 gap-4 border-b bg-muted/50 p-4">
              <Skeleton className="h-5 w-20" />        
              <Skeleton className="h-5 w-32" />        
              <Skeleton className="h-5 w-48" />    
              <Skeleton className="h-5 w-32" />       
              <Skeleton className="h-5 w-32" />      
              <Skeleton className="h-5 w-20 justify-self-end" /> 
            </div>

            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-6 items-center gap-4 border-b p-4 last:border-none hover:bg-muted/30"
              >
                <Skeleton className="h-10 w-10 rounded-full" />

                <div className="space-y-2">
                  <Skeleton className="h-5 w-40" />
                </div>

                <Skeleton className="h-5 w-56" />

                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-32" />
                <div className="flex justify-end">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}