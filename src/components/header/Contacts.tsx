import type { Contact } from "@/data/types";
import { getIcon } from "@/lib/utils";

interface ContactsProps {
  contact: Contact;
}

export function Contacts({ contact }: ContactsProps) {
  return (
    <div className="flex justify-center gap-4 lg:justify-start">
      {Object.values(contact).map(({ iconName, link }) => {
        if (!iconName || !link) return null;

        const Icon = getIcon(iconName);
        if (!Icon) return null;

        return (
          <a
            href={link}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
