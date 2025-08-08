import { useCharacterContext } from "@/contexts/CharacterContext";
import { Eye } from "lucide-react";
import { CardContent, Container } from "../../base/";

export function Appearance() {
  const character = useCharacterContext();

  return (
    <Container title="Appearance" icon={<Eye />}>
      <CardContent className="grid grid-cols-2 gap-2">
        {Object.entries(character.biography.appearance).map(([key, value]) => (
          <div key={key} className="flex items-start gap-1">
            <span className="text-old-gold-700">
              {key[0].toUpperCase() + key.slice(1)}:
            </span>
            <span className="font-semibold text-old-gold-800">{value}</span>
          </div>
        ))}
      </CardContent>
    </Container>
  );
}
