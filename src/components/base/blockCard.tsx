import { Card, CardHeader, CardTitle } from "./card";

interface BlockCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function BlockCard({ title, icon, children }: BlockCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      {children}
    </Card>
  );
}
