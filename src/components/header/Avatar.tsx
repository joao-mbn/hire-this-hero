import characterProfile from "@/assets/characterProfile.png";
import { useCharacterContext } from "@/contexts/CharacterContext";

export function Avatar() {
  const character = useCharacterContext();

  return (
    <div
      className="h-56 w-56 overflow-hidden rounded-full border-4"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at center, #6b5435 70%, #7a5f3d 90%, #8b6f47 100%)",
      }}
    >
      <img
        src={characterProfile}
        alt={`${character.name} - Character Portrait`}
        className="h-full w-full object-cover mix-blend-normal"
      />
    </div>
  );
}
