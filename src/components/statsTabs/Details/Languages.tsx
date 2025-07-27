import { useCharacterContext } from "@/contexts/CharacterContext";
import { Badge } from "../../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export function Languages() {
  const character = useCharacterContext();

  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-xl text-primary">
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {character.languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-card/50 p-3"
            >
              <div>
                <h4 className="font-cinzel font-semibold text-foreground">
                  {language.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge variant="outline" className="text-xs">
                  {language.cefrLevel}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  Level {language.level}/10
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
