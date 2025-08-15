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
} from "../base";
import { TitleBadge } from "./TitleBadge";

export function Class() {
  const character = useCharacterContext();

  const professionName = character.class.name;
  const subclassName = character.class.subclass.name;
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
          <ContentHeader title={`Main Class: ${professionName}`} />
          <List items={character.class.effects} />
          <Description description={character.class.description} />
          <Divider variant="medium" className="my-4" />
          <ContentHeader title={`Subclass: ${subclassName}`} />
          <List items={character.class.subclass.effects} />
          <Description description={character.class.subclass.description} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
