import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "./card";

interface ContainerProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Container({ title, icon, children }: ContainerProps) {
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

interface ContainerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerItem({ children, className }: ContainerItemProps) {
  return (
    <div className={cn("rounded border border-border p-4", className)}>
      {children}
    </div>
  );
}

interface ContainerItemTitleProps {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export function ContainerItemHeader({
  title,
  icon,
  children,
  className,
  titleClassName,
}: ContainerItemTitleProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("flex items-center gap-2", titleClassName)}>
        <div className="text-xl">{icon}</div>
        <h4 className="text-xl font-bold">{title}</h4>
      </div>
      {children}
    </div>
  );
}

interface ContainerItemSectionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export function ContainerItemSection({
  title,
  children,
  className,
}: ContainerItemSectionProps) {
  return (
    <div className={cn("mt-2", className)}>
      <p className="font-semibold">{title}</p>
      {children}
    </div>
  );
}
