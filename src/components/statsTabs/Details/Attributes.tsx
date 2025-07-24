import type { Character } from "@/data/types";
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
        <div className="grid grid-cols-2 gap-6 font-cinzel md:grid-cols-6">
          <AttributeGem
            name="Strength"
            value={character.attributes.strength}
            type="strength"
          />
          <AttributeGem
            name="Constitution"
            value={character.attributes.constitution}
            type="constitution"
          />
          <AttributeGem
            name="Dexterity"
            value={character.attributes.dexterity}
            type="dexterity"
          />
          <AttributeGem
            name="Intelligence"
            value={character.attributes.intelligence}
            type="intelligence"
          />
          <AttributeGem
            name="Wisdom"
            value={character.attributes.wisdom}
            type="wisdom"
          />
          <AttributeGem
            name="Charisma"
            value={character.attributes.charisma}
            type="charisma"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface AttributeGemProps {
  name: string;
  value: number;
  type: string;
}

function AttributeGem({ name, value, type }: AttributeGemProps) {
  return (
    <div className="text-center">
      <div className={`attribute-gem ${type.toLowerCase()} mx-auto mb-2`}>
        {value}
      </div>
      <p className="text-sm font-bold">{name}</p>
    </div>
  );
}
