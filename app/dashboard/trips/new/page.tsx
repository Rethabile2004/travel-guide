

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormContainer from "@/components/global/FormContainer";
import { createTrip } from "@/utils/actions/trips";
import prisma from "@/utils/db";
import CreateTripForm from "@/components/form/NewTripPage";
import { City } from "@/utils/shema";
import { getCitiyNames } from "@/utils/actions/city";

export default async function CreateTripPage() {

    const cities = await getCitiyNames()

    return (
        <CreateTripForm key='create' cities={cities} />
    );
}
