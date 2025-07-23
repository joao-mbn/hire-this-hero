import type { Character } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface BackgroundProps {
  character: Character;
}

export function Background({ character }: BackgroundProps) {
  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-2xl text-primary">
          Character Lore
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 font-cinzel leading-relaxed text-muted-foreground">
          {character.background.story}
        </p>
      </CardContent>
    </Card>
  );
}
