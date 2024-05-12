import CardWrapper from '@/components/form/card-wrapper';
import EditTaskForm from '@/components/form/edit';
import React from 'react';

const EditPage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <CardWrapper topHeader="Edit your task" headerLabel="welcome back">
        <EditTaskForm
          title="123"
          description="qweqwexddddddddddqwe"
          important={true}
        />
      </CardWrapper>
    </div>
  );
};

export default EditPage;
