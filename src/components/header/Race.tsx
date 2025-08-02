import { useCharacterContext } from "@/contexts/CharacterContext";
import { Fragment } from "react/jsx-runtime";
import {
  Description,
  List,
  Tooltip,
  TooltipContent,
  TooltipContentHeader,
  TooltipTrigger,
} from "../base/";

export function Race() {
  const character = useCharacterContext();

  return (
    <div className="mb-2 text-xl text-muted-foreground lg:text-left">
      {Object.entries(character.race).map(([key, value], index) => (
        <Fragment key={key}>
          <Tooltip>
            <TooltipTrigger>
              <span className="cursor-pointer">{value.primary}</span>
            </TooltipTrigger>
            <TooltipContent>
              <TooltipContentHeader title="Effects" />
              <List items={value.effects} />
              <Description description={value.description} />
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
