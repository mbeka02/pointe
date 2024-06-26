"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";
import { ElementRef, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleUpdateUser } from "@/app/actions";
interface FormPopoverProps {
  align?: "start" | "center" | "end";
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  sideOffset?: number;
  firstname: string | null;
  lastname: string | null;
  userId: string;
}

const FormPopover = ({
  children,
  align,
  side = "bottom",
  sideOffset,
  firstname,
  lastname,
  userId,
}: FormPopoverProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);
  const handleSubmit = async (formData: FormData) => {
    try {
      const firstName = formData.get("firstname") as string;
      const lastName = formData.get("lastname") as string;
      const id = formData.get("userid") as string;
      await handleUpdateUser(id, firstName, lastName);
      toast.success("the account details have been updated");
    } catch (error) {
      console.log(error);
      toast.error("unable to update account details");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className="w-80 pt-3"
      >
        <div className="flex items-center justify-start pb-3 text-sm text-neutral-500  ">
          Update user details
        </div>
        <PopoverClose asChild ref={closeRef}>
          <Button
            size="sm"
            variant="ghost"
            className=" h-auto w-auto  focus-visible:ring-0 focus-visible:ring-offset-0 p-2 absolute  top-1 right-2  text-neutral-800  hover:text-rose-500  rounded-full "
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <form className="space-y-3" action={handleSubmit}>
          <Input
            hidden
            className="hidden"
            id="userid"
            name="userid"
            defaultValue={userId}
          />
          <div className="space-y-1">
            <Label htmlFor="firstname"> First Name</Label>
            <Input id="firstname" name="firstname" defaultValue={firstname} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastname"> Last Name</Label>
            <Input id="lastname" name="lastname" defaultValue={lastname} />
          </div>

          <Button className="w-full">Update</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
