import { CharacterSheet } from "./components/CharacterSheet";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <TooltipProvider delayDuration={0}>
      <CharacterSheet />
    </TooltipProvider>
  );
}

export default App;
