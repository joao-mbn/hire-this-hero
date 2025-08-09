import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "bg-background inline-flex items-center justify-center rounded-none border shadow-xs",
      className,
    )}
    style={{
      borderImage:
        "linear-gradient(45deg, var(--color-old-gold-400), var(--color-old-gold-600)) 1",
    }}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "items-center justify-center rounded-none px-4 py-2 font-cinzel text-base font-semibold text-old-gold-700 transition-colors duration-300",
      "hover:cursor-pointer hover:bg-gradient-to-b hover:from-old-gold-50 hover:to-old-gold-100 hover:text-old-gold-900",
      "data-[state=active]:bg-gradient-to-b data-[state=active]:from-old-gold-100 data-[state=active]:to-old-gold-200 data-[state=active]:text-old-gold-900",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "duration-1000 data-[state=active]:animate-slide-in-right data-[state=inactive]:animate-slide-out-left",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
