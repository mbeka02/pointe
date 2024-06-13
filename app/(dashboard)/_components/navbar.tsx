import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex w-full p-4 z-50 shadow-sm   justify-end border-b bg-gray-100/40 px-6  ">
      {/*Mobile Sidebar Component*/}
      <MobileSidebar />
      <UserButton />
    </div>
  );
};

export { Navbar };
