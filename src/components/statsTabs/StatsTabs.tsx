import type {
  ArmorItem,
  Character,
  ConsumableItem,
  ToolItem,
  WeaponItem,
} from "@/data/types";
import { Scroll, Shield, Sword, Trophy } from "lucide-react";
import { SkillTree } from "../SkillTree";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface StatsTabsProps {
  character: Character;
}

export function StatsTabs({ character }: StatsTabsProps) {
  const RarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "legendary":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "epic":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "rare":
        return "bg-gradient-to-r from-blue-500 to-indigo-500";
      case "uncommon":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  const renderWeaponItem = (item: WeaponItem | ToolItem, idx: number) => (
    <div key={idx} className="rounded border border-border p-3">
      <div className="mb-2 flex items-center gap-2">
        <h4 className="font-cinzel font-semibold">{item.name}</h4>
        <Badge className={`text-xs ${RarityColor(item.rarity)} text-white`}>
          {item.rarity}
        </Badge>
      </div>
      <p className="mb-1 text-xs text-muted-foreground">{item.type}</p>
      {"stats" in item && (
        <p className="text-xs font-semibold text-accent">{item.stats}</p>
      )}
      <p className="text-xs italic">{item.description}</p>
    </div>
  );

  const renderArmorItem = (item: ArmorItem | ConsumableItem, idx: number) => (
    <div key={idx} className="rounded border border-border p-3">
      <div className="mb-2 flex items-center gap-2">
        <h4 className="font-cinzel font-semibold">{item.name}</h4>
        {"rarity" in item && (
          <Badge className={`text-xs ${RarityColor(item.rarity)} text-white`}>
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

  return (
    <Tabs defaultValue="skills" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4 bg-card/50 md:grid-cols-6">
        <TabsTrigger value="skills" className="font-cinzel">
          Skills
        </TabsTrigger>
        <TabsTrigger value="inventory" className="font-cinzel">
          Inventory
        </TabsTrigger>
        <TabsTrigger value="achievements" className="font-cinzel">
          Achievements
        </TabsTrigger>
        <TabsTrigger value="quests" className="font-cinzel">
          Quests
        </TabsTrigger>
        <TabsTrigger value="background" className="font-cinzel">
          Lore
        </TabsTrigger>
        <TabsTrigger value="traits" className="font-cinzel">
          Traits
        </TabsTrigger>
      </TabsList>

      {/* Skills Tab */}
      <TabsContent value="skills">
        <SkillTree />
      </TabsContent>

      {/* Inventory Tab */}
      <TabsContent value="inventory">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Weapons */}
          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-cinzel">
                <Sword className="h-5 w-5 text-primary" />
                Weapons & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                ...character.inventory.weapons,
                ...character.inventory.tools,
              ].map((item, idx) => renderWeaponItem(item, idx))}
            </CardContent>
          </Card>

          {/* Armor & Consumables */}
          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-cinzel">
                <Shield className="h-5 w-5 text-primary" />
                Armor & Consumables
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                ...character.inventory.armor,
                ...character.inventory.consumables,
              ].map((item, idx) => renderArmorItem(item, idx))}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* Achievements Tab */}
      <TabsContent value="achievements">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {character.achievements.map((achievement, idx) => (
            <Card key={idx} className="parchment-card">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="mb-2 text-4xl">{achievement.icon}</div>
                  <h3 className="mb-2 font-cinzel text-lg font-bold">
                    {achievement.name}
                  </h3>
                  <Badge
                    className={`mb-2 ${RarityColor(achievement.rarity)} text-white`}
                  >
                    {achievement.rarity}
                  </Badge>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Earned: {achievement.dateEarned}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Quests Tab */}
      <TabsContent value="quests">
        <div className="space-y-6">
          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-cinzel">
                <Trophy className="h-5 w-5 text-primary" />
                Completed Quests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {character.questLog.completed.map((quest, idx) => (
                <div key={idx} className="rounded border border-border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-cinzel font-bold">{quest.name}</h3>
                    <Badge
                      className={`${RarityColor(quest.difficulty)} text-white`}
                    >
                      {quest.difficulty}
                    </Badge>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {quest.description}
                  </p>
                  <p className="mb-1 text-xs font-semibold text-accent">
                    Reward: {quest.reward}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Company: {quest.company}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-cinzel">
                <Scroll className="h-5 w-5 text-primary" />
                Current Quests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {character.questLog.inProgress.map((quest, idx) => (
                <div key={idx} className="rounded border border-border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-cinzel font-bold">{quest.name}</h3>
                    <Badge
                      className={`${RarityColor(quest.difficulty)} text-white`}
                    >
                      {quest.difficulty}
                    </Badge>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {quest.description}
                  </p>
                  <div className="mb-2">
                    <div className="mb-1 flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{quest.progress}%</span>
                    </div>
                    <Progress value={quest.progress} className="h-2" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Est. Completion: {quest.estimatedCompletion}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* Background Tab */}
      <TabsContent value="background">
        <Card className="parchment-card">
          <CardHeader>
            <CardTitle className="rune-text font-uncial text-2xl text-primary">
              Character Lore
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 font-cinzel leading-relaxed text-muted-foreground">
              {character.background.story}
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Traits Tab */}
      <TabsContent value="traits">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="font-cinzel text-lg text-primary">
                ⭐ Ideals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {character.background.ideals.map((ideal, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    "{ideal}"
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="font-cinzel text-lg text-primary">
                🤝 Bonds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {character.background.bonds.map((bond, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    {bond}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="parchment-card">
            <CardHeader>
              <CardTitle className="font-cinzel text-lg text-primary">
                ⚡ Flaws
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {character.background.flaws.map((flaw, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    {flaw}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
