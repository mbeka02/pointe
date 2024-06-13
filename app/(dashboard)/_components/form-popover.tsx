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
      await handleUpdateUser(userId, firstName, lastName);
      toast.success("the details have been updated");
    } catch (error) {
      toast.error("Unable to update the  details");
      console.log(error);
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
        <div className="flex items-center justify-center pb-3 text-sm text-neutral-800  ">
          Update user info
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
          <div className="space-y-1">
            <Label htmlFor="firstname"> First Name</Label>
            <Input
              id="firstname"
              name="firstname"
              defaultValue={firstname}
              className="h-7 py-1  text-lg px-[7px] bg-transparent font-semibold focus-visible:outline-none focus-visible:ring-transparent border-none"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastname"> Last Name</Label>
            <Input
              id="lastname"
              name="lastname"
              defaultValue={lastname}
              className="h-7 py-1  text-lg px-[7px] bg-transparent font-semibold focus-visible:outline-none focus-visible:ring-transparent border-none"
            />
          </div>

          <Button className="w-full">Update</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
