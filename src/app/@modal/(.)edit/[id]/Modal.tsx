'use client';

import EditTaskForm from '@/components/form/edit';
import { DrawerDialog } from '@/components/modal-drawer/modal';
import { Task } from '@prisma/client';
import React from 'react';

const Modal = ({ task }: { task: Task }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <DrawerDialog
      dialogTitle="Edit your task"
      dialogDescription="welcome back"
      open={open}
      setOpen={setOpen}
    >
      <EditTaskForm {...task} />
    </DrawerDialog>
  );
};

export default Modal;
