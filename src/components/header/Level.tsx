import { useCharacterContext } from "@/contexts/CharacterContext";
import { Ruler } from "lucide-react";
import {
  Effects,
  TooltipContentResultDescription,
} from "../TooltipContentResultDescription";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
        <TooltipContentResultDescription
          results={
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 border-b pb-2">
                <span className="font-semibold text-muted-foreground">
                  Level {character.experience.level} •{" "}
                  {character.experience.yearsOfExperience} years of experience •{" "}
                  {character.experience.percentageToNextLevel}% to next level
                </span>
                <Progress
                  className="h-2"
                  value={character.experience.percentageToNextLevel}
                  max={100}
                />
              </div>
              <Effects
                effects={[
                  `Proficiency bonus: +${character.experience.proficiencyBonus}`,
                  `Attribute Leveling: You get 2 attribute points to spend at levels ${character.experience.attributeLeveling.join(", ")}`,
                ]}
              />
            </div>
          }
          description={character.experience.description}
          title="Experience"
        />
      </TooltipContent>
    </Tooltip>
  );
}
