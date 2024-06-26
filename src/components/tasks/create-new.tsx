'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

type CardProps = React.ComponentProps<typeof Card>;

export function CreateTask({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn('w-[280px] h-[190px] bg-primary text-secondary', className)}
      {...props}
    >
      <CardContent className="grid gap-4 w-full h-full p-0 overflow-hidden">
        <Button className="w-full h-full hover:opacity-75 hover:bg-foreground p-0 rounded-xl">
          <Link
            href="/create"
            className="w-full h-full grid place-items-center"
          >
            <p>+ Create a new task</p>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
