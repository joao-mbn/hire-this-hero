import { useCharacterContext } from "@/contexts/CharacterContext";
import { Shield } from "lucide-react";
import {
  Badge,
  Description,
  List,
  Tooltip,
  TooltipContent,
  TooltipContentHeader,
  TooltipTrigger,
} from "../base/";

export function Profession() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant="default" className="font-cinzel" hover>
          <Shield className="mr-1 h-3 w-3" />
          {character.profession.name}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentHeader title="Effects" />
        <List items={character.profession.effects} />
        <Description description={character.profession.description} />
      </TooltipContent>
    </Tooltip>
  );
}
