"use server";

import { checkRole } from "./utils";
import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
export async function setRole(formData: FormData) {
  // Check that the user trying to set the role is an admin
  /*if (!checkRole("admin")) {
    return { message: "Not Authorized" };
  }*/

  try {
    const res = await clerkClient.users.updateUser(
      formData.get("id") as string,
      {
        publicMetadata: { role: formData.get("role") },
      },
    );
    //refactor this
    revalidatePath("/(dashboard)", "layout");
    console.log(res.publicMetadata);
  } catch (err) {
    console.log(err);
    throw "Unable to update role";
  }
}

const handleDeleteUser = async (userId: string) => {
  try {
    const response = await clerkClient.users.deleteUser(userId);
    console.log(response);
    revalidatePath("/super-admin");
    revalidatePath("admin");
    return { message: response };
  } catch (err) {
    console.log(err);
    throw "Unable to delete the user";
  }
};

const handleUpdateUser = async (
  userId: string,
  firstName: string,
  lastName: string,
) => {
  try {
    const response = await clerkClient.users.updateUser(userId, {
      firstName,
      lastName,
    });
    console.log(response);
    revalidatePath("/super-admin");
    revalidatePath("admin");

    return { message: response };
  } catch (err) {
    console.log(err);
    throw "Unable to update the user details";
  }
};

export { handleDeleteUser, handleUpdateUser };
