import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";

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
        "fixed inset-0 z-50 bg-black/60 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in",
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
          "fixed inset-y-0 right-0 z-50 flex h-full w-full flex-col bg-old-gold-50 lg:max-w-[40rem]",
          "data-[state=open]:animate-slide-in-right",
          className,
        )}
        style={{
          borderImage:
            "linear-gradient(45deg, var(--color-old-gold-400), var(--color-old-gold-600)) 1 / 3px",
        }}
        {...rest}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DrawerHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cn("flex items-center justify-between gap-4 p-6", className)}
      {...rest}
    >
      {children}
      <DialogPrimitive.Close className="h-6 w-6 cursor-pointer text-old-gold-600 transition-all hover:text-old-gold-800">
        <X className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </div>
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
    <div className={cn("m-6 mt-0 flex-1 overflow-auto", className)} {...rest} />
  );
}
