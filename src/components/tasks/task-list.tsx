import React from 'react';
import { TaskCard } from './task-card';
import { CreateTask } from './create-new';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Task } from '@prisma/client';

interface Props {
  tasks: Task[];
  filter: string;
}

export const TaskList = ({ tasks, filter }: Props) => {
  return (
    <div className="border px-10 py-7 rounded-lg flex-grow">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold tracking-wider text-center">
          {filter.slice(0, 1).toUpperCase() + filter.slice(1)} Tasks
        </h1>
        <Button
          variant="outline"
          className="hidden text-xl bg-primary text-secondary lg:flex p-0"
        >
          <Link
            href="/create"
            className="w-full h-full flex items-center justify-center p-4"
          >
            +
          </Link>
        </Button>
      </div>
      <Button
        variant="outline"
        className="fixed top-3 right-3 text-xl bg-primary text-secondary lg:hidden p-0"
      >
        <Link
          href="/create"
          className="w-full h-full flex items-center justify-center p-4"
        >
          +
        </Link>
      </Button>

      <div className="grid justify-center mt-10 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            createdAt={new Date().toLocaleDateString()}
            important={task.important}
            id={task.id}
          />
        ))}
        <CreateTask />
      </div>
    </div>
  );
};
