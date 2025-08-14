import { CharacterContext } from "@/contexts/CharacterContext";
import { useCharacter } from "@/hooks/useCharacter";
import { RoyalBorder } from "./base";
import { Header } from "./header/Header";
import { Loading } from "./Loading";
import { NoCharacterData } from "./NoCharacterData";
import { StatsTabs } from "./statsTabs/StatsTabs";

export const CharacterSheet = () => {
  const { character, loading } = useCharacter();

  if (loading) {
    return <Loading />;
  }

  if (!character) {
    return <NoCharacterData />;
  }

  return (
    <CharacterContext.Provider value={character}>
      <RoyalBorder className="mx-auto max-w-7xl bg-old-gold-50 shadow-2xl lg:my-6">
        <Header />
        <StatsTabs />
      </RoyalBorder>
    </CharacterContext.Provider>
  );
};
