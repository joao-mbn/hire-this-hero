import { useCharacterContext } from "@/contexts/CharacterContext";
import { Contacts } from "./Contacts";
import { Level } from "./Level";
import { Profession } from "./Profession";
import { Race } from "./Race";

export function Header() {
  const character = useCharacterContext();

  return (
    <div className="parchment-card mb-6 p-8">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="rune-text mb-2 font-uncial text-4xl text-primary lg:text-5xl">
            {character.name}
          </h1>

          <Race />

          <div className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start">
            <Profession />
            <Level />
          </div>

          <Contacts />
        </div>
      </div>
    </div>
  );
}
