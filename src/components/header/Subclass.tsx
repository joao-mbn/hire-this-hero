import { useCharacterContext } from "@/contexts/CharacterContext";
import { Layers } from "lucide-react";
import {
  Description,
  List,
  Tooltip,
  TooltipContent,
  TooltipContentHeader,
  TooltipTrigger,
} from "../base/";
import { TitleBadge } from "./TitleBadge";

export function Subclass() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <TitleBadge
          title={character.profession.subclass.name}
          icon={<Layers className="title-badge-icon" />}
        />
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentHeader title="Effects" />
        <List items={character.profession.subclass.effects} />
        <Description description={character.profession.subclass.description} />
      </TooltipContent>
    </Tooltip>
  );
}
