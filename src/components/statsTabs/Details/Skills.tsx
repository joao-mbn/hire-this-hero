import type { Character } from "@/data/types";
import { Badge } from "../../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface SkillsProps {
  character: Character;
}

export function Skills({ character }: SkillsProps) {
  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-2xl text-primary">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {character.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-card/50 p-3"
            >
              <div className="flex-1">
                <h4 className="font-cinzel font-semibold text-foreground">
                  {skill.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {skill.attribute}
                </Badge>
                {skill.proficient && (
                  <Badge variant="default" className="text-xs">
                    Proficient
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
