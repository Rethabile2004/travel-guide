import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getUserTrips } from "@/utils/actions/trip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function TripsPage() {
  const trips = await getUserTrips();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Trips</h1>

        <Button asChild>
          <Link href="/dashboard/trips/new">Create Trip</Link>
        </Button>
      </div>

      {trips.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {trips.map((trip) => (
            <Card key={trip.id}>
              <CardHeader>
                <h3 className="font-semibold">{trip.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {trip.city.name}
                </p>
              </CardHeader>

              <CardContent className="text-sm text-muted-foreground">
                {trip.startDate && trip.endDate && (
                  <p>
                    {trip.startDate.toDateString()} –{" "}
                    {trip.endDate.toDateString()}
                  </p>
                )}

                {trip.notes && <p className="mt-2">{trip.notes}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center py-16 text-center">
        <h2 className="text-lg font-semibold">No trips yet</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Start planning your first trip.
        </p>

        <Button className="mt-4" asChild>
          <Link href="/dashboard/trips/new">Create Trip</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
