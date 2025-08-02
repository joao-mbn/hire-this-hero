import { cn } from "@/lib/utils";
import { Divider } from "./divider";

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
    <>
      {!withoutDivider && <Divider />}
      <p
        className={cn(
          "text-base whitespace-pre-line text-muted-foreground",
          className,
        )}
      >
        {description}
      </p>
    </>
  );
}
