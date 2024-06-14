import { UserProfile } from "@clerk/nextjs";
import { setRole } from "@/app/actions";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
export default function UserPage() {
  const { userId } = auth();
  return (
    <div className="px-2 mt-2">
      {
        /*For demo purposes only */
        <div className=" grid gap-2 my-4 md:flex w-full md:items-center px-4">
          <div>
            <form action={setRole}>
              <input type="hidden" value={userId!} name="id" />
              <input type="hidden" value="admin" name="role" />
              <Button type="submit" className="w-52">
                Make me an admin
              </Button>
            </form>
          </div>
          <div>
            <form action={setRole}>
              <input type="hidden" value={userId!} name="id" />
              <input type="hidden" value="super-admin" name="role" />
              <Button type="submit" className="w-52">
                Make me a super-admin
              </Button>
            </form>
          </div>
        </div>
      }
      <UserProfile path="/user-profile" />
    </div>
  );
}
