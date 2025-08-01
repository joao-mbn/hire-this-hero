import { useCharacterContext } from "@/contexts/CharacterContext";
import { BookMarked } from "lucide-react";
import { CardContent, Container, Description } from "../../base/";

export function Lore() {
  const character = useCharacterContext();
  return (
    <Container title="Lore" icon={<BookMarked />}>
      <CardContent className="-mt-3">
        <Description
          description={character.biography.lore}
          withoutDivider
          className="m-0"
        />
      </CardContent>
    </Container>
  );
}
