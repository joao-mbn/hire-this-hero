import { useCharacterContext } from "@/contexts/CharacterContext";
import { BriefcaseBusiness, Star } from "lucide-react";
import { BlockCard, CardContent } from "../../ui/card";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  const character = useCharacterContext();
  const { features } = character;

  return (
    <div className="grid grid-cols-1 gap-6">
      <BlockCard
        title="Profession Features"
        icon={<BriefcaseBusiness className="h-5 w-5 text-primary" />}
      >
        <CardContent className="space-y-6">
          {features
            .filter((feature) => feature.origin === "profession")
            .map((feature, i) => (
              <FeatureCard feature={feature} key={i} />
            ))}
        </CardContent>
      </BlockCard>

      <BlockCard
        title="Other Features"
        icon={<Star className="h-5 w-5 text-primary" />}
      >
        <CardContent className="space-y-6">
          {features
            .filter((feature) => feature.origin === "others")
            .map((feature, i) => (
              <FeatureCard feature={feature} key={i} />
            ))}
        </CardContent>
      </BlockCard>
    </div>
  );
}
