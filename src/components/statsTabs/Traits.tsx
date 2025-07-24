import type { Character } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface TraitsProps {
  traits: Character["background"];
}

export function Traits({ traits }: TraitsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="text-lg text-primary">⭐ Ideals</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {traits.ideals.map((ideal, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                "{ideal}"
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="text-lg text-primary">🤝 Bonds</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {traits.bonds.map((bond, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                {bond}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="text-lg text-primary">⚡ Flaws</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {traits.flaws.map((flaw, idx) => (
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
