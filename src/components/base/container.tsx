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
  titleContainerClassName?: string;
}

export function ContainerItemHeader({
  title,
  icon,
  children,
  className,
  titleContainerClassName,
}: ContainerItemTitleProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("flex items-center gap-2", titleContainerClassName)}>
        <div className="text-xl">{icon}</div>
        <ContainerItemTitle title={title} />
      </div>
      {children}
    </div>
  );
}

export function ContainerItemTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return <h4 className={cn("text-xl font-bold", className)}>{title}</h4>;
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
