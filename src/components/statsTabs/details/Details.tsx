import { Badge } from "@/components/ui/badge";
import { MultiSectionCard, SectionItem } from "@/components/ui/card";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { Attributes } from "./Attributes";
import { Languages } from "./Languages";
import { SavingThrows } from "./SavingThrows";
import { Skills } from "./Skills";

export function Details() {
  const character = useCharacterContext();
  const conditions = [
    { title: "Immunities", value: character.immunities },
    { title: "Resistances", value: character.resistances },
    { title: "Weaknesses", value: character.weaknesses },
  ];
  const equipmentProficiencies = [
    { title: "Weapons", value: character.weaponProficiencies },
    { title: "Equipments", value: character.equipmentProficiencies },
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
              <DetailsSectionItem section={section} key={i} />
            )}
          />
          <MultiSectionCard
            sections={equipmentProficiencies}
            sectionItemComponent={(section, i) => (
              <DetailsSectionItem section={section} key={i} />
            )}
          />
        </div>
      </div>
    </div>
  );
}

interface DetailsSectionItemProps {
  section: { title: string; value: string[] };
}

function DetailsSectionItem({ section }: DetailsSectionItemProps) {
  return (
    <SectionItem title={section.title}>
      <div className="flex flex-wrap gap-2">
        {section.value.map((item, index) => (
          <Badge key={index} variant="outline">
            {item}
          </Badge>
        ))}
      </div>
    </SectionItem>
  );
}
