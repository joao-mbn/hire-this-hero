import type { Character } from "@/data/types";
import { Ruler, Shield } from "lucide-react";
import { Badge } from "../ui/badge";
import { TooltipProvider } from "../ui/tooltip";
import { Contacts } from "./Contacts";
import { Race } from "./Race";

interface HeaderProps {
  character: Character;
}

export function Header({ character }: HeaderProps) {
  return (
    <TooltipProvider>
      <div className="parchment-card mb-6 p-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="rune-text mb-2 font-uncial text-4xl text-primary lg:text-5xl">
              {character.name}
            </h1>

            <Race character={character} />

            <div className="mb-4 flex flex-wrap justify-center gap-2 font-cinzel lg:justify-start">
              <Badge variant="default">
                <Shield className="mr-1 h-3 w-3" />
                {character.class.name}
              </Badge>
              <Badge variant="default">
                <Ruler className="mr-1 h-3 w-3" />
                Level {character.level}
              </Badge>
            </div>

            <Contacts contact={character.contact} />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
