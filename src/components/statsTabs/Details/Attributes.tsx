import {
  Effects,
  TooltipContentResultDescription,
} from "@/components/TooltipContentResultDescription";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { AttributeOrder } from "@/data/maps";
import type { Attribute, AttributeKey } from "@/data/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export function Attributes() {
  const character = useCharacterContext();

  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-xl text-primary">
          Attributes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
          {Object.entries(character.attributes)
            .sort(
              (a, b) =>
                AttributeOrder.indexOf(a[0] as AttributeKey) -
                AttributeOrder.indexOf(b[0] as AttributeKey),
            )
            .map(([key, value]) => (
              <AttributeGem
                value={value}
                type={key as AttributeKey}
                key={key}
              />
            ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface AttributeGemProps {
  value: Attribute;
  type: AttributeKey;
}

function AttributeGem({ value, type }: AttributeGemProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="flex flex-col items-center gap-2 font-cinzel">
          <div className="mb-2 flex translate-x-2 items-end">
            <div className={cn("attribute-gem", type)}>{value.total}</div>
            <div
              className={cn(
                "attribute-gem",
                type,
                "h-6 w-6 -translate-x-4 translate-y-2 text-sm shadow-md",
              )}
            >
              {value.bonus >= 0 ? `+${value.bonus}` : value.bonus}
            </div>
          </div>
          <p className="text-sm font-bold">{value.shortLabel}</p>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentResultDescription
          results={
            <Effects
              effects={Object.entries(value.composition).map(
                ([key, value]) => `${key}: +${value}`,
              )}
            />
          }
          title={value.label}
          description={`Attribute Bonus: ${value.bonus >= 0 ? `+${value.bonus}` : value.bonus}`}
        />
      </TooltipContent>
    </Tooltip>
  );
}
