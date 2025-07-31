import { useCharacterContext } from "@/contexts/CharacterContext";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export function Lore() {
  const character = useCharacterContext();
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="font-uncial text-xl text-primary">Lore</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap text-muted-foreground">
          {character.biography.lore}
        </p>
      </CardContent>
    </Card>
  );
}
