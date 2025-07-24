import type { Character } from "@/data/types";
import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface RaceProps {
  character: Character;
}

export function Race({ character }: RaceProps) {
  return (
    <div className="mb-2 text-left text-xl text-muted-foreground">
      {Object.entries(character.race).map(([key, value], index) => (
        <>
          <span className="inline-flex items-center gap-1" key={key}>
            {value.primary}
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                  <HelpCircle className="h-3 w-3" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="max-w-xs">
                  <p className="mb-2 font-semibold">Effects:</p>
                  <ul className="space-y-1 text-sm">
                    {value.effects.map((effect, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 border-t pt-2 text-sm whitespace-pre-line">
                    {value.description}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </span>
          {index < Object.entries(character.race).length - 1 && (
            <span className="mx-2">•</span>
          )}
        </>
      ))}
    </div>
  );
}
