import type { Character } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface TraitsProps {
  character: Character;
}

export function Traits({ character }: TraitsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="font-cinzel text-lg text-primary">
            ⭐ Ideals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {character.background.ideals.map((ideal, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                "{ideal}"
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="font-cinzel text-lg text-primary">
            🤝 Bonds
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {character.background.bonds.map((bond, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                {bond}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="font-cinzel text-lg text-primary">
            ⚡ Flaws
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {character.background.flaws.map((flaw, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                {flaw}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
