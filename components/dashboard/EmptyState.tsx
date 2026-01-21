import Link from "next/link";

export function EmptyState() {
  return (
    <div className="rounded-lg border border-dashed py-20 text-center">
      <h2 className="text-xl font-semibold">No favorite cities yet</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Save cities you’re interested in and they’ll appear here.
      </p>

      <Link
        href="/destinations"
        className="mt-6 inline-block rounded-md bg-foreground px-6 py-2 text-sm font-medium text-background"
      >
        Explore Cities
      </Link>
    </div>
  );
}
