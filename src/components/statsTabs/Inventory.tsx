import type {
  ArmorItem,
  Character,
  ConsumableItem,
  Item,
  WeaponItem,
} from "@/data/types";
import { rarityColor } from "@/lib/utils";
import { Shield, Sword } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface InventoryProps {
  inventory: Character["inventory"];
}

export function Inventory({ inventory }: InventoryProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-cinzel">
            <Sword className="h-5 w-5 text-primary" />
            Weapons & Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[...inventory.weapons, ...inventory.tools].map((item) => (
            <InventoryWeapon item={item} key={item.name} />
          ))}
        </CardContent>
      </Card>

      <Card className="parchment-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-cinzel">
            <Shield className="h-5 w-5 text-primary" />
            Armor & Consumables
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[...inventory.armor, ...inventory.consumables].map((item) => (
            <InventoryArmor item={item} key={item.name} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

interface InventoryWeaponProps {
  item: WeaponItem | Item;
}

const InventoryWeapon = ({ item }: InventoryWeaponProps) => (
  <div className="rounded border border-border p-3">
    <div className="mb-2 flex items-center gap-2">
      <h4 className="font-cinzel font-semibold">{item.name}</h4>
      {"rarity" in item && (
        <Badge className={`text-xs ${rarityColor(item.rarity)} text-white`}>
          {item.rarity}
        </Badge>
      )}
    </div>
    <p className="mb-1 text-xs text-muted-foreground">{item.type}</p>
    {"stats" in item && (
      <p className="text-xs font-semibold text-accent">{item.stats}</p>
    )}
    <p className="text-xs italic">{item.description}</p>
  </div>
);

interface InventoryArmorProps {
  item: ArmorItem | ConsumableItem;
}

const InventoryArmor = ({ item }: InventoryArmorProps) => (
  <div className="rounded border border-border p-3">
    <div className="mb-2 flex items-center gap-2">
      <h4 className="font-cinzel font-semibold">{item.name}</h4>
      {"rarity" in item && (
        <Badge className={`text-xs ${rarityColor(item.rarity)} text-white`}>
          {item.rarity}
        </Badge>
      )}
      {"quantity" in item && (
        <Badge variant="secondary" className="text-xs">
          {item.quantity}
        </Badge>
      )}
    </div>
    <p className="mb-1 text-xs text-muted-foreground">{item.type}</p>
    {"stats" in item && (
      <p className="text-xs font-semibold text-accent">{item.stats}</p>
    )}
    {"effect" in item && (
      <p className="text-xs font-semibold text-accent">{item.effect}</p>
    )}
    <p className="text-xs italic">{item.description}</p>
  </div>
);
