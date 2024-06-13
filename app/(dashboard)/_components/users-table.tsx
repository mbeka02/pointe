import { handleDeleteUser } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@clerk/nextjs/server";
import FormPopover from "./form-popover";
interface UserProps {
  users: User[];
}

const UsersTable = ({ users }: UserProps) => {
  return (
    <>
      <div className="flex items-center mb-4 px-2 mt-4">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      <div className="w-full mb-4 px-2">
        <form className="border shadow-sm rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="max-w-[150px]">First Name</TableHead>
                <TableHead className="hidden md:table-cell">
                  Last Name
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Email Address
                </TableHead>

                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </TableBody>
          </Table>
        </form>
      </div>
    </>
  );
};

const UserRow = ({ user }: { user: User }) => {
  const userId = user.id;
  const deleteUserWithId = handleDeleteUser.bind(null, userId);
  return (
    <TableRow>
      <TableCell className="font-medium">{user.firstName}</TableCell>
      <TableCell className="hidden md:table-cell">{user.lastName}</TableCell>
      <TableCell className="hidden md:table-cell ">
        {user.emailAddresses.map((email) => (
          <span key={email.id}>{email.emailAddress}</span>
        ))}
      </TableCell>
      <TableCell>
        <FormPopover
          userId={user.id}
          firstname={user.firstName}
          lastname={user.lastName}
        >
          <Button type="button">Update Details</Button>
        </FormPopover>
      </TableCell>
      <TableCell>
        <Button formAction={deleteUserWithId} className=" bg-rose-600">
          Delete User
        </Button>
      </TableCell>
    </TableRow>
  );
};

export { UsersTable };
