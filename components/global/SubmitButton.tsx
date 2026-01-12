import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: 'lg';
};

export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
    >
      {pending ? (
        <>
          <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
