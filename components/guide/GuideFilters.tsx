"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function GuideFilters({ provinces }: { provinces: string[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) params.set("search", term);
    else params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") params.set("province", value);
    else params.delete("province");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-8">
      <Input
        placeholder="Search guide..."
        className="max-w-sm"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
      <Select 
        onValueChange={handleFilter} 
        defaultValue={searchParams.get("province")?.toString() || "all"}
      >
        <SelectTrigger className="w-full sm:w-50">
          <SelectValue placeholder="All Provinces" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Provinces</SelectItem>
          {provinces.map((p) => (
            <SelectItem key={p} value={p}>{p.replace("_", " ")}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    </>
  );
}
