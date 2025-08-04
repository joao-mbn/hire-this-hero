import { cn } from "@/lib/utils";
import {
  Description,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../base/";

interface ProficientProps {
  proficient: boolean;
}

export function Proficient({ proficient }: ProficientProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "h-3 w-3 cursor-pointer rounded-full border-2 border-amber-400",
            proficient ? "bg-amber-400" : "bg-transparent",
          )}
        />
      </TooltipTrigger>
      <TooltipContent>
        <Description
          withoutDivider
          description={proficient ? "Proficient" : "Not Proficient"}
        />
      </TooltipContent>
    </Tooltip>
  );
}
