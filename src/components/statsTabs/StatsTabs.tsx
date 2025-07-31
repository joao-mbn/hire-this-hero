import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Biography } from "./biography/Biography";
import { Details } from "./details/Details";
import { Features } from "./features/Features";
import { Inventory } from "./Inventory";
import { Quests } from "./quests/Quests";
import { Spells } from "./spells/Spells";

export function StatsTabs() {
  return (
    <Tabs defaultValue="details" className="space-y-6">
      <TabsList className="grid w-full grid-cols-3 bg-card/50 lg:grid-cols-6">
        <TabsTrigger value="details" className="">
          Details
        </TabsTrigger>
        <TabsTrigger value="inventory" className="">
          Inventory
        </TabsTrigger>
        <TabsTrigger value="features" className="">
          Features
        </TabsTrigger>
        <TabsTrigger value="spells" className="">
          Spells
        </TabsTrigger>
        <TabsTrigger value="quests" className="">
          Quests
        </TabsTrigger>
        <TabsTrigger value="biography" className="">
          Biography
        </TabsTrigger>
      </TabsList>

      <TabsContent value="details">
        <Details />
      </TabsContent>

      <TabsContent value="inventory">
        <Inventory />
      </TabsContent>

      <TabsContent value="features">
        <Features />
      </TabsContent>

      <TabsContent value="spells">
        <Spells />
      </TabsContent>

      <TabsContent value="quests">
        <Quests />
      </TabsContent>

      <TabsContent value="biography">
        <Biography />
      </TabsContent>
    </Tabs>
  );
}
