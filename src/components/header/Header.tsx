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
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
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
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between">
            <h1 className="font-uncial text-4xl text-red-800 lg:text-5xl">
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
