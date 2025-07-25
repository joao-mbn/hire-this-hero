interface TooltipContentEffectDescriptionProps {
  results: React.ReactNode;
  description: string;
  title: string;
}

export function TooltipContentResultDescription({
  results,
  description,
  title,
}: TooltipContentEffectDescriptionProps) {
  return (
    <div className="max-w-xs">
      <p className="mb-2 font-semibold">{title}:</p>
      {results}
      <p className="mt-2 border-t pt-2 text-sm whitespace-pre-line text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

interface EffectsProps {
  effects: string[];
}

export function Effects({ effects }: EffectsProps) {
  return (
    <ul className="text-sm">
      {effects.map((effect, index) => (
        <li
          key={index}
          className="flex items-start gap-2 text-muted-foreground"
        >
          <span>•</span>
          <span>{effect}</span>
        </li>
      ))}
    </ul>
  );
}
