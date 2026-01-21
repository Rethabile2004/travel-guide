import { getCities } from "@/utils/actions/city";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MapPin, Link as LinkIcon, Image as ImageIcon, FileText, Map, Star } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { deleteDestination, getForAdminCities } from "@/utils/actions/admin/destinations";
import AddGuideDialog from "@/components/admin/guide/AddGuide";
import FormContainer from "@/components/global/FormContainer";
import { Input } from "@/components/ui/input";

export default async function AdminDestinationsPage() {
  const destinations = await getForAdminCities();
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Destinations</h1>
          <p className="text-muted-foreground">Manage city details, gallery, and metadata.</p>
        </div>
        <Button asChild>
          <Link href="/admin/destinations/new">Add New Destination</Link>
        </Button>
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Inventory ({destinations.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {destinations.map((city) => (
              <AccordionItem key={city.id} value={city.id} className="border px-4 rounded-lg mb-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="h-10 w-10 rounded-md overflow-hidden bg-muted">
                      <img
                        src={city.heroImageUrl}
                        alt={city.name}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold leading-none">{city.name}</p>
                        <Badge variant="secondary" className="text-[10px] uppercase">
                          {city.province.replace('_', ' ')}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <LinkIcon className="h-3 w-3" /> /{city.slug}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-4 pb-2 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold flex items-center gap-2 mb-1">
                          <FileText className="h-4 w-4" /> Description
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {city.description || "No description provided."}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <div className="text-center p-3 bg-muted/50 rounded-lg flex-1">
                          <p className="text-xl font-bold">{city.guides?.length || 0}</p>
                          <p className="text-[10px] uppercase text-muted-foreground">Guides</p>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg flex-1">
                          <p className="text-xl font-bold">{city.attractions?.length || 0}</p>
                          <p className="text-[10px] uppercase text-muted-foreground">Attractions</p>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg flex-1">
                          <p className="text-xl font-bold">{city.reviews?.length || 0}</p>
                          <p className="text-[10px] uppercase text-muted-foreground">Reviews</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">DATABASE INFO</p>
                        <p className="text-[10px] font-mono break-all bg-background p-1 rounded border">
                          ID: {city.id}
                        </p>
                        <p className="text-[10px] mt-2 text-muted-foreground">
                          Created: {new Date(city.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm" asChild className="w-full justify-start">
                          <Link href={`/admin/destinations/${city.id}/edit`}>
                            <Edit className="h-4 w-4 mr-2" /> Edit Details
                          </Link>
                        </Button>

                        <FormContainer action={deleteDestination}>
                          <Input type="hidden" value={city.id} name='id' />
                          <Button variant="destructive" size="sm" className="w-full justify-start">
                            <Trash2 className="h-4 w-4 mr-2" /> Delete City
                          </Button>
                        </FormContainer>
                        <AddGuideDialog cityId={city.id} cityName={city.name} />
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
