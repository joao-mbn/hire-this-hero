import { CharacterSheet } from "./components/CharacterSheet";
import { TooltipProvider } from "./components/base/";

function App() {
  return (
    <TooltipProvider delayDuration={100}>
      <CharacterSheet />
    </TooltipProvider>
  );
}

export default App;
