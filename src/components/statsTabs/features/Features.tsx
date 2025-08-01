import { BlockCard } from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { BriefcaseBusiness, Star } from "lucide-react";
import { CardContent } from "../../base/";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  const character = useCharacterContext();
  const { features } = character;

  return (
    <div className="grid grid-cols-1 gap-6">
      <BlockCard title="Profession Features" icon={<BriefcaseBusiness />}>
        <CardContent className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {features
            .filter((feature) => feature.origin === "profession")
            .map((feature, i) => (
              <FeatureCard feature={feature} key={i} />
            ))}
        </CardContent>
      </BlockCard>

      <BlockCard title="Other Features" icon={<Star />}>
        <CardContent className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
