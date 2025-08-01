import { useCharacterContext } from "@/contexts/CharacterContext";
import { MAX_LEVEL } from "@/lib/utils";
import { Ruler } from "lucide-react";
import {
  Badge,
  Description,
  List,
  Progress,
  Tooltip,
  TooltipContent,
  TooltipContentHeader,
  TooltipTrigger,
} from "../base/";

export function Level() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant="default" className="font-cinzel">
          <Ruler className="mr-1 h-3 w-3" />
          Level {character.experience.level}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentHeader title="Experience" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 border-b pb-2">
            <span className="font-semibold text-muted-foreground">
              Level {character.experience.level}/{MAX_LEVEL} •{" "}
              {character.experience.yearsOfExperience} years of experience •{" "}
              {character.experience.percentageToNextLevel}% to next level
            </span>
            <Progress
              className="h-2"
              value={character.experience.percentageToNextLevel}
            />
          </div>
          <List
            items={[
              `Proficiency bonus: +${character.experience.proficiencyBonus}`,
              `Attribute Leveling: You get 2 attribute points to spend at levels ${character.experience.attributeLeveling.join(", ")}`,
            ]}
          />
        </div>
        <Description description={character.experience.description} />
      </TooltipContent>
    </Tooltip>
  );
}
