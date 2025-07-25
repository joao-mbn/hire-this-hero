import type { Character } from "@/data/types";
import { Fragment } from "react/jsx-runtime";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface RaceProps {
  character: Character;
}

export function Race({ character }: RaceProps) {
  return (
    <div className="mb-2 text-left text-xl text-muted-foreground">
      {Object.entries(character.race).map(([key, value], index) => (
        <Fragment key={key}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>{value.primary}</TooltipTrigger>
            <TooltipContent>
              <div className="max-w-xs">
                <p className="mb-2 font-semibold">Effects:</p>
                <ul className="space-y-1 text-sm">
                  {value.effects.map((effect, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span>•</span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 border-t pt-2 text-sm whitespace-pre-line text-muted-foreground">
                  {value.description}
                </p>
              </div>
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
