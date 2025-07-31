import { useCharacterContext } from "@/contexts/CharacterContext";
import { ItemTypeToName, RarityToName } from "@/data/maps";
import type { Item, ItemType } from "@/data/types";
import { cn, rarityColor } from "@/lib/utils";
import { Shield, Sword } from "lucide-react";
import { Effects } from "../TooltipContentResultDescription";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function Inventory() {
  const character = useCharacterContext();
  const inventoryItemTypeToDisplay: Record<
    ItemType,
    { icon: React.ReactNode; title: string; items: Item[] }
  > = {
    weapons: {
      icon: <Sword className="h-5 w-5 text-primary" />,
      title: ItemTypeToName["weapons"],
      items: character.inventory.weapons,
    },
    equipments: {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: ItemTypeToName["equipments"],
      items: character.inventory.equipments,
    },
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {Object.entries(inventoryItemTypeToDisplay).map(
        ([itemType, { icon, title, items }]) => (
          <div key={itemType}>
            <Card className="">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {icon}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <InventoryItem item={item} key={item.name} />
                ))}
              </CardContent>
            </Card>
          </div>
        ),
      )}
    </div>
  );
}

interface InventoryItemProps {
  item: Item;
}

const InventoryItem = ({ item }: InventoryItemProps) => (
  <div className="flex flex-col gap-2 rounded border border-border p-3">
    <div className="flex justify-between">
      <h4 className="font-semibold">{item.name}</h4>
      <Tooltip>
        <TooltipTrigger>
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
    </div>
    <div className="flex gap-1">
      <Badge variant="default">{item.subtype}</Badge>
      <Badge className={`text-xs ${rarityColor(item.rarity)} text-white`}>
        {RarityToName[item.rarity]}
      </Badge>
    </div>
    <Effects effects={item.stats} />
    <p className="border-t border-border/30 pt-2 text-sm whitespace-pre-line">
      {item.description}
    </p>
  </div>
);
