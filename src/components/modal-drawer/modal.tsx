import * as React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import useWidth from '@/hooks/useWidth';
import { useRouter } from 'next/navigation';

interface Props {
  children: React.ReactNode;
  dialogTitle: string;
  dialogDescription: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function DrawerDialog({
  children,
  dialogTitle,
  dialogDescription,
  open,
  setOpen,
}: Props) {
  const isDesktop = useWidth(768);
  const router = useRouter();

  if (isDesktop) {
    return (
      <Dialog
        open={open}
        onOpenChange={(open) => {
          if (!open) {
            setOpen(false);
            router.back();
          }
        }}
      >
        <div className="max-w-[400px] w-[90%] mx-auto">
          <DialogContent className="sm:max-w-[425px] bg-primary text-secondary p-10">
            <DialogHeader>
              <DialogTitle>{dialogTitle}</DialogTitle>
              <DialogDescription>{dialogDescription}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </div>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          setOpen(false);
          router.back();
        }
      }}
    >
      <DrawerContent className="bg-primary text-secondary p-10 rounded-none border-0 border-t">
        <div className="max-w-[400px] w-[90%] mx-auto">
          <DrawerHeader className="text-left px-0 pt-5">
            <DrawerTitle>{dialogTitle}</DrawerTitle>
            <DrawerDescription>{dialogDescription}</DrawerDescription>
          </DrawerHeader>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
