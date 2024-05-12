'use client';

import * as React from 'react';
import { MixerHorizontalIcon, MixerVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import useWidth from '@/hooks/useWidth';
import SidebarContent from './SidebarContent';

export function Sidebar() {
  const isLargeScreen = useWidth(1024);

  return (
    <>
      {isLargeScreen ? (
        <div className="w-64 h-[90vh] max-w-sm rounded-lg bg-primary text-secondary p-0 border border-secondary">
          <SidebarContent />
        </div>
      ) : (
        <Drawer direction="left">
          <DrawerTrigger asChild className="fixed">
            <Button
              variant="outline"
              className="p-3 left-3 top-3 bg-primary text-secondary"
            >
              <MixerVerticalIcon className="w-5 h-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent
            draggable={false}
            className="w-64 h-full max-w-sm border-r rounded-none bg-primary text-secondary"
          >
            <SidebarContent inDrawer />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
