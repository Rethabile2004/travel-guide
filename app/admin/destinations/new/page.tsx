"use client";

import { useState } from "react";
import FormContainer from "@/components/global/FormContainer";
import { createFullCityAction } from "@/utils/actions/admin/destinations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ImageInput from "@/components/form/ImageInput";
import { Plus } from "lucide-react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { adminAattractions, adminProvinces } from "@/utils/data";

export default function CreateCityForm() {
  // Use IDs for the dynamic fields to avoid index-shuffling issues
  const [attractions, setAttractions] = useState([0]);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <FormContainer action={createFullCityAction}>
        <Tabs defaultValue="details" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="details">1. City Details</TabsTrigger>
              <TabsTrigger value="attractions">2. Attractions</TabsTrigger>
              <TabsTrigger value="media">3. Media</TabsTrigger>
            </TabsList>
            {/* The Submit button is inside the form, so it works from any tab */}
            <SubmitButton title="Public Destination" />
          </div>

          {/* TAB 1: BASIC DETAILS */}
          {/* forceMount ensures the inputs stay in the DOM when you switch tabs */}
          <TabsContent value="details" forceMount className="data-[state=inactive]:hidden">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold">City Name</label>
                    <Input name="name" placeholder="e.g. Cape Town" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Province</label>
                    <Select name="province" required>
                      <SelectTrigger><SelectValue placeholder="Select Province" /></SelectTrigger>
                      <SelectContent>
                        {adminProvinces.map((p) => {
                          const { value, title } = p;
                          return <SelectItem key={value} value={value.toUpperCase()}>{title}</SelectItem>
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Slug</label>
                  <Input name="slug" placeholder="cape-town" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Description</label>
                  <Textarea name="description" rows={5} required />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2: ATTRACTIONS */}
          <TabsContent value="attractions" forceMount className="data-[state=inactive]:hidden">
            <div className="space-y-4">
              {attractions.map((_, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase">Name</label>
                      <Input name={`attractionName_${index}`} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase">Category</label>
                      <Select name={`attractionCat_${index}`} required>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {adminAattractions.map((a) => {
                            return <SelectItem className='capitalize' key={a.value} value={a.value.toUpperCase()}>{a.title}</SelectItem>
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase">Brief Desc</label>
                      <Input name={`attractionDesc_${index}`} required />
                    </div>
                  </CardContent>
                </Card>
              ))}
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
              <CardContent className="pt-6">
                <ImageInput />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </FormContainer>
    </div>
  );
}
