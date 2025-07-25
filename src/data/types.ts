export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
export type ItemType = "weapon" | "armor" | "consumable" | "tool";
export type SkillCategory =
  | "foundation"
  | "specialization"
  | "advanced"
  | "mastery";
export type Attribute =
  | "Strength"
  | "Dexterity"
  | "Constitution"
  | "Intelligence"
  | "Wisdom"
  | "Charisma";

export interface UnderusageDebuff {
  active: boolean;
  description: string;
}

export interface Skill {
  name: string;
  description: string;
  attribute: Attribute;
  proficient: boolean;
}

export interface Language {
  name: string;
  level: number; // 1-10 scale based on CEFR
  cefrLevel: string; // A1, A2, B1, B2, C1, C2
  description: string;
  underusageDebuff?: UnderusageDebuff;
}

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

export interface Background {
  story: string;
  ideals: string[];
  bonds: string[];
  flaws: string[];
}

export type Contact = Record<
  string,
  { label: string; link: string; iconName: string }
>;

export interface Profession {
  name: string;
  description: string;
  effects: string[];
}

export interface Character {
  name: string;
  race: Race;
  level: number;
  profession: Profession;
  contact: Contact;
  alignment: string;
  portrait: string;
  languages: Language[];
  immunities: string[];
  resistances: string[];
  weaknesses: string[];
  weaponProficiencies: string[];
  armorProficiencies: string[];
  skills: Skill[];
  background: Background;
  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  health: {
    max: number;
    current: number;
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
}
