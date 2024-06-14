import Link from "next/link";
import { Logo, SettingsIcon } from "@/components/icons";
import { NavItem } from "./nav-item";
import { BarChart } from "lucide-react";

const Sidebar = ({ isSuperAdmin }: { isSuperAdmin: boolean }) => {
  return (
    <div className=" border-r bg-gray-100/40 block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-5">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Logo />
            <span className="">Demo Dashboard</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavItem href="/user-profile">
              <SettingsIcon className="h-4 w-4" />
              Your Profile
            </NavItem>
            {
              /* conditionally render the panel link based on authorization level*/
              isSuperAdmin ? (
                <NavItem href="/super-admin">
                  <BarChart className="h-4 w-4" />
                  Super Admin Panel
                </NavItem>
              ) : (
                <NavItem href="/admin">
                  <BarChart className="h-4 w-4" />
                  Admin Panel
                </NavItem>
              )
            }
          </nav>
        </div>
      </div>
    </div>
  );
};
export { Sidebar };
