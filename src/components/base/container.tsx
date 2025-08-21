import { useIsTruncated } from "@/hooks/useIsTruncated";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Card, CardHeader, CardTitle } from "./card";
import { Description } from "./description";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

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
  style?: React.CSSProperties;
}

export const ContainerItem = forwardRef<HTMLDivElement, ContainerItemProps>(
  ({ children, className, style }, ref) => (
    <div
      ref={ref}
      className={cn("rounded border border-old-gold-300 p-4", className)}
      style={style}
    >
      {children}
    </div>
  ),
);

ContainerItem.displayName = "ContainerItem";

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
      <div
        className={cn(
          "flex items-center gap-2 overflow-hidden",
          titleContainerClassName,
        )}
      >
        <div className="font-emoji text-xl">{icon}</div>
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
  const { elementRef, isTruncated } = useIsTruncated<HTMLHeadingElement>();

  const titleElement = (
    <h4
      ref={elementRef}
      className={cn("truncate font-cinzel text-xl font-semibold", className)}
    >
      {title}
    </h4>
  );

  if (!isTruncated) {
    return titleElement;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{titleElement}</TooltipTrigger>
        <TooltipContent>
          <Description description={title} withoutDivider />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
      <p className="font-semibold text-old-gold-950">{title}</p>
      {children}
    </div>
  );
}
