import {
  Container,
  ContainerItem,
  ContainerItemTitle,
  Description,
} from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { DifficultyToName } from "@/data/maps";
import { Award } from "lucide-react";
import { Badge, CardContent } from "../../base/";

export function Achievements() {
  const character = useCharacterContext();
  const { achievements } = character;

  return (
    <Container title="Achievements" icon={<Award />}>
      <CardContent className="grid grid-cols-2 gap-6">
        {achievements.map((achievement, idx) => (
          <ContainerItem
            key={idx}
            className="flex flex-col items-center text-center"
          >
            <div className="text-4xl">{achievement.icon}</div>
            <div className="w-full overflow-hidden">
              <ContainerItemTitle title={achievement.name} className="w-full" />
            </div>
            <Badge
              variant={`difficulty-${achievement.difficulty}`}
              className="my-2"
            >
              {DifficultyToName[achievement.difficulty]}
            </Badge>
            <Description description={achievement.description} withoutDivider />
            <Description
              description={`Earned: ${achievement.dateEarned}`}
              withoutDivider
            />
          </ContainerItem>
        ))}
      </CardContent>
    </Container>
  );
}
