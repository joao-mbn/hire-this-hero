import { cn } from "@/lib/utils";
import * as React from "react";

export const CardLine = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-3 border-old-gold-400/30 px-3 pt-2 text-old-gold-700 not-last:border-b not-last:pb-2",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));

CardLine.displayName = "CardLine";
