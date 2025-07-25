import {
  Effects,
  TooltipContentResultDescription,
} from "@/components/TooltipContentResultDescription";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Attribute, AttributeKey, Character } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface AttributesProps {
  character: Character;
}

export function Attributes({ character }: AttributesProps) {
  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-2xl text-primary">
          Attributes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
          {Object.entries(character.attributes).map(([key, value]) => (
            <AttributeGem value={value} type={key as AttributeKey} />
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
  const total = Object.values(value.composition).reduce(
    (acc, curr) => acc + curr,
    0,
  );

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="text-center font-cinzel">
          <div className={`attribute-gem ${type} mx-auto mb-2`}>{total}</div>
          <p className="text-sm font-bold">{value.label}</p>
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
        />
      </TooltipContent>
    </Tooltip>
  );
}
