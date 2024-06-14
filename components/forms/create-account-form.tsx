"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { handleCreateUser } from "@/app/actions";
export const CreateAccountForm = () => {
  const handleSubmit = async (formData: FormData) => {
    try {
      const firstName = formData.get("firstname") as string;
      const lastName = formData.get("lastname") as string;
      const email = formData.get("email") as string;
      await handleCreateUser(firstName, lastName, email);
      toast.success("the account has been created");
    } catch (error) {
      console.log(error);
      toast.error("unable to create the account");
    }
  };

  return (
    <form className="grid gap-1" action={handleSubmit}>
      <div className="space-y-1">
        <Label htmlFor="firstname"> First Name</Label>
        <Input id="firstname" required name="firstname" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="lastname"> Last Name</Label>
        <Input id="lastname" required name="lastname" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <Button className="w-full mt-4">Create User</Button>
    </form>
  );
};
