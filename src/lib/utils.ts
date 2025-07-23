import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rarityColor = (rarity: string) => {
  const _rarity = rarity.toLowerCase();

  if (["legendary", "epic", "rare", "uncommon", "common"].includes(_rarity)) {
    return `rarity-${_rarity}`;
  }

  return "rarity-common";
};
