import { Pray } from "@/components/icons/Pray";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { Compass } from "lucide-react";
import { Description, MultiSectionCard, SectionItem } from "../../base/";

export function WorldViews() {
  const character = useCharacterContext();

  const worldViews = [
    {
      key: "alignment",
      title: `Alignment: ${character.biography.alignment.type}`,
      value: character.biography.alignment.description,
      icon: <Compass />,
    },
    {
      key: "faith",
      title: `Faith: ${character.biography.faith.name}`,
      value: character.biography.faith.description,
      icon: <Pray svgProps={{ className: "h-6 w-6" }} />,
    },
  ];

  return (
    <MultiSectionCard
      sections={worldViews}
      sectionItemComponent={({ key, title, value, icon }) => (
        <SectionItem title={title} key={key} icon={icon}>
          <Description description={value} withoutDivider className="mt-0" />
        </SectionItem>
      )}
    />
  );
}
