import { useCharacterContext } from "@/contexts/CharacterContext";
import { RoyalDivider } from "../base/";
import { Avatar } from "./Avatar";
import { Contacts } from "./Contacts";
import { HealthBar } from "./HealthBar";
import { Level } from "./Level";
import { Profession } from "./Profession";
import { Race } from "./Race";
import { Subclass } from "./Subclass";

export function Header() {
  const character = useCharacterContext();

  return (
    <div className="mb-6">
      <div className="flex flex-col items-center gap-4 lg:mx-8 lg:flex-row lg:items-start lg:gap-8">
        <div className="relative m-4">
          <div className="absolute top-[18.75%] -left-[98.75px]">
            <HealthBar />
          </div>
          <Avatar />
          <div className="absolute top-[18.75%] -right-[98.75px]">
            <Level />
          </div>
        </div>

        <div className="z-20 flex flex-1 flex-col gap-4">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <h1 className="bg-gradient-to-tr from-red-600 to-red-800 bg-clip-text font-uncial text-4xl/11 text-transparent lg:text-5xl/16">
              {character.name}
            </h1>
            <Contacts />
          </div>
          <Race />
          <div className="mb-2 flex flex-wrap justify-center gap-2 lg:justify-start">
            <Profession />
            <Subclass />
          </div>
        </div>
      </div>

      <RoyalDivider />
    </div>
  );
}
