import type { Character } from "@/data/types";
import { useEffect, useState } from "react";

export function useCharacter() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading character data from JSON
    import("../data/character.json")
      .then((data) => {
        /* class is a reserved word and cannot be used as a key */
        setCharacter({ ...data, class: data._class });
      })
      .catch((error) => {
        console.error("Error loading character data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { character, loading };
}
