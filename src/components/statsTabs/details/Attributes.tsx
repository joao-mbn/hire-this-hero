import {
  AttributeGem,
  Container,
  ContentHeader,
  Description,
  List,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { AttributeOrder } from "@/data/maps";
import type { Attribute, AttributeKey } from "@/data/types";
import { BicepsFlexed } from "lucide-react";
import { CardContent } from "../../base/";

export function Attributes() {
  const character = useCharacterContext();

  return (
    <Container title="Attributes" icon={<BicepsFlexed />}>
      <CardContent className="grid grid-cols-2 gap-6 md:grid-cols-6">
        {Object.entries(character.attributes)
          .sort(
            (a, b) =>
              AttributeOrder.indexOf(a[0] as AttributeKey) -
              AttributeOrder.indexOf(b[0] as AttributeKey),
          )
          .map(([key, value]) => (
            <AttributeGemDisplay
              value={value}
              type={key as AttributeKey}
              key={key}
            />
          ))}
      </CardContent>
    </Container>
  );
}

interface AttributeGemProps {
  value: Attribute;
  type: AttributeKey;
}

function AttributeGemDisplay({ value, type }: AttributeGemProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="flex cursor-pointer flex-col items-center gap-2 font-cinzel uppercase">
          <div className="mb-2 flex translate-x-2 items-end">
            <AttributeGem type={type}>{value.total}</AttributeGem>
            <AttributeGem
              type={type}
              size="small"
              className="-translate-x-4 translate-y-2"
            >
              {value.bonus >= 0 ? `+${value.bonus}` : value.bonus}
            </AttributeGem>
          </div>
          <p className="text-sm font-bold">{value.shortLabel}</p>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <ContentHeader title={value.label} />
        <List
          items={Object.entries(value.composition).map(
            ([key, value]) => `${key}: +${value}`,
          )}
        />
        <Description
          description={`Attribute Bonus: ${value.bonus >= 0 ? `+${value.bonus}` : value.bonus}`}
        />
      </TooltipContent>
    </Tooltip>
  );
}
