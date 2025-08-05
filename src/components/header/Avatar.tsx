import characterProfile from "@/assets/characterProfile.png";
import { useCharacterContext } from "@/contexts/CharacterContext";

export function Avatar() {
  const character = useCharacterContext();

  return (
    <div className="h-56 w-56 overflow-hidden rounded-full border-2 border-old-gold-300 bg-old-gold-100">
      <img
        src={characterProfile}
        alt={`${character.name} - Character Portrait`}
        className="h-full w-full object-cover mix-blend-normal"
      />
    </div>
  );
}
