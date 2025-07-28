import type { Character } from "@/data/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Achievements } from "./Achievements";
import { Biography } from "./Biography";
import { Details } from "./Details/Details";
import { Inventory } from "./Inventory";
import { Quests } from "./Quests";
import { SkillTree } from "./SkillTree";

interface StatsTabsProps {
  character: Character;
}

export function StatsTabs({ character }: StatsTabsProps) {
  return (
    <Tabs defaultValue="details" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4 bg-card/50 md:grid-cols-6">
        <TabsTrigger value="details" className="">
          Details
        </TabsTrigger>
        <TabsTrigger value="skills" className="">
          Skills
        </TabsTrigger>
        <TabsTrigger value="inventory" className="">
          Inventory
        </TabsTrigger>
        <TabsTrigger value="achievements" className="">
          Achievements
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

      {/* Inventory Tab */}
      <TabsContent value="inventory">
        <Inventory inventory={character.inventory} />
      </TabsContent>

      <TabsContent value="achievements">
        <Achievements achievements={character.achievements} />
      </TabsContent>

      <TabsContent value="quests">
        <Quests quests={character.questLog} />
      </TabsContent>

      <TabsContent value="biography">
        <Biography background={character.background} />
      </TabsContent>
    </Tabs>
  );
}
