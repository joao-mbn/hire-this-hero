import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface HealthBarProps {
  current: number;
  max: number;
  className?: string;
}

export function HealthBar({ current, max, className }: HealthBarProps) {
  const healthPercentage = (current / max) * 100;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="relative">
        <Progress
          value={healthPercentage}
          className="h-6 border border-gray-600 bg-gray-700"
        />
        <div
          className="absolute inset-0 h-6 rounded-full bg-red-500 font-cinzel transition-all"
          style={{
            width: `${healthPercentage}%`,
            clipPath: "inset(0 0 0 0)",
          }}
        >
          <span className="p-2 font-bold text-white">
            HP: {current}/{max}
          </span>
        </div>
      </div>
    </div>
  );
}
