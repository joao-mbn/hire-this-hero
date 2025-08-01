import { BlockCard } from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { RarityToName } from "@/data/maps";
import { rarityColor } from "@/lib/utils";
import { Award } from "lucide-react";
import { Badge, CardContent } from "../../base/";

export function Achievements() {
  const character = useCharacterContext();
  const { achievements } = character;

  return (
    <BlockCard title="Achievements" icon={<Award />}>
      <CardContent className="grid grid-cols-2 gap-6">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="rounded border border-border p-4">
            <div className="text-center">
              <div className="mb-2 text-4xl">{achievement.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{achievement.name}</h3>
              <Badge
                className={`mb-2 ${rarityColor(achievement.difficulty)} text-white`}
              >
                {RarityToName[achievement.difficulty]}
              </Badge>
              <p className="mb-2 text-sm text-muted-foreground">
                {achievement.description}
              </p>
              <p className="text-xs text-muted-foreground">
                Earned: {achievement.dateEarned}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </BlockCard>
  );
}
