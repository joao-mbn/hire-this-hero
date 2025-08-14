import { useCharacterContext } from "@/contexts/CharacterContext";
import { RaceSpecifierToName } from "@/data/maps";
import type { RaceSpecifier } from "@/data/types";
import { Globe } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
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

export function Race() {
  const character = useCharacterContext();

  const raceNames = Object.entries(character.race)
    .map(([, value]) => value.primary)
    .join(" • ");

  return (
    <Drawer>
      <DrawerTrigger>
        <TitleBadge title={raceNames} Icon={Globe} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Racial Traits</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          {Object.entries(character.race).map(([key, value], index) => (
            <Fragment key={key}>
              <ContentHeader
                title={`${RaceSpecifierToName[key as RaceSpecifier]}: ${value.primary}`}
              />
              <List items={value.effects} />
              <Description description={value.description} />
              {index < Object.entries(character.race).length - 1 && (
                <Divider variant="medium" className="my-4" />
              )}
            </Fragment>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
