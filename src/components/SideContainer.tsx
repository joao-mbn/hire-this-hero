import type { Character } from "@/data/types";
import characterProfile from "../assets/characterProfile.png";

interface SideContainerProps {
  character: Character;
}

export function SideContainer({ character }: SideContainerProps) {
  return (
    <div
      className="relative overflow-hidden rounded-lg border-4"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at center, #6b5435 70%, #7a5f3d 90%, #8b6f47 100%)",
      }}
    >
      <img
        src={characterProfile}
        alt={`${character.name} - Character Portrait`}
        className="h-auto w-full object-cover mix-blend-normal"
      />
    </div>
  );
}
