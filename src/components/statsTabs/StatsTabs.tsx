import type { Character } from "@/data/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Achievements } from "./Achievements";
import { Background } from "./Background";
import { Inventory } from "./Inventory";
import { Quests } from "./Quests";
import { SkillTree } from "./SkillTree";
import { Traits } from "./Traits";

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
        <TabsTrigger value="background" className="">
          Background
        </TabsTrigger>
        <TabsTrigger value="traits" className="">
          Traits
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

      <TabsContent value="background">
        <Background background={character.background} />
      </TabsContent>

      <TabsContent value="traits">
        <Traits traits={character.background} />
      </TabsContent>
    </Tabs>
  );
}
