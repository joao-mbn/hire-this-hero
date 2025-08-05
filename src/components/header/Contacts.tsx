import { useCharacterContext } from "@/contexts/CharacterContext";
import { getIcon } from "@/lib/utils";

export function Contacts() {
  const character = useCharacterContext();

  return (
    <div className="flex justify-center gap-4 lg:justify-start">
      {Object.values(character.contact).map(({ iconName, link }) => {
        if (!iconName || !link) return null;

        const Icon = getIcon(iconName);
        if (!Icon) return null;

        return (
          <a
            href={link}
            key={iconName}
            className="text-old-gold-700 transition-colors hover:text-old-gold-600"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
