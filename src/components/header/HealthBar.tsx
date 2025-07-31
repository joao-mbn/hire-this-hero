import { Progress, ProgressIndicator } from "@/components/ui/progress";
import { useCharacterContext } from "@/contexts/CharacterContext";

export function HealthBar() {
  const character = useCharacterContext();

  const healthPercentage =
    (character.health.current / character.health.max) * 100;

  return (
    <Progress className="h-6 max-w-64">
      <ProgressIndicator
        className="h-full bg-ruby"
        style={{ width: `${healthPercentage}%` }}
      >
        <span className="p-2 font-bold text-white">
          HP: {character.health.current}/{character.health.max}
        </span>
      </ProgressIndicator>
    </Progress>
  );
}
