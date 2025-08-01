import {
  Badge,
  BlockCard,
  Description,
  TooltipContentHeader,
} from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { AttributeKeyToName, AttributeOrder } from "@/data/maps";
import { ShieldCheck } from "lucide-react";
import {
  CardContent,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../base/";
import { Proficient } from "./Proficient";

export function SavingThrows() {
  const character = useCharacterContext();

  return (
    <BlockCard title="Saving Throws" icon={<ShieldCheck />}>
      <CardContent>
        {character.savingThrows
          .sort(
            (a, b) =>
              AttributeOrder.indexOf(a.attribute) -
              AttributeOrder.indexOf(b.attribute),
          )
          .map((savingThrow, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-border/30 px-3 pt-2 text-muted-foreground not-last:border-b not-last:pb-2"
            >
              <Proficient proficient={savingThrow.proficient} />

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="min-w-10 text-foreground">
                        {AttributeKeyToName[savingThrow.attribute]}
                      </span>
                    </div>
                    <span className="text-sm">
                      {savingThrow.bonus >= 0
                        ? `+${savingThrow.bonus}`
                        : savingThrow.bonus}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <TooltipContentHeader
                    title={AttributeKeyToName[savingThrow.attribute]}
                  />
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">
                      Bonus:{" "}
                      {savingThrow.bonus >= 0
                        ? `+${savingThrow.bonus}`
                        : savingThrow.bonus}
                    </span>
                    {savingThrow.proficient && (
                      <Badge variant="default">Proficient</Badge>
                    )}
                  </div>
                  <Description description={savingThrow.description} />
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
      </CardContent>
    </BlockCard>
  );
}
