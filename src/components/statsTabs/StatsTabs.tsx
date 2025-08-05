import {
  Backpack,
  BookOpen,
  ListCollapse,
  ScrollText,
  Sparkles,
  Star,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../base/";
import { Biography } from "./biography/Biography";
import { Details } from "./details/Details";
import { Features } from "./features/Features";
import { Inventory } from "./inventory/Inventory";
import { Quests } from "./quests/Quests";
import { Spells } from "./spells/Spells";

interface TabConfig {
  value: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  Component: React.ComponentType;
}

const tabConfigs: TabConfig[] = [
  {
    value: "details",
    label: "Details",
    Icon: ListCollapse,
    Component: Details,
  },
  {
    value: "inventory",
    label: "Inventory",
    Icon: Backpack,
    Component: Inventory,
  },
  { value: "features", label: "Features", Icon: Star, Component: Features },
  { value: "spells", label: "Spells", Icon: Sparkles, Component: Spells },
  { value: "quests", label: "Quests", Icon: ScrollText, Component: Quests },
  {
    value: "biography",
    label: "Biography",
    Icon: BookOpen,
    Component: Biography,
  },
];

export function StatsTabs() {
  return (
    <Tabs defaultValue="details" className="space-y-6">
      <TabsList className="bg-background/50 grid w-full grid-cols-6">
        {tabConfigs.map(({ value, label, Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex items-center gap-2"
          >
            <Icon className="h-5 w-5" />
            <span className="hidden lg:inline">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabConfigs.map(({ value, Component }) => (
        <TabsContent key={value} value={value}>
          <Component />
        </TabsContent>
      ))}
    </Tabs>
  );
}
