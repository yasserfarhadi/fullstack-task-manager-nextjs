'use client';

import CreateTaskForm from '@/components/form/create';
import { DrawerDialog } from '@/components/modal-drawer/modal';
import React from 'react';

const Modal = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <DrawerDialog
      dialogTitle="Create a new Task!"
      dialogDescription="welcome"
      open={open}
      setOpen={setOpen}
    >
      <CreateTaskForm />
    </DrawerDialog>
  );
};

export default Modal;
