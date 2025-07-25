import characterProfile from "@/assets/characterProfile.png";
import type { Character } from "@/data/types";
import { HealthBar } from "./HealthBar";

interface SideContainerProps {
  character: Character;
}

export function SideContainer({ character }: SideContainerProps) {
  return (
    <div>
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
      <HealthBar
        current={character.health.current}
        max={character.health.max}
        className="mt-4"
      />
    </div>
  );
}
