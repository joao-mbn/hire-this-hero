export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
export type ItemType = "weapons" | "equipments";
export type SkillCategory =
  | "foundation"
  | "specialization"
  | "advanced"
  | "mastery";
export type AttributeKey =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";
export type AttributeName =
  | "Strength"
  | "Dexterity"
  | "Constitution"
  | "Intelligence"
  | "Wisdom"
  | "Charisma";
export type AttributeShortName = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native";

export interface UnderusageDebuff {
  active: boolean;
  description: string;
}

export interface Skill {
  name: string;
  description: string;
  attribute: AttributeKey;
  proficient: boolean;
  bonus: number;
}

export interface Language {
  name: string;
  level: number;
  cefrLevel: CefrLevel;
  description?: string;
  underusageDebuff?: UnderusageDebuff;
}

export type Inventory = Record<ItemType, Item[]>;

export interface Item {
  name: string;
  subtype: string;
  description: string;
  stats: string[];
  equipped: boolean;
  rarity: Rarity;
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
  subclass: {
    name: string;
    description: string;
    effects: string[];
  };
}

export interface Experience {
  campaignStartDate: Date;
  level: number;
  percentageToNextLevel: number;
  description: string;
  yearsOfExperience: number;
  proficiencyBonus: number;
  attributeLeveling: number[];
}

export interface Attribute {
  label: AttributeName;
  shortLabel: AttributeShortName;
  total: number;
  bonus: number;
  composition: Record<string, number>;
}

export interface SavingThrow {
  description: string;
  proficient: boolean;
  bonus: number;
  attribute: AttributeKey;
}

export interface Character {
  name: string;
  race: Race;
  experience: Experience;
  profession: Profession;
  contact: Contact;
  alignment: string;
  portrait: string;
  languages: Language[];
  immunities: string[];
  resistances: string[];
  weaknesses: string[];
  weaponProficiencies: string[];
  equipmentProficiencies: string[];
  skills: Skill[];
  background: Background;
  attributes: Record<AttributeKey, Attribute>;
  savingThrows: SavingThrow[];
  health: {
    max: number;
    current: number;
  };
  skillTree: SkillTree;
  inventory: Inventory;
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
