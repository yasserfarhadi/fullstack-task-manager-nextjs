import React from 'react';
import { Button } from '../ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { DrawerClose } from '../ui/drawer';

interface Props {
  inDrawer?: boolean;
}

const filters = [
  {
    type: 'all',
    name: 'All Tasks',
  },
  {
    type: 'completed',
    name: 'Completed',
  },
  {
    type: 'incomplete',
    name: 'Incomplete',
  },
  {
    type: 'important',
    name: 'Important',
  },
];

const SidebarContent = ({ inDrawer }: Props) => {
  const Wrapper = inDrawer ? DrawerClose : React.Fragment;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') || 'all';

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="flex flex-col gap-5 mt-20 px-10">
      <div className="space-y-2 mb-10">
        <h1 className="text-2xl">Filters</h1>
        <h3 className="text-sm text-muted-foreground">
          Click on a button to filter the result.
        </h3>
      </div>
      {filters.map((item, i) => (
        <Wrapper key={i}>
          <Button
            variant="outline"
            className="text-secondary w-full bg-primary"
            disabled={filter === item.type}
            onClick={() => {
              router.push(
                pathname + '?' + createQueryString('filter', item.type)
              );
            }}
          >
            {item.name}
          </Button>
        </Wrapper>
      ))}
    </div>
  );
};

export default SidebarContent;
