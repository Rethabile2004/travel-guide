// components/admin/guide/GuideFilter.tsx
"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

// Hardcode the array or export this from a /utils/constants.ts file
const PROVINCES = [
    "WESTERN_CAPE",
    "GAUTENG",
    "KWAZULU_NATAL",
    "EASTERN_CAPE",
    "FREE_STATE",
    "LIMPOPO",
    "MPUMALANGA",
    "NORTH_WEST",
    "NORTHERN_CAPE",
];

export default function GuideFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentProvince = searchParams.get("province") || "all";

    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === "all") {
            params.delete("province");
        } else {
            params.set("province", value);
        }
        router.push(`/admin/guides?${params.toString()}`);
    };

    return (
        <Select value={currentProvince} onValueChange={handleFilter}>
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by Province" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Provinces</SelectItem>
                {PROVINCES.map((p) => (
                    <SelectItem key={p} value={p}>
                        {p.replace(/_/g, " ")}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
