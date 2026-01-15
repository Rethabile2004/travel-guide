import { getForAdminGuides } from "@/utils/actions/admin/guides";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Edit, Trash2, Calendar } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Guide = {
    id: string;
    title: string;
    createdAt: Date;
};

export default async function GuidesPage() {
    const guides: Guide[] = await getForAdminGuides();

    const deleteGuide = async (id: string) => {
        "use server";
        console.log(`Attempting to delete guide with ID: ${id}`);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Manage Guides</h1>
                <Button asChild>
                    <Link href="/admin/guides/new">Create New Guide</Link>
                </Button>
            </div>

            <Separator />

            <Card>
                <CardHeader>
                    <CardTitle>Travel Guides List ({guides.length})</CardTitle>
                    <CardDescription>View, edit, or remove published guides.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Created Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {guides.map((guide) => (
                                <TableRow
                                    key={guide.id}
                                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                    <TableCell className="font-medium">
                                        <Link href={`/admin/guides/${guide.id}/edit`} className="block w-full h-full p-2 -m-2">
                                            {guide.title}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/admin/guides/${guide.id}/edit`} className="flex items-center gap-2 w-full h-full p-2 -m-2">
                                            <Calendar className="h-4 w-4 text-muted-foreground" />
                                            {new Date(guide.createdAt).toLocaleDateString()}
                                        </Link>
                                    </TableCell>
                                    <TableCell className="text-right flex justify-end gap-3">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`/admin/guides/${guide.id}/edit`}>
                                                <Edit className="h-4 w-4 mr-1" />
                                                Edit
                                            </Link>
                                        </Button>

                                        <form action={deleteGuide.bind(null, guide.id)}>
                                            <Button variant="destructive" size="sm">
                                                <Trash2 className="h-4 w-4 mr-1" />
                                                Remove
                                            </Button>
                                        </form>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
