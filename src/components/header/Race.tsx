import { useCharacterContext } from "@/contexts/CharacterContext";
import { Fragment } from "react/jsx-runtime";
import {
  Effects,
  Tooltip,
  TooltipContent,
  TooltipContentResultDescription,
  TooltipTrigger,
} from "../base/";

export function Race() {
  const character = useCharacterContext();

  return (
    <div className="mb-2 text-xl text-muted-foreground lg:text-left">
      {Object.entries(character.race).map(([key, value], index) => (
        <Fragment key={key}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>{value.primary}</TooltipTrigger>
            <TooltipContent>
              <TooltipContentResultDescription
                results={<Effects effects={value.effects} />}
                description={value.description}
                title="Effects"
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
