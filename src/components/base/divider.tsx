import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return <div className={cn("my-2 h-px w-full bg-border/30", className)} />;
}
