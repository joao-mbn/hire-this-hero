import { cn } from "@/lib/utils";

interface DescriptionProps {
  description?: string;
  withoutDivider?: boolean;
}

export function Description({ description, withoutDivider }: DescriptionProps) {
  if (!description) return null;

  return (
    <p
      className={cn(
        "mt-2 text-sm whitespace-pre-line text-muted-foreground",
        !withoutDivider && "border-t pt-2",
      )}
    >
      {description}
    </p>
  );
}
