import { CharacterContext } from "@/contexts/CharacterContext";
import { useCharacter } from "@/hooks/useCharacter";
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
      <div className="mx-auto my-6 max-w-7xl rounded-lg border border-old-gold-300 bg-old-gold-50 p-6 shadow-2xl">
        <Header />
        <StatsTabs />
      </div>
    </CharacterContext.Provider>
  );
};
