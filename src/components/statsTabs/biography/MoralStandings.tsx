import { List, MultiSectionCard, SectionItem } from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { MoralStandingTypeToName } from "@/data/maps";
import type { MoralStandingType } from "@/data/types";
import { HeartCrack, HeartHandshake, Star } from "lucide-react";

export function MoralStandings() {
  const character = useCharacterContext();

  return (
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
          <List items={standings} className="text-base text-old-gold-700" />
        </SectionItem>
      )}
    />
  );
}
