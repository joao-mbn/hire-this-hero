export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
export type ItemType = "weapon" | "armor" | "consumable" | "tool";

export interface Item {
  name: string;
  type: ItemType;
  stats: string;
  description: string;
}

export interface WeaponItem extends Item {
  rarity: Rarity;
}

export interface ArmorItem extends Item {
  rarity: Rarity;
}

export interface ConsumableItem extends Item {
  quantity: number;
  effect: string;
}

export interface Character {
  name: string;
  title: string;
  level: number;
  class: string;
  alignment: string;
  portrait: string;
  background: {
    story: string;
    ideals: string[];
    bonds: string[];
    flaws: string[];
  };
  attributes: {
    strength: number;
    dexterity: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  skills: Record<
    string,
    {
      level: number;
      experience: number;
      maxLevel: number;
      subskills: Array<{ name: string; level: number }>;
    }
  >;
  inventory: {
    weapons: WeaponItem[];
    armor: ArmorItem[];
    consumables: ConsumableItem[];
    tools: Item[];
  };
  achievements: Array<{
    name: string;
    description: string;
    icon: string;
    rarity: string;
    dateEarned: string;
  }>;
  questLog: {
    completed: Array<{
      name: string;
      difficulty: string;
      description: string;
      reward: string;
      company: string;
    }>;
    inProgress: Array<{
      name: string;
      difficulty: string;
      description: string;
      progress: number;
      estimatedCompletion: string;
    }>;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
}
