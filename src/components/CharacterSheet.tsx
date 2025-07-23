import { useCharacter } from "@/hooks/useCharacter";
import { Attributes } from "./Attributes";
import { Header } from "./Header";
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
    <div className="mx-auto min-h-screen max-w-7xl p-6">
      <Header character={character} />
      <Attributes character={character} />
      <StatsTabs character={character} />
    </div>
  );
};
