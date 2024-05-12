import { Sidebar } from '@/components/sidebar/Sidebar';
import { TaskList } from '@/components/tasks/task-list';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full max-w-full min-h-full">
      <div className="container flex py-5 md:py-10 gap-10 h-full">
        <Sidebar />
        <TaskList />
      </div>
    </main>
  );
}
