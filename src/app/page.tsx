import { Sidebar } from '@/components/sidebar/Sidebar';
import { TaskList } from '@/components/tasks/task-list';
import React from 'react';
import Image from 'next/image';
import { getAllTasks } from '@/data';

export default async function Home({
  params: { filter },
}: {
  params: { filter: string };
}) {
  const tasks = await getAllTasks(filter);
  return (
    <main className="w-full max-w-full min-h-full">
      <div className="container flex py-5 md:py-10 gap-10 h-full">
        <Sidebar />
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}
