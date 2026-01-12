import { format } from "date-fns"

type TripCardProps = {
  trip: {
    id: string
    title: string
    startDate: Date|null
    endDate: Date|null
    notes: string | null
  }
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <div className="rounded-xl border p-4 space-y-2">
      <h3 className="text-lg font-semibold">{trip.title}</h3>

      <p className="text-sm text-muted-foreground">
        {format(trip.startDate!, "MMM d, yyyy")} →{" "}
        {format(trip.endDate!, "MMM d, yyyy")}
      </p>

      {trip.notes && (
        <p className="text-sm text-muted-foreground line-clamp-2">
          {trip.notes}
        </p>
      )}
    </div>
  )
}
