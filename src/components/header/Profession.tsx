import { useCharacterContext } from "@/contexts/CharacterContext";
import { Shield } from "lucide-react";
import {
  Description,
  List,
  Tooltip,
  TooltipContent,
  TooltipContentHeader,
  TooltipTrigger,
} from "../base/";
import { TitleBadge } from "./TitleBadge";

export function Profession() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <TitleBadge
          title={character.profession.name}
          icon={<Shield className="title-badge-icon" />}
        />
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentHeader title="Effects" />
        <List items={character.profession.effects} />
        <Description description={character.profession.description} />
      </TooltipContent>
    </Tooltip>
  );
}
