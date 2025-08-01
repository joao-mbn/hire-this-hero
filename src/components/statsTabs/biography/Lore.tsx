import { useCharacterContext } from "@/contexts/CharacterContext";
import { BookMarked } from "lucide-react";
import { BlockCard, CardContent } from "../../base/";

export function Lore() {
  const character = useCharacterContext();
  return (
    <BlockCard title="Lore" icon={<BookMarked />}>
      <CardContent>
        <p className="whitespace-pre-wrap text-muted-foreground">
          {character.biography.lore}
        </p>
      </CardContent>
    </BlockCard>
  );
}
