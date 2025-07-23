import type { Character } from "@/data/types";
import { rarityColor } from "@/lib/utils";
import { Scroll, Trophy } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

interface QuestsProps {
  quests: Character["questLog"];
}

export function Quests({ quests }: QuestsProps) {
  return (
    <div className="space-y-6">
      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-cinzel">
            <Trophy className="h-5 w-5 text-primary" />
            Completed Quests
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quests.completed.map((quest, idx) => (
            <div key={idx} className="rounded border border-border p-4">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="font-cinzel font-bold">{quest.name}</h3>
                <Badge
                  className={`${rarityColor(quest.difficulty)} text-white`}
                >
                  {quest.difficulty}
                </Badge>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                {quest.description}
              </p>
              <p className="mb-1 text-xs font-semibold text-accent">
                Reward: {quest.reward}
              </p>
              <p className="text-xs text-muted-foreground">
                Company: {quest.company}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-cinzel">
            <Scroll className="h-5 w-5 text-primary" />
            Current Quests
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quests.inProgress.map((quest, idx) => (
            <div key={idx} className="rounded border border-border p-4">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="font-cinzel font-bold">{quest.name}</h3>
                <Badge
                  className={`${rarityColor(quest.difficulty)} text-white`}
                >
                  {quest.difficulty}
                </Badge>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                {quest.description}
              </p>
              <div className="mb-2">
                <div className="mb-1 flex justify-between text-xs">
                  <span>Progress</span>
                  <span>{quest.progress}%</span>
                </div>
                <Progress value={quest.progress} className="h-2" />
              </div>
              <p className="text-xs text-muted-foreground">
                Est. Completion: {quest.estimatedCompletion}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
