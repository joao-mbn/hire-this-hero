import { useCharacterContext } from "@/contexts/CharacterContext";
import {
  Description,
  SemiCircularProgress,
  Tooltip,
  TooltipContent,
  TooltipContentHeader,
  TooltipTrigger,
} from "../base/";

export function HealthBar() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <SemiCircularProgress
          progress={(character.health.current / character.health.max) * 100}
          color="stroke-red-500"
          backgroundColor="stroke-red-500/30"
          rotation={-90}
          className="cursor-pointer"
        />
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentHeader title="Health" />

        <Description
          description={`HP: ${character.health.current}/${character.health.max}`}
        />
      </TooltipContent>
    </Tooltip>
  );
}
