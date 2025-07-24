import type { Character } from "@/data/types";

interface AttributesProps {
  character: Character;
}

export function Attributes({ character }: AttributesProps) {
  return (
    <div className="parchment-card mb-6 p-6">
      <h2 className="rune-text mb-6 text-center font-uncial text-2xl text-primary">
        Attributes
      </h2>
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
    </div>
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
