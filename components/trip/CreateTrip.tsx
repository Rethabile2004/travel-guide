"use client";

// import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormContainer from "@/components/global/FormContainer";
import { createTrip } from "@/utils/actions/trips";
import { provinces } from '@/utils/data'
import { useState } from "react";

// type City = {
//   id: string;
//   name: string;
//   // ... whatever else you actually need
// };

export default function CreateTripForm({ cities }: { cities: string[] }) {
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <h1 className="text-xl font-bold">Create New Trip</h1>
        <p className="text-sm text-muted-foreground">
          Plan your next adventure — fill in the details below.
        </p>
      </CardHeader>

      <FormContainer action={createTrip}>
        <CardContent className="space-y-5">
          {/* Hidden fields for dates — server action will read these */}
          <input
            type="hidden"
            name="startDate"
            value={date?.from?.toISOString() ?? ""}
          />
          <input
            type="hidden"
            name="endDate"
            value={date?.to?.toISOString() ?? ""}
          />

          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Trip Title <span className="text-destructive">*</span>
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Summer Road Trip • Iceland 2026"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="cityId" className="text-sm font-medium">
              Destination <span className="text-destructive">*</span>
            </label>
            <Select name="cityId" required>
              <SelectTrigger id="cityId">
                <SelectValue placeholder="Choose a city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city,i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Travel Dates <span className="text-destructive">*</span>
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, yyyy")} —{" "}
                        {format(date.to, "LLL dd, yyyy")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, yyyy")
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
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="text-sm font-medium">
              Notes / Itinerary ideas
            </label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Golden Circle, Blue Lagoon, maybe rent a 4×4..."
              className="min-h-28 resize-y"
            />
          </div>

          <Button type="submit" className="w-full">
            Create Trip
          </Button>
        </CardContent>
      </FormContainer>
    </Card>
  );
}