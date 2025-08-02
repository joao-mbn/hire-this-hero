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
import { Divider } from "../base/divider";

export function Level() {
  const character = useCharacterContext();

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant="default" className="font-cinzel" hover>
          <Ruler className="mr-1 h-3 w-3" />
          Level {character.experience.level}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipContentHeader title="Experience" />
        <Description
          withoutDivider
          className="font-semibold"
          description={`Level ${character.experience.level}/${MAX_LEVEL} • ${character.experience.yearsOfExperience} years of experience • ${character.experience.percentageToNextLevel}% to next level`}
        />
        <Progress
          className="h-2"
          value={character.experience.percentageToNextLevel}
        />
        <Divider />
        <List
          items={[
            `Proficiency bonus: +${character.experience.proficiencyBonus}`,
            `Attribute Leveling: You get 2 attribute points to spend at levels ${character.experience.attributeLeveling.join(", ")}`,
          ]}
        />
        <Description description={character.experience.description} />
      </TooltipContent>
    </Tooltip>
  );
}
