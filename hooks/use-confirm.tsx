import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { JSX, useState } from "react";

function useConfirm(
  title: string,
  message: string
): [() => JSX.Element, () => Promise<boolean>] {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const confirm = async () => {
    return new Promise<boolean>((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    setPromise(null);
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      promise?.resolve(true);
    } finally {
      setIsLoading(false);
      // setPromise(null);
    }
  };

  const ConfirmDialog = () => (
    <Dialog open={promise !== null} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="pt-2">
          <Button
            onClick={handleCancel}
            variant="outline"
            className="cursor-pointer"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isLoading}
            className="cursor-pointer"
          >
            {isLoading ? "Confirming..." : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return [ConfirmDialog, confirm];
}

export { useConfirm };
