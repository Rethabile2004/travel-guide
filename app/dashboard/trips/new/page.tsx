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
import { createTrip } from "@/utils/actions/trips";
import FormContainer from "@/components/global/FormContainer";

export default async function CreateTripPage() {

    const cities = await prisma.city.findMany({
        orderBy: { name: "asc" },
    });

    return (
        <Card className="max-w-xl">
            <CardHeader>
                <h1 className="text-xl font-bold">Create Trip</h1>
                <p className="text-sm text-muted-foreground">
                    Plan a new trip to one of your favorite cities.
                </p>
            </CardHeader>
            <FormContainer action={createTrip}>

                <CardContent className="space-y-4">
                    <Input name="title" placeholder="Trip title" required />

                    <Select name="cityId" required>
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

                    <div className="grid grid-cols-2 gap-4">
                        <Input type="date" name="startDate" />
                        <Input type="date" name="endDate" />
                    </div>

                    <Textarea
                        name="notes"
                        placeholder="Notes (optional)"
                    />

                    <Button type="submit" className="w-full">
                        Create Trip
                    </Button>
                </CardContent>
            </FormContainer>
        </Card>
    );
}
