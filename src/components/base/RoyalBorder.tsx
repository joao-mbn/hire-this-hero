import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { RoyalCorner } from "../icons/RoyalCorner";

interface RoyalBorderProps {
  children: ReactNode;
  className?: string;
}

export function RoyalBorder({ children, className = "" }: RoyalBorderProps) {
  return (
    <div
      className={cn("bg-old-gold-50 p-2", className)}
      style={{
        borderImage:
          "linear-gradient(45deg, var(--color-old-gold-600), var(--color-old-gold-400), var(--color-old-gold-600)) 1/3px",
      }}
    >
      <div
        className="p-3"
        style={{
          borderImage:
            "linear-gradient(45deg, var(--color-red-800), var(--color-red-500), var(--color-red-800)) 1/6px",
        }}
      >
        <div
          className="relative p-2"
          style={{
            borderImage:
              "linear-gradient(45deg, var(--color-old-gold-600), var(--color-old-gold-500), var(--color-old-gold-600)) 1/4.2px",
          }}
        >
          {[
            {
              divClass: "top-0 left-0",
              svgClass: "rotate-90 fill-old-gold-500",
              auxDiv1Class: "absolute top-20 -left-1 h-20 w-3",
              auxDiv2Class: "absolute -top-1 right-0 w-20 h-3",
            },
            {
              divClass: "top-0 right-0",
              svgClass: "rotate-180 translate-x-full fill-old-gold-600",
              auxDiv1Class: "absolute top-20 -right-1 h-20 w-3",
              auxDiv2Class: "absolute -top-1 left-0 w-20 h-3",
            },
            {
              divClass: "bottom-0 left-0",
              svgClass: "translate-y-full fill-old-gold-600",
              auxDiv1Class: "absolute bottom-20 -left-1 h-20 w-3",
              auxDiv2Class: "absolute -bottom-1 left-20 w-20 h-3",
            },
            {
              divClass: "bottom-0 right-0",
              svgClass: "rotate-270 translate-full fill-old-gold-500",
              auxDiv1Class: "absolute bottom-20 -right-1 h-20 w-3",
              auxDiv2Class: "absolute -bottom-1 right-20 w-20 h-3",
            },
          ].map((position, i) => (
            <div
              className={cn(
                "absolute flex h-40 w-40 fill-old-gold-600",
                position.divClass,
              )}
              key={i}
            >
              <RoyalCorner
                svgProps={{
                  className: cn(
                    "h-1/2 w-1/2 bg-old-gold-50",
                    position.svgClass,
                  ),
                  viewBox: "0 0 240 240",
                }}
              />
              <div className={cn("bg-old-gold-50", position.auxDiv1Class)} />
              <div className={cn("bg-old-gold-50", position.auxDiv2Class)} />
            </div>
          ))}

          <div className={cn("relative p-6")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
