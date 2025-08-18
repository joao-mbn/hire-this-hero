import {
  ContentHeader,
  Description,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  List,
  Progress,
  ProgressIndicator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/";
import { CardLine } from "@/components/base/cardLine";
import type { Feature } from "@/data/types";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { Badge } from "../../base/";

interface FeatureLineItemProps {
  feature: Feature;
  children?: React.ReactNode;
}

export function FeatureLineItem({ feature, children }: FeatureLineItemProps) {
  const lockedDescription =
    "You don't fulfill the prerequisites to unlock this feature.";
  return (
    <CardLine className="cursor-pointer text-old-gold-950">
      <Drawer>
        <DrawerTrigger asChild>
          <div
            className={cn(
              "flex w-full items-center gap-3",
              feature.locked && "grayscale",
            )}
          >
            <span className="font-emoji text-lg">{feature.icon || "💼"}</span>
            <span className={cn(feature.locked && "line-through")}>
              {feature.name}
            </span>
            {!feature.locked && feature.maxLevel > 1 && (
              <Badge
                variant={
                  feature.level === feature.maxLevel ? "default" : "outline"
                }
                className="ml-auto text-xs"
              >
                Lv. {feature.level}/{feature.maxLevel}
              </Badge>
            )}
          </div>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <div className="flex items-center gap-2">
              <span className="font-emoji text-2xl">
                {feature.icon || "💼"}
              </span>
              <DrawerTitle>{feature.name}</DrawerTitle>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <div className="space-y-6">
              {feature.prerequisites.length > 0 && (
                <>
                  <ContentHeader title="Prerequisites" />
                  <div className="flex flex-wrap gap-1">
                    {feature.prerequisites.map((prereq, idx) => (
                      <Badge key={idx} variant="outline">
                        {prereq.name}{" "}
                        {prereq.level > 0 && `(Level ${prereq.level})`}
                      </Badge>
                    ))}
                  </div>
                </>
              )}

              {feature.maxLevel > 1 &&
                feature.levelsDescriptions.length > 0 && (
                  <LevelDetails
                    feature={feature}
                    lockedDescription={lockedDescription}
                  />
                )}

              {feature.effects.length > 0 && (
                <>
                  <ContentHeader title="Effects" />
                  <List items={feature.effects} />
                </>
              )}

              {children}

              <Description description={feature.description} />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {feature.locked && (
        <LockedTooltip lockedDescription={lockedDescription} />
      )}
    </CardLine>
  );
}

interface LockedTooltipProps {
  lockedDescription: string;
}

function LockedTooltip({ lockedDescription }: LockedTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Lock className="ml-auto h-4 w-4 text-old-gold-800 grayscale" />
      </TooltipTrigger>
      <TooltipContent>
        <Description withoutDivider description={lockedDescription} />
      </TooltipContent>
    </Tooltip>
  );
}

interface LevelDetailsProps {
  feature: Feature;
  lockedDescription: string;
}

function LevelDetails({ feature, lockedDescription }: LevelDetailsProps) {
  return (
    <>
      <ContentHeader
        title={`Level: ${feature.level === feature.maxLevel ? "Max" : `${feature.level}/${feature.maxLevel}`}`}
      />
      {feature.locked ? (
        <div className="mb-1 flex items-center gap-2">
          <Lock className="h-4 w-4 text-old-gold-800" />
          <Description
            withoutDivider
            className="mb-0 translate-y-[1px]"
            description={lockedDescription}
          />
        </div>
      ) : (
        <Progress className="h-2 max-w-96">
          <ProgressIndicator
            className={cn(
              "h-full",
              feature.level === feature.maxLevel && "maxed-out",
            )}
            style={{
              width: `${(feature.level / feature.maxLevel) * 100}%`,
            }}
          />
        </Progress>
      )}
      <List
        items={feature.levelsDescriptions
          .filter((_, i) => i < feature.level)
          .map((description, i) => `Level ${i + 1}: ${description}`)}
        className="mb-0"
      />
      {feature.level < feature.maxLevel && (
        <List
          items={feature.levelsDescriptions
            .filter((_, i) => i >= feature.level)
            .map(
              (description, i) =>
                `Level ${feature.level + i + 1}: ${description}`,
            )}
          className="opacity-70 grayscale"
        />
      )}
    </>
  );
}
