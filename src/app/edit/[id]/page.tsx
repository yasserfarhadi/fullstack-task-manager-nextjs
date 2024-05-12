import CardWrapper from '@/components/form/card-wrapper';
import EditTaskForm from '@/components/form/edit';
import { getTaskById } from '@/data';
import React from 'react';

const EditPage = async ({ params: { id } }: { params: { id: string } }) => {
  const task = await getTaskById(id);
  return (
    <div className="h-full flex justify-center items-center">
      <CardWrapper topHeader="Edit your task" headerLabel="welcome back">
        <EditTaskForm {...task} />
      </CardWrapper>
    </div>
  );
};

export default EditPage;
