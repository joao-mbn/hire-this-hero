import { useCharacterContext } from "@/contexts/CharacterContext";
import { Fragment } from "react/jsx-runtime";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TooltipContentEffectDescription } from "./TooltipContentEffectDescription";

export function Race() {
  const character = useCharacterContext();

  return (
    <div className="mb-2 text-left text-xl text-muted-foreground">
      {Object.entries(character.race).map(([key, value], index) => (
        <Fragment key={key}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>{value.primary}</TooltipTrigger>
            <TooltipContent>
              <TooltipContentEffectDescription
                effects={value.effects}
                description={value.description}
              />
            </TooltipContent>
          </Tooltip>
          {index < Object.entries(character.race).length - 1 && (
            <span className="mx-2">•</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
