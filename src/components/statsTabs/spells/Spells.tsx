import {
  CardContent,
  Container,
  ContainerItem,
  ContainerItemHeader,
  ContainerItemSection,
  Description,
} from "@/components/base/";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { RecoveryToName } from "@/data/maps";
import { Sparkles } from "lucide-react";
import {
  Badge,
  List,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../base/";

export function Spells() {
  const character = useCharacterContext();
  const { spells } = character;

  return (
    <Container title="Spells" icon={<Sparkles />}>
      <CardContent className="grid grid-cols-1 gap-6">
        {spells.map((spell, i) => (
          <ContainerItem key={i}>
            <ContainerItemHeader title={spell.name} icon={spell.icon || "✨"}>
              <Badge className="ml-auto" variant="default">
                Charges: {spell.charges.current}/{spell.charges.max}
              </Badge>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="default">{spell.recovery}</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    Recovers all charges at a {RecoveryToName[spell.recovery]}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </ContainerItemHeader>

            <ContainerItemSection title="Effects">
              <List items={spell.effects} />
            </ContainerItemSection>

            <ContainerItemSection title="Components">
              <List items={spell.components} />
            </ContainerItemSection>

            <ContainerItemSection title={`Duration: ${spell.duration}`} />

            <Description description={spell.description} />
          </ContainerItem>
        ))}
      </CardContent>
    </Container>
  );
}
