"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormContainer from "@/components/global/FormContainer";
import { createTrip, editTrip } from "@/utils/actions/trips";

// Define a type for the trip data being passed in
interface TripData {
    id: string;
    title: string;
    cityId: string;
    startDate: Date | null;
    endDate: Date | null;
    notes: string | null;
}

export default function CreateTripForm({ cities, trip }: { cities: any[], trip?: TripData }) {
    // 1. Initialize state with existing trip data if available
    const [date, setDate] = useState<DateRange | undefined>({
        from: trip?.startDate ? new Date(trip.startDate) : undefined,
        to: trip?.endDate ? new Date(trip.endDate) : undefined,
    });

    // Determine which action to use based on the presence of a trip ID
    const formAction = trip ? editTrip : createTrip;

    return (
        <Card className="max-w-xl mx-auto">
            <CardHeader>
                <h1 className="text-xl font-bold">{trip ? "Edit Trip" : "Create Trip"}</h1>
                <p className="text-sm text-muted-foreground">
                    {trip ? "Update your trip details." : "Plan a new trip to one of your favorite cities."}
                </p>
            </CardHeader>

            <FormContainer action={formAction}>
                <CardContent className="space-y-4">
                    {/* Hidden input for ID (crucial for editing) */}
                    {trip && <input type="hidden" name="id" value={trip.id} />}
                    
                    {/* Hidden Inputs for dates */}
                    <input
                        type="hidden"
                        name="startDate"
                        value={date?.from?.toISOString() || ""}
                    />
                    <input
                        type="hidden"
                        name="endDate"
                        value={date?.to?.toISOString() || ""}
                    />

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Trip Title</label>
                        <Input name="title" defaultValue={trip?.title} placeholder="Summer Vacation" required />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Destination</label>
                        <Select name="cityId" defaultValue={trip?.cityId} required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a city" />
                            </SelectTrigger>
                            <SelectContent>
                                {cities.map((city) => (
                                    <SelectItem key={city.id} value={city.id}>
                                        {city.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Dates</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date?.from ? (
                                        date.to ? (
                                            <>{format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}</>
                                        ) : (
                                            format(date.from, "LLL dd, y")
                                        )
                                    ) : (
                                        <span>Pick a date range</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Notes</label>
                        <Textarea name="notes" defaultValue={trip?.notes || ""} placeholder="Notes..." className="min-h-25" />
                    </div>

                    <Button type="submit" className="w-full">
                        {trip ? "Update Trip" : "Create Trip"}
                    </Button>
                </CardContent>
            </FormContainer>
        </Card>
    );
}
