import { Badge } from "../base";

export function TitleBadge({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <Badge variant="default" className="font-cinzel" hover>
      {icon}
      <span className="translate-y-[0.5px]">{title}</span>
    </Badge>
  );
}
