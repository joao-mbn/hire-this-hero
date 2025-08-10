import {
  Container,
  ContainerItem,
  ContainerItemDivider,
  ContainerItemTitle,
  Description,
} from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { DifficultyToName } from "@/data/maps";
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
            <ContainerItem className="flex flex-col items-center rounded-none border-0 text-center">
              <div className="font-emoji text-4xl">{achievement.icon}</div>
              <div className="w-full overflow-hidden">
                <ContainerItemTitle
                  title={achievement.name}
                  className="w-full"
                />
              </div>
              <Badge
                variant={`difficulty-${achievement.difficulty}`}
                className="my-2"
              >
                {DifficultyToName[achievement.difficulty]}
              </Badge>
              <Description
                description={achievement.description}
                withoutDivider
              />
              <Description
                description={`Earned: ${achievement.dateEarned}`}
                withoutDivider
              />
            </ContainerItem>

            {idx % 2 === 0 && idx < achievements.length - 1 && (
              <div className="h-[calc(100%-2rem)] w-0.5 translate-y-4 bg-gradient-to-b from-old-gold-400 via-old-gold-600 to-old-gold-400" />
            )}

            {idx % 2 === 1 && idx < achievements.length - 1 && (
              <div className="col-span-3 w-full px-4">
                <ContainerItemDivider className="mt-0" />
              </div>
            )}
          </Fragment>
        ))}
      </CardContent>
    </Container>
  );
}
