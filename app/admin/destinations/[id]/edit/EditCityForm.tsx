"use client";

import { useState } from "react";
import FormContainer from "@/components/global/FormContainer";
import { createFullCityAction, getCityByid } from "@/utils/actions/admin/destinations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ImageInput from "@/components/form/ImageInput";
import { Plus } from "lucide-react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { Attraction, City, Province } from "@/app/generated/prisma/client";

export default function EditCityForm({ id, city }: { id: string, city: any }) {
    console.log(city.province);
    console.log(city.province);
    console.log(city.province);
    console.log(city.province);
    console.log(city.province);
    console.log(city.province);
    console.log(city.province);

    // Use IDs for the dynamic fields to avoid index-shuffling issues
    const [attractions, setAttractions] = useState(Array.from({ length: city.attractions.length }, (_, index) => index));

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
                                        <Input name="name" placeholder="e.g. Cape Town" defaultValue={city.name} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold">Province</label>
                                        <Select name="province" required defaultValue={city.province}>
                                            <SelectTrigger><SelectValue placeholder='Select a city' /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="GAUTENG">Gauteng</SelectItem>
                                                <SelectItem value="WESTERN_CAPE">Western Cape</SelectItem>
                                                <SelectItem value="MPUMALANGA">Mpumalanga</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold">Slug</label>
                                    <Input name="slug" placeholder="cape-town" required defaultValue={city.slug} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold">Description</label>
                                    <Textarea name="description" rows={5} required defaultValue={city.description} />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* TAB 2: ATTRACTIONS */}
                    <TabsContent value="attractions" forceMount className="data-[state=inactive]:hidden">
                        <div className="space-y-4">
                            {/* Replace your current attractions.map logic with this */}
                            {attractions.map((id, index) => {
                                // Check if we are editing an existing attraction or a newly added one
                                const existingAttraction = city.attractions && city.attractions[index];

                                return (
                                    <Card key={id}>
                                        <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase">Name</label>
                                                <Input
                                                    name={`attractionName_${index}`}
                                                    defaultValue={existingAttraction?.name || ""}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase">Category</label>
                                                <Select
                                                    name={`attractionCat_${index}`}
                                                    defaultValue={existingAttraction?.category?.toString() || ""}
                                                    required
                                                >
                                                    <SelectTrigger><SelectValue placeholder='Select a category' /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="NATURE">Nature</SelectItem>
                                                        <SelectItem value="FOOD">Food</SelectItem>
                                                        <SelectItem value="CULTURE">Culture</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase">Brief Desc</label>
                                                <Input
                                                    name={`attractionDesc_${index}`}
                                                    required
                                                    defaultValue={existingAttraction?.description || ""}
                                                />
                                            </div>
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
                            <CardContent className="pt-6 flex-col gap-y-3 flex">
                                <ImageInput label="Replace Image" />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </FormContainer>
        </div>
    );
}
