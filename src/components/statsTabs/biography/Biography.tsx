import { Badge } from "@/components/ui/badge";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { MoralStandingTypeToName } from "@/data/maps";
import type { MoralStandingType } from "@/data/types";
import { MultiSectionCard, SectionItem } from "../../ui/card";
import { Appearance } from "./Appearance";
import { Lore } from "./Lore";

export function Biography() {
  const character = useCharacterContext();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Appearance />
        <Lore />
      </div>
      <div className="space-y-6">
        <MultiSectionCard
          sections={
            [
              {
                key: "alignment",
                title: `Alignment: ${character.biography.alignment.type}`,
                value: character.biography.alignment.description,
              },
              {
                key: "faith",
                title: `Faith: ${character.biography.faith.name}`,
                value: character.biography.faith.description,
              },
              {
                key: "personalityTraits",
                title: "Personality Traits",
                value: character.biography.personalityTraits,
              },
            ] as const
          }
          sectionItemComponent={({ key, title, value }) => (
            <SectionItem title={title} key={key}>
              {key === "personalityTraits" ? (
                <div className="flex flex-wrap gap-2">
                  {value.map((trait) => (
                    <Badge key={trait} variant="outline">
                      {trait}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">{value}</p>
              )}
            </SectionItem>
          )}
        />
        <MultiSectionCard
          sections={Object.entries(character.biography.moralStandings)}
          sectionItemComponent={([standingType, standings]) => (
            <SectionItem
              title={MoralStandingTypeToName[standingType as MoralStandingType]}
              key={standingType}
            >
              <ul className="list-disc pl-4 text-muted-foreground">
                {standings.map((standing) => (
                  <li key={standing}>{standing}</li>
                ))}
              </ul>
            </SectionItem>
          )}
        />
      </div>
    </div>
  );
}
