import { clerkClient } from "@clerk/nextjs/server";
import { UsersTable } from "../_components/users-table";
import { redirect } from "next/navigation";
import { checkRole } from "@/app/utils";

export default async function AdminPage() {
  /*use the Clerk backend SDK to get the user list*/
  const { data: users } = await clerkClient.users.getUserList({
    orderBy: "-created_at",
    limit: 25,
  });
  // If the user does not have the admin role, redirect them to the profile page
  if (!checkRole("admin")) {
    redirect("/user-profile");
  }

  return (
    <div>
      <UsersTable users={users} />
    </div>
  );
}
