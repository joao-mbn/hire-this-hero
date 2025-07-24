import type { Character } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface BackgroundProps {
  background: Character["background"];
}

export function Background({ background }: BackgroundProps) {
  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-2xl text-primary">
          Character Lore
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          {background.story}
        </p>
      </CardContent>
    </Card>
  );
}
