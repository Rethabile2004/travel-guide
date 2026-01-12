import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import prisma from "@/utils/db";
import { createTrip, editTrip, getUserTripById, getUserTrips } from "@/utils/actions/trips";
import FormContainer from "@/components/global/FormContainer";
import TripButton from "@/components/buttons/TripButton";

const formatDateForInput = (date: Date | null | undefined): string => {
  if (!date) return '';
  return date.toISOString().split('T')[0];
};

type Params = {
  params: {
    id: string
  }
}

export default async function EditTripPage({ params }: Params) {
    const { id } =await params;
    
    const trip = await getUserTripById(id);
    const cities = await prisma.city.findMany({
        orderBy: { name: "asc" },
    });

    if(!trip){
        // Optional logic here if needed
    }

    return (
        <Card className="max-w-xl">
            <CardHeader>
                <h1 className="text-xl font-bold">Edit Trip</h1>
                <p className="text-sm text-muted-foreground">
                    Plan a new trip to one of your favorite cities.
                </p>
            </CardHeader>
            <FormContainer action={editTrip}>
                <CardContent className="space-y-4">
                    <Input name='id' type="hidden" value={id}/>
                    <Input name="title" placeholder="Trip title" required defaultValue={trip?.title} />
                    <Select name="cityId" required defaultValue={trip?.cityId}>
                        <SelectTrigger >
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

                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="date"
                            name="startDate"
                            defaultValue={formatDateForInput(trip?.startDate)}
                        />
                        <Input
                            type="date"
                            name="endDate"
                            defaultValue={formatDateForInput(trip?.endDate)}
                        />
                    </div>

                    <Textarea
                        name="notes"
                        placeholder="Notes (optional)"
                        defaultValue={trip?.notes ?? ''} // Use nullish coalescing for cleaner value
                    />

                    <TripButton type="edit"/>
                </CardContent>
            </FormContainer>
        </Card>
    );
}
