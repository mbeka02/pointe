"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";
import { CreateAccountForm } from "./forms/create-account-form";

export const Modal = () => {
  const isOpen = useModal((state) => state.isOpen);
  const onClose = useModal((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <CreateAccountForm />
      </DialogContent>
    </Dialog>
  );
};
