import { Card, CardContent, CardHeader } from '../ui/card'
import ActionModal from '../global/ActionModal'
import { Button } from '../ui/button'
import Link from 'next/link'
import { MdModeEditOutline } from 'react-icons/md'
import { UserTripsType } from '@/utils/types'
import TripClientPage from './TripDownloadButton'

const UserTrips = ({ trip }: { trip: UserTripsType }) => {
    return (
        <Card key={trip.id}>
            <CardHeader className="relative">
                <h3 className="font-semibold">{trip.title}</h3>
                <span className="absolute top-0 right-7 space-x-3">
                    <ActionModal id={trip.id} />
                    <Button variant='secondary' asChild className="cursor-pointer">
                        <Link href={`/dashboard/trips/edit/${trip.id}`}>
                            <MdModeEditOutline width={9} height={9} />
                        </Link>
                    </Button>
                </span>
                <p className="text-sm text-muted-foreground">
                    {trip.city.name}
                </p>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground ">
                {trip.startDate && trip.endDate && (
                    <p>
                        {trip.startDate.toDateString()} –{" "}
                        {trip.endDate.toDateString()}
                    </p>
                )}

                {trip.notes && <p className="mt-2">{trip.notes}</p>}
                <TripClientPage tripData={trip}/>
            </CardContent>
        </Card>
    )
}

export default UserTrips