import { Navbar } from "./_components/navbar";
import { Toaster } from "sonner";
import { Sidebar } from "./_components/sidebar";
import { checkRole } from "../utils";
import { ModalProvider } from "@/components/providers/modal-provider";
//temporary fix for the caching issue
export const revalidate = 0;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //boolean value for authorization level.
  //used to conditionally render UI components
  const isSuperAdmin = checkRole("super-admin");
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="md:grid h-full hidden ">
        <Sidebar isSuperAdmin={isSuperAdmin} />
      </div>
      <div className="flex flex-col">
        <Navbar isSuperAdmin={isSuperAdmin} />
        <ModalProvider />
        {children}
      </div>
      <Toaster />
    </div>
  );
}
