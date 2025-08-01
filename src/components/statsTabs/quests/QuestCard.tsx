import { BlockCard, Description } from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { DifficultyToName } from "@/data/maps";
import type { Quest } from "@/data/types";
import { difficultyColor } from "@/lib/utils";
import { Scroll, Trophy } from "lucide-react";
import { Badge, CardContent, List, Progress } from "../../base/";

export function CurrentQuestBlock() {
  const character = useCharacterContext();
  const { questLog } = character;

  return (
    <BlockCard title="Current Quests" icon={<Scroll />}>
      <CardContent className="space-y-6">
        {questLog.inProgress.map((quest, idx) => (
          <QuestCard quest={quest} key={idx}>
            <div className="mt-2 text-sm text-muted-foreground">
              <div className="mb-1 flex justify-between">
                <span>Progress</span>
                <span>{quest.progress}%</span>
              </div>
              <Progress value={quest.progress} className="h-2" />
              <p className="text-muted-foreground">
                Est. Completion:{" "}
                {quest.estimatedCompletion.toLocaleDateString()}
              </p>
            </div>
          </QuestCard>
        ))}
      </CardContent>
    </BlockCard>
  );
}

export function CompletedQuestBlock() {
  const character = useCharacterContext();
  const { questLog } = character;

  return (
    <BlockCard title="Completed Quests" icon={<Trophy />}>
      <CardContent className="space-y-6">
        {questLog.completed.map((quest, idx) => (
          <QuestCard quest={quest} key={idx}>
            <p className="text-sm text-muted-foreground">
              Completed: {quest.completionDate.toLocaleDateString()}
            </p>
          </QuestCard>
        ))}
      </CardContent>
    </BlockCard>
  );
}

interface QuestCardProps {
  quest: Quest;
  children: React.ReactNode;
}

function QuestCard({ quest, children: completionDetails }: QuestCardProps) {
  return (
    <div className="rounded border border-border p-4">
      <div className="flex items-center gap-2">
        <div className="text-xl">{quest.icon || "🏆"}</div>
        <span className="text-xl font-bold">{quest.name}</span>
        <Badge
          className={`${difficultyColor(quest.difficulty)} ml-auto text-white`}
        >
          {DifficultyToName[quest.difficulty]}
        </Badge>
      </div>
      <div className="mt-2 flex flex-col">
        <p className="font-semibold">Rewards:</p>
        <List items={quest.rewards} />
      </div>
      {completionDetails}
      <Description description={quest.description} />
    </div>
  );
}
