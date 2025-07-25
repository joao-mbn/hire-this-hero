import { CharacterContext } from "@/contexts/CharacterContext";
import { useCharacter } from "@/hooks/useCharacter";
import { Header } from "./header/Header";
import { Loading } from "./Loading";
import { NoCharacterData } from "./NoCharacterData";
import { SideContainer } from "./sideMenu/SideContainer";
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
      <div
        className="mx-auto my-6 max-w-7xl rounded-lg border-2 border-amber-800 p-6 shadow-2xl"
        style={{ backgroundColor: "hsl(var(--sheet-background))" }}
      >
        <Header />

        <div className="flex gap-6">
          <div className="w-1/3">
            <SideContainer character={character} />
          </div>

          <div className="w-2/3">
            <StatsTabs character={character} />
          </div>
        </div>
      </div>
    </CharacterContext.Provider>
  );
};
