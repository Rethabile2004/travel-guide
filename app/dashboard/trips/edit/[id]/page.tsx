import NotFoundPage from "@/app/not-found/page";
import CreateTripForm from "@/components/form/NewTripPage";
import { getCitiyNames } from "@/utils/actions/city";
import { getUserTripById } from "@/utils/actions/trips";
import { Params } from "next/dist/server/request/params";

export default async function EditTripPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const trip = await getUserTripById(id);
    const cities = await getCitiyNames()

    if (!trip) {
        return NotFoundPage()
    }

    return (
        <CreateTripForm
        key='edit'
            cities={cities}
            trip={{
                id: trip.id,
                title: trip.title,
                cityId: trip.cityId,
                startDate: trip.startDate,
                endDate: trip.endDate,
                notes: trip.notes
            }}
        />
    );
}
