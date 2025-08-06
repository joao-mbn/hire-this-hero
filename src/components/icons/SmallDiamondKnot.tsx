import { cn } from "@/lib/utils";

interface SmallDiamondProps {
  className?: string;
}

export function SmallDiamondKnot({ className }: SmallDiamondProps) {
  return (
    <svg
      viewBox="-12 -1.5 28 20"
      className={cn(
        "h-5 w-7 fill-none stroke-old-gold-600 stroke-2",
        className,
      )}
    >
      <rect className="h-3 w-3 translate-x-1/5 rotate-45" />
      <rect className="h-3 w-3 rotate-45" />
    </svg>
  );
}
