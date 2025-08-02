import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
      hover: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: false,
    },
    compoundVariants: [
      {
        variant: ["default", "destructive", "outline", "secondary"],
        hover: true,
        className:
          "cursor-pointer hover:bg-primary/80 hover:text-primary-foreground/80",
      },
      {
        variant: "outline",
        hover: true,
        className: "cursor-pointer hover:bg-muted/80 hover:text-foreground/80",
      },
      {
        variant: "secondary",
        hover: true,
        className:
          "cursor-pointer hover:bg-secondary/80 hover:text-secondary-foreground/80",
      },
      {
        variant: "destructive",
        hover: true,
        className:
          "cursor-pointer hover:bg-destructive/80 hover:text-destructive-foreground/80",
      },
    ],
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  hover?: boolean;
}

function Badge({ className, variant, hover, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, hover }), className)}
      {...props}
    />
  );
}

export { Badge };
