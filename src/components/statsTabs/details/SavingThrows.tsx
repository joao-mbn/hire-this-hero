import {
  Badge,
  Container,
  Description,
  TooltipContentHeader,
} from "@/components/base/";
import { CardLine } from "@/components/base/cardLine";
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
    <Container title="Saving Throws" icon={<ShieldCheck />}>
      <CardContent>
        {character.savingThrows
          .sort(
            (a, b) =>
              AttributeOrder.indexOf(a.attribute) -
              AttributeOrder.indexOf(b.attribute),
          )
          .map((savingThrow, index) => (
            <CardLine key={index}>
              <Proficient proficient={savingThrow.proficient} />

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-1 cursor-pointer items-center justify-between">
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
                    <Description
                      description={`Bonus: ${savingThrow.bonus >= 0 ? `+${savingThrow.bonus}` : savingThrow.bonus}`}
                      withoutDivider
                    />
                    {savingThrow.proficient && (
                      <Badge variant="outline">Proficient</Badge>
                    )}
                  </div>
                  <Description description={savingThrow.description} />
                </TooltipContent>
              </Tooltip>
            </CardLine>
          ))}
      </CardContent>
    </Container>
  );
}
