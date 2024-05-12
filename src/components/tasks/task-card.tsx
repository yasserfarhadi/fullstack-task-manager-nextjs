'use client';

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

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

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
  title,
  description,
  createdAt,
  completed,
  important,
  id,
  ...props
}: CardProps) {
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
          <Link href={`edit/${32112}`}>
            <Pencil2Icon className="h-4 w-4" />
          </Link>
        </Button>
        <Button className="p-0 h-auto">
          <TrashIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
