import { useCharacterContext } from "@/contexts/CharacterContext";
import { Layers } from "lucide-react";
import {
  ContentHeader,
  Description,
  List,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../base/";
import { TitleBadge } from "./TitleBadge";

export function Subclass() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <TitleBadge title={character.profession.subclass.name} Icon={Layers} />
      </TooltipTrigger>
      <TooltipContent>
        <ContentHeader title="Effects" />
        <List items={character.profession.subclass.effects} />
        <Description description={character.profession.subclass.description} />
      </TooltipContent>
    </Tooltip>
  );
}
