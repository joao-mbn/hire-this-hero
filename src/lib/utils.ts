import type { Difficulty, Experience, Rarity } from "@/data/types";
import { clsx, type ClassValue } from "clsx";
import { Github, Linkedin, Mail } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const MAX_LEVEL = 20;
export const MAX_LANGUAGE_LEVEL = 7;
export const LANGUAGE_DEBUFF_REGRESS = 2;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rarityColor = (rarity: Rarity) => `rarity-${rarity}`;
export const difficultyColor = (difficulty: Difficulty) =>
  `difficulty-${difficulty}`;

export function getIcon(iconName: string) {
  switch (iconName) {
    case "Mail":
      return Mail;
    case "Linkedin":
      return Linkedin;
    case "Github":
      return Github;
    default:
      return null;
  }
}

export function getExperience(
  campaignStartDateString: string,
  experienceDescriptions: Record<string, string>,
  attributeLeveling: number[],
  proficiencyBonus: number[],
): Experience {
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  const campaignStartDate = new Date(campaignStartDateString);

  const decimalYearsOfExperience =
    (new Date().getTime() - new Date(campaignStartDate).getTime()) / oneYear;

  const level = levelFitEquation(decimalYearsOfExperience);

  const fullLevels = Math.min(MAX_LEVEL, Math.floor(level));
  const percentageToNextLevel =
    fullLevels === MAX_LEVEL ? 100 : Math.floor((level - fullLevels) * 100);

  const description =
    Object.entries(experienceDescriptions)
      .sort(([keyA], [keyB]) => Number(keyB) - Number(keyA))
      .find(([key]) => Number(key) <= fullLevels)?.[1] ??
    Object.values(experienceDescriptions)[0];

  return {
    campaignStartDate: new Date(campaignStartDate),
    level: fullLevels,
    percentageToNextLevel,
    description,
    yearsOfExperience: Math.floor(decimalYearsOfExperience),
    proficiencyBonus: proficiencyBonus[fullLevels - 1],
    attributeLeveling,
  };
}

/**
 * R² = 0.9996
 * The function below was parameterized to yield integer levels at these points:
 * YOE (x) | Level (y)
 * 0       | 1
 * 4       | 10
 * 10      | 15
 * 20      | 18
 * 30      | 20
 */
export function levelFitEquation(x: number) {
  return (
    25.37934 + (0.9963703 - 25.37934) / (1 + Math.pow(x / 7.310844, 0.874025))
  );
}

export function yyyyMMMDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}
