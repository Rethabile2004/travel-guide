import { getCities } from "@/utils/actions/city"; 
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type City = {
  id: string;
  name: string;
  province: string;
};

export default async function DestinationsPage() {
  const destinations: City[] = await getCities();

  const deleteDestination = async (id: string) => {
    "use server";
    console.log(`Attempting to delete destination with ID: ${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Destinations</h1>
        <Button asChild>
            <Link href="/admin/destinations/new">Add New Destination</Link>
        </Button>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Destination List ({destinations.length})</CardTitle>
          <CardDescription>Click on a row to view details, or use buttons to edit/remove.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Province</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {destinations.map((destination) => (
                <TableRow 
                    key={destination.id} 
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium">
                    <Link href={`/admin/destinations/${destination.id}/edit`} className="block w-full h-full p-2 -m-2">
                        {destination.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/admin/destinations/${destination.id}/edit`} className="block w-full h-full p-2 -m-2">
                        {destination.province}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right flex justify-end gap-3">
                    {/* Explicit Edit Button */}
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/destinations/${destination.id}/edit`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    
                    {/* Delete Button (using a form for server action) */}
                    <form action={deleteDestination.bind(null, destination.id)}>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
