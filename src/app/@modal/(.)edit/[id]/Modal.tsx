'use client';

import EditTaskForm from '@/components/form/edit';
import { DrawerDialog } from '@/components/modal-drawer/modal';
import React from 'react';

const Modal = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <DrawerDialog
      dialogTitle="Edit your task"
      dialogDescription="welcome back"
      open={open}
      setOpen={setOpen}
    >
      <EditTaskForm
        title="123"
        description="qweqwexddddddddddqwe"
        important={true}
      />
    </DrawerDialog>
  );
};

export default Modal;
