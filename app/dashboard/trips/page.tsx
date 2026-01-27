import Link from "next/link";
import { getUserTrips } from "@/utils/actions/trip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CreateTripButton from "@/components/buttons/CreateTripButton";
import UserTrips from "@/components/dashboard/UserTrips";
import { EmptyState } from "@/components/dashboard/EmptyState";

export default async function TripsPage() {
  const trips = await getUserTrips();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Trips</h1>
        <CreateTripButton />
      </div>
      {trips.length === 0 ? (
        <EmptyState description="Start plannig your first trip" href='/dashboard/destinations/trips/new' text='Create Trip' title='No trips yet' />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {trips.map((trip) => (
            <UserTrips trip={trip} />
          ))}
        </div>
      )}
    </div>
  );
}
