import type { Character } from "@/data/types";
import { Attributes } from "../Attributes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Achievements } from "./Achievements";
import { Biography } from "./Biography";
import { Inventory } from "./Inventory";
import { Quests } from "./Quests";
import { SkillTree } from "./SkillTree";

interface StatsTabsProps {
  character: Character;
}

export function StatsTabs({ character }: StatsTabsProps) {
  return (
    <Tabs defaultValue="skills" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4 bg-card/50 md:grid-cols-6">
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
        <TabsTrigger value="attributes" className="">
          Attributes
        </TabsTrigger>
      </TabsList>

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

      <TabsContent value="attributes">
        <Attributes character={character} />
      </TabsContent>
    </Tabs>
  );
}
