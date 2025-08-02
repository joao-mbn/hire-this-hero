import {
  Badge,
  CardContent,
  Container,
  ContainerItem,
  ContainerItemHeader,
  ContainerItemSection,
  Description,
  List,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { ItemTypeToName, RarityToName } from "@/data/maps";
import type { Item, ItemType } from "@/data/types";
import { cn, rarityColor } from "@/lib/utils";
import { Backpack, Shield, Sword } from "lucide-react";

export function Inventory() {
  const character = useCharacterContext();
  const inventoryItemTypeToDisplay: Record<
    ItemType,
    { icon: React.ReactNode; title: string; items: Item[] }
  > = {
    weapons: {
      icon: <Sword />,
      title: ItemTypeToName["weapons"],
      items: character.inventory.weapons,
    },
    equipments: {
      icon: <Backpack />,
      title: ItemTypeToName["equipments"],
      items: character.inventory.equipments,
    },
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {Object.entries(inventoryItemTypeToDisplay).map(
        ([itemType, { icon, title, items }]) => (
          <div key={itemType}>
            <Container title={title} icon={icon}>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <InventoryItem item={item} key={item.name} />
                ))}
              </CardContent>
            </Container>
          </div>
        ),
      )}
    </div>
  );
}

interface InventoryItemProps {
  item: Item;
}

function InventoryItem({ item }: InventoryItemProps) {
  return (
    <ContainerItem>
      <ContainerItemHeader title={item.name} icon={item.icon || "💼"}>
        <Tooltip>
          <TooltipTrigger className="ml-auto">
            <Shield
              className={cn(
                "h-5 w-5 text-primary",
                item.equipped && "fill-primary",
              )}
            />
          </TooltipTrigger>
          <TooltipContent>
            {item.equipped ? "Equipped" : "Unequipped"}
          </TooltipContent>
        </Tooltip>
      </ContainerItemHeader>

      <ContainerItemSection title={""}>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{item.subtype}</Badge>
          <Badge className={`${rarityColor(item.rarity)} text-white`}>
            {RarityToName[item.rarity]}
          </Badge>
        </div>
      </ContainerItemSection>

      <ContainerItemSection title="Stats">
        <List items={item.stats} />
      </ContainerItemSection>
      <Description description={item.description} />
    </ContainerItem>
  );
}
