import CardWrapper from '@/components/form/card-wrapper';
import CreateTaskForm from '@/components/form/create';
import React from 'react';

const CreatePage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <CardWrapper topHeader="Create a new Task" headerLabel="welcome">
        <CreateTaskForm />
      </CardWrapper>
    </div>
  );
};

export default CreatePage;
