import { Progress, ProgressIndicator } from "@/components/ui/progress";
import { useCharacterContext } from "@/contexts/CharacterContext";

export function ExperienceBar() {
  const character = useCharacterContext();

  return (
    <Progress
      className="h-6 max-w-64"
      value={character.experience.percentageToNextLevel}
    >
      <ProgressIndicator
        className="h-full"
        style={{ width: `${character.experience.percentageToNextLevel}%` }}
      >
        <span className="p-2 font-bold text-white">
          {character.experience.percentageToNextLevel}% to next level
        </span>
      </ProgressIndicator>
    </Progress>
  );
}
