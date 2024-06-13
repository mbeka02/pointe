import { clerkClient } from "@clerk/nextjs/server";
import { UsersTable } from "../_components/users-table";
import { redirect } from "next/navigation";
import { checkRole } from "@/app/utils";
export const dynamic = "force-dynamic";
export default async function SuperAdminPage() {
  /*use the Clerk backend SDK to get the user list*/
  const { data: users } = await clerkClient.users.getUserList({
    orderBy: "-created_at",
  });
  // console.log(data);

  // If the user does not have the super-admin role, redirect them to the profile page
  if (!checkRole("super-admin")) {
    redirect("/user-profile");
  }
  return (
    <div>
      <div className="hidden">current user count:{users.length}</div>
      <UsersTable users={users} />
    </div>
  );
}
