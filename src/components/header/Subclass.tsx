import { useCharacterContext } from "@/contexts/CharacterContext";
import { Shield } from "lucide-react";
import {
  Effects,
  TooltipContentResultDescription,
} from "../TooltipContentResultDescription";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function Subclass() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant="default" className="font-cinzel">
          <Shield className="mr-1 h-3 w-3" />
          {character.profession.subclass.name}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentResultDescription
          results={<Effects effects={character.profession.subclass.effects} />}
          description={character.profession.subclass.description}
          title="Effects"
        />
      </TooltipContent>
    </Tooltip>
  );
}
