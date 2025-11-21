import { Dialog } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

interface ModalProps {
  children: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({ children }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      {children}
    </Dialog>
  );
});

export default Modal;
