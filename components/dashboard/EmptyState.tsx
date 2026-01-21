import Link from "next/link";

export function EmptyState({ title, description, href, text }: { title: string, description: string, href: string, text: string }) {
    return (
        <div className="rounded-lg border border-dashed py-20 text-center">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
                {description}
            </p>

            <Link
                href={href}
                className="mt-6 inline-block rounded-md bg-foreground px-6 py-2 text-sm font-medium text-background"
            >
                {text}
            </Link>
        </div>
    );
}
