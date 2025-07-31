import { useCharacterContext } from "@/contexts/CharacterContext";
import { Card } from "../ui/card";
import { Avatar } from "./Avatar";
import { Contacts } from "./Contacts";
import { ExperienceBar } from "./ExperienceBar";
import { HealthBar } from "./HealthBar";
import { Level } from "./Level";
import { Profession } from "./Profession";
import { Race } from "./Race";
import { Subclass } from "./Subclass";

export function Header() {
  const character = useCharacterContext();

  return (
    <Card className="mb-6 flex flex-col items-center gap-6 p-6 lg:flex-row lg:items-start">
      <Avatar />

      <div className="flex-1 text-center lg:text-left">
        <h1 className="mb-2 font-uncial text-4xl text-primary lg:text-5xl">
          {character.name}
        </h1>
        <Race />
        <div className="mb-2 flex flex-wrap justify-center gap-2 lg:justify-start">
          <Profession />
          <Subclass />
          <Level />
        </div>
        <Contacts />
        <div className="flex flex-col gap-1 pt-6">
          <HealthBar />
          <ExperienceBar />
        </div>
      </div>
    </Card>
  );
}
