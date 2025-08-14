import { cn } from "@/lib/utils";
import { DiamondDivider } from "../icons/DiamondDivider";
import { SmallDiamondKnot } from "../icons/SmallDiamondKnot";

interface DividerProps {
  variant?: "big" | "medium" | "small";
  className?: string;
}

export function Divider({ variant = "small", className }: DividerProps) {
  if (variant === "small") {
    return <SmallDivider className={className} />;
  }

  if (variant === "medium") {
    return <MediumDivider className={className} />;
  }

  if (variant === "big") {
    return <BigDivider className={className} />;
  }

  return null;
}

function SmallDivider({ className }: DividerProps) {
  return (
    <div className={cn("my-2 h-px w-full bg-old-gold-600/30", className)} />
  );
}

function MediumDivider({ className }: DividerProps) {
  return (
    <div className={cn("mt-2 flex h-3 items-center justify-center", className)}>
      <div className="mr-4 h-0.5 flex-1 bg-gradient-to-r from-old-gold-600 from-30% to-old-gold-400 to-70%" />
      <svg
        viewBox="-9.5 -2 18 18"
        className="h-4 w-4 fill-none stroke-old-gold-400 stroke-2"
      >
        <rect className="h-2.5 w-2.5 rotate-45" />
      </svg>
      <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-old-gold-400 from-30% to-old-gold-600 to-70%" />
    </div>
  );
}

function BigDivider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        "mt-6 mb-10 flex h-8 items-center justify-between lg:mt-4",
        className,
      )}
    >
      <SmallDiamondKnot className="text-old-gold-600" />
      <div className="mx-4 h-0.5 flex-1 bg-gradient-to-r from-old-gold-600 from-30% to-old-gold-400 to-70%" />
      <DiamondDivider
        svgProps={{
          className:
            "mx-8 w-20 fill-old-gold-400 rotate-90 stroke-old-gold-400 stroke-[800]",
        }}
      />
      <div className="mx-4 h-0.5 flex-1 bg-gradient-to-r from-old-gold-400 from-30% to-old-gold-600 to-70%" />
      <SmallDiamondKnot className="text-old-gold-600" />
    </div>
  );
}
