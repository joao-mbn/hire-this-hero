import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

import { cn } from "@/lib/utils";

export const Drawer = DialogPrimitive.Root;

export const DrawerTrigger = DialogPrimitive.Trigger;

export const DrawerClose = DialogPrimitive.Close;

export function DrawerOverlay(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>,
) {
  const { className, ...rest } = props;
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-fade-in",
        className,
      )}
      {...rest}
    />
  );
}

export function DrawerContent(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
) {
  const { className, children, ...rest } = props;
  return (
    <DialogPrimitive.Portal>
      <DrawerOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-[28rem] flex-col bg-old-gold-50",
          "shadow-muted-foreground/50 border-2 border-old-gold-300 shadow-xl",
          "data-[state=closed]:animate-slide-out-left data-[state=open]:animate-slide-in-right",
          className,
        )}
        style={{
          borderImage:
            "linear-gradient(45deg, var(--color-old-gold-400), var(--color-old-gold-600)) 1",
        }}
        {...rest}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DrawerHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn("flex items-start justify-between gap-4 p-6", className)}
      {...rest}
    />
  );
}

export function DrawerTitle(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>,
) {
  const { className, ...rest } = props;
  return (
    <DialogPrimitive.Title
      className={cn(
        "font-cinzel text-2xl leading-none font-bold text-old-gold-600",
        className,
      )}
      {...rest}
    />
  );
}

export function DrawerBody(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={cn("flex-1 overflow-auto p-6 pt-0", className)} {...rest} />
  );
}
