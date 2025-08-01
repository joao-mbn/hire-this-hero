import { Container, Description } from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { RarityToName } from "@/data/maps";
import { rarityColor } from "@/lib/utils";
import { Award } from "lucide-react";
import { Badge, CardContent } from "../../base/";

export function Achievements() {
  const character = useCharacterContext();
  const { achievements } = character;

  return (
    <Container title="Achievements" icon={<Award />}>
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
              <Description
                description={achievement.description}
                withoutDivider
              />
              <Description
                description={`Earned: ${achievement.dateEarned}`}
                withoutDivider
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Container>
  );
}
