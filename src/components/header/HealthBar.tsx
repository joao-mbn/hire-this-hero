import { useCharacterContext } from "@/contexts/CharacterContext";
import {
  ContentHeader,
  Description,
  SemiCircularProgress,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../base/";

export function HealthBar() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <SemiCircularProgress
          progress={(character.health.current / character.health.max) * 100}
          backgroundColor="stroke-red-600/30"
          gradient={{
            stops: [
              { offset: "0%", color: "var(--color-red-700)" },
              { offset: "25%", color: "var(--color-red-800)" },
              { offset: "50%", color: "var(--color-red-700)" },
              { offset: "75%", color: "var(--color-red-800)" },
              { offset: "100%", color: "var(--color-red-700)" },
            ],
          }}
          rotation={-90}
          className="cursor-pointer"
        />
      </TooltipTrigger>
      <TooltipContent>
        <ContentHeader title="Health" />

        <Description
          description={`HP: ${character.health.current}/${character.health.max}`}
        />
      </TooltipContent>
    </Tooltip>
  );
}
