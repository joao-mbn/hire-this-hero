export interface WeaponItem {
  name: string;
  type: string;
  rarity: string;
  stats: string;
  description: string;
}

export interface ArmorItem {
  name: string;
  type: string;
  rarity: string;
  stats: string;
  description: string;
}

export interface ConsumableItem {
  name: string;
  type: string;
  quantity: string;
  effect: string;
  description: string;
}

export interface ToolItem {
  name: string;
  type: string;
  rarity: string;
  description: string;
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
    tools: ToolItem[];
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
