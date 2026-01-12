'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import FormContainer from "@/components/global/FormContainer";
import { deleteTrip } from "@/utils/actions/trips";
import { ImSpinner11 } from "react-icons/im";
import { useFormStatus } from "react-dom";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "../ui/button";

export default function ActionModal({ id }: { id: string }) {
    const { pending } = useFormStatus()
    return (
        <Dialog>
            <DialogTrigger>
                < MdDeleteForever width={9} height={9} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure you want to remove this trip?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <FormContainer action={deleteTrip}>
                        <input type="hidden" name='id' value={id} />
                        <Button>{pending ? <ImSpinner11 className="animate-spin" /> : 'Delete'}</Button>
                    </FormContainer>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
