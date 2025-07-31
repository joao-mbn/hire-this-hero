import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Feature } from "@/data/types";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { Effects } from "../../TooltipContentResultDescription";
import { Badge } from "../../ui/badge";
import { Progress, ProgressIndicator } from "../../ui/progress";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded border border-border p-4",
        feature.locked && "pointer-events-none",
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex items-center gap-2",
            feature.locked && "opacity-70 grayscale",
          )}
        >
          <div className="text-xl">{feature.icon || "💼"}</div>
          <span className="text-xl font-bold">{feature.name}</span>
        </div>
        {feature.locked && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Lock className="pointer-events-auto ml-auto h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="max-w-xs">
                <p className="pb-2 font-semibold">Feature Locked</p>
                <p className="text-sm text-muted-foreground">
                  This feature is not yet available. Check the prerequisites to
                  unlock it.
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        )}
      </div>

      <div className={cn(feature.locked && "opacity-70 grayscale")}>
        {feature.prerequisites.length > 0 ? (
          <div className="mt-2">
            <p className="font-semibold">Prerequisites:</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {feature.prerequisites.map((prereq, idx) => (
                <Badge key={idx} variant="default" className="text-xs">
                  {prereq.name} {prereq.level > 0 && `(Level ${prereq.level})`}
                </Badge>
              ))}
            </div>
          </div>
        ) : (
          <span className="mt-2 block font-semibold">Prerequisites: None</span>
        )}

        {feature.maxLevel > 0 && feature.levelsDescriptions.length > 0 ? (
          <div className="mt-2 flex flex-col gap-2">
            <span className="font-semibold">
              Level: {feature.level}/{feature.maxLevel}
            </span>
            <Progress className="h-2 max-w-96">
              <ProgressIndicator
                className={cn(
                  "h-full",
                  feature.level === feature.maxLevel &&
                    "gradient-flow maxed-out",
                )}
                style={{
                  width: `${(feature.level / feature.maxLevel) * 100}%`,
                }}
              />
            </Progress>
            <div>
              <Effects
                effects={feature.levelsDescriptions
                  .filter((_, i) => i < feature.level)
                  .map((description, i) => `Level ${i + 1}: ${description}`)}
              />
              <Effects
                effects={feature.levelsDescriptions
                  .filter((_, i) => i >= feature.level)
                  .map(
                    (description, i) =>
                      `Level ${feature.level + i + 1}: ${description}`,
                  )}
                className={cn(!feature.locked && "opacity-70 grayscale")}
              />
            </div>
          </div>
        ) : (
          <span className="mt-2 block font-semibold">Level: N/A</span>
        )}

        {feature.effects.length > 0 && (
          <div className="mt-2">
            <p className="font-semibold">Effects:</p>
            <Effects effects={feature.effects} />
          </div>
        )}

        {feature.description && (
          <p className="mt-2 border-t pt-2 text-sm whitespace-pre-line text-muted-foreground">
            {feature.description}
          </p>
        )}
      </div>
    </div>
  );
}
