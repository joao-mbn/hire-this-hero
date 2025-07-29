import { useCharacterContext } from "@/contexts/CharacterContext";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export function Appearance() {
  const character = useCharacterContext();

  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-xl text-primary">
          Appearance
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        {Object.entries(character.biography.appearance).map(([key, value]) => (
          <div key={key} className="flex gap-1">
            <span className="text-sm text-muted-foreground">
              {key[0].toUpperCase() + key.slice(1)}:
            </span>
            <span className="text-sm text-foreground">{value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
