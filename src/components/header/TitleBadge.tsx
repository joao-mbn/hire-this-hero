import { Badge } from "../base";

export function TitleBadge({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Badge variant="default" className="font-cinzel" hover>
      <Icon className="mr-1 h-3 w-3" />
      <span className="translate-y-[0.5px]">{title}</span>
    </Badge>
  );
}
