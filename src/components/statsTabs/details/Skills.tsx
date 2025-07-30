import { TooltipContentResultDescription } from "@/components/TooltipContentResultDescription";
import { Badge } from "@/components/ui/badge";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { AttributeKeyToName, AttributeKeyToShortName } from "@/data/maps";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { Proficient } from "./Proficient";

export function Skills() {
  const character = useCharacterContext();

  return (
    <Card className="parchment-card">
      <CardHeader>
        <CardTitle className="rune-text font-uncial text-xl text-primary">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        {character.skills
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-border/30 px-3 pt-2 text-muted-foreground not-last:border-b not-last:pb-2"
            >
              <Proficient proficient={skill.proficient} />

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="min-w-10 text-xs">
                        {AttributeKeyToShortName[skill.attribute]}
                      </span>
                      <span className="text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm">
                      {skill.bonus >= 0 ? `+${skill.bonus}` : skill.bonus}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <TooltipContentResultDescription
                    results={
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground">
                          Bonus:{" "}
                          {skill.bonus >= 0 ? `+${skill.bonus}` : skill.bonus}
                        </span>
                        <div className="flex gap-2">
                          <Badge variant="default">
                            {AttributeKeyToName[skill.attribute]}
                          </Badge>
                          {skill.proficient && (
                            <Badge variant="default">Proficient</Badge>
                          )}
                          {Object.entries(skill.otherBonusSources || {})
                            ?.filter(([, bonus]) => bonus !== 0)
                            .map(([source, bonus]) => (
                              <Badge
                                variant={bonus >= 0 ? "default" : "destructive"}
                                key={source}
                              >
                                {source}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    }
                    title={skill.name}
                    description={skill.description}
                  />
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
