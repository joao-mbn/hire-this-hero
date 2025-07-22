import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Lock, Star } from "lucide-react";
import { useState } from "react";

interface SkillNode {
  id: string;
  name: string;
  description: string;
  level: number;
  maxLevel: number;
  unlocked: boolean;
  prerequisites: string[];
  x: number;
  y: number;
  category: "foundation" | "specialization" | "advanced" | "mastery";
}

interface SkillConnection {
  from: string;
  to: string;
}

const skillTreeData: { nodes: SkillNode[]; connections: SkillConnection[] } = {
  nodes: [
    // Foundation
    {
      id: "programming-fundamentals",
      name: "Programming Fundamentals",
      description: "Learn basic programming concepts and first language",
      level: 10,
      maxLevel: 10,
      unlocked: true,
      prerequisites: [],
      x: 400,
      y: 50,
      category: "foundation",
    },

    // Language Paths
    {
      id: "javascript",
      name: "JavaScript",
      description: "Master the language of the web",
      level: 9,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["programming-fundamentals"],
      x: 200,
      y: 150,
      category: "specialization",
    },
    {
      id: "python",
      name: "Python",
      description: "Versatile language for web, AI, and data",
      level: 7,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["programming-fundamentals"],
      x: 400,
      y: 150,
      category: "specialization",
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: "Type-safe JavaScript superset",
      level: 8,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["javascript"],
      x: 200,
      y: 250,
      category: "specialization",
    },

    // Frontend Path
    {
      id: "html-css",
      name: "HTML & CSS",
      description: "Foundation of web presentation",
      level: 10,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["javascript"],
      x: 50,
      y: 250,
      category: "specialization",
    },
    {
      id: "react",
      name: "React",
      description: "Component-based UI library",
      level: 9,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["javascript", "html-css"],
      x: 50,
      y: 350,
      category: "advanced",
    },
    {
      id: "vue",
      name: "Vue.js",
      description: "Progressive frontend framework",
      level: 7,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["javascript", "html-css"],
      x: 150,
      y: 350,
      category: "advanced",
    },
    {
      id: "angular",
      name: "Angular",
      description: "Full-featured frontend framework",
      level: 5,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["typescript", "html-css"],
      x: 250,
      y: 350,
      category: "advanced",
    },
    {
      id: "svelte",
      name: "Svelte",
      description: "Compile-time optimized framework",
      level: 3,
      maxLevel: 10,
      unlocked: false,
      prerequisites: ["javascript", "html-css"],
      x: 350,
      y: 350,
      category: "advanced",
    },

    // Styling & Tools
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      level: 8,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["react"],
      x: 50,
      y: 450,
      category: "advanced",
    },
    {
      id: "sass",
      name: "Sass/SCSS",
      description: "Advanced CSS preprocessing",
      level: 6,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["html-css"],
      x: 150,
      y: 450,
      category: "advanced",
    },

    // State Management
    {
      id: "redux",
      name: "Redux",
      description: "Predictable state container",
      level: 7,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["react"],
      x: 50,
      y: 550,
      category: "mastery",
    },
    {
      id: "zustand",
      name: "Zustand",
      description: "Lightweight state management",
      level: 5,
      maxLevel: 10,
      unlocked: false,
      prerequisites: ["react"],
      x: 150,
      y: 550,
      category: "mastery",
    },

    // Backend Path
    {
      id: "nodejs",
      name: "Node.js",
      description: "JavaScript runtime for backend",
      level: 8,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["javascript"],
      x: 500,
      y: 250,
      category: "specialization",
    },
    {
      id: "express",
      name: "Express.js",
      description: "Minimal web framework for Node.js",
      level: 8,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["nodejs"],
      x: 500,
      y: 350,
      category: "advanced",
    },
    {
      id: "fastapi",
      name: "FastAPI",
      description: "Modern Python web framework",
      level: 6,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["python"],
      x: 600,
      y: 350,
      category: "advanced",
    },
    {
      id: "django",
      name: "Django",
      description: "Full-featured Python web framework",
      level: 4,
      maxLevel: 10,
      unlocked: false,
      prerequisites: ["python"],
      x: 700,
      y: 350,
      category: "advanced",
    },

    // Database
    {
      id: "sql",
      name: "SQL",
      description: "Database query language mastery",
      level: 8,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["nodejs"],
      x: 500,
      y: 450,
      category: "advanced",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      description: "NoSQL document database",
      level: 7,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["nodejs"],
      x: 600,
      y: 450,
      category: "advanced",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      description: "Advanced relational database",
      level: 6,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["sql"],
      x: 500,
      y: 550,
      category: "mastery",
    },

    // DevOps Path
    {
      id: "git",
      name: "Git",
      description: "Version control mastery",
      level: 9,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["programming-fundamentals"],
      x: 600,
      y: 150,
      category: "specialization",
    },
    {
      id: "docker",
      name: "Docker",
      description: "Containerization technology",
      level: 8,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["git"],
      x: 600,
      y: 250,
      category: "advanced",
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      description: "Container orchestration",
      level: 6,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["docker"],
      x: 600,
      y: 350,
      category: "mastery",
    },
    {
      id: "aws",
      name: "AWS",
      description: "Cloud platform services",
      level: 7,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["docker"],
      x: 700,
      y: 250,
      category: "mastery",
    },
    {
      id: "cicd",
      name: "CI/CD",
      description: "Continuous integration and deployment",
      level: 7,
      maxLevel: 10,
      unlocked: true,
      prerequisites: ["git", "docker"],
      x: 650,
      y: 450,
      category: "mastery",
    },
  ],
  connections: [
    // Foundation to languages
    { from: "programming-fundamentals", to: "javascript" },
    { from: "programming-fundamentals", to: "python" },
    { from: "programming-fundamentals", to: "git" },

    // JavaScript path
    { from: "javascript", to: "typescript" },
    { from: "javascript", to: "html-css" },
    { from: "javascript", to: "nodejs" },

    // Frontend frameworks
    { from: "html-css", to: "react" },
    { from: "html-css", to: "vue" },
    { from: "html-css", to: "svelte" },
    { from: "typescript", to: "angular" },

    // Frontend tools
    { from: "react", to: "tailwindcss" },
    { from: "react", to: "redux" },
    { from: "react", to: "zustand" },
    { from: "html-css", to: "sass" },

    // Backend path
    { from: "nodejs", to: "express" },
    { from: "nodejs", to: "sql" },
    { from: "nodejs", to: "mongodb" },
    { from: "python", to: "fastapi" },
    { from: "python", to: "django" },
    { from: "sql", to: "postgresql" },

    // DevOps path
    { from: "git", to: "docker" },
    { from: "docker", to: "kubernetes" },
    { from: "docker", to: "aws" },
    { from: "git", to: "cicd" },
    { from: "docker", to: "cicd" },
  ],
};

export const SkillTree = () => {
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
      const prereq = skillTreeData.nodes.find((n) => n.id === prereqId);
      return prereq && prereq.unlocked && prereq.level >= 5;
    });
  };

  const renderConnection = (connection: SkillConnection) => {
    const fromNode = skillTreeData.nodes.find((n) => n.id === connection.from);
    const toNode = skillTreeData.nodes.find((n) => n.id === connection.to);

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
    ? skillTreeData.nodes.find((n) => n.id === selectedSkill)
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
                {skillTreeData.connections.map(renderConnection)}
              </svg>

              {/* Render skill nodes */}
              {skillTreeData.nodes.map((skill) => {
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
                      <span className="font-cinzel text-xs font-semibold leading-tight">
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
                          className={`bg-gradient-to-r ${getCategoryColor(selectedNode.category)} capitalize text-white`}
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
                              const prereq = skillTreeData.nodes.find(
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
