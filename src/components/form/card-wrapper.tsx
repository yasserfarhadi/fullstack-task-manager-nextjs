'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

interface Props {
  topHeader: string;
  children: React.ReactNode;
  headerLabel: string;
}

const CardWrapper = ({ topHeader, children, headerLabel }: Props) => {
  return (
    <Card className="w-[400px] shadow-md bg-primary text-secondary">
      <CardHeader>
        <div className="w-full flex flex-col gap-y-6 items-center">
          <h1 className="text-3xl font-semibold">{topHeader}</h1>
          <p className="text-muted-foreground text-sm">{headerLabel}</p>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
