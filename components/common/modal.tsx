"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Card, CardContent } from "../ui/card";

type Size = "sm" | "md" | "lg" | "xl" | "full";

const sizeClasses: Record<Size, string> = {
  sm: "sm:max-w-[380px]",
  md: "sm:max-w-[520px]",
  lg: "sm:max-w-[720px]",
  xl: "sm:max-w-[920px]",
  full: "sm:max-w-[95vw]",
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(() =>
    typeof window === "undefined" ? true : window.matchMedia(query).matches
  );
  React.useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
}

export type ResponsiveModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: Size;
  preventOutsideClose?: boolean;
  className?: string;
};

export default function Modal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  size = "md",
  preventOutsideClose = false,
  className,
}: ResponsiveModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
        <DialogContent
          className={cn(
            "max-h-[90vh] overflow-y-auto",
            sizeClasses[size],
            className
          )}
          onInteractOutside={(e) => {
            if (preventOutsideClose) e.preventDefault();
          }}
        >
          {(title || description) && (
            <DialogHeader>
              {title ? <DialogTitle>{title}</DialogTitle> : null}
              {description ? (
                <DialogDescription>{description}</DialogDescription>
              ) : null}
            </DialogHeader>
          )}

          <Card>
            <CardContent>{children}</CardContent>
          </Card>

          {footer ? <DialogFooter>{footer}</DialogFooter> : null}
        </DialogContent>
      </Dialog>
    );
  }

  // Mobile: Drawer
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      {trigger ? <DrawerTrigger asChild>{trigger}</DrawerTrigger> : null}
      <DrawerContent
        className="max-h-[92vh]"
        onInteractOutside={(e) => {
          if (preventOutsideClose) e.preventDefault();
        }}
      >
        {(title || description) && (
          <DrawerHeader className="text-left">
            {title ? <DrawerTitle>{title}</DrawerTitle> : null}
            {description ? (
              <DrawerDescription>{description}</DrawerDescription>
            ) : null}
          </DrawerHeader>
        )}

        <div className="px-4 pb-4 overflow-y-auto">{children}</div>

        {footer ? (
          <DrawerFooter className="border-t">
            {footer}
            {!footer && <DrawerClose>Close</DrawerClose>}
          </DrawerFooter>
        ) : null}
      </DrawerContent>
    </Drawer>
  );
}
