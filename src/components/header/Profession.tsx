import { useCharacterContext } from "@/contexts/CharacterContext";
import { Terminal } from "lucide-react";
import {
  ContentHeader,
  Description,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  List,
} from "../base/";
import { TitleBadge } from "./TitleBadge";

export function Profession() {
  const character = useCharacterContext();

  const professionName = character.profession.name;
  const subclassName = character.profession.subclass.name;
  const combinedTitle = `${professionName} • ${subclassName}`;

  return (
    <Drawer>
      <DrawerTrigger>
        <TitleBadge title={combinedTitle} Icon={Terminal} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Class</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <ContentHeader title="Main Class" />
          <List items={character.profession.effects} />
          <Description description={character.profession.description} />
          <Divider variant="medium" className="my-4" />
          <ContentHeader title="Subclass" />
          <List items={character.profession.subclass.effects} />
          <Description
            description={character.profession.subclass.description}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
