import type {
  AttributeKey,
  AttributeName,
  AttributeShortName,
  CefrLevel,
  Difficulty,
  ItemType,
  MoralStandingType,
  RaceSpecifier,
  Rarity,
  Recovery,
} from "./types";

export const AttributeKeyToShortName: Record<AttributeKey, AttributeShortName> =
  {
    strength: "STR",
    dexterity: "DEX",
    constitution: "CON",
    intelligence: "INT",
    wisdom: "WIS",
    charisma: "CHA",
  };

export const AttributeKeyToName: Record<AttributeKey, AttributeName> = {
  strength: "Strength",
  dexterity: "Dexterity",
  constitution: "Constitution",
  intelligence: "Intelligence",
  wisdom: "Wisdom",
  charisma: "Charisma",
};

export const AttributeOrder: AttributeKey[] = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
];

export const CefrLevelToLongLevel: Record<CefrLevel, string> = {
  A1: "Basic User",
  A2: "Upper Basic User",
  B1: "Independent User",
  B2: "Upper Intermediate User",
  C1: "Proficient User",
  C2: "Upper Proficient User",
  Native: "Native User",
};

export const CefrLevelToDescription: Record<CefrLevel, string> = {
  A1: "Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has. Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.",
  A2: "Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment). Can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters.  Can describe in simple terms aspects of his/her background, immediate environment and matters in areas of immediate need.",
  B1: "Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. Can deal with most situations likely to arise whilst travelling in an area where the language is spoken.  Can produce simple connected text on topics which are familiar or of personal interest. Can describe experiences and events, dreams, hopes & ambitions and briefly give reasons and explanations for opinions and plans.",
  B2: "Can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in his/her field of specialisation. Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party. Can produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.",
  C1: "Can understand a wide range of demanding, longer texts, and recognise implicit meaning. Can express him/herself fluently and spontaneously without much obvious searching for expressions. Can use language flexibly and effectively for social, academic and professional purposes. Can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.",
  C2: "Can understand with ease virtually everything heard or read. Can summarise information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation. Can express him/herself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in more complex situations.",
  Native: "Perfect fluency in all aspects",
};

export const ItemTypeToName: Record<ItemType, string> = {
  weapons: "Weapons",
  equipments: "Equipments",
};

export const RarityToName: Record<Rarity, string> = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
};

export const MoralStandingTypeToName: Record<MoralStandingType, string> = {
  bonds: "Bonds",
  flaws: "Flaws",
  ideals: "Ideals",
};

export const DifficultyToName: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  expert: "Expert",
  impossible: "Impossible",
};

export const RecoveryToName: Record<Recovery, string> = {
  LR: "Long Rest",
  SR: "Short Rest",
};

export const RaceSpecifierToName: Record<RaceSpecifier, string> = {
  species: "Species",
  ethnicity: "Ethnicity",
  archetype: "Archetype",
};
