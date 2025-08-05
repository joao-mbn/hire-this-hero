import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "shadow-muted-foreground/50 z-50 max-w-sm overflow-hidden rounded-md border-2 border-old-gold-300 bg-old-gold-50 px-3 py-3 text-base text-old-gold-950 shadow-lg lg:max-w-md",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export function TooltipContentHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <p className={cn("mb-2 font-cinzel text-lg font-semibold", className)}>
      {title}
    </p>
  );
}
