import { useIsTruncated } from "@/hooks/useIsTruncated";
import { cn } from "@/lib/utils";
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
}

export function ContainerItem({ children, className }: ContainerItemProps) {
  return (
    <div className={cn("rounded border border-old-gold-300 p-4", className)}>
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
      <div
        className={cn(
          "flex items-center gap-2 overflow-hidden",
          titleContainerClassName,
        )}
      >
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

interface ContainerItemDividerProps {
  className?: string;
}

export function ContainerItemDivider({ className }: ContainerItemDividerProps) {
  return (
    <div className={cn("mt-2 flex h-3 items-center justify-center", className)}>
      <div className="mr-4 h-0.5 flex-1 bg-gradient-to-r from-old-gold-600 from-30% to-old-gold-400 to-70%" />
      <svg
        viewBox="-9.5 -2 18 18"
        className="h-4 w-4 fill-none stroke-old-gold-400 stroke-2"
        aria-hidden
      >
        <rect className="h-2.5 w-2.5 rotate-45" />
      </svg>
      <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-old-gold-400 from-30% to-old-gold-600 to-70%" />
    </div>
  );
}
