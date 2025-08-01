import { Badge, MultiSectionCard, SectionItem } from "@/components/base/";
import { Pray } from "@/components/icons/Pray";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { MoralStandingTypeToName } from "@/data/maps";
import type { MoralStandingType } from "@/data/types";
import {
  Compass,
  HeartCrack,
  HeartHandshake,
  HeartPulse,
  Star,
} from "lucide-react";
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
                icon: <Compass />,
              },
              {
                key: "faith",
                title: `Faith: ${character.biography.faith.name}`,
                value: character.biography.faith.description,
                icon: <Pray svgProps={{ className: "h-6 w-6" }} />,
              },
              {
                key: "personalityTraits",
                title: "Personality Traits",
                value: character.biography.personalityTraits,
                icon: <HeartPulse />,
              },
            ] as const
          }
          sectionItemComponent={({ key, title, value, icon }) => (
            <SectionItem title={title} key={key} icon={icon}>
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
              icon={
                {
                  bonds: <HeartHandshake />,
                  flaws: <HeartCrack />,
                  ideals: <Star />,
                }[standingType]
              }
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
