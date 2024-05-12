'use client';

import React from 'react';

import {
  BellIcon,
  CheckIcon,
  Pencil2Icon,
  TrashIcon,
  DrawingPinIcon,
} from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { deleteTask, editTask } from '@/actions/task';

type CustomProps = {
  title: string;
  description: string;
  createdAt: string;
  completed: boolean;
  important?: boolean;
  id: string;
};
type CardProps = React.ComponentProps<typeof Card> & CustomProps;

export function TaskCard({
  className,
  createdAt,
  title,
  description,
  completed,
  important = false,
  id,
  ...props
}: CardProps) {
  const [pending, startTransintion] = React.useTransition();

  async function handleCompletedToggle(completed: boolean) {
    startTransintion(async () => {
      const data = await editTask({
        title,
        description,
        completed,
        important,
        id,
      });
    });
  }
  async function handleDeleteTask() {
    startTransintion(async () => {
      const data = await deleteTask(id);
    });
  }
  return (
    <Card
      className={cn('w-[280px] bg-primary text-secondary', className)}
      {...props}
    >
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="flex gap-1">
            {important && <DrawingPinIcon className="text-red-500 w-5 h-5" />}
            <p>{title} </p>
          </div>

          <Switch
            defaultChecked={completed}
            className="data-[state=checked]:bg-green-500"
            onCheckedChange={handleCompletedToggle}
          ></Switch>
        </CardTitle>
        <CardDescription className="truncate">{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>{createdAt}</p>
      </CardContent>
      <CardFooter className="grid grid-cols-[80%_1fr_1fr]">
        <Badge
          className="w-1/2 flex justify-center secondary:bg-green-400"
          variant={completed ? 'success' : 'destructive'}
        >
          {completed ? 'Completed' : 'Incomplete'}
        </Badge>
        <Button className="p-0 h-auto" disabled={completed}>
          <Link href={`edit/${id}`}>
            <Pencil2Icon className="h-4 w-4" />
          </Link>
        </Button>
        <Button className="p-0 h-auto" onClick={handleDeleteTask}>
          <TrashIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
