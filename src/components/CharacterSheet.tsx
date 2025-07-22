import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  Scroll,
  Shield,
  Sword,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SkillTree } from "./SkillTree";

interface WeaponItem {
  name: string;
  type: string;
  rarity: string;
  stats: string;
  description: string;
}

interface ArmorItem {
  name: string;
  type: string;
  rarity: string;
  stats: string;
  description: string;
}

interface ConsumableItem {
  name: string;
  type: string;
  quantity: string;
  effect: string;
  description: string;
}

interface ToolItem {
  name: string;
  type: string;
  rarity: string;
  description: string;
}

interface Character {
  character: {
    name: string;
    title: string;
    level: number;
    class: string;
    alignment: string;
    portrait: string;
    background: {
      story: string;
      ideals: string[];
      bonds: string[];
      flaws: string[];
    };
    attributes: {
      strength: number;
      dexterity: number;
      intelligence: number;
      wisdom: number;
      charisma: number;
    };
    skills: Record<
      string,
      {
        level: number;
        experience: number;
        maxLevel: number;
        subskills: Array<{ name: string; level: number }>;
      }
    >;
    inventory: {
      weapons: WeaponItem[];
      armor: ArmorItem[];
      consumables: ConsumableItem[];
      tools: ToolItem[];
    };
    achievements: Array<{
      name: string;
      description: string;
      icon: string;
      rarity: string;
      dateEarned: string;
    }>;
    questLog: {
      completed: Array<{
        name: string;
        difficulty: string;
        description: string;
        reward: string;
        company: string;
      }>;
      inProgress: Array<{
        name: string;
        difficulty: string;
        description: string;
        progress: number;
        estimatedCompletion: string;
      }>;
    };
    contact: {
      email: string;
      linkedin: string;
      github: string;
      portfolio: string;
    };
  };
}

export const CharacterSheet = () => {
  const [characterData, setCharacterData] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading character data from JSON
    import("../data/character.json")
      .then((data) => {
        setCharacterData(data as Character);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading character data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="floating mb-4 text-6xl">🏰</div>
          <p className="font-cinzel text-xl text-muted-foreground">
            Loading Character Sheet...
          </p>
        </div>
      </div>
    );
  }

  if (!characterData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-cinzel text-xl text-destructive">
          Failed to load character data
        </p>
      </div>
    );
  }

  const { character } = characterData;

  const AttributeGem = ({
    name,
    value,
    type,
  }: {
    name: string;
    value: number;
    type: string;
  }) => (
    <div className="text-center">
      <div className={`attribute-gem ${type.toLowerCase()} mx-auto mb-2`}>
        {value}
      </div>
      <p className="font-cinzel text-sm font-bold">{name}</p>
    </div>
  );

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
    <div className="mx-auto min-h-screen max-w-7xl p-6">
      {/* Character Header */}
      <div className="parchment-card mb-6 p-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
          <div className="relative">
            <div className="mystical-glow flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary bg-gradient-to-br from-primary/20 to-accent/20">
              <span className="text-6xl">⚡</span>
            </div>
            <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              {character.level}
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="rune-text mb-2 font-uncial text-4xl text-primary lg:text-5xl">
              {character.name}
            </h1>
            <p className="mb-2 font-cinzel text-xl text-muted-foreground">
              {character.title}
            </p>
            <div className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start">
              <Badge variant="secondary" className="font-cinzel">
                <Shield className="mr-1 h-3 w-3" />
                {character.class}
              </Badge>
              <Badge variant="outline" className="font-cinzel">
                {character.alignment}
              </Badge>
              <Badge variant="default" className="font-cinzel">
                Level {character.level}
              </Badge>
            </div>

            {/* Contact Icons */}
            <div className="flex justify-center gap-4 lg:justify-start">
              <a
                href={`mailto:${character.contact.email}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={character.contact.linkedin}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={character.contact.github}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={character.contact.portfolio}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Attributes */}
      <div className="parchment-card mb-6 p-6">
        <h2 className="rune-text mb-6 text-center font-uncial text-2xl text-primary">
          Core Attributes
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          <AttributeGem
            name="Strength"
            value={character.attributes.strength}
            type="strength"
          />
          <AttributeGem
            name="Dexterity"
            value={character.attributes.dexterity}
            type="dexterity"
          />
          <AttributeGem
            name="Intelligence"
            value={character.attributes.intelligence}
            type="intelligence"
          />
          <AttributeGem
            name="Wisdom"
            value={character.attributes.wisdom}
            type="wisdom"
          />
          <AttributeGem
            name="Charisma"
            value={character.attributes.charisma}
            type="charisma"
          />
        </div>
      </div>

      {/* Main Content Tabs */}
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
    </div>
  );
};
