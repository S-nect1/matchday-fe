import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/shared/lib/utils';

function UnderLineTabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="underline-tabs"
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
}

function UnderLineTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="underline-tabs-list"
      className={cn(
        'inline-flex h-auto w-fit items-center justify-start bg-transparent p-0',
        className
      )}
      {...props}
    />
  );
}

function UnderLineTabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="underline-tabs-trigger"
      className={cn(
        'inline-flex h-12 flex-1 items-center justify-center border-b-2 border-gray-200 bg-white px-6 py-3 text-base font-medium whitespace-nowrap text-gray-500 transition-all hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-blue-500 data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-blue-500',
        className
      )}
      {...props}
    />
  );
}

function UnderLineTabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="underline-tabs-content"
      className={cn(
        'mt-6 ring-offset-white focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none',
        className
      )}
      {...props}
    />
  );
}

export {
  UnderLineTabs,
  UnderLineTabsList,
  UnderLineTabsTrigger,
  UnderLineTabsContent,
};
