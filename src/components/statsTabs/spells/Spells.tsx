import {
  CardContent,
  Container,
  ContainerItem,
  ContainerItemDivider,
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
      <CardContent className="space-y-4">
        {spells.map((spell, i) => (
          <ContainerItem key={i} className="rounded-none border-0 p-0">
            <div className="px-4">
              <ContainerItemHeader title={spell.name} icon={spell.icon || "✨"}>
                <Badge className="ml-auto" variant="outline">
                  Charges: {spell.charges.current}/{spell.charges.max}
                </Badge>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="default" hover>
                        {spell.recovery}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Description
                        withoutDivider
                        description={`Recovers all charges at a ${RecoveryToName[spell.recovery]}`}
                      />
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
            </div>
            {i !== spells.length - 1 && <ContainerItemDivider />}
          </ContainerItem>
        ))}
      </CardContent>
    </Container>
  );
}
