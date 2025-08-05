import { useCharacterContext } from "@/contexts/CharacterContext";
import { SemiCircularProgress } from "../base";
import { Card } from "../base/";
import { Avatar } from "./Avatar";
import { Contacts } from "./Contacts";
import { Level } from "./Level";
import { Profession } from "./Profession";
import { Race } from "./Race";
import { Subclass } from "./Subclass";

export function Header() {
  const character = useCharacterContext();

  return (
    <Card className="mb-6 flex flex-col items-center gap-6 p-6 lg:flex-row lg:items-start">
      <div className="relative m-4">
        <div className="absolute top-1/2 -left-[99px] -translate-y-1/2">
          <SemiCircularProgress
            progress={(character.health.current / character.health.max) * 100}
            color="stroke-red-500"
            backgroundColor="stroke-red-500/30"
            rotation={-90}
          />
        </div>

        <Avatar />

        <div className="absolute top-1/2 -right-[99px] -translate-y-1/2">
          <SemiCircularProgress
            progress={character.experience.percentageToNextLevel}
            color="stroke-old-gold-500"
            backgroundColor="stroke-old-gold-500/30"
            rotation={90}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between">
          <h1 className="font-uncial text-4xl text-old-gold-600 lg:text-5xl">
            {character.name}
          </h1>
          <Contacts />
        </div>
        <Race />
        <div className="mb-2 flex flex-wrap justify-center gap-2 lg:justify-start">
          <Profession />
          <Subclass />
          <Level />
        </div>
      </div>
    </Card>
  );
}
