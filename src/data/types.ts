export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
export type Difficulty = "easy" | "medium" | "hard" | "expert";
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
export type MoralStandingType = "ideals" | "bonds" | "flaws";
export type Recovery = "LR" | "SR";
export type FeatureOrigin = "profession" | "others";

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
  otherBonusSources?: Record<string, number>;
}

export interface Spell {
  name: string;
  description: string;
  recovery: Recovery;
  charges: {
    max: number;
    current: number;
  };
  effects: string[];
  duration: string;
  icon: string;
  components: string[];
}

export interface Feature {
  name: string;
  description: string;
  effects: string[];
  icon: string;
  prerequisites: {
    name: string;
    level: number;
  }[];
  level: number;
  maxLevel: number;
  levelsDescriptions: string[];
  locked: boolean;
  treeData?: {
    x: number;
    y: number;
  };
  origin: FeatureOrigin;
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

export interface Appearance {
  sex: string;
  hair: string;
  eyes: string;
  skin: string;
  height: string;
  weight: string;
}
export interface Biography {
  alignment: {
    type: string;
    description: string;
  };
  faith: {
    name: string;
    description: string;
  };
  personalityTraits: string[];
  moralStandings: Record<MoralStandingType, string[]>;
  lore: string;
  appearance: Appearance;
}

export interface Achievement {
  name: string;
  description: string;
  icon: string;
  difficulty: Rarity;
  dateEarned: string;
}

export interface Quest {
  name: string;
  difficulty: Difficulty;
  description: string;
  rewards: string[];
  icon: string;
}

export interface CompletedQuest extends Quest {
  completionDate: Date;
}

export interface InProgressQuest extends Quest {
  progress: number;
  estimatedCompletion: Date;
}

export interface Character {
  name: string;
  race: Race;
  experience: Experience;
  profession: Profession;
  contact: Contact;
  portrait: string;
  languages: Language[];
  immunities: string[];
  resistances: string[];
  weaknesses: string[];
  weaponProficiencies: string[];
  equipmentProficiencies: string[];
  skills: Skill[];
  spells: Spell[];
  features: Feature[];
  biography: Biography;
  attributes: Record<AttributeKey, Attribute>;
  savingThrows: SavingThrow[];
  health: {
    max: number;
    current: number;
  };
  skillTree: SkillTree;
  inventory: Inventory;
  achievements: Achievement[];
  questLog: {
    completed: CompletedQuest[];
    inProgress: InProgressQuest[];
  };
}
