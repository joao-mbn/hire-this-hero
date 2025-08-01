import { Card, CardContent, CardTitle } from "./card";

export interface MultiSectionCardProps<T> {
  sections: T[];
  sectionItemComponent: (section: T, index: number) => React.ReactNode;
}

export function MultiSectionCard<T>({
  sections,
  sectionItemComponent,
}: MultiSectionCardProps<T>) {
  return (
    <Card className="">
      <CardContent className="flex flex-col gap-4 pt-6">
        {sections.map(sectionItemComponent)}
      </CardContent>
    </Card>
  );
}

export interface SectionItemProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function SectionItem({ title, icon, children }: SectionItemProps) {
  return (
    <div className="flex flex-col gap-3 border-border/30 not-last:border-b not-last:pb-6">
      <CardTitle className="flex items-center gap-2 p-0">
        {icon}
        {title}
      </CardTitle>
      {children}
    </div>
  );
}
