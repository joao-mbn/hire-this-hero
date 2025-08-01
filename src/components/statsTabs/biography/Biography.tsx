import { Appearance } from "./Appearance";
import { Lore } from "./Lore";
import { MoralStandings } from "./MoralStandings";
import { Personality } from "./Personality";
import { WorldViews } from "./WorldViews";

export function Biography() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Appearance />
        <Personality />
        <Lore />
      </div>
      <div className="space-y-6">
        <WorldViews />
        <MoralStandings />
      </div>
    </div>
  );
}
