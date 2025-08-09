import {
  Container,
  ContainerItem,
  ContainerItemDivider,
  ContainerItemHeader,
  ContainerItemSection,
  Description,
} from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { DifficultyToName } from "@/data/maps";
import type { Quest } from "@/data/types";
import { Scroll, Trophy } from "lucide-react";
import { Badge, CardContent, List, Progress } from "../../base/";

export function CurrentQuestBlock() {
  const character = useCharacterContext();
  const { questLog } = character;

  return (
    <Container title="Current Quests" icon={<Scroll />}>
      <CardContent className="space-y-4">
        {questLog.inProgress.map((quest, idx) => (
          <QuestCard
            quest={quest}
            key={idx}
            isLast={idx === questLog.inProgress.length - 1}
          >
            <ContainerItemSection title={`Progress: ${quest.progress}%`}>
              <Progress value={quest.progress} className="mt-2 h-2" />
              <Description
                className="mt-0 text-sm"
                withoutDivider
                description={`Est. Completion: ${quest.estimatedCompletion.toLocaleDateString()}`}
              />
            </ContainerItemSection>
          </QuestCard>
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
      <CardContent className="space-y-4">
        {questLog.completed.map((quest, idx) => (
          <QuestCard
            quest={quest}
            key={idx}
            isLast={idx === questLog.completed.length - 1}
          >
            <ContainerItemSection
              title={`Completed: ${quest.completionDate.toLocaleDateString()}`}
            />
          </QuestCard>
        ))}
      </CardContent>
    </Container>
  );
}

interface QuestCardProps {
  quest: Quest;
  children: React.ReactNode;
  isLast?: boolean;
}

function QuestCard({
  quest,
  children: completionDetails,
  isLast = false,
}: QuestCardProps) {
  return (
    <ContainerItem className="rounded-none border-0 p-0">
      <ContainerItemHeader title={quest.name} icon={quest.icon || "🏆"}>
        <Badge variant={`difficulty-${quest.difficulty}`} className="ml-auto">
          {DifficultyToName[quest.difficulty]}
        </Badge>
      </ContainerItemHeader>
      <ContainerItemSection title="Rewards">
        <List items={quest.rewards} />
      </ContainerItemSection>
      {completionDetails}
      <Description description={quest.description} />
      {!isLast && <ContainerItemDivider />}
    </ContainerItem>
  );
}
