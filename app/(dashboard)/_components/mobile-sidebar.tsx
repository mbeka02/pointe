"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";
/* Currently this component has a bug*/
const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  //close sidebar whenever url changes , this is done mainly for ux reasons
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  //ensure component is only rendered on client
  if (!isMounted) return null;
  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-3"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4"></Menu>
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
