// components/admin/DashboardChartsClient.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartDataPoint {
    name: string;
    guides: number;
}

export default function DashboardChartsClient({ chartData }: { chartData: ChartDataPoint[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Guides per Province</CardTitle>
                <CardDescription>Distribution of content across South Africa.</CardDescription>
            </CardHeader>
            <CardContent>
                {/* Recharts components require a client environment */}
                <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: 'var(--radius)' }} 
                                cursor={{ fill: 'hsl(var(--muted))' }}
                            />
                            <Bar dataKey="guides" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
