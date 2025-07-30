import { BlockCard, CardContent } from "@/components/ui/card";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { RecoveryToName } from "@/data/maps";
import { Sparkles } from "lucide-react";
import { Effects } from "../../TooltipContentResultDescription";
import { Badge } from "../../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

export function Spells() {
  const character = useCharacterContext();
  const { spells } = character;

  return (
    <BlockCard
      title="Spells"
      icon={<Sparkles className="h-5 w-5 text-primary" />}
    >
      <CardContent className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {spells.map((spell, i) => (
          <div className="rounded border border-border p-4" key={i}>
            <div className="flex items-center gap-2">
              <div className="text-xl">{spell.icon || "✨"}</div>
              <span className="text-xl font-bold">{spell.name}</span>
              <Badge className="ml-auto" variant="default">
                Charges: {spell.charges.current}/{spell.charges.max}
              </Badge>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="default">{spell.recovery}</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    Recovers all charges at a {RecoveryToName[spell.recovery]}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="mt-2 flex flex-col">
              <p className="font-semibold">Effects:</p>
              <Effects effects={spell.effects} />
            </div>

            <div className="mt-2">
              <p className="font-semibold">Components:</p>
              <Effects effects={spell.components} />
            </div>

            <div className="mt-2">
              <p className="font-semibold">
                Duration: <span className="font-normal">{spell.duration}</span>
              </p>
            </div>

            <p className="mt-2 border-t pt-2 text-sm whitespace-pre-line text-muted-foreground">
              {spell.description}
            </p>
          </div>
        ))}
      </CardContent>
    </BlockCard>
  );
}
