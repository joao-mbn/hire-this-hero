import {
  Badge,
  MultiSectionCard,
  SectionItem,
  type SectionItemProps,
} from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import {
  Backpack,
  ShieldCheck,
  ShieldMinus,
  ShieldPlus,
  Sword,
} from "lucide-react";
import { Attributes } from "./Attributes";
import { Languages } from "./Languages";
import { SavingThrows } from "./SavingThrows";
import { Skills } from "./Skills";

export function Details() {
  const character = useCharacterContext();
  const conditions = [
    { title: "Immunities", value: character.immunities, icon: <ShieldCheck /> },
    {
      title: "Resistances",
      value: character.resistances,
      icon: <ShieldPlus />,
    },
    { title: "Weaknesses", value: character.weaknesses, icon: <ShieldMinus /> },
  ];
  const equipmentProficiencies = [
    {
      title: "Weapons",
      value: character.weaponProficiencies,
      icon: <Sword />,
    },
    {
      title: "Equipments",
      value: character.equipmentProficiencies,
      icon: <Backpack />,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Attributes />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <SavingThrows />
          <Skills />
        </div>
        <div className="space-y-6">
          <Languages />
          <MultiSectionCard
            sections={conditions}
            sectionItemComponent={(section, i) => (
              <DetailsSectionItem
                title={section.title}
                value={section.value}
                icon={section.icon}
                key={i}
              />
            )}
          />
          <MultiSectionCard
            sections={equipmentProficiencies}
            sectionItemComponent={(section, i) => (
              <DetailsSectionItem
                title={section.title}
                value={section.value}
                icon={section.icon}
                key={i}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

interface DetailsSectionItemProps extends Omit<SectionItemProps, "children"> {
  value: string[];
}

function DetailsSectionItem({ title, value, icon }: DetailsSectionItemProps) {
  return (
    <SectionItem title={title} icon={icon}>
      <div className="flex flex-wrap gap-2">
        {value.map((item, index) => (
          <Badge key={index} variant="outline">
            {item}
          </Badge>
        ))}
      </div>
    </SectionItem>
  );
}
