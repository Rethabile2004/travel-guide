import { fetchClerkUsers } from "@/utils/actions/admin/users";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Mail, User as UserIcon } from "lucide-react";

export default async function AdminUsersPage() {
    const users = await fetchClerkUsers();

    return (
        <div className="space-y-6 p-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                    <p className="text-muted-foreground">
                        Manage and view all registered users from Clerk.
                    </p>
                </div>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                    {users.length} Total Users
                </Badge>
            </div>

            <Separator />

            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle>Registered Users</CardTitle>
                    <CardDescription>
                        A list of all users who have signed up for your platform.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50">
                                <TableHead className="w-20">Profile</TableHead>
                                <TableHead>Full Name</TableHead>
                                <TableHead>Email Address</TableHead>
                                <TableHead>Joined Date</TableHead>
                                <TableHead>Last Sign In</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} className="hover:bg-muted/30 transition-colors">
                                    <TableCell>
                                        <Avatar className="h-10 w-10 border">
                                            <AvatarImage src={user.imageUrl} alt={user.firstName || "User"} />
                                            <AvatarFallback className="bg-primary/10 text-primary">
                                                <UserIcon className="h-5 w-5" />
                                            </AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {user.firstName} {user.lastName}
                                        {!user.firstName && !user.lastName && (
                                            <span className="text-muted-foreground italic">Anonymous</span>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Mail className="h-3 w-3" />
                                            {user.email}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Calendar className="h-3 w-3 text-muted-foreground" />
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm">
                                        {user.lastSignIn ? (
                                            new Date(user.lastSignIn).toLocaleDateString()
                                        ) : (
                                            <span className="text-muted-foreground">Never</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                            Active
                                        </Badge>
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
