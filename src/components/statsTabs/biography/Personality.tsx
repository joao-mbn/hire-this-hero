import { useCharacterContext } from "@/contexts/CharacterContext";
import { HeartPulse } from "lucide-react";
import { Badge, BlockCard, CardContent } from "../../base/";

export function Personality() {
  const character = useCharacterContext();

  return (
    <BlockCard title="Personality Traits" icon={<HeartPulse />}>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {character.biography.personalityTraits.map((trait) => (
            <Badge key={trait} variant="outline">
              {trait}
            </Badge>
          ))}
        </div>
      </CardContent>
    </BlockCard>
  );
}
