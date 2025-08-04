import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const attributeGemVariants = cva(
  "flex animate-pulse items-center justify-center rounded-full font-bold text-white shadow-lg",
  {
    variants: {
      type: {
        strength:
          "bg-gradient-to-br from-red-500 to-rose-500 shadow-red-500/50",
        dexterity:
          "bg-gradient-to-br from-cyan-500 to-teal-500 shadow-cyan-500/50",
        constitution:
          "bg-gradient-to-br from-green-500 to-emerald-500 shadow-green-500/50",
        intelligence:
          "bg-gradient-to-br from-sky-500 to-blue-500 shadow-sky-500/50",
        wisdom:
          "bg-gradient-to-br from-purple-500 to-violet-600 shadow-purple-500/50",
        charisma:
          "bg-gradient-to-br from-amber-500 to-yellow-500 shadow-amber-500/50",
      },
      size: {
        default: "h-12 w-12 text-lg",
        small: "h-6 w-6 text-sm shadow-md",
      },
    },
    defaultVariants: {
      type: "strength",
      size: "default",
    },
  },
);

export interface AttributeGemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof attributeGemVariants> {
  children?: React.ReactNode;
}

export function AttributeGem({
  className,
  type,
  size,
  children,
  ...props
}: AttributeGemProps) {
  return (
    <div
      className={cn(attributeGemVariants({ type, size }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
