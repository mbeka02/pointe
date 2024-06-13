import { Navbar } from "./_components/navbar";
import { Toaster } from "sonner";
import { Sidebar } from "./_components/sidebar";
export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />

        {children}
      </div>
      <Toaster />
    </div>
  );
}
