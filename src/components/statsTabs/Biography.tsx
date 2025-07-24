import type { Character } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface BiographyProps {
  background: Character["background"];
}

export function Biography({ background }: BiographyProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <BiographyCard
          title="⭐ Ideals"
          content={background.ideals.join("\n\n")}
        />

        <BiographyCard
          title="🤝 Bonds"
          content={background.bonds.join("\n\n")}
        />

        <BiographyCard
          title="⚡ Flaws"
          content={background.flaws.join("\n\n")}
        />
      </div>

      <BiographyCard title="Character Lore" content={background.story} />
    </div>
  );
}

function BiographyCard({ title, content }: { title: string; content: string }) {
  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-2xl text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 leading-relaxed whitespace-pre-wrap text-muted-foreground">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}
