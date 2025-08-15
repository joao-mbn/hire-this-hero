import { useCharacterContext } from "@/contexts/CharacterContext";
import { cn, getIcon } from "@/lib/utils";

interface ContactsProps {
  className?: string;
}

export function Contacts({ className }: ContactsProps) {
  const character = useCharacterContext();

  return (
    <div
      className={cn("flex justify-center gap-4 lg:justify-start", className)}
    >
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
            <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
        );
      })}
    </div>
  );
}
