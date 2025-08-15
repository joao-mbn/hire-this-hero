import { Container } from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { BriefcaseBusiness, Star } from "lucide-react";
import { CardContent } from "../../base/";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  const character = useCharacterContext();
  const { features } = character;

  return (
    <div className="grid grid-cols-1 gap-6">
      <Container title="Class Features" icon={<BriefcaseBusiness />}>
        <CardContent className="space-y-4">
          {features
            .filter((feature) => feature.origin === "class")
            .map((feature, i, arr) => (
              <FeatureCard
                feature={feature}
                key={i}
                isLast={i === arr.length - 1}
              />
            ))}
        </CardContent>
      </Container>

      <Container title="Other Features" icon={<Star />}>
        <CardContent className="space-y-4">
          {features
            .filter((feature) => feature.origin === "others")
            .map((feature, i, arr) => (
              <FeatureCard
                feature={feature}
                key={i}
                isLast={i === arr.length - 1}
              />
            ))}
        </CardContent>
      </Container>
    </div>
  );
}
