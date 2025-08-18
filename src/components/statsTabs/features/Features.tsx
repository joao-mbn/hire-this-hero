import { CardContent, Container } from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { BriefcaseBusiness, Star } from "lucide-react";
import { FeatureLineItem } from "./FeatureCard";

export function Features() {
  const character = useCharacterContext();
  const { features } = character;

  return (
    <div className="grid grid-cols-1 gap-6">
      <Container title="Class Features" icon={<BriefcaseBusiness />}>
        <CardContent className="space-y-2">
          {features
            .filter((feature) => feature.origin === "class")
            .map((feature, i) => (
              <FeatureLineItem feature={feature} key={i} />
            ))}
        </CardContent>
      </Container>

      <Container title="Other Features" icon={<Star />}>
        <CardContent className="space-y-2">
          {features
            .filter((feature) => feature.origin === "others")
            .map((feature, i) => (
              <FeatureLineItem feature={feature} key={i} />
            ))}
        </CardContent>
      </Container>
    </div>
  );
}
