import { useCharacter } from "@/hooks/useCharacter";
import { Header } from "./header/Header";
import { Loading } from "./Loading";
import { NoCharacterData } from "./NoCharacterData";
import { SideContainer } from "./SideContainer";
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
    <div className="mx-auto min-h-screen max-w-7xl p-6">
      <Header character={character} />

      <div className="flex gap-6">
        <div className="w-1/3">
          <SideContainer character={character} />
        </div>

        <div className="w-2/3">
          <StatsTabs character={character} />
        </div>
      </div>
    </div>
  );
};
