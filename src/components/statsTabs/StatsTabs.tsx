import type { Character } from "@/data/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Biography } from "./biography/Biography";
import { Details } from "./details/Details";
import { Inventory } from "./Inventory";
import { Quests } from "./quests/Quests";
import { SkillTree } from "./SkillTree";

interface StatsTabsProps {
  character: Character;
}

export function StatsTabs({ character }: StatsTabsProps) {
  return (
    <Tabs defaultValue="details" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4 bg-card/50 md:grid-cols-5">
        <TabsTrigger value="details" className="">
          Details
        </TabsTrigger>
        <TabsTrigger value="skills" className="">
          Skills
        </TabsTrigger>
        <TabsTrigger value="inventory" className="">
          Inventory
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

      <TabsContent value="skills">
        <SkillTree skillTree={character.skillTree} />
      </TabsContent>

      <TabsContent value="inventory">
        <Inventory />
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
