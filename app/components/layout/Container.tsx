import { cn } from "@/app/lib/helpers";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Container = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(function Container({ className, children, ...props }, ref) {
  return (
    <div
      className={cn(
        "mx-auto mb-16 max-w-7xl px-4 last-of-type:mb-0 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
});
