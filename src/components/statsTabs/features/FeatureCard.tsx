import {
  ContainerItem,
  ContainerItemHeader,
  ContainerItemSection,
  Description,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/";
import type { Feature } from "@/data/types";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { Badge, List, Progress, ProgressIndicator } from "../../base/";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <ContainerItem className={cn(feature.locked && "pointer-events-none")}>
      <ContainerItemHeader
        title={feature.name}
        icon={feature.icon || "💼"}
        titleClassName={cn(feature.locked && "opacity-70 grayscale")}
      >
        {feature.locked && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Lock className="pointer-events-auto ml-auto h-5 w-5 text-primary" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="pb-2 font-semibold">Feature Locked</p>
              <Description
                withoutDivider
                className="text-sm"
                description="This feature is not yet available. Check the prerequisites to unlock it."
              />
            </TooltipContent>
          </Tooltip>
        )}
      </ContainerItemHeader>

      <div className={cn(feature.locked && "opacity-70 grayscale")}>
        {feature.prerequisites.length > 0 ? (
          <ContainerItemSection title="Prerequisites">
            <div className="mt-1 flex flex-wrap gap-1">
              {feature.prerequisites.map((prereq, idx) => (
                <Badge key={idx} variant="default">
                  {prereq.name} {prereq.level > 0 && `(Level ${prereq.level})`}
                </Badge>
              ))}
            </div>
          </ContainerItemSection>
        ) : (
          <ContainerItemSection title="Prerequisites: None" />
        )}

        {feature.maxLevel > 0 && feature.levelsDescriptions.length > 0 ? (
          <ContainerItemSection
            title={`Level: ${feature.level}/${feature.maxLevel}`}
            className="flex flex-col gap-2"
          >
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
              <List
                items={feature.levelsDescriptions
                  .filter((_, i) => i < feature.level)
                  .map((description, i) => `Level ${i + 1}: ${description}`)}
              />
              <List
                items={feature.levelsDescriptions
                  .filter((_, i) => i >= feature.level)
                  .map(
                    (description, i) =>
                      `Level ${feature.level + i + 1}: ${description}`,
                  )}
                className={cn(!feature.locked && "opacity-70 grayscale")}
              />
            </div>
          </ContainerItemSection>
        ) : (
          <ContainerItemSection title="Level: N/A" />
        )}

        {feature.effects.length > 0 && (
          <ContainerItemSection title="Effects">
            <List items={feature.effects} />
          </ContainerItemSection>
        )}

        <Description description={feature.description} />
      </div>
    </ContainerItem>
  );
}
