import { useCharacterContext } from "@/contexts/CharacterContext";
import { HeartPulse } from "lucide-react";
import { Badge, CardContent, Container } from "../../base/";

export function Personality() {
  const character = useCharacterContext();

  return (
    <Container title="Personality Traits" icon={<HeartPulse />}>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {character.biography.personalityTraits.map((trait) => (
            <Badge key={trait} variant="outline">
              {trait}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Container>
  );
}
