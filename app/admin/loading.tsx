import { Loader2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminLoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="flex flex-col items-center justify-center p-10">
          
          <div className="mb-6">
             <Zap className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-xl font-semibold mb-3 text-gray-800">
            Loading Admin Dashboard
          </h1>
          
          <p className="text-sm text-gray-500 mb-6">
            Fetching the latest metrics and data...
          </p>

          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    </div>
  );
}
