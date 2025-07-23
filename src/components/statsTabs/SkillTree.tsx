import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type {
  SkillConnection,
  SkillNode,
  SkillTree as SkillTreeType,
} from "@/data/types";
import { CheckCircle, Lock, Star } from "lucide-react";
import { useState } from "react";

export const SkillTree = ({ skillTree }: { skillTree: SkillTreeType }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "foundation":
        return "from-amber-500 to-yellow-500";
      case "specialization":
        return "from-blue-500 to-indigo-500";
      case "advanced":
        return "from-purple-500 to-pink-500";
      case "mastery":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const getSkillIcon = (skill: SkillNode) => {
    if (!skill.unlocked) return <Lock className="h-4 w-4" />;
    if (skill.level === skill.maxLevel)
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    return <Star className="h-4 w-4" />;
  };

  const isSkillUnlockable = (skill: SkillNode) => {
    if (skill.unlocked) return true;
    return skill.prerequisites.every((prereqId) => {
      const prereq = skillTree.nodes.find((n) => n.id === prereqId);
      return prereq && prereq.unlocked && prereq.level >= 5;
    });
  };

  const renderConnection = (connection: SkillConnection) => {
    const fromNode = skillTree.nodes.find((n) => n.id === connection.from);
    const toNode = skillTree.nodes.find((n) => n.id === connection.to);

    if (!fromNode || !toNode) return null;

    const isActive =
      fromNode.unlocked && (toNode.unlocked || isSkillUnlockable(toNode));

    return (
      <line
        key={`${connection.from}-${connection.to}`}
        x1={fromNode.x + 60}
        y1={fromNode.y + 30}
        x2={toNode.x + 60}
        y2={toNode.y + 30}
        stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--muted))"}
        strokeWidth={isActive ? 3 : 2}
        strokeOpacity={isActive ? 0.8 : 0.3}
        className="transition-all duration-300"
      />
    );
  };

  const selectedNode = selectedSkill
    ? skillTree.nodes.find((n) => n.id === selectedSkill)
    : null;

  return (
    <div className="space-y-6">
      <div className="parchment-card p-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Skill Tree Visualization */}
          <div className="flex-1">
            <div
              className="relative overflow-auto rounded-lg bg-gradient-to-br from-background/50 to-accent/10 p-4"
              style={{ height: "600px" }}
            >
              <svg width="800" height="600" className="absolute inset-0">
                {/* Render connections first (behind nodes) */}
                {skillTree.connections.map(renderConnection)}
              </svg>

              {/* Render skill nodes */}
              {skillTree.nodes.map((skill) => {
                const unlockable = isSkillUnlockable(skill);
                const isSelected = selectedSkill === skill.id;

                return (
                  <div
                    key={skill.id}
                    className={`absolute cursor-pointer transition-all duration-300 ${
                      isSelected ? "z-10 scale-110" : "hover:scale-105"
                    }`}
                    style={{
                      left: skill.x,
                      top: skill.y,
                      width: "120px",
                      height: "60px",
                    }}
                    onClick={() => setSelectedSkill(skill.id)}
                  >
                    <div
                      className={`flex h-full w-full flex-col items-center justify-center rounded-lg border-2 p-2 text-center ${
                        skill.unlocked
                          ? `bg-gradient-to-br ${getCategoryColor(skill.category)} border-white/30 text-white shadow-lg`
                          : unlockable
                            ? "border-primary/50 bg-gradient-to-br from-muted to-muted/70 text-foreground"
                            : "border-muted bg-muted/30 text-muted-foreground opacity-50"
                      } ${isSelected ? "ring-2 ring-primary ring-offset-2" : ""} `}
                    >
                      <div className="mb-1 flex items-center gap-1">
                        {getSkillIcon(skill)}
                        <span className="text-xs font-bold">
                          Lvl {skill.level}
                        </span>
                      </div>
                      <span className="font-cinzel text-xs leading-tight font-semibold">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skill Details Panel */}
          <div className="lg:w-80">
            <Card className="parchment-card h-full">
              <CardContent className="p-6">
                {selectedNode ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1 ${getCategoryColor(selectedNode.category)} mb-3 text-white`}
                      >
                        {getSkillIcon(selectedNode)}
                        <span className="font-cinzel font-bold">
                          {selectedNode.name}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="mb-1 font-cinzel font-semibold">
                          Description
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {selectedNode.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 font-cinzel font-semibold">
                          Progress
                        </h4>
                        <div className="mb-1 flex justify-between text-sm">
                          <span>Level {selectedNode.level}</span>
                          <span>
                            {selectedNode.level}/{selectedNode.maxLevel}
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-bar-fill"
                            style={{
                              width: `${(selectedNode.level / selectedNode.maxLevel) * 100}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-2 font-cinzel font-semibold">
                          Category
                        </h4>
                        <Badge
                          className={`bg-gradient-to-r ${getCategoryColor(selectedNode.category)} text-white capitalize`}
                        >
                          {selectedNode.category}
                        </Badge>
                      </div>

                      {selectedNode.prerequisites.length > 0 && (
                        <div>
                          <h4 className="mb-2 font-cinzel font-semibold">
                            Prerequisites
                          </h4>
                          <div className="space-y-1">
                            {selectedNode.prerequisites.map((prereqId) => {
                              const prereq = skillTree.nodes.find(
                                (n) => n.id === prereqId,
                              );
                              if (!prereq) return null;

                              const isMet =
                                prereq.unlocked && prereq.level >= 5;

                              return (
                                <div
                                  key={prereqId}
                                  className={`flex items-center gap-2 text-sm ${isMet ? "text-green-600" : "text-muted-foreground"}`}
                                >
                                  {isMet ? (
                                    <CheckCircle className="h-3 w-3" />
                                  ) : (
                                    <Lock className="h-3 w-3" />
                                  )}
                                  <span>
                                    {prereq.name} (Lvl {prereq.level})
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {!selectedNode.unlocked && (
                        <div className="rounded-lg bg-muted/20 p-3 text-center">
                          <Lock className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            {isSkillUnlockable(selectedNode)
                              ? "Ready to unlock! Complete prerequisites first."
                              : "Locked. Meet prerequisites to unlock."}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <Star className="mx-auto mb-4 h-12 w-12 opacity-50" />
                    <p className="font-cinzel">
                      Select a skill to view details
                    </p>
                    <p className="mt-2 text-sm">
                      Click on any skill node to explore your development path
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Legend */}
      <Card className="parchment-card">
        <CardContent className="p-4">
          <h3 className="mb-3 font-cinzel font-semibold">Skill Categories</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2">
              <div
                className={`h-4 w-4 rounded bg-gradient-to-r from-amber-500 to-yellow-500`}
              />
              <span className="font-cinzel text-sm">Foundation</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`h-4 w-4 rounded bg-gradient-to-r from-blue-500 to-indigo-500`}
              />
              <span className="font-cinzel text-sm">Specialization</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`h-4 w-4 rounded bg-gradient-to-r from-purple-500 to-pink-500`}
              />
              <span className="font-cinzel text-sm">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`h-4 w-4 rounded bg-gradient-to-r from-orange-500 to-red-500`}
              />
              <span className="font-cinzel text-sm">Mastery</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
