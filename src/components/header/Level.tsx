import { useCharacterContext } from "@/contexts/CharacterContext";
import { MAX_LEVEL } from "@/lib/utils";
import {
  Description,
  List,
  Progress,
  SemiCircularProgress,
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
        <SemiCircularProgress
          progress={character.experience.percentageToNextLevel}
          backgroundColor="stroke-old-gold-500/30"
          gradient={{
            stops: [
              { offset: "0%", color: "var(--color-old-gold-400)" },
              { offset: "25%", color: "var(--color-old-gold-500)" },
              { offset: "50%", color: "var(--color-old-gold-400)" },
              { offset: "75%", color: "var(--color-old-gold-500)" },
              { offset: "100%", color: "var(--color-old-gold-400)" },
            ],
          }}
          rotation={90}
          className="cursor-pointer"
        />
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
