import { TooltipContentResultDescription } from "@/components/TooltipContentResultDescription";
import { Badge } from "@/components/ui/badge";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { AttributeKeyToName, AttributeOrder } from "@/data/maps";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { Proficient } from "./Proficient";

export function SavingThrows() {
  const character = useCharacterContext();

  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="font-uncial text-xl text-primary">
          Saving Throws
        </CardTitle>
      </CardHeader>
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
                  <TooltipContentResultDescription
                    results={
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
                    }
                    title={AttributeKeyToName[savingThrow.attribute]}
                    description={savingThrow.description}
                  />
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
