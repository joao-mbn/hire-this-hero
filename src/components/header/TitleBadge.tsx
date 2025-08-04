import { Badge } from "../base";

export function TitleBadge({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Badge variant="default" hover>
      <Icon className="mr-2 h-4 w-4 stroke-[2.5]" />
      <span className="translate-y-[0.5px]">{title}</span>
    </Badge>
  );
}
