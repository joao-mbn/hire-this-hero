import type {
  Attribute,
  Character,
  ItemType,
  Rarity,
  SkillCategory,
} from "@/data/types";
import { useEffect, useState } from "react";

export function useCharacter() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../data/character.json")
      .then((data) => {
        setCharacter({
          ...data,
          skills: data.skills.map((skill) => ({
            ...skill,
            attribute: skill.attribute as Attribute,
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
              type: weapon.type as ItemType,
            })),
            armor: data.inventory.armor.map((armor) => ({
              ...armor,
              rarity: armor.rarity as Rarity,
              type: armor.type as ItemType,
            })),
            consumables: data.inventory.consumables.map((consumable) => ({
              ...consumable,
              type: consumable.type as ItemType,
            })),
            tools: data.inventory.tools.map((tool) => ({
              ...tool,
              rarity: tool.rarity as Rarity,
              type: tool.type as ItemType,
            })),
          },
        });
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
