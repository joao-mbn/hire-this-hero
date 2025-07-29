import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

interface ProficientProps {
  proficient: boolean;
}

export function Proficient({ proficient }: ProficientProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "h-3 w-3 rounded-full border-2 border-amber-400",
            proficient ? "bg-amber-400" : "bg-transparent",
          )}
        />
      </TooltipTrigger>
      <TooltipContent>
        {proficient ? "Proficient" : "Not Proficient"}
      </TooltipContent>
    </Tooltip>
  );
}
