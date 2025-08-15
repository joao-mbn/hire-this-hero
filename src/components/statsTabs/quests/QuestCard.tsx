import {
  Container,
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
} from "@/components/base/";
import { CardLine } from "@/components/base/cardLine";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { DifficultyToName } from "@/data/maps";
import type { CompletedQuest, InProgressQuest } from "@/data/types";
import { yyyyMMMDate } from "@/lib/utils";
import { Scroll, Trophy } from "lucide-react";
import { Badge, CardContent } from "../../base/";

export function CurrentQuestBlock() {
  const character = useCharacterContext();
  const { questLog } = character;

  return (
    <Container title="Current Quests" icon={<Scroll />}>
      <CardContent className="space-y-2">
        {questLog.inProgress.map((quest, idx) => (
          <QuestLineItem quest={quest} key={idx}>
            <ContentHeader title={`Progress: ${quest.progress}%`} />
            <Progress value={quest.progress} className="mb-1 h-2" />
            <Description
              withoutDivider
              className="text-sm"
              description={`Estimated Completion: ${yyyyMMMDate(quest.estimatedCompletion)}`}
            />
          </QuestLineItem>
        ))}
      </CardContent>
    </Container>
  );
}

export function CompletedQuestBlock() {
  const character = useCharacterContext();
  const { questLog } = character;

  return (
    <Container title="Completed Quests" icon={<Trophy />}>
      <CardContent className="space-y-2">
        {questLog.completed.map((quest, idx) => (
          <QuestLineItem quest={quest} key={idx}>
            <ContentHeader title="Duration" />
            <Description
              withoutDivider
              description={`${yyyyMMMDate(quest.startDate)} - ${yyyyMMMDate(quest.completionDate)}`}
            />
          </QuestLineItem>
        ))}
      </CardContent>
    </Container>
  );
}

interface QuestLineItemProps {
  quest: CompletedQuest | InProgressQuest;
  children?: React.ReactNode;
}

function QuestLineItem({ quest, children }: QuestLineItemProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <CardLine className="cursor-pointer text-old-gold-950">
          <span className="font-emoji text-lg">{quest.icon || "🏆"}</span>
          <span>{quest.name}</span>
          <Badge
            variant={`difficulty-${quest.difficulty}`}
            className="ml-auto text-xs"
          >
            {DifficultyToName[quest.difficulty]}
          </Badge>
        </CardLine>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-emoji text-2xl">{quest.icon || "🏆"}</span>
              <DrawerTitle>{quest.name}</DrawerTitle>
            </div>
            <Badge
              variant={`difficulty-${quest.difficulty}`}
              className="text-sm"
            >
              {DifficultyToName[quest.difficulty]}
            </Badge>
          </div>
        </DrawerHeader>
        <DrawerBody>
          <div className="space-y-6">
            <ContentHeader title="Rewards" />
            <List items={quest.rewards} />

            {"place" in quest && quest.place && (
              <>
                <ContentHeader title="Location" />
                <Description withoutDivider description={quest.place} />
              </>
            )}

            {children}

            <Description description={quest.description} />
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
