import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-0 px-2.5 py-0.5 text-center font-cinzel text-sm font-bold text-white uppercase transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "bg-old-gold-700 text-old-gold-50",
        destructive: "bg-red-700 text-red-200",
        outline: "text-old-gold-800 border border-old-gold-800",
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
        variant: "default",
        hover: true,
        className: "hover:bg-old-gold-700/80 hover:text-old-gold-50/80",
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
