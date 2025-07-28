import { useCharacterContext } from "@/contexts/CharacterContext";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { Attributes } from "./Attributes";
import { Languages } from "./Languages";
import { Skills } from "./Skills";

export function Details() {
  const character = useCharacterContext();
  const conditions = [
    { title: "Immunities", value: character.immunities },
    { title: "Resistances", value: character.resistances },
    { title: "Weaknesses", value: character.weaknesses },
  ];
  const equipmentProficiencies = [
    { title: "Weapons", value: character.weaponProficiencies },
    { title: "Armors", value: character.armorProficiencies },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Attributes />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Skills />
        <div className="space-y-6">
          <Languages />
          <MultiSectionCard sections={conditions} />
          <MultiSectionCard sections={equipmentProficiencies} />
        </div>
      </div>
    </div>
  );
}

interface MultiSectionCardProps {
  sections: { title: string; value: string[] }[];
}

function MultiSectionCard({ sections }: MultiSectionCardProps) {
  return (
    <Card className="parchment-card">
      <CardContent className="flex flex-col gap-4 pt-6">
        {sections
          .filter((section) => section.value.length > 0)
          .map((section) => (
            <div className="flex flex-col gap-3 border-border/30 not-last:border-b not-last:pb-6">
              <span className="rune-text font-uncial text-xl text-primary">
                {section.title}
              </span>
              <div className="flex flex-wrap gap-2">
                {section.value.map((proficiency, index) => (
                  <Badge key={index} variant="outline">
                    {proficiency}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
