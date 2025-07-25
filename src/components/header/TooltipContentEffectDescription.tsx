interface TooltipContentEffectDescriptionProps {
  effects: string[];
  description: string;
}

export function TooltipContentEffectDescription({
  effects,
  description,
}: TooltipContentEffectDescriptionProps) {
  return (
    <div className="max-w-xs">
      <p className="mb-2 font-semibold">Effects:</p>
      <ul className="space-y-1 text-sm">
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
      <p className="mt-2 border-t pt-2 text-sm whitespace-pre-line text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
