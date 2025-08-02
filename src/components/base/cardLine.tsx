import { cn } from "@/lib/utils";

export function CardLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-border/30 px-3 pt-2 text-muted-foreground not-last:border-b not-last:pb-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
