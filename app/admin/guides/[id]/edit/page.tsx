
import { Edit, PlusCircle } from "lucide-react";
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
import { createGuide, getForAdminGuidesById } from "@/utils/actions/admin/guides";
import FormContainer from "@/components/global/FormContainer";
import SubmitButton from "@/components/buttons/SubmitButton";
import { redirect } from "next/navigation";
import { toast } from "sonner";

interface UpdateGuideDialogProps {
  cityId: string;
  slug: string;
  params: { slug: string }
}

export default async function UpdateGuideDialog({ cityId, params }: UpdateGuideDialogProps) {
  const { slug } = await params
  const existingGuide = await getForAdminGuidesById( slug)

  if (!existingGuide) {
    toast.error('Guide does not exist')
    redirect('/admin')
  }

  return (

    < FormContainer action={createGuide} >
      < Input name='cityId' value={cityId} hidden />
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" required defaultValue={existingGuide.title} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" name="slug" required defaultValue={existingGuide.slug} placeholder="e.g., cape-town-guide-2024" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Summary</Label>
        <Textarea id="summary" name="summary" required rows={3} defaultValue={existingGuide.summary} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content (Markdown)</Label>
        <Textarea id="content" name="content" required rows={6} defaultValue={existingGuide.content} />
      </div>

      {/* Checkbox remains inline with its label */}
      <div className="flex items-center space-x-2 pt-2">
        <Checkbox id="isPremium" name="isPremium" defaultChecked={existingGuide.isPremium} />
        <Label htmlFor="isPremium" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Premium Guide
        </Label>
      </div>
    </FormContainer >
  )
}
