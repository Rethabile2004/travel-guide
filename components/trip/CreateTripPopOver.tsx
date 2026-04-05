"use client";

import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FormContainer from "@/components/global/FormContainer";
import { createTrip } from "@/utils/actions/trips";
import { City } from "@/app/generated/prisma/client";

type CreateTripPopOverProps = {
  city: City;
};

export function CreateTripPopOver({ city }: CreateTripPopOverProps) {
  const [open, setOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="mt-6 w-fit" size="lg">
          <MapPin className="mr-2 h-4 w-4" />
          Plan a Trip to {city.name}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-96 p-6" align="start" sideOffset={8}>
        <div className="mb-5">
          <h3 className="text-base font-semibold leading-none">
            New Trip to {city.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in the details below to plan your trip.
          </p>
        </div>

        {/* FormContainer owns the form, useActionState, toast, and redirect */}
        <FormContainer action={createTrip}>
          <div className="space-y-4">
            {/* Hidden fields */}
            <input type="hidden" name="cityId" value={city.id} />
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

            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Trip Title</label>
              <Input
                name="title"
                placeholder="e.g. Summer Cape Town Getaway"
                required
              />
            </div>

            {/* Date Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Dates</label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
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
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
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

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Notes</label>
              <Textarea
                name="notes"
                placeholder="Any plans, reminders, or packing list..."
                className="min-h-20"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 pt-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm">
                Create Trip
              </Button>
            </div>
          </div>
        </FormContainer>
      </PopoverContent>
    </Popover>
  );
}