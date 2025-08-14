import { cn } from "@/lib/utils";

export function ContentHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mb-2 font-cinzel text-lg font-semibold text-old-gold-700",
        className,
      )}
    >
      {title}
    </span>
  );
}
