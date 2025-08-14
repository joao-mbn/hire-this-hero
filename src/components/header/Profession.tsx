import { useCharacterContext } from "@/contexts/CharacterContext";
import { Terminal } from "lucide-react";
import {
  ContentHeader,
  Description,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  List,
} from "../base/";
import { Divider } from "../base/divider";
import { TitleBadge } from "./TitleBadge";

export function Profession() {
  const character = useCharacterContext();

  return (
    <Drawer>
      <DrawerTrigger>
        <TitleBadge title={character.profession.name} Icon={Terminal} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{character.profession.name}</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <ContentHeader title="Effects" />
          <List items={character.profession.effects} />
          <Description description={character.profession.description} />
          <Divider />
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
