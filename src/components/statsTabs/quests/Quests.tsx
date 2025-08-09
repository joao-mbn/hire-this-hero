import { Achievements } from "./Achievements";
import { CompletedQuestBlock, CurrentQuestBlock } from "./QuestCard";

export function Quests() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div>
        <Achievements />
      </div>

      <div className="space-y-6">
        <CurrentQuestBlock />
        <CompletedQuestBlock />
      </div>
    </div>
  );
}
