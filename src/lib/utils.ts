import { clsx, type ClassValue } from "clsx";
import { Github, Linkedin, Mail } from "lucide-react";
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
