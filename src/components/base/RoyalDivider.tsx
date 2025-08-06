import { cn } from "@/lib/utils";
import { DiamondDivider } from "../icons/DiamondDivider";
import { SmallDiamondKnot } from "../icons/SmallDiamondKnot";

interface RoyalDividerProps {
  className?: string;
}

export function RoyalDivider({ className = "" }: RoyalDividerProps) {
  return (
    <div
      className={cn(
        "mt-4 mb-10 flex h-8 items-center justify-between",
        className,
      )}
    >
      <SmallDiamondKnot className="text-old-gold-600" />
      <div className="mx-4 h-0.5 flex-1 bg-gradient-to-r from-old-gold-600 from-30% to-old-gold-400 to-70% lg:h-1" />
      <DiamondDivider
        svgProps={{
          className:
            "mx-8 w-20 lg:w-32 fill-old-gold-400 rotate-90 stroke-old-gold-400 stroke-[800]",
        }}
      />
      <div className="mx-4 h-0.5 flex-1 bg-gradient-to-r from-old-gold-400 from-30% to-old-gold-600 to-70% lg:h-1" />
      <SmallDiamondKnot className="text-old-gold-600" />
    </div>
  );
}
