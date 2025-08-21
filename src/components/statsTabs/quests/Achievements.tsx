import {
  Container,
  ContainerItem,
  ContainerItemTitle,
  ContentHeader,
  Description,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { DifficultyToName } from "@/data/maps";
import type { Achievement } from "@/data/types";
import { yyyyMMMDate } from "@/lib/utils";
import { Award } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { Badge, CardContent } from "../../base/";

export function Achievements() {
  const character = useCharacterContext();
  const { achievements } = character;

  return (
    <Container title="Achievements" icon={<Award />}>
      <CardContent className="grid grid-cols-[minmax(0,1fr)_2px_minmax(0,1fr)] p-0">
        {achievements.map((achievement, idx) => (
          <Fragment key={`a-${idx}`}>
            <AchievementCard achievement={achievement} />

            {idx % 2 === 0 && idx < achievements.length - 1 && (
              <div className="h-[calc(100%-2rem)] w-0.5 translate-y-4 bg-gradient-to-b from-old-gold-400 via-old-gold-600 to-old-gold-400" />
            )}

            {idx % 2 === 1 && idx < achievements.length - 1 && (
              <div className="col-span-3 w-full px-4">
                <Divider variant="medium" className="mt-0" />
              </div>
            )}
          </Fragment>
        ))}
      </CardContent>
    </Container>
  );
}

interface AchievementCardProps {
  achievement: Achievement;
}

function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <AchievementItemTrigger achievement={achievement} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-emoji text-2xl">{achievement.icon}</span>
              <DrawerTitle>{achievement.name}</DrawerTitle>
            </div>
          </div>
        </DrawerHeader>
        <DrawerBody>
          <ContentHeader title="Achievement Events" />
          {achievement.events.map((event, idx) => (
            <div key={idx} className="space-y-2 pr-2 nth-[2]:mt-4">
              <div className="flex items-center justify-between">
                <ContentHeader
                  className="m-0 text-sm font-semibold text-old-gold-700"
                  title={yyyyMMMDate(event.dateEarned)}
                />
                <Badge
                  variant={`difficulty-${event.difficulty}`}
                  className="text-xs"
                >
                  {DifficultyToName[event.difficulty]}
                </Badge>
              </div>
              <Description withoutDivider description={event.description} />
              {idx < achievement.events.length - 1 && (
                <Divider className="my-4" />
              )}
            </div>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

interface AchievementItemTriggerProps {
  achievement: Achievement;
}

function AchievementItemTrigger({ achievement }: AchievementItemTriggerProps) {
  return (
    <ContainerItem className="flex cursor-pointer flex-col items-center border-0 text-center">
      <div className="relative">
        <div className="font-emoji text-4xl">{achievement.icon}</div>
        {achievement.events.length > 1 && (
          <Badge className="absolute -top-1 -right-2 h-6 w-6 justify-center">
            <span className="text-[10px]">x</span>
            {achievement.events.length}
          </Badge>
        )}
      </div>
      <div className="w-full overflow-hidden">
        <ContainerItemTitle title={achievement.name} className="w-full" />
      </div>
      {achievement.events[0]?.difficulty && (
        <Badge
          variant={`difficulty-${achievement.events[0]?.difficulty}`}
          className="my-2"
        >
          {DifficultyToName[achievement.events[0]?.difficulty]}
        </Badge>
      )}
    </ContainerItem>
  );
}
