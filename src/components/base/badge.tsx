import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-0 px-2.5 py-0.5 text-center font-cinzel text-sm font-bold text-white uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "text-foreground border border-foreground",
        "rarity-common": "rarity-common",
        "rarity-uncommon": "rarity-uncommon",
        "rarity-rare": "rarity-rare",
        "rarity-epic": "rarity-epic",
        "rarity-legendary": "rarity-legendary",
        "difficulty-easy": "rarity-common",
        "difficulty-medium": "rarity-uncommon",
        "difficulty-hard": "rarity-rare",
        "difficulty-expert": "rarity-epic",
        "difficulty-impossible": "rarity-legendary",
      },
      hover: {
        true: "cursor-pointer",
        false: "cursor-default",
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
        className: "hover:bg-primary/80 hover:text-primary-foreground/80",
      },
      {
        variant: "outline",
        hover: true,
        className: "hover:bg-muted/80 hover:text-foreground/80",
      },
      {
        variant: "secondary",
        hover: true,
        className: "hover:bg-secondary/80 hover:text-secondary-foreground/80",
      },
      {
        variant: "destructive",
        hover: true,
        className:
          "hover:bg-destructive/80 hover:text-destructive-foreground/80",
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
