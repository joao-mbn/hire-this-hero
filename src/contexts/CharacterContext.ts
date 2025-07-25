import type { Character } from "@/data/types";
import { createContext, useContext } from "react";

export const CharacterContext = createContext<Character | null>(null);

export function useCharacterContext() {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider",
    );
  }

  return context;
}
