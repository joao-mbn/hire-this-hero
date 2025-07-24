export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
export type ItemType = "weapon" | "armor" | "consumable" | "tool";
export type SkillCategory =
  | "foundation"
  | "specialization"
  | "advanced"
  | "mastery";

export interface Item {
  name: string;
  type: ItemType;
  description: string;
}

export interface WeaponItem extends Item {
  rarity: Rarity;
  stats: string;
}

export interface ArmorItem extends Item {
  rarity: Rarity;
  stats: string;
}

export interface ConsumableItem extends Item {
  quantity: number | string;
  effect: string;
}

export interface SkillConnection {
  from: string;
  to: string;
}

export interface SkillNode {
  id: string;
  name: string;
  description: string;
  level: number;
  maxLevel: number;
  unlocked: boolean;
  prerequisites: string[];
  x: number;
  y: number;
  category: SkillCategory;
}

export interface SkillTree {
  nodes: SkillNode[];
  connections: SkillConnection[];
}

export type Race = Record<
  string,
  {
    primary: string;
    effects: string[];
    description: string;
  }
>;

export interface Character {
  name: string;
  race: Race;
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
  skillTree: SkillTree;
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
