import type {
  Attribute,
  AttributeKey,
  AttributeName,
  AttributeShortName,
  CefrLevel,
  Character,
  Difficulty,
  Experience,
  Rarity,
  SavingThrow,
  Skill,
  SkillCategory,
} from "@/data/types";
import { getExperience } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useCharacter() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../data/character.json")
      .then((data) => {
        const attributes: Record<AttributeKey, Attribute> = Object.entries(
          data.attributes,
        ).reduce(
          (acc, [key, value]) => {
            const total = Object.values(value.composition).reduce(
              (acc, curr) => acc + curr,
              0,
            );
            const bonus = Math.floor((total - 10) / 2);
            return {
              ...acc,
              [key as AttributeKey]: {
                ...value,
                total,
                bonus,
                label: value.label as AttributeName,
                shortLabel: value.shortLabel as AttributeShortName,
              },
            };
          },
          {} as Record<AttributeKey, Attribute>,
        );

        const experience: Experience = getExperience(
          data.experience.campaignStartDate,
          data.experience.experienceDescriptions,
          data.experience.attributeLeveling,
          data.experience.proficiencyBonus,
        );

        const skills: Skill[] = data.skills.map((skill) => {
          const otherBonusSourcesBonus =
            Object.entries(
              skill.otherBonusSources || ({} as Record<string, number>),
            )?.reduce((acc, [, bonus]) => acc + bonus, 0) || 0;
          const attributeBonus =
            attributes[skill.attribute as AttributeKey].bonus;
          const proficiencyBonus = skill.proficient
            ? experience.proficiencyBonus
            : 0;
          const bonus =
            attributeBonus + proficiencyBonus + otherBonusSourcesBonus;

          return {
            ...skill,
            attribute: skill.attribute as AttributeKey,
            bonus,
          };
        });

        const savingThrows: SavingThrow[] = Object.entries(
          data.savingThrows,
        ).map(([attributeKey, { proficient, description }]) => {
          const attributeBonus = attributes[attributeKey as AttributeKey].bonus;
          const bonus = proficient
            ? attributeBonus + experience.proficiencyBonus
            : attributeBonus;

          return {
            description,
            proficient,
            bonus,
            attribute: attributeKey as AttributeKey,
          };
        });

        const character: Character = {
          ...data,
          experience,
          attributes,
          skills,
          savingThrows,
          languages: data.languages.map((language) => ({
            ...language,
            cefrLevel: language.cefrLevel as CefrLevel,
          })),
          skillTree: {
            ...data.skillTree,
            nodes: data.skillTree.nodes.map((node) => ({
              ...node,
              category: node.category as SkillCategory,
            })),
          },
          inventory: {
            ...data.inventory,
            weapons: data.inventory.weapons.map((weapon) => ({
              ...weapon,
              rarity: weapon.rarity as Rarity,
            })),
            equipments: data.inventory.equipments.map((equipment) => ({
              ...equipment,
              rarity: equipment.rarity as Rarity,
            })),
          },
          achievements: data.achievements.map((achievement) => ({
            ...achievement,
            difficulty: achievement.difficulty as Rarity,
          })),
          questLog: {
            completed: data.questLog.completed.map((quest) => ({
              ...quest,
              difficulty: quest.difficulty as Difficulty,
              completionDate: new Date(quest.completionDate),
            })),
            inProgress: data.questLog.inProgress.map((quest) => ({
              ...quest,
              difficulty: quest.difficulty as Difficulty,
              estimatedCompletion: new Date(quest.estimatedCompletion),
            })),
          },
        };
        setCharacter(character);
      })
      .catch((error) => {
        console.error("Error loading character data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { character, loading };
}
