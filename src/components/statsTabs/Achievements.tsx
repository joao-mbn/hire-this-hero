import type { Character } from "@/data/types";
import { rarityColor } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

interface AchievementsProps {
  character: Character;
}

export function Achievements({ character }: AchievementsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {character.achievements.map((achievement, idx) => (
        <Card key={idx} className="parchment-card">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="mb-2 text-4xl">{achievement.icon}</div>
              <h3 className="mb-2 font-cinzel text-lg font-bold">
                {achievement.name}
              </h3>
              <Badge
                className={`mb-2 ${rarityColor(achievement.rarity)} text-white`}
              >
                {achievement.rarity}
              </Badge>
              <p className="mb-2 text-sm text-muted-foreground">
                {achievement.description}
              </p>
              <p className="text-xs text-muted-foreground">
                Earned: {achievement.dateEarned}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
