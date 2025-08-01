import { useCharacterContext } from "@/contexts/CharacterContext";
import { Eye } from "lucide-react";
import { BlockCard, CardContent } from "../../base/";

export function Appearance() {
  const character = useCharacterContext();

  return (
    <BlockCard title="Appearance" icon={<Eye />}>
      <CardContent className="grid grid-cols-2 gap-2">
        {Object.entries(character.biography.appearance).map(([key, value]) => (
          <div key={key} className="flex gap-1">
            <span className="text-muted-foreground">
              {key[0].toUpperCase() + key.slice(1)}:
            </span>
            <span className="text-foreground">{value}</span>
          </div>
        ))}
      </CardContent>
    </BlockCard>
  );
}
