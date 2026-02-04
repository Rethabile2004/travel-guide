'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, User, Settings } from "lucide-react"
import CreateOrEditForm from '../form/NewTripPage'
import CreateTripForm from '../trip/CreateTrip'
import { provinces } from '@/utils/data'

export function CreateTripPopOver({city}:{city:any}) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          Create Trip
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-56 p-0" align="end">
       <CreateTripForm cities={provinces}/>
      </PopoverContent>
    </Popover>
  )
}
