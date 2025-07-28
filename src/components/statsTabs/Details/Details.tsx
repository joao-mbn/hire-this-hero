import { useCharacterContext } from "@/contexts/CharacterContext";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { Attributes } from "./Attributes";
import { Languages } from "./Languages";
import { Skills } from "./Skills";

export function Details() {
  return (
    <div className="flex flex-col gap-6">
      <Attributes />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Skills />

        <div className="space-y-6">
          <Languages />

          <Conditions />
        </div>
      </div>
    </div>
  );
}

function Conditions() {
  const character = useCharacterContext();

  const conditions = [
    { name: "Immunities", value: character.immunities },
    { name: "Resistances", value: character.resistances },
    { name: "Weaknesses", value: character.weaknesses },
  ];

  return (
    <Card className="parchment-card">
      <CardContent className="flex flex-col gap-4 pt-6">
        {conditions
          .filter((condition) => condition.value.length > 0)
          .map((condition) => (
            <div className="flex flex-col gap-3 border-border/30 not-last:border-b not-last:pb-6">
              <span className="rune-text font-uncial text-xl text-primary">
                {condition.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {condition.value.map((immunity, index) => (
                  <Badge key={index} variant="outline">
                    {immunity}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
