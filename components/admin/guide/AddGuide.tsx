// components/admin/add-guide-dialog.tsx (Updated)
"use client";

import { useState, useRef } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { createGuide } from "@/utils/actions/admin/guides";
import FormContainer from "@/components/global/FormContainer";
import SubmitButton from "@/components/buttons/SubmitButton";

interface AddGuideDialogProps {
    cityId: string;
    cityName: string;
}

export default function AddGuideDialog({ cityId, cityName }: AddGuideDialogProps) {
    const [open, setOpen] = useState(false);

    const createGuideWithCityId = createGuide.bind(null, { cityId });

    // const handleSubmit = async (formData: FormData) => {
    //     try {
    //         await createGuideWithCityId(formData);
    //         setOpen(false);
    //         formRef.current?.reset();
    //     } catch (error) {
    //         console.error(error);
    //         alert(error instanceof Error ? error.message : "An unexpected error occurred.");
    //     }
    // };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-start">
                    <PlusCircle className="h-4 w-4 mr-2" /> Add Guide
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>Add New Guide for {cityName}</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to create a new guide for this city.
                    </DialogDescription>
                </DialogHeader>

                {/* Changed layout from a 4-column grid to vertical flex/space-y for stacked fields */}
                <FormContainer action={createGuide}>
                    {/* <main className="flex flex-col gap-4 py-4"> */}
                    <Input name='cityId' value={cityId} hidden />
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input id="slug" name="slug" required placeholder="e.g., cape-town-guide-2024" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="summary">Summary</Label>
                        <Textarea id="summary" name="summary" required rows={3} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Content (Markdown)</Label>
                        <Textarea id="content" name="content" required rows={6} />
                    </div>

                    {/* Checkbox remains inline with its label */}
                    <div className="flex items-center space-x-2 pt-2">
                        <Checkbox id="isPremium" name="isPremium" />
                        <Label htmlFor="isPremium" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Premium Guide
                        </Label>
                    </div>

                    <DialogFooter className="pt-4">
                        <SubmitButton title='Save guide' />
                    </DialogFooter>
                    {/* </main> */}
                </FormContainer>
            </DialogContent>
        </Dialog>
    );
}
