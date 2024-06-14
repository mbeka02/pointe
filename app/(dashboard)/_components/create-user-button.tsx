"use client";

import { UsersIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal";

const CreateUserButton = () => {
  const modal = useModal();
  return (
    <Button className="items-center justify-center flex" onClick={modal.onOpen}>
      <UsersIcon className="w-4 h-4" />
      <span className="ml-2">Create User</span>
    </Button>
  );
};

export { CreateUserButton };
