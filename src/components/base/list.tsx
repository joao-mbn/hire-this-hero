import { cn } from "@/lib/utils";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[];
}

export function List({ items, ...props }: ListProps) {
  return (
    <ul {...props} className={cn("text-base text-accent", props.className)}>
      {items.map((effect, index) => (
        <li key={index} className="flex items-start gap-2">
          <span>•</span>
          <span>{effect}</span>
        </li>
      ))}
    </ul>
  );
}
