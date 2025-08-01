import { cn } from "@/lib/utils";

interface DescriptionProps {
  description?: string;
  withoutDivider?: boolean;
  className?: string;
}

export function Description({
  description,
  withoutDivider,
  className,
}: DescriptionProps) {
  if (!description) return null;

  return (
    <p
      className={cn(
        "mt-2 text-base whitespace-pre-line text-muted-foreground",
        !withoutDivider && "border-t border-border/30 pt-2",
        className,
      )}
    >
      {description}
    </p>
  );
}
