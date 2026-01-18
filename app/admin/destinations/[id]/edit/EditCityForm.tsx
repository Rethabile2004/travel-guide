"use client";

import { useState } from "react";
import FormContainer from "@/components/global/FormContainer";
import { updateCityAction } from "@/utils/actions/admin/destinations"; // Assuming you have an update action
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ImageInput from "@/components/form/ImageInput";
import { Plus, Trash2 } from "lucide-react";
import SubmitButton from "@/components/buttons/SubmitButton";

export default function EditCityForm({ id, city }: { id: string; city: any }) {
  // Initialize state with existing attractions count
  const [attractions, setAttractions] = useState(
    city.attractions.length > 0 
      ? city.attractions.map((_: any, i: number) => i) 
      : [0]
  );

  return (
    <div className="max-w-4xl mx-auto py-10">
      <FormContainer action={updateCityAction}>
        {/* CRITICAL: Hidden ID field for the server action */}
        <input type="hidden" name="id" value={id} />

        <Tabs defaultValue="details" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="details">1. City Details</TabsTrigger>
              <TabsTrigger value="attractions">2. Attractions</TabsTrigger>
              <TabsTrigger value="media">3. Media</TabsTrigger>
            </TabsList>
            <SubmitButton title="Update Destination" />
          </div>

          {/* TAB 1: BASIC DETAILS */}
          <TabsContent value="details" forceMount className="data-[state=inactive]:hidden">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold">City Name</label>
                    <Input name="name" defaultValue={city.name} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Province</label>
                    <Select name="province" defaultValue={city.province} required>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="WESTERN_CAPE">Western Cape</SelectItem>
                        <SelectItem value="GAUTENG">Gauteng</SelectItem>
                        <SelectItem value="KWAZULU_NATAL">KwaZulu-Natal</SelectItem>
                        <SelectItem value="MPUMALANGA">Mpumalanga</SelectItem>
                        <SelectItem value="FREE_STATE">Free State</SelectItem>
                        <SelectItem value="LIMPOPO">Limpopo</SelectItem>
                        <SelectItem value="NORTH_WEST">North West</SelectItem>
                        <SelectItem value="EASTERN_CAPE">Eastern Cape</SelectItem>
                        <SelectItem value="NORTHERN_CAPE">Northern Cape</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Slug</label>
                  <Input name="slug" defaultValue={city.slug} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Description</label>
                  <Textarea name="description" rows={5} defaultValue={city.description} required />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2: ATTRACTIONS */}
          <TabsContent value="attractions" forceMount className="data-[state=inactive]:hidden">
            <div className="space-y-4">
              {attractions.map((item: number, index: number) => {
                const existingAttr = city.attractions[index];
                return (
                  <Card key={index}>
                    <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase">Name</label>
                        <Input 
                          name={`attractionName_${index}`} 
                          defaultValue={existingAttr?.name || ""} 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase">Category</label>
                        <Select 
                          name={`attractionCat_${index}`} 
                          defaultValue={existingAttr?.category || ""} 
                          required
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="NATURE">Nature</SelectItem>
                            <SelectItem value="FOOD">Food</SelectItem>
                            <SelectItem value="CULTURE">Culture</SelectItem>
                            <SelectItem value="ADVENTURE">Adventure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase">Brief Desc</label>
                        <Input 
                          name={`attractionDesc_${index}`} 
                          defaultValue={existingAttr?.description || ""} 
                          required 
                        />
                      </div>
                      {/* Optional: Add hidden ID for existing attractions to handle updates vs creates */}
                      {existingAttr?.id && (
                         <input type="hidden" name={`attractionId_${index}`} value={existingAttr.id} />
                      )}
                    </CardContent>
                  </Card>
                );
              })}
              <Button
                type="button"
                variant="outline"
                className="w-full border-dashed"
                onClick={() => setAttractions([...attractions, attractions.length])}
              >
                <Plus className="mr-2 h-4 w-4" /> Add Another Attraction
              </Button>
            </div>
          </TabsContent>

          {/* TAB 3: MEDIA */}
          <TabsContent value="media" forceMount className="data-[state=inactive]:hidden">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="mb-4">
                   <p className="text-sm font-medium mb-2">Current Hero Image</p>
                   <img 
                    src={city.heroImageUrl} 
                    alt="Current hero" 
                    className="w-40 h-24 object-cover rounded-md border" 
                   />
                </div>
                <ImageInput />
                <p className="text-xs text-muted-foreground italic">
                  Upload a new image only if you wish to change the current hero image.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </FormContainer>
    </div>
  );
}
