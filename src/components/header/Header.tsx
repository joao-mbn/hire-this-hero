import type { Character } from "@/data/types";
import { Github, Globe, Linkedin, Mail, Shield } from "lucide-react";
import { Badge } from "../ui/badge";
import { TooltipProvider } from "../ui/tooltip";
import { Race } from "./Race";

interface HeaderProps {
  character: Character;
}

export function Header({ character }: HeaderProps) {
  return (
    <TooltipProvider>
      <div className="parchment-card mb-6 p-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
          <div className="relative">
            <div className="mystical-glow flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary bg-gradient-to-br from-primary/20 to-accent/20">
              <span className="text-6xl">⚡</span>
            </div>
            <div className="absolute -right-2 -bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-cinzel font-bold text-primary-foreground">
              {character.level}
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="rune-text mb-2 font-uncial text-4xl text-primary lg:text-5xl">
              {character.name}
            </h1>

            <Race character={character} />

            <div className="mb-4 flex flex-wrap justify-center gap-2 font-cinzel lg:justify-start">
              <Badge variant="secondary" className="">
                <Shield className="mr-1 h-3 w-3" />
                {character.class.name}
              </Badge>
              <Badge variant="outline" className="">
                {character.alignment}
              </Badge>
              <Badge variant="default" className="">
                Level {character.level}
              </Badge>
            </div>

            <div className="flex justify-center gap-4 lg:justify-start">
              <a
                href={`mailto:${character.contact.email}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={character.contact.linkedin}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={character.contact.github}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={character.contact.portfolio}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
